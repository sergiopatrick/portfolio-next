# Dossiê de Pesquisa — GEO (Generative Engine Optimization)

> Base de evidências para o **Mega Guia de GEO** (pt-BR).
> Compilado a partir de 2 rodadas de deep research (fan-out de busca → leitura de fontes → verificação adversarial 3-votos → síntese citada).
> **Status:** Rounds 1, 2 e 3 consolidadas (3 rodadas, ~320 agentes, ~5,1M tokens, ~79 fontes lidas, 47 afirmações verificadas adversarialmente). Base pronta para redação.
> Última atualização: 2026-06-02.

## Como ler este dossiê

**Legenda de confiança** (resultado da verificação adversarial — cada afirmação foi atacada por 3 verificadores independentes; precisa de 2/3 para ser derrubada):

- 🟢 **ALTA** — fonte primária e/ou múltiplas fontes concordantes; voto 3-0.
- 🟡 **MÉDIA** — fonte única, preprint, vendor não auditável, ou dados com forte sensibilidade temporal.
- 🔴 **REFUTADA** — afirmação que circula no mercado mas **não** sobreviveu à verificação. Listada para você NÃO usar.

**Tipos de evidência:** `paper` (peer-reviewed/arXiv) · `doc-oficial` (plataforma) · `estudo-de-mercado` (vendor, observacional/correlacional) · `declaração` (porta-voz) · `opinião` (especialista).

**Regra de ouro do guia:** quase toda evidência de mercado é de **vendors de SEO** (Ahrefs, Semrush, SE Ranking, Seer, BrightEdge, Profound) — robusta em amostra, mas **observacional e auto-interessada**, não prova causal. E os números têm **forte validade temporal** (mudam mês a mês). **Datar toda cifra.**

---

## Parte 1 — Fundamentos acadêmicos (o que é GEO e de onde veio)

### 1.1 O paper seminal 🟢
**GEO: Generative Engine Optimization** — Aggarwal, Murahari, Rajpurohit, Kalyan, Narasimhan & Deshpande. **KDD 2024** (30th ACM SIGKDD). arXiv:2311.09735 (v1 16/nov/2023 → v3 28/jun/2024).
- Introduz GEO como **"o primeiro paradigma para ajudar criadores a melhorar a visibilidade do conteúdo em respostas de motores generativos, via um framework flexível de otimização caixa-preta"** (verbatim do abstract).
- Define "motor generativo": sistema que **sintetiza informação de múltiplas fontes e resume via LLM**.
- Evidência: `paper`. Fontes: arxiv.org/abs/2311.09735 · dl.acm.org/doi/10.1145/3637528.3671900 · github.com/GEO-optim/GEO
- Nota: a disputa de terminologia **AEO vs GEO** (Jason Barnard/Kalicube) é branding de mercado, não refuta o paper.

### 1.2 O ganho de "+40%" 🟢 (com caveats fortes)
- Abstract verbatim: *"GEO can boost visibility by up to **40%** in generative engine responses"* e *"visibility improvements up to **37%** on Perplexity.ai"*.
- ⚠️ **Enquadramento obrigatório:** o 40% é **teto/melhor caso por estratégia, NÃO média nem garantia**. Foi medido sobre a métrica *Position-Adjusted Word Count* num motor que **imita o Bing Chat** (GEO-Bench). O **37% é o único teste em motor real (Perplexity, 200 queries)**. **Não foi validado no Google AI Overviews nem no ChatGPT.**
- Críticos (sandboxseo.com, richsanger.com) apontam fragilidades: calibração da métrica G-Eval, variabilidade de single-run, confusão entre "ser citado" vs "quanto é atribuído". Atenuam, não negam.
- Evidência: `paper`.

### 1.3 GEO-Bench 🟢
- Benchmark de **10.000 queries**, **25 domínios**, 9 fontes (MS MARCO, Natural Questions, ELI5, Perplexity Discover, etc.), usando os **top-5 do Google** como fontes candidatas. Split 8K/1K/1K. Público no Hugging Face (`GEO-Optim/geo-bench`).
- Evidência: `paper` + `doc-oficial` (HF dataset card).

