"""Resume serp-paginas.json por busca. Uso: python3 -I serp_resumo.py serp-paginas.json"""
import json, statistics, sys

dados = json.load(open(sys.argv[1], encoding='utf-8'))
por_termo = {}
for d in dados:
    por_termo.setdefault(d['termo'], []).append(d)
for termo, linhas in por_termo.items():
    ok = [l for l in linhas if 'palavras' in l]
    pal = [l['palavras'] for l in ok]
    print(f"\n## {termo}  lidas {len(ok)}/{len(linhas)}  palavras mediana {int(statistics.median(pal)) if pal else '-'}")
    for k in ('faq', 'preco', 'cases', 'depoimentos', 'whatsapp', 'ano_2026'):
        print(f"  {k}: {sum(1 for l in ok if l.get(k))}/{len(ok)}", end='')
    print()
    sch = {}
    for l in ok:
        for s in l['schema']:
            sch[s] = sch.get(s, 0) + 1
    print('  schema:', ', '.join(f'{k} {v}' for k, v in sorted(sch.items(), key=lambda x: -x[1])[:10]))
    for l in linhas:
        if 'palavras' in l:
            print(f"  {l['pos']:>2} {l['palavras']:>5}p h2={l['h2_qtd']:<3} {l['title'][:75]}")
        else:
            print(f"  {l['pos']:>2} {'pulado' if l.get('pulado') else l.get('erro','')[:60]} {l['url'][:60]}")
