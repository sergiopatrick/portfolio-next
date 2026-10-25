# Proposta, novo sergiopatrick.com.br

Para aprovação do Sérgio antes de construir. Base em `pesquisa-palavras-chave.md` (Semrush e Search Console) e em `referencia-milan.md` (site de referência).

## 1. Posicionamento

Hoje o site se apresenta como "front-end developer com profundidade em SEO técnico" e diz "atualmente Tech and SEO Specialist na Gupy". As duas coisas puxam para trás.

- O termo de desenvolvimento tem de 20 a 170 buscas por mês. O de contratação de SEO tem cerca de 6.900.
- O Sérgio hoje é consultor independente (Insider, Sanar, Hapvida, Fluency). O texto, o `jobTitle` e o `worksFor: Gupy` do schema contam outra história para o Google e para as IAs.

Proposta. **Consultor de SEO técnico e GEO, que também programa.** O código vira o diferencial ("implemento o que recomendo"), não a porta de entrada.

Por que o código precisa aparecer tanto. No top 10 de "consultoria seo" e "consultor seo" já tem consultor solo se vendendo como "SEO e GEO" (Michel Ferreira, Fernanda Tavares, Web Estratégica). GEO no título virou comum. O que nenhum deles mostra é implementação própria e case de marca grande com número.

H1 da home, com o termo de busca na frente.
> Consultor de SEO técnico e GEO para marcas que querem ser achadas no Google e citadas pelas IAs.

## 2. Mapa de páginas e palavras-chave

| Página | URL | Palavra principal | Secundárias | Volume do grupo |
|---|---|---|---|---|
| Home | `/` | consultor seo | consultor de seo, especialista em seo, seo freelancer, sérgio patrick | ~2.300 |
| Consultoria de SEO | `/consultoria-seo/` | consultoria seo | consultoria de seo, consultoria em seo, contratar seo, quanto custa | ~3.500 |
| SEO técnico e auditoria | `/seo-tecnico/` | seo técnico | auditoria seo, auditoria de seo, seo tecnico | ~1.450 |
| GEO, SEO para IA | `/geo-seo-para-ia/` | seo para ia | seo e geo, geo seo, seo para ias, llmo | ~1.600 |
| Desenvolvimento WordPress e performance | `/desenvolvimento-wordpress/` | desenvolvedor wordpress | desenvolvimento wordpress, criar plugin wordpress, core web vitals | ~430 |
| Automação com IA | `/automacao-com-ia/` | automação com ia | pipeline de conteúdo com ia | ~480 |
| SEO para saúde | `/seo-para-medicos/` | seo para médicos | seo para clínicas | ~340 |
| SEO para e-commerce | `/seo-para-ecommerce/` | seo para ecommerce | seo vtex, seo para shopify | ~600 |

As URLs atuais `/servicos/front-end/`, `/servicos/seo/` e `/servicos/automation/` ganham 301 para as novas. `/servicos/` vira o índice das páginas acima.

## 3. Blog, o que mexer e o que escrever

**Ajustar o que já existe** (título, H1, primeiro parágrafo e slug onde valer 301)

| Post atual | Novo alvo | Volume |
|---|---|---|
| GEO, o guia baseado em evidências | "O que é GEO" com resposta direta no primeiro parágrafo | 4.400 |
| Guia de data layer bem modelado | "Datalayer, o que é e como modelar no GTM" | 420 |
| Internal linking semântico sem plugin | "Link interno" | 140, KD 8 |
| Core Web Vitals verdes em WordPress | "Core Web Vitals" | 1.300 |
| Programmatic SEO em WordPress | "Programmatic SEO" | 290 |
| Google News e Top Stories | incluir "Google Discover" | 2.400 |

**Escrever** (em ordem de prioridade)

1. SEO e GEO, diferenças na prática (cobre "geo x seo", "geo vs seo", "seo e geo"), ~1.500.
2. Auditoria de SEO técnico, checklist com o que eu olho e em que ordem, ~650.
3. llms.txt, o que é, se funciona e como criar, ~1.000.
4. SEO para médicos e clínicas, com o caso SanarMed, 340.
5. Crawl budget, 170.
6. Dados estruturados, 590.

## 4. SEO técnico do próprio site

| Problema | Correção |
|---|---|
| 9 guias rastreados e não indexados | ligar blog na home e nas páginas de serviço, links entre posts, data de atualização visível, Person como autor |
| Schema diz "Tech and SEO Specialist na Gupy" | `jobTitle` "Consultor de SEO técnico e GEO", tirar `worksFor`, `sameAs` com LinkedIn, GitHub e repositório da trilha |
| `SearchAction` aponta para `/?s=` que não existe | remover |
| Sitemap marca `lastModified` como "agora" em toda rota (o próprio guia de sitemap do blog diz para não fazer isso) | data real de cada conteúdo |
| Slug em inglês `/servicos/automation/` | 301 para `/automacao-com-ia/` |
| `/in/sergiopatrick1` dá 404 (o texto do contato vira link relativo no rastreio) | mostrar a URL completa |
| Sem `llms.txt` | criar `/llms.txt` com quem é, serviços, cases e guias |
| robots.txt genérico | liberar explicitamente GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot e Google-Extended |
| Sem Bing Webmaster Tools | cadastrar e ligar IndexNow (o ChatGPT busca pelo índice do Bing) |
| FAQ não aparece como dado estruturado nas páginas de serviço | FAQ visível com `FAQPage` |

## 5. Visual e interação

Inspirado no Milan, sem copiar, dentro do que o Sérgio já pediu em outros projetos (sem traço antes de rótulo, sem barra lateral em citação, sem texto fino ou cinza de baixo contraste).

| Bloco | O que faz |
|---|---|
| Hero | H1 em dois tons (o segundo tom passa AA), campo de pontos animado em caracteres que desenha um relevo e reage ao cursor. Canvas leve, carregado depois do texto, parado para quem pede menos movimento |
| Números | +105% QConcursos, +61% Cora e os outros sobem quando entram na tela |
| Marcas | faixa contínua com os logos dos clientes |
| Cases | carrossel em perspectiva que gira com a rolagem, com as telas reais dos projetos |
| Manifesto | frase de posicionamento que acende palavra por palavra na rolagem, em fundo escuro |
| Serviços | lista que abre ao clicar, cada item leva à página do serviço |
| Processo | 4 passos (diagnóstico, plano, implementação, medição) |
| Do blog | 3 guias mais recentes, para o Google achar e indexar |
| FAQ | perguntas de contratação (preço, prazo, contrato, como começa) |
| Contato | WhatsApp, e-mail e formulário |
| Menu | tela cheia, tema claro e escuro mantidos |

Tudo em CSS e JavaScript próprio, sem biblioteca de animação, para não piorar LCP e INP. O site atual já é Next.js sem framework de CSS, então a base fica.

## 6. Ordem de construção

1. Conteúdo e SEO técnico (posicionamento, schema, rotas, 301, sitemap, robots, llms.txt).
2. Home nova com as interações.
3. As 8 páginas de serviço.
4. Ajuste dos 6 posts e 2 primeiros posts novos.
5. Testes antes do deploy (build, links, schema, Lighthouse no celular, comparação de layout) e deploy na Vercel.

## 7. O que preciso do Sérgio

1. Aprovar o posicionamento "consultor de SEO técnico e GEO".
2. Depoimentos reais de clientes, com nome e cargo, se houver. Sem isso a home fica sem esse bloco.
3. Se pode citar preço ou faixa de preço na página de consultoria ("a partir de").
4. Logos dos clientes que pode exibir.