### 1.4 As 9 estratégias — o que funciona e o que não 🟢
As 9 funções de reescrita testadas (do código oficial `src/geo_functions.py`): fluência, palavras únicas/raras, tom autoritativo, **quotes**, **citação de fontes**, linguagem simples, termos técnicos, inserção de keywords SEO, **estatísticas**.
- **Campeãs:** Quotation Addition, Statistics Addition, Cite Sources e Fluency Optimization → **+30–40%** relativo (ex.: baseline 19,5 → Quotation Addition 27,8).
- **SEO clássico não ajudou:** Keyword Stuffing ficou **~10% PIOR** que o baseline na Perplexity.
- 🚨 **Alerta ético (para o guia destacar):** as docstrings do código revelam que quotes/citações podem ser **FABRICADAS** ("including fabricated ones", "invented but plausible citations"). O guia **não deve** recomendar fabricar — conflita com E-E-A-T e é risco factual/reputacional. Recomendar: quotes e estatísticas **reais e verificáveis**.
- Evidência: `paper` + código-fonte.

### 1.5 AutoGEO (evolução do paper) 🟡
**AutoGEO** — Wu, Zhong, Kim, Xiong (CMU). arXiv:2510.11438. Aceito no **ICLR 2026** (marcado "Work in Progress").
- Regras de preferência **aprendidas automaticamente** superam as heurísticas manuais de 2024: **+35,99% médio**, **até +50,99%** sobre o melhor baseline manual (Fluency Optimization). Sem perda de precisão factual.
- **Cada motor/domínio tem preferências próprias** → não existe receita única universal. **MAS** os dados mostram **alta sobreposição** de regras entre engines (Jaccard 78,95% Gemini-GPT; 84,21% Gemini-Claude e GPT-Claude). A divergência maior é por **domínio** (e-commerce cai p/ 34–40%).
- ⚠️ Caveats (→ MÉDIA): benchmark auto-reportado, sem replicação independente; preprint; "50,99%" é máximo; **motores SIMULADOS** (LLMs frontier prompted como motores), não produtos reais.

---

## Parte 2 — Como os motores REAIS selecionam e citam fontes

### 2.1 Veredito central 🟢
**GEO ainda é, em larga medida, SEO.** Os mecanismos reais são **retrieval/grounding sobre o índice de busca tradicional**. Rankear bem **aumenta a chance** de citação sem **garantir**.

### 2.2 Google AI Overviews / AI Mode — grounding + query fan-out 🟢
- **Query fan-out** (verbatim, blog oficial do Google): *"AI Mode uses our query fan-out technique, breaking down your question into subtopics and issuing a multitude of queries simultaneously on your behalf."*
- Mecanismo confirmado por **patente** Google US20240289407A1 (gera "synthetic queries").
- **Gemini API (grounding with Google Search):** o modelo **decide autonomamente** se busca (classificador de retrieval dinâmico, threshold padrão 0.7), pode gerar **múltiplas queries**, e retorna **metadados de citação**: `webSearchQueries`, `groundingChunks` (uri+title), `groundingSupports` (mapeia trechos do texto → fontes; base das citações inline).
- Evidência: `doc-oficial` (ai.google.dev) + `doc-oficial` (blog.google) + patente.

### 2.3 ChatGPT search — alinhamento histórico ao Bing (datado) 🟢
- Seer Interactive (fev/2025, ~100 queries): **87%+** das citações do SearchGPT batiam no top orgânico do **Bing**; só **56%** de match com o **Google** (rank mediano 17).
- ⚠️ **Snapshot datado e em erosão.** A Profound mostra o alinhamento ChatGPT-Bing **caindo de ~26% (abr/2025) → ~8% (jul/2025)** e ChatGPT-Google **subindo ~12% → ~33%**. Números absolutos divergem MUITO entre estudos (Seer 56–87% vs Profound 8–33%) por metodologia → **instabilidade metodológica**.
- 🔴 **REFUTADO (0-3):** a versão forte "87% prova *dependência forte* do Bing". As citações são **pós-hoc** (geradas após a resposta). Use como snapshot, não como propriedade permanente.

