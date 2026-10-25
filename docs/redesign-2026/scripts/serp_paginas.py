"""Lê as páginas do top 10 (serp-top10.txt) e mede o que cada uma entrega.

Uso: python3 -I serp_paginas.py <serp-top10.txt> <saida.json>
Ritmo de 2 s entre requisições, sem paralelismo.
"""
import json, re, sys, time, urllib.request
from html.parser import HTMLParser

PULAR = ('youtube.com', 'instagram.com', 'facebook.com', 'linkedin.com', 'indeed.com', 'glassdoor.com')
UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130 Safari/537.36'


class Leitor(HTMLParser):
    def __init__(self):
        super().__init__()
        self.pilha, self.texto, self.h1, self.h2, self.title, self.ld = [], [], [], [], '', []
        self.meta, self.forms = {}, 0
        self._em = None

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag in ('script', 'style', 'noscript', 'svg'):
            self._em = 'ld' if (tag == 'script' and a.get('type') == 'application/ld+json') else 'skip'
            self._buf = ''
        elif tag in ('h1', 'h2', 'title'):
            self._em, self._buf = tag, ''
        if tag == 'meta' and a.get('name') in ('description', 'author'):
            self.meta[a['name']] = a.get('content', '')
        if tag == 'meta' and a.get('property') == 'article:modified_time':
            self.meta['modified'] = a.get('content', '')
        if tag == 'form':
            self.forms += 1

    def handle_endtag(self, tag):
        if self._em == 'ld' and tag == 'script':
            self.ld.append(self._buf)
        elif self._em == tag == 'h1':
            self.h1.append(self._buf.strip())
        elif self._em == tag == 'h2':
            self.h2.append(re.sub(r'\s+', ' ', self._buf).strip())
        elif self._em == tag == 'title':
            self.title = self._buf.strip()
        if tag in ('script', 'style', 'noscript', 'svg', 'h1', 'h2', 'title'):
            self._em = None

    def handle_data(self, d):
        if self._em in ('ld', 'h1', 'h2', 'title'):
            self._buf += d
        if self._em not in ('skip', 'ld', 'title'):
            self.texto.append(d)


def tipos(ld_list):
    out = set()
    def walk(o):
        if isinstance(o, dict):
            t = o.get('@type')
            if isinstance(t, list):
                out.update(map(str, t))
            elif t:
                out.add(str(t))
            for v in o.values():
                walk(v)
        elif isinstance(o, list):
            for v in o:
                walk(v)
    for s in ld_list:
        try:
            walk(json.loads(s))
        except Exception:
            pass
    return sorted(out)


def medir(url):
    req = urllib.request.Request(url, headers={'User-Agent': UA, 'Accept-Language': 'pt-BR'})
    with urllib.request.urlopen(req, timeout=20) as r:
        html = r.read(3_000_000).decode(r.headers.get_content_charset() or 'utf-8', 'replace')
        status = r.status
    p = Leitor()
    p.feed(html)
    texto = re.sub(r'\s+', ' ', ' '.join(p.texto))
    baixo = texto.lower()
    return {
        'status': status,
        'title': p.title,
        'description': p.meta.get('description', ''),
        'h1': p.h1[:2],
        'h2_qtd': len(p.h2),
        'h2': p.h2[:12],
        'palavras': len(texto.split()),
        'schema': tipos(p.ld),
        'faq': 'perguntas frequentes' in baixo or 'FAQPage' in ' '.join(tipos(p.ld)),
        'preco': bool(re.search(r'r\$\s?\d', baixo)),
        'cases': bool(re.search(r'\bcases?\b|estudo de caso|resultados? de clientes', baixo)),
        'depoimentos': 'depoimento' in baixo or 'o que dizem' in baixo,
        'formulario': p.forms,
        'whatsapp': 'wa.me' in html or 'api.whatsapp' in html,
        'autor': p.meta.get('author', ''),
        'atualizado': p.meta.get('modified', ''),
        'ano_2026': '2026' in texto,
    }


def main():
    termo, linhas = None, []
    for l in open(sys.argv[1], encoding='utf-8'):
        l = l.strip()
        if l.startswith('## '):
            termo = l[3:].rsplit(' ai=', 1)[0]
        elif l:
            pos, url = l.split('|')[:2]
            linhas.append((termo, int(pos), url))
    cache, saida = {}, []
    for termo, pos, url in linhas:
        reg = {'termo': termo, 'pos': pos, 'url': url}
        if any(d in url for d in PULAR):
            reg['pulado'] = True
        elif url in cache:
            reg.update(cache[url])
        else:
            try:
                cache[url] = medir(url)
            except Exception as e:
                cache[url] = {'erro': str(e)[:120]}
            reg.update(cache[url])
            time.sleep(2)
        saida.append(reg)
        print(pos, termo, url[:70], reg.get('palavras', reg.get('erro', '-')), flush=True)
    json.dump(saida, open(sys.argv[2], 'w', encoding='utf-8'), ensure_ascii=False, indent=1)


main()