### 2.4 Correlação ranking orgânico ↔ citação 🟢 (parcial, sensível ao tempo)
- Ahrefs (jul/2025, 1M keywords que disparam AIO, 1,9M links): correlação **Spearman 0,347** ("moderada positiva") entre top-10 orgânico e citação no top-3 do AIO.
- *"Mesmo páginas em #1 só aparecem no top-3 de links citados ~**50% das vezes**"* — cara ou coroa.
- *"AI Overviews **não** são mera reembalagem dos top results."*
- ⚠️ **Sensibilidade temporal:** a parcela de citações vinda do top-10 caiu de **~76% (jul/2025) → ~37–38%** (update Ahrefs); **BrightEdge** reporta ~17% de overlap. **Não cite o 76% como atual.** A direção ("rankear ajuda, não garante") permanece.

### 2.5 Por que o overlap é baixo no prompt original 🟢
- Ahrefs (Brand Radar, 15.000 long-tail): **só ~12%** das URLs citadas por ChatGPT/Gemini/Copilot estão no top-10 do Google **para o mesmo prompt**. Perplexity é outlier (**28,6%**); os outros três ~8% cada.
- **Causa:** query fan-out + Reciprocal Rank Fusion (RRF) — os assistentes recuperam por **várias reformulações** da query. Uma página que rankeia ~#6 em várias queries relacionadas pode ser citada acima de uma #1 numa só.
- **Corroboração (Surfer, 173.902 URLs):** páginas que rankeiam para a query principal **+ ≥1 query fan-out** têm **+161%** de chance de citação (Spearman 0,77 entre nº de fan-out queries e citação); 68% das páginas citadas ficavam **fora** do top-10.
- ⚠️ Caveats: head-to-head "#6 vs #1" é ilustrativo, não medido; fan-out é **instável** (~27% de consistência entre execuções); vendor.
- 🔴 **REFUTADO (1-2):** "~80% das citações fora do top-100".

---

## Parte 3 — Impacto de mercado (zero-click, CTR, tráfego de LLM)

### 3.1 Zero-click / queda de cliques — Pew Research 🟢
Pew (22/jul/2025), n=900 adultos EUA, **dados comportamentais reais** (68.879 buscas, 12.593 com AI summary):
- Clique em resultado orgânico: **8%** das visitas com AI Overview **vs 15%** sem (≈ metade).
- Clique em link **dentro** do resumo de IA: **1%** das visitas.
- Encerrou a sessão: **26%** das páginas com AI summary **vs 16%** só com resultados tradicionais (zero-click).
- ⚠️ Google **contestou a metodologia** ("flawed... skewed queryset") mas **não** apresentou números próprios. Escopo: EUA, mês único. Observacional.

### 3.2 Queda de CTR — Ahrefs 🟢 (vendor, correlacional)
- **-34,5%** de CTR médio na **posição 1** quando há AI Overview (300k keywords; corroborado por Search Engine Land e eMarketer).
- Limitação verbatim: *"there is still no way to disambiguate AI Overview clicks and impressions from the rest of your Search Console data"* → efeito **inferido por correlação**.
- ⚠️ **Revisado para -58% no início de 2026.** O 34,5% segue válido como achado original, mas **datado**. (Amsive achou -15,49% — menor, mesma direção.)

### 3.3 Tráfego de referência de LLMs — Semrush 🟡
- Referrals do ChatGPT **+206% YoY** (jan/2025 → jan/2026), base de 1 bi de linhas de clickstream EUA. Similarweb corrobora direção (+357% YoY meados de 2025).
- ⚠️ Vendor, painel proprietário não auditável; **base baixa** (ChatGPT search recém-lançado); **share absoluto ainda pequeno**; search habilitado em só ~34,5% das queries.

---

## Parte 4 — Camada técnica acionável

### 4.1 llms.txt NÃO funciona (hoje) 🟢
- **SE Ranking** analisou **~300.000 domínios** (Spearman + XGBoost + SHAP): ter `llms.txt` **não** tornava o domínio mais propenso a ser citado — e **remover** a variável **MELHOROU** a precisão do modelo. Só **10,13%** dos sites têm o arquivo. SEJ corrobora.
- **Google recusa explicitamente:** Gary Illyes (jul/2025): *"Google doesn't support LLMs.txt and isn't planning to"*; John Mueller: *"no AI system currently uses llms.txt"*. AI Overviews/AI Mode continuam usando **sinais de SEO tradicionais**.
- ⚠️ Vendor + observacional, mas achado **unânime (3-0)** e alinhado às declarações oficiais.
- **Para o guia:** não vender llms.txt como tática de GEO. Custo baixo de implementar, mas **sem evidência de retorno**.

### 4.2 Crawlers de IA: o que cada bloqueio realmente faz 🟢
Os crawlers se dividem por **função** (docs oficiais OpenAI + taxonomia Cloudflare em *AI Crawl Control*):

| Categoria | Função | Bots | Bloquear faz... |
|---|---|---|---|
| **AI Crawler (treino)** | Coleta p/ treinar modelos | **GPTBot** (OpenAI), ClaudeBot, Bytespider, Meta-ExternalAgent, Amazonbot, **Google-Extended** | Remove do **treino** — NÃO afeta ser citado em respostas |
| **AI Search (retrieval)** | Indexa p/ busca dos assistentes | **OAI-SearchBot** (OpenAI), **PerplexityBot** | Bloquear OAI-SearchBot = **some das respostas de busca do ChatGPT** |
| **AI Assistant (user)** | Busca disparada pelo usuário | **ChatGPT-User**, Perplexity-User | Afeta fetch em tempo real a pedido do usuário |

- OpenAI verbatim: *"Sites that are opted out of OAI-SearchBot will not be shown in ChatGPT search answers."* Controles **independentes** via robots.txt (pode liberar OAI-SearchBot e bloquear GPTBot).
- ⚠️ **Pegadinha do Google:** AI Overviews / AI Mode usam o **Googlebot**, NÃO o **Google-Extended**. Bloquear Google-Extended remove você do treino/grounding do Gemini, mas **NÃO** tira você do AI Overviews (que segue o Googlebot/índice de busca). Bloquear o Googlebot tira você de **tudo**, inclusive da busca normal.

### 4.3 Controvérsia Perplexity × Cloudflare 🟢 (disputa não resolvida)
- **Cloudflare (04/08/2025):** acusa a Perplexity de usar **crawlers furtivos/não declarados** que trocam user-agent (imitando Chrome/macOS) e ASNs/IPs para **evadir bloqueios**, "ignorando — ou às vezes nem buscando — robots.txt". Teste em domínios novos com disallow-all: Perplexity ainda retornou conteúdo; **OAI-SearchBot respeitou** o disallow.
- **Perplexity rebate:** distingue *"user-driven agents"* (buscam só quando uma pessoa pede, usam na hora, não armazenam/treinam) de bots — análogo aos *"user-triggered fetchers"* do Google, que **priorizam o usuário sobre robots.txt** (confirmado nos docs do Google). Afirma que a Cloudflare confundiu tráfego de um terceiro (BrowserBase) com o seu ("fundamental traffic analysis failure").
- ⚠️ **Para o guia: apresentar os dois lados.** Cloudflare tem interesse comercial (vende bloqueio de bots); a Perplexity faz rebuttal de PR auto-interessado. Sem logs brutos divulgados para replicação neutra. O **fato** indisputável é que a disputa existe e revela uma zona cinzenta: **robots.txt não é tratado como vinculante para retrieval iniciado pelo usuário**.

---

## Parte 5 — Fatores de conteúdo e técnica on-page (o que faz ser SELECIONADO)

> **Distinção-chave (repetir no guia):** o que torna uma página **ELEGÍVEL** é SEO técnico padrão (indexada + elegível a snippet). O que faz ser **SELECIONADA/citada** são qualidade, estrutura, frescor relativo, autoridade e presença em fontes de terceiros.

### 5.1 Frescor importa — mas é relativo e varia por motor 🟢
- Ahrefs (Brand Radar, **16,975 milhões de URLs citadas**, jul/2025): citações de IA são **25,7% mais frescas** que o SERP orgânico (1.064 vs 1.432 dias).
- Ranking de recência por motor: **ChatGPT 958 dias (mais novo)** → Copilot 1.056 → Gemini 1.118 → Perplexity 1.166 → **Google AI Overviews 1.432 dias (mais antigo)**.
- ⚠️ **Nuance crítica:** *"within a given retrieval set, freshness alone isn't enough. Relevance still does the heavy lifting"* (Ahrefs, 1,4M prompts). Há páginas citadas com **7+ anos**. O frescor desloca a população para conteúdo mais novo e é **desempate em queries de notícia**, mas relevância domina dentro do conjunto. A diferença cai p/ 13,1% quando medida por **data de última atualização** (→ atualizar conteúdo antigo conta).
- Evidência: 2 estudos primários Ahrefs.

### 5.2 Reddit/UGC e fontes de terceiros — varia DRASTICAMENTE por vertical 🟢
- Surfer SEO (**36M de Google AI Overviews, 46M de citações**, mar-ago/2025):
  - **Gaming:** Reddit ~**78%** (Fandom ~26,7%, Steam ~11%).
  - **E-commerce:** Reddit ~11,3% · **Esportes:** ~12,8% · **Apparel:** ~10% · **Transporte/logística:** ~2%.
  - **Saúde:** comunidade quase não registra — dominam fontes clínicas/peer-reviewed (NIH ~39%, Healthline ~15%, Mayo Clinic ~14,8%).
- ⚠️ **Não existe "top source" universal** (corroborado por Search Engine Land). O peso de Reddit/UGC depende do nicho e do motor.

### 5.3 Padrões diferem fortemente POR MOTOR 🟢
- Semrush (**230 mil+ prompts, 100M+ citações**, jul-out/2025):
  - **Google AI Mode** privilegia **fontes comerciais/autoritativas e propriedades do ecossistema Google** (top-5: LinkedIn, YouTube, Reddit, Google, Google Blog). Finanças: Bankrate (86,61%), NerdWallet (75,07%).
  - **ChatGPT** trata **discussões de comunidade (Reddit) como autoridade primária**. Reddit citado "176,89%" em finanças (>100% = múltiplas citações por prompt), 141,20% em serviços, 127,31% em eletrônicos.
- ⚠️ Caveats: decimais como "176,89%" são **falsa precisão** sobre saídas estocásticas → tratar como **direção/ordem de grandeza**. "Google-owned" é frouxo (LinkedIn é Microsoft, Reddit é independente). Outro estudo (5W/Discovered Labs) mostra Reddit como slot interno em ~27% mas **citação visível em só ~0,35%** das respostas do ChatGPT — há diferença entre "consultado" e "citado".

### 5.4 Os shares de domínio são VOLÁTEIS 🟢
- Semrush: no ChatGPT, **Reddit caiu de ~60% → ~10%** das respostas em ~2 semanas; **Wikipedia de ~55% → <20%** (mesma janela). AI Mode e Perplexity estáveis nesses domínios.
- **Implicação para o guia:** participações de domínio em IA são **snapshots instáveis, não constantes** — não construir estratégia sobre um número de share isolado.

### 5.5 Crawlers de IA NÃO executam JavaScript 🟢 (técnico, acionável)
- Vercel/MERJ (**500M+ fetches de GPTBot**, dez/2024): *"none of the major AI crawlers currently render JavaScript"* — vale p/ OpenAI (GPTBot/OAI-SearchBot/ChatGPT-User), **Anthropic (ClaudeBot), Meta, ByteDance e Perplexity**.
- ChatGPT busca arquivos JS em 11,50% das requisições, Claude em 23,84% — mas **nenhum os executa**.
- 🚨 **Acionável:** todo conteúdo importante (corpo, metadados, navegação) precisa estar no **HTML renderizado no servidor (SSR)**. Conteúdo client-side puro é invisível para esses motores.
- ⚠️ **Exceção:** **Google AI Overviews / Gemini e o AppleBot renderizam JS** (via Googlebot/WRS). Preservar a distinção motor-a-motor.

### 5.6 Schema.org NÃO é requisito (mas não é inútil) 🟢
- Google oficial (developers.google.com/search/docs/appearance/ai-features), verbatim: *"You don't need to create new machine readable files, AI text files, or markup to appear in these features. There's also no special schema.org structured data that you need to add"*; *"There are no additional requirements to appear in AI Overviews or AI Mode, nor other special optimizations necessary."*
- Elegibilidade = **estar indexado e elegível a aparecer com snippet** no Google Search.
- ⚠️ "Não obrigatório" ≠ "inútil": Google ainda recomenda schema para **rich results**, que as AI features podem aproveitar. Veja 5.7 (correlação observacional).

### 5.7 Sinais on-page e citabilidade — evidência acadêmica (correlacional) 🟢
- **GEO-16** (arXiv 2509.10762, Kumar & Palkhouski, set/2025): framework de 16 pilares (score G de 0 a 1), validado sobre **1.702 citações** em 3 motores (Brave, Google AIO, Perplexity), 70 prompts, 1.100 URLs.
  - Associações mais fortes com citação: **Metadados/Frescor, HTML Semântico e Dados Estruturados (schema)**.
  - **Qualidade geral de página** = preditor forte (odds ratio **4,2**; IC95% 3,1–5,7). Páginas com **G≥0,70 e ≥12 pilares** → **~78%** de citação cross-engine.
- ⚠️ **Caveats fortes:** preprint **não revisado por pares**; **explicitamente observacional** ("associações", não causalidade); restrito a **B2B SaaS em inglês**; **exclui sinais off-page** (backlinks, reputação); **NÃO cobre ChatGPT nem Gemini**. Apresentar como "um estudo reporta correlação", não como prova causal.

---

## Parte 6 — Medição de GEO e o caso cético

### 6.1 O problema de validade: medição de IA é quase irreprodutível 🟢
- **SparkToro/Gumshoe** (Rand Fishkin & Patrick O'Donnell, nov-dez/2025; 600 voluntários, **2.961 runs**, ChatGPT/Claude/Google AI):
  - **< 1 em 100** de chance de obter a **mesma lista de marcas** em dois runs da mesma query.
  - **~1 em 1.000** de obter a **mesma ordem** duas vezes.
- **Implicação central:** métricas de *share of voice* / *citation share* são **snapshots de uma distribuição estocástica**. Para medir com validade: **amostrar o mesmo prompt muitas vezes** e tratar resultado como distribuição (intervalos), não ponto único.
- Corroborado por Search Engine Land/Journal ("sobering but valid"). Os autores pedem replicação acadêmica.

### 6.2 Ferramentas de medição
Mencionadas no ecossistema: **Profound, Ahrefs Brand Radar, Semrush AI Toolkit, Otterly, Peec AI, Scrunch**. ⚠️ **Não há benchmark independente de validade entre elas** — e todas esbarram no problema de 6.1. Tratar números de qualquer ferramenta como direcionais.

### 6.3 O caso cético + posição oficial do Google 🟢
- **"Ainda é SEO":** guia oficial de IA do Google (maio/2026) reafirma que **AEO/GEO continua sendo SEO**, e **desmente** llms.txt, *content chunking*, reescrita "para IA" e menções inautênticas como táticas necessárias.
- **John Mueller (14/08/2025):** a urgência em torno dos acrônimos GEO/AEO frequentemente **sinaliza táticas de spam/scam**.
- **Rand Fishkin / SparkToro:** tese "**Search Everywhere Optimization**" — é a mesma disciplina aplicada a mais superfícies.
- ⚠️ **O que os céticos CONCEDEM (importante para equilíbrio):** os **fatores de seleção/desempenho** (qualidade, profundidade, estrutura, E-E-A-T) **influenciam** quais páginas elegíveis são citadas — a Brainlabs estima que **~96%** das fontes citadas passariam num filtro E-E-A-T. Ou seja: o debate GEO-vs-SEO é sobre **otimização de desempenho e medição**, não sobre a regra de **elegibilidade** (que é SEO puro).

---

## Claims REFUTADOS (NÃO usar no guia)

| Afirmação | Voto | Por quê |
|---|---|---|
| "Estratégias GEO simples melhoram visibilidade em até 40% em motores **comerciais implantados**" | 1-2 | O 40% é benchmark/motor simulado; só o 37% na Perplexity é mundo real. |
| "87% prova **dependência forte** do ChatGPT no índice do Bing" | 0-3 | Citações são pós-hoc; alinhamento caiu p/ ~8% em jul/2025. Snapshot datado. |
| "~80% das citações de IA estão fora do top-100 do Google" | 1-2 | Não sustentado pelos dados da própria fonte. |
| "robots.txt: só 14% dos top-10k domínios têm regras p/ IA (GPTBot mais bloqueado: 312)" | 1-2 | Fonte/atribuição frágil. |
| "Relevância semântica título↔prompt é **o** preditor mais forte (cosine 0,602 vs 0,484)" | 0-3 | Não sustentado; relevância importa mas não é "o" fator isolado provado. |
| "**YouTube é o domínio #1** em AI Overviews (~23,3%)" | 0-3 | Refutado; vídeo não é o formato #1 em todo vertical. |
| "**Wikipedia é o domínio #1** cross-industry no ChatGPT" | 1-2 | Não generaliza; varia por estudo e janela. |
| "**Earned media >> owned** (0,85% owned vs 17,6% concorrente)" | 0-3 | Cifra de vendor de categoria única; tese 'menção > backlink' carece de prova. |
| "IAs preferem **threads de Reddit** (r/SEO, r/SaaS…) para queries de comparação" | 1-2 | Snapshot de uma categoria; não generaliza. |

---

## Caveats globais (sinalizar no guia)

1. **Evidência acadêmica ≠ motores reais.** Paper KDD-2024 e AutoGEO foram medidos em motores **simulados** ou validados só na **Perplexity** — NÃO no Google AI Overviews/AI Mode nem no ChatGPT. Generalizar o "+40%" exige cautela.
2. **"+40%" é teto, não média nem garantia.**
3. **Risco ético:** as estratégias campeãs do paper podem fabricar quotes/citações. O guia recomenda **dados e quotes reais**.
4. **Dados de mercado = vendors**, correlacionais, painéis proprietários. O Google **disputa** publicamente (Pew, CTR) sem fornecer números próprios.
5. **Alta sensibilidade temporal.** Ex.: CTR Ahrefs 34,5% (2024-25) → 58% (2026); top-10 share do AIO 76% → 37-38%; alinhamento ChatGPT-Bing 26% → 8%. **Datar tudo.**
6. **Instabilidade metodológica:** estudos medem coisas diferentes (match de query, citation share, overlap de URL) e divergem muito → comparabilidade limitada.
7. **Medição é quase irreprodutível** (SparkToro): listas de IA quase nunca se repetem → tratar métricas de visibilidade como **distribuições**, não pontos; amostrar cada prompt muitas vezes.
8. **Distinções motor-a-motor são essenciais** e frequentemente perdidas: Google AIO/Gemini **renderizam JS**, ChatGPT/Claude/Perplexity **não**; frescor é mais forte no ChatGPT, mais fraco no AIO; AI Mode prefere fontes comerciais, ChatGPT prefere comunidade.
9. **Falsa precisão:** decimais de share (ex.: 176,89%, 86,61%) sobre saídas estocásticas → usar como direção, nunca como constante.

---

## Tabela de fontes (Rounds 1+2)

### Primárias (papers / docs oficiais)
| Fonte | Tipo | Tema |
|---|---|---|
| arxiv.org/abs/2311.09735 (+ html/v3) | paper | Paper seminal GEO (KDD 2024) |
| dl.acm.org/doi/10.1145/3637528.3671900 | paper | DOI ACM do paper |
| github.com/GEO-optim/GEO | código | 9 estratégias (geo_functions.py) |
| huggingface.co/datasets/GEO-Optim/geo-bench | dataset | GEO-Bench |
| arxiv.org/abs/2510.11438 (AutoGEO) | paper | Evolução (ICLR 2026) |
| pewresearch.org/short-reads/2025/07/22/... | estudo | Zero-click / cliques (dados comportamentais) |
| ai.google.dev/gemini-api/docs/google-search | doc-oficial | Grounding, metadados de citação |
| blog.google/.../google-search-ai-mode-update/ | doc-oficial | Query fan-out (AI Mode) |
| patents.google.com/patent/US20240289407A1 | patente | Query fan-out |
| developers.openai.com/api/docs/bots | doc-oficial | GPTBot vs OAI-SearchBot vs ChatGPT-User |
| developers.cloudflare.com/ai-crawl-control/reference/bots/ | doc-oficial | Taxonomia de bots |
| developers.google.com/.../ai-optimization-guide | doc-oficial | Google sobre AI Overviews/llms.txt |
| seranking.com/blog/llms-txt/ | estudo | 300k domínios: llms.txt sem efeito |
| ahrefs.com/blog/does-ranking-higher...ai-overviews | estudo | Spearman 0,347 |
| ahrefs.com/blog/ai-search-overlap/ | estudo | ~12% overlap top-10 |
| ahrefs.com/blog/ai-overviews-reduce-clicks(-update) | estudo | CTR -34,5% → -58% |
| semrush.com/blog/chatgpt-search-insights/ | estudo | +206% YoY referrals |
| seerinteractive.com/.../87-percent-searchgpt-bing | estudo | Alinhamento ChatGPT-Bing |
| blog.cloudflare.com/perplexity-is-using-stealth... | estudo | Acusação Perplexity |
| perplexity.ai/hub/blog/agents-or-bots... | declaração | Rebuttal Perplexity |
| ahrefs.com/blog/do-ai-assistants-prefer-to-cite-fresh-content/ | estudo | Frescor (17M URLs) |
| ahrefs.com/blog/why-chatgpt-cites-pages/ | estudo | Por que o ChatGPT cita (1,4M prompts) |
| surferseo.com/blog/ai-citation-report/ | estudo | Reddit/UGC por vertical (36M AIO) |
| semrush.com/blog/most-cited-domains-ai/ | estudo | Domínios + volatilidade (230k prompts) |
| semrush.com/blog/ai-search-visibility-study-findings/ | estudo | Padrão por motor |
| vercel.com/blog/the-rise-of-the-ai-crawler | estudo | Crawlers de IA NÃO renderizam JS (500M fetches) |
| developers.google.com/search/docs/appearance/ai-features | doc-oficial | Schema não é requisito; elegibilidade |
| arxiv.org/abs/2509.10762 (GEO-16) | paper | Sinais on-page ↔ citação (correlacional) |
| sparktoro.com/blog/...inconsistent-when-recommending... | estudo | Irreprodutibilidade da medição |
| developers.google.com/search/blog/2026/05/...optimizing | doc-oficial | Guia maio/2026: "AEO/GEO ainda é SEO" |
| ppc.land/googles-john-mueller-warns-ai-seo-acronyms... | declaração | Mueller: acrônimos = spam tactics |

### Secundárias / blogs relevantes
Search Engine Land (how AI engines cite, query fan-out guide), Search Engine Journal (llms.txt, SparkToro), SE Roundtable (Google não endossa llms.txt), SparkToro (it's still SEO; inconsistência de recomendações), BrightEdge (rank overlap), Profound (AI search shift; citation patterns), Seer Interactive (CTR sep/2025), Surfer SEO (fan-out 173k URLs), Digiday (-25% referral), iPullRank (fan-out), Authoritas, eMarketer.

---

## Lacunas remanescentes (limites desta pesquisa — sinalizar como "evidência insuficiente" no guia)

Estas perguntas **não** têm resposta conclusiva na evidência atual e devem ser apresentadas como abertas:

1. **Schema ajuda causalmente a citação?** Disputa não resolvida: GEO-16 associa dados estruturados a mais citação; outros estudos (Quoleady/Search Atlas, dez/2024) não acham correlação; Google diz que não é requisito. Falta **experimento A/B controlado** que isole o efeito do schema.
2. **Brand mentions vs backlinks como driver:** a tese "menção importa mais que backlink" circula no mercado, mas a cifra que a sustentava foi **refutada**. Falta evidência quantificada e replicada.
3. **Como medir GEO de forma reprodutível** dado o achado do SparkToro: quantos runs por prompt? Que desenho estatístico? As ferramentas comerciais controlam isso? **Sem benchmark independente de validade.**
4. **Os fatores de conteúdo (frescor, HTML semântico, estrutura, GEO-16) valem para o ChatGPT e para conteúdo em PORTUGUÊS?** Toda a evidência modelada exclui ChatGPT e é em inglês. **Falta replicação por motor e por idioma** — relevante para um público pt-BR.

---

> **Status:** pesquisa completa. **Próximo passo:** propor a estrutura do Mega Guia → redigir.
