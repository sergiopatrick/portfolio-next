import type { Post } from './types';

export const posts: Record<string, Post> = {
  'guia-conteudo-citavel-por-llm': {
    title: 'Como estruturar conteúdo pra ser citado por LLM',
    excerpt:
      'GEO na prática. Chunk autocontido, densidade factual, schema que o pipeline de LLM ainda lê. Sete anti-padrões que silenciam seu conteúdo e três camadas de medição, do manual ao automatizado.',
    tag: 'SEO Técnico',
    published_at: '2026-04-21',
    read_time_min: 12,
    body: `<p>Tráfego em 2026 vem de dois canais muito diferentes. SERP tradicional (Google, Bing), que o mercado otimiza há vinte anos, e motor generativo (Perplexity, ChatGPT Search, Claude, AI Overview do Google), que opera por extração e citação. O primeiro é conhecido. O segundo quase ninguém estruturou o site pra se otimizar de verdade.</p>

<p>O ponto que confunde gerente de conteúdo é que ranquear não garante citação. Página que fica em primeiro no Google por "consent mode v2" pode nunca aparecer como fonte no Perplexity pra mesma query. LLM avalia o conteúdo de forma diferente, pondera outras coisas, e descarta trechos que o Google indexou sem reclamar. Este post é o que eu faço na prática pra aumentar a chance de um trecho virar citação.</p>

<h2>O que "ser citado" realmente quer dizer</h2>

<p>Um LLM que responde com citação não está "lendo" a internet em tempo real. Está usando um pipeline RAG (Retrieval Augmented Generation). A query vira embedding, o sistema busca trechos similares num índice, seleciona os mais relevantes, e um modelo gera a resposta referenciando aqueles trechos. Você não está competindo por ranking de página, está competindo por trecho (chunk), tipicamente de 200 a 800 tokens, que faça sentido isolado do resto da página.</p>

<p>Isso muda a unidade de otimização. No Google tradicional a página é o átomo. Em LLM o parágrafo (ou um conjunto curto deles) é o átomo. Muda também a métrica, porque "impressions" e "CTR" não existem, o que você tem é taxa de citação em um conjunto de queries que importa pro negócio.</p>

<h2>Os três filtros silenciosos entre seu conteúdo e a citação</h2>

<p>Entre publicar uma página e um LLM citá-la, existem três gates que não aparecem em documentação oficial. Sintetizei observando o comportamento dos motores em dezenas de queries de clientes ao longo de 2025.</p>

<ol>
  <li><strong>Crawl e chunking.</strong> O crawler de LLM (GPTBot, ClaudeBot, PerplexityBot, Google-Extended) precisa ler o conteúdo sem executar JS pesado. Site que hidrata no client com o conteúdo principal dentro de React sem SSR é invisível pra maioria desses bots.</li>
  <li><strong>Densidade semântica.</strong> O pipeline de retrieval favorece trechos que carreguem muita informação em pouco espaço. Dois parágrafos com claim concreto, número, nome próprio, tendem a ser recuperados mais que dez parágrafos de introdução narrativa.</li>
  <li><strong>Coerência isolada do trecho.</strong> Se o parágrafo faz sentido só no contexto dos anteriores (pronomes, "como vimos acima", "essa técnica"), ele é descartado na etapa de relevância. Trecho que começa com "Ela" e termina com "isso resolve" é ilegível quando chega ao gerador.</li>
</ol>

<h2>Estrutura da página, o que mudou</h2>

<p>Algumas regras que valiam em 2016 pra SEO tradicional continuam de pé. Outras mudam de peso. E algumas práticas que eram opcionais viraram determinantes.</p>

<h3>1. Abra com a resposta, não com o setup</h3>

<p>A regra do <em>inverted pyramid</em> volta com força. Os primeiros dois parágrafos da página precisam conter a resposta mais direta possível à query principal. LLM privilegia esses tokens de abertura porque eles tendem a ser extraídos como summary. Introdução narrativa ("Há anos a comunidade debate…") é suicídio de citação.</p>

<p>Refatore conteúdo antigo com essa heurística. Pegue o H1, identifique a pergunta implícita, e garanta que os primeiros 300 caracteres respondam essa pergunta de forma autônoma.</p>

<h3>2. Um parágrafo, uma ideia, zero pronomes órfãos</h3>

<p>Parágrafo que começa com "Isso" ou "Essa técnica" só faz sentido no contexto da página inteira. Quando o chunker corta a página em pedaços de 500 tokens, metade dos parágrafos ficam sem antecedente e o sistema descarta. Repita o sujeito. Escreva "O Consent Mode v2 opera em dois estágios…" em vez de "Ele opera em dois estágios…" mesmo que tenha mencionado no parágrafo anterior.</p>

<p>Lê um pouco mais pesado pra humano. O ganho em citação compensa com folga. Em testes que rodei em 2025, o mesmo conteúdo com pronomes substituídos teve 2 a 4 vezes mais recuperações em queries de validação.</p>

<h3>3. Datas e versões visíveis, não só no metadata</h3>

<p>O modelo, quando avalia frescor, olha pra tokens dentro do conteúdo, não só o <code>datePublished</code> do schema. Frases como "a partir de março de 2026", "na versão 4.2 do plugin", "após a política de 2023 do Google" funcionam como ancoragem temporal explícita. Datas relativas ("recentemente", "nos últimos meses") envelhecem mal e confundem o modelo.</p>

<h3>4. Listas com frase completa por item</h3>

<p>Bullet que é uma palavra ("Rápido", "Escalável", "Seguro") não é citável. O chunker não entende o contexto. Bullet que é uma frase inteira ("O pipeline reduz o tempo de ingestão de 40 min pra 6 min no benchmark de 10 mil URLs") é ouro, o LLM recupera aquele bullet sozinho e o cita.</p>

<h2>Densidade factual, a métrica que quase ninguém mede</h2>

<p>Defino densidade factual como o número de claims concretos (número, data, nome próprio, versão, referência externa) por 100 palavras. Artigo médio de blog tem densidade 1 a 2. Artigo que funciona em RAG tende a ter densidade 4 a 8.</p>

<p>Comparação direta:</p>

<blockquote><p><em>Baixa densidade (1 claim em 35 palavras):</em> Otimizar Core Web Vitals é importante porque impacta a experiência do usuário e também é um fator de ranqueamento considerado pelo Google nos últimos anos em praticamente todos os tipos de site.</p></blockquote>

<blockquote><p><em>Alta densidade (6 claims em 38 palavras):</em> LCP abaixo de 2.5s, INP abaixo de 200ms, CLS abaixo de 0.1 são os três limiares verdes definidos pelo Google no Core Web Vitals update de março de 2024, medidos no 75º percentil de usuários móveis reais.</p></blockquote>

<p>O segundo parágrafo tem números citáveis, método (p75, mobile), fonte (Google), data (março 2024). Um LLM que recebe uma query sobre "qual o limiar bom de LCP" vai recuperar o segundo e ignorar o primeiro, sem concorrência.</p>

<p>O checklist de revisão antes de publicar que uso, parágrafo a parágrafo: tem pelo menos um número, uma data ou um nome próprio? Se não tem, reescrevo ou removo.</p>

<h2>O chunk pattern, um trecho autocontido</h2>

<p>Pense em cada seção de 200 a 500 palavras como um mini-post. Tem que ter, sozinho:</p>

<ul>
  <li><strong>Um título descritivo.</strong> H3 com a afirmação explícita vence H3 genérico. <em>Como medir densidade factual</em> é pior que <em>Densidade factual se mede em claims por 100 palavras</em>.</li>
  <li><strong>Uma abertura que se sustenta sem as seções anteriores.</strong> Evite "continuando", "além disso", "como vimos". Reintroduza o conceito em uma linha.</li>
  <li><strong>Um exemplo ou número nos primeiros 100 tokens.</strong> Se a seção é abstrata por 300 palavras antes do primeiro exemplo, o chunk central não tem nada citável.</li>
  <li><strong>Um fechamento que não precise de conclusão externa.</strong> A seção resolve o próprio claim.</li>
</ul>

<p>Fiz esse exercício em três posts de um cliente no trimestre passado. Antes da refatoração, zero citações no Perplexity em 15 queries alvo. Depois, oito citações consistentes ao longo de seis semanas de monitoramento. Mesma URL, mesma autoridade de domínio, mesmo backlink profile. A diferença foi estrutural.</p>

<h2>Schema que ainda importa</h2>

<p>Tem muito hype sobre schema em GEO, metade é placebo. Separando o que move a agulha do que não move:</p>

<h3>Schema com impacto mensurável em LLM</h3>

<ul>
  <li><strong>Article com author Person e datePublished/dateModified.</strong> Identifica entidade autor. Sem isso, o conteúdo fica anônimo do ponto de vista do modelo, o que reduz score de confiança.</li>
  <li><strong>Organization no domínio com sameAs pra Wikidata e LinkedIn.</strong> Ancora o site a entidades que o modelo já conhece do treino. Diferença real em queries de domínio estabelecido.</li>
  <li><strong>FAQPage.</strong> O Google deprecou o rich result em 2023, mas pipelines de LLM continuam extraindo pares Q/A desse formato com altíssima precisão. É um dos schemas com melhor ROI específico pra GEO hoje.</li>
  <li><strong>BreadcrumbList.</strong> Ajuda o crawler a entender hierarquia, o que afeta como os chunks são contextualizados.</li>
</ul>

<h3>Schema que é só ritual</h3>

<ul>
  <li><strong>HowTo.</strong> Depreciado no Google em 2023, sem sinal de que LLMs tratem de forma diferenciada. Emita se te agrada, não conta como trabalho útil.</li>
  <li><strong>ImageObject solto sem figura correspondente.</strong> Os modelos visuais de hoje processam imagem direto, schema cosmético agrega pouco.</li>
  <li><strong>AggregateRating sem reviews visíveis na página.</strong> Além de inútil pra LLM, é risco de ação manual do Google sob a <a href="https://developers.google.com/search/blog/2023/09/review-snippet-policy-update" target="_blank" rel="noopener">política de review snippets</a>.</li>
</ul>

<h2>Sete anti-padrões que silenciam seu conteúdo</h2>

<ol>
  <li><strong>Conteúdo principal só no client.</strong> React/Vue sem SSR/SSG. GPTBot e ClaudeBot não executam JS. Se o conteúdo só aparece depois da hidratação, não existe pro LLM.</li>
  <li><strong>Parede de introdução.</strong> 500 palavras antes da primeira afirmação concreta. Os primeiros chunks da página são os mais recuperados, se estão vazios você perde o leilão.</li>
  <li><strong>Pronominalização agressiva.</strong> "Ele", "ela", "isso", "essa abordagem" atravessando parágrafos. Quebra em retrieval.</li>
  <li><strong>Claims sem número.</strong> "Rápido", "econômico", "escalável" sem métrica quantificada. O modelo prefere "reduz latência em 34%" mil vezes a "reduz latência significativamente".</li>
  <li><strong>Citações em rodapé longe da afirmação.</strong> LLM não puxa contexto de 2000 tokens abaixo. Atribua a fonte no próprio parágrafo ("segundo o estudo X de 2025").</li>
  <li><strong>User-agent bloqueado por descuido.</strong> Audite o <code>robots.txt</code> e os cabeçalhos. Muitos sites bloqueiam GPTBot ou ClaudeBot sem perceber, herança de middleware de segurança ou do plugin de firewall do WP.</li>
  <li><strong>Republicação sem atualização de data.</strong> Página com data de 2022 falando de "Consent Mode v2" é descartada como inconsistente. Atualize <code>dateModified</code> a cada edição relevante.</li>
</ol>

<h2>Como medir hoje</h2>

<p>GEO tem um problema operacional sério, não existe Search Console pra LLM. Mas dá pra montar medição razoável em três camadas, da mais barata à mais cara.</p>

<h3>Camada 1, teste manual semanal</h3>

<p>Defina 20 a 30 queries que representam as dores que o negócio resolve. Toda sexta, alguém roda essas queries em Perplexity, ChatGPT Search, Claude, AI Overview do Google, e registra em uma planilha:</p>

<ul>
  <li>A resposta citou o site? Sim/Não.</li>
  <li>Se não, quem citou? Concorrente, Wikipedia, publicação setorial.</li>
  <li>Qual trecho da resposta veio (ou pareceu vir) do seu conteúdo?</li>
</ul>

<p>Três meses dessa disciplina mostram tendência clara.</p>

<h3>Camada 2, referral em analytics</h3>

<p>Segmenta tráfego por referrer de LLM, <code>chatgpt.com</code>, <code>perplexity.ai</code>, <code>claude.ai</code>, <code>gemini.google.com</code>. No GA4, cria um segmento custom. Volume absoluto ainda é pequeno na maioria dos setores, mas a tendência vale muito. Cliente em nicho técnico B2B já vê 3 a 8% do tráfego vindo de LLM em 2026, e esse número dobra a cada dois trimestres.</p>

<h3>Camada 3, monitoramento automatizado</h3>

<p>Se o volume justifica, você constrói um pipeline com cron semanal que dispara as queries via API (OpenAI, Anthropic, Perplexity quando disponível), parseia a resposta, detecta menções ao domínio ou marca, e alimenta um dashboard. Custo operacional fica em ~US$20 a 50/mês pra 100 queries × 4 motores. Um pipeline parecido aparece no <a href="/projetos/linkagem-semantica-embeddings-sanar/">case de linkagem semântica com embeddings</a>, medindo share of voice em nicho de educação médica.</p>

<h2>Três tentações caras</h2>

<ol>
  <li><strong>Pagar ferramenta de "GEO dashboard" sem ter linha base.</strong> A ferramenta entrega relatório bonito. Se você não sabe quais são suas queries alvo, o relatório é decorativo.</li>
  <li><strong>Encher o site de FAQPage genéricos gerados por IA.</strong> Pares Q/A fracos reduzem o score de qualidade. Melhor 15 FAQs reais que 150 auto-geradas.</li>
  <li><strong>Tentar enganar o LLM com keyword stuffing reciclado.</strong> Os motores atuais são robustos a isso e punem via baixa recuperação. Densidade factual não é densidade de palavra-chave.</li>
</ol>

<h2>Fechando</h2>

<p>GEO ainda é território novo e parte do que escrevi aqui vai precisar de revisão em doze meses. Mas três coisas não vão mudar: conteúdo tem que ser lido sem JS, trecho tem que se sustentar sozinho, e densidade factual vence verbosidade. Comece por aí.</p>

<p>Pra conectar com o resto da trilha, o <a href="/blog/internal-linking-semantico-sem-plugin-pgvector/">guia de internal linking semântico com pgvector</a> cobre o pipeline de retrieval aplicado no próprio site, e o <a href="/blog/guia-data-layer-bem-modelado/">data layer bem modelado</a> mostra o mesmo princípio (chunk autocontido, densidade factual) aplicado a dados em vez de texto.</p>`,
    seo_title: 'Como estruturar conteúdo pra ser citado por LLM',
    seo_description:
      'GEO na prática: chunk autocontido, densidade factual, schema que o pipeline de LLM ainda lê. Sete anti-padrões e três camadas de medição.',
    keywords: [
      'GEO',
      'generative engine optimization',
      'otimização para LLM',
      'citação em Perplexity',
      'conteúdo para ChatGPT Search',
      'SEO para IA',
      'densidade factual',
      'RAG retrieval',
    ],
  },
  'guia-data-layer-bem-modelado': {
    title: 'Guia de data layer bem modelado',
    excerpt:
      'Data layer é contrato, não sobra. Sem schema versionado, nomenclatura estável e separação clara entre evento e variável, o report nunca fecha. Princípios, estrutura de referência e os anti-padrões que mais derrubam projeto.',
    tag: 'Martech',
    published_at: '2026-04-30',
    read_time_min: 11,
    body: `<p>Em todo projeto de tracking que entro pra auditar, o problema raiz é o mesmo. O data layer foi tratado como "coisa que o GTM lê", e não como contrato de dados entre engenharia, marketing, produto e BI. O resultado é previsível, tag que dispara em 70% das vezes, KPI que oscila sem mudança de comportamento, relatório em HubSpot que não fecha com GA4 e time de ads que aponta pra "migração de consent" cada vez que o funil muda.</p>

<p>Data layer bem feito é a fundação que não aparece. Quando está certo, ninguém fala dele. Quando está errado, é o primeiro suspeito em toda investigação.</p>

<h2>A função do data layer (e por que 90% erra)</h2>

<p>O data layer é um objeto JavaScript (normalmente <code>window.dataLayer</code>) que serve de ponte entre o site e as tags de terceiros. O cliente (browser ou app) empurra eventos, o GTM escuta, valida, enriquece e distribui pros destinos.</p>

<p>Os três erros fundamentais que eu vejo repetidamente:</p>

<ol>
  <li><strong>Misturar nomenclatura.</strong> <code>event_name</code> em alguns pushes, <code>eventName</code> em outros. O GTM consegue lidar, mas o BI downstream não. Queries SQL precisam de UNION dos dois nomes em todo report.</li>
  <li><strong>Tratar data layer como sobra.</strong> "O desenvolvedor joga o que tem". Resultado, eventos inconsistentes, campos faltando, tipos variando. O dado chega mas ninguém confia.</li>
  <li><strong>Não versionar o schema.</strong> O time acrescenta campos ao longo dos anos. Ninguém sabe mais o que é autoritativo, o que está deprecado, o que é usado por qual tag.</li>
</ol>

<h2>A estrutura de referência em uma figura</h2>

{{DIAGRAM:data-layer-fluxo}}

<p>Uma figura já resolve 80% do alinhamento. O cliente emite eventos no dataLayer. O GTM recebe, valida contra um schema versionado, enriquece com contexto (UTM persistida, user_id, page_type) e distribui pros destinos (GA4, Meta, Google Ads, HubSpot, Salesforce). O schema é o contrato, ele é consumido pelo GTM, pelos testes automatizados, pelo pipeline de BI e por toda pessoa que precisa entender o que o site está emitindo.</p>

<h2>Princípios inegociáveis</h2>

<h3>1. Um schema único, versionado e público</h3>

<p>Crie um arquivo <code>data_layer_schema_v3.json</code> (ou equivalente) num repositório acessível ao time. Ele define todos os eventos válidos, todos os campos de cada evento, os tipos, enum fechado onde aplica. Esse arquivo vira fonte da verdade. O GTM valida contra ele. Os testes automatizados validam contra ele. A doc do time aponta pra ele.</p>

<p>Versionar é crítico. <code>v3</code> significa "terceira versão compatível do schema". Quando você precisa quebrar compatibilidade (renomear um campo, trocar tipo), sobe pra <code>v4</code> e roda paralelo por um período.</p>

<h3>2. snake_case em tudo</h3>

<p>Não é questão de gosto, é de consistência. Escolha um e não misture. <code>snake_case</code> é o que pega melhor no ecossistema GA4 (que é quem vai consumir o evento no final). <code>event_name</code>, não <code>eventName</code>. <code>user_role</code>, não <code>userRole</code>.</p>

<p>Inclui campos que vêm de fontes externas. Se a sua API retorna <code>userId</code>, você normaliza pra <code>user_id</code> no push.</p>

<h3>3. Evento é gatilho, variável é atributo</h3>

<p>Eventos são verbos, ações que acontecem. <code>page_view</code>, <code>form_submit</code>, <code>cta_click</code>, <code>video_play</code>, <code>purchase</code>. Variáveis são atributos que descrevem o contexto. <code>page_type</code>, <code>user_role</code>, <code>logged_in</code>, <code>product_category</code>.</p>

<p>Confundir os dois quebra o pipeline. Se você empurra <code>page_type</code> como evento, o GTM dispara tag toda vez que a variável muda, inundando o report com pseudo-eventos.</p>

<h3>4. Valores com enum fechado, sempre</h3>

<p><code>page_type</code> não é string livre. É enum: <code>home | catalog | product | cart | checkout | thank_you | blog | account | other</code>. Qualquer valor fora disso é bug. Idem pra <code>user_role</code>, <code>locale</code>, <code>payment_method</code>.</p>

<p>Fechar o enum te dá duas coisas. Uma, o report não quebra por erro de digitação. Duas, você detecta bug cedo, se uma URL empurra <code>page_type: "product-detail"</code> (com hífen em vez de underscore), o validador do GTM barra.</p>

<h3>5. Identificadores estáveis, não traduzidos</h3>

<p>Se você tem evento "adicionar ao carrinho" e o site é multi-idioma, o event name é <code>add_to_cart</code>, não <code>adicionar_ao_carrinho</code> ou <code>añadir_al_carrito</code>. Idem pra ids de produto, de categoria, de plano. O valor do id é invariante ao idioma ou localização.</p>

<h2>A estrutura de um evento, linha a linha</h2>

<p>Template mínimo que eu recomendo pra todo push de evento:</p>

<pre><code class="language-javascript">window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: 'cta_click',              // verbo em snake_case
  schema_version: '3',             // qual schema este push usa
  page_type: 'blog',               // enum fechado
  page_id: 'guia-data-layer',      // id estável
  locale: 'pt-BR',
  user_role: 'visitor',            // enum fechado
  cta_id: 'hero-primary',          // id canônico do CTA
  cta_label: 'Ver projetos',       // label exibido (pode mudar)
  cta_destination: '/projetos/',   // URL de destino
  timestamp: new Date().toISOString(),
});</code></pre>

<p>Cinco coisas pra notar. Primeiro, <code>event</code> é o único campo reservado pelo GTM e usado como trigger. Segundo, <code>schema_version</code> viaja em todo push pra o pipeline saber como interpretar. Terceiro, campos ambíguos (<code>cta_label</code>) convivem com ids estáveis (<code>cta_id</code>), os dois servem, cada um pra um propósito. Quarto, <code>timestamp</code> no client é útil pra debug mas nunca é autoritativo (o time do servidor é). Quinto, nada de aninhar objetos em 3 níveis, dataLayer plano é mais fácil de consumir.</p>

<h2>Eventos críticos por tipo de site</h2>

<p>Uma lista mínima viável pros dois casos de uso mais comuns:</p>

<p><strong>E-commerce.</strong> <code>page_view</code>, <code>view_item_list</code>, <code>view_item</code>, <code>select_item</code>, <code>add_to_cart</code>, <code>remove_from_cart</code>, <code>view_cart</code>, <code>begin_checkout</code>, <code>add_shipping_info</code>, <code>add_payment_info</code>, <code>purchase</code>, <code>refund</code>. O GA4 padroniza esses nomes, não reinvente.</p>

<p><strong>Lead gen.</strong> <code>page_view</code>, <code>form_view</code>, <code>form_focus</code>, <code>form_submit</code>, <code>form_success</code>, <code>form_error</code>, <code>cta_click</code>, <code>scroll_depth</code>, <code>engagement_heartbeat</code> (a cada 15s de scroll ativo).</p>

<h2>Enriquecimento no GTM, não no client</h2>

<p>Contexto persistente (UTMs capturadas na entry page, <code>logged_in</code> lido do cookie, <code>session_id</code>) deve ser adicionado no GTM, não re-emitido a cada push do client. Isso reduz a superfície de erro.</p>

<p>O padrão que uso: script de <em>attribution guard</em> roda no início do <code>&lt;head&gt;</code>, captura e persiste UTMs em <code>sessionStorage</code>. Variável do GTM lê o sessionStorage e anexa em toda tag destinada a destinos externos. Os cases <a href="/projetos/fix-pixel-x-google-ads-shopify/">4</a> e <a href="/projetos/utm-persistence-arquitetura-martech-3-bus/">5</a> mostram o código em produção.</p>

<h2>Validação em QA e produção</h2>

<p>Três camadas de validação. Nenhuma substitui a outra.</p>

<ol>
  <li><strong>Validação em tempo de push (no GTM).</strong> Use Custom Template ou Variable que valida o shape do push contra o schema v3. Pushes inválidos logam em console (em dev) e num endpoint interno (em prod).</li>
  <li><strong>Testes automatizados em CI.</strong> Playwright ou Cypress, script que navega pelas jornadas críticas (página de produto, checkout, submit de form) e captura o dataLayer. Assertions contra o schema.</li>
  <li><strong>Monitoramento em produção.</strong> BigQuery (ou o data warehouse da sua stack) recebe os pushes via Measurement Protocol ou server-side GTM. Query que compara shape recebido vs schema esperado, alerta se taxa de erro cruza threshold.</li>
</ol>

<h2>Integração com destinos, o que muda por tag</h2>

<ul>
  <li><strong>GA4.</strong> Consome <code>event</code> direto, e parâmetros do push vão em Event Parameters. Limite de 25 parâmetros por evento, priorize os que importam no report.</li>
  <li><strong>Meta Pixel / CAPI.</strong> Mapeamento 1:1 entre seus eventos e <a href="https://developers.facebook.com/docs/meta-pixel/reference" target="_blank" rel="noopener">Standard Events</a>. <code>add_to_cart</code> do schema → <code>AddToCart</code> do Meta.</li>
  <li><strong>Google Ads.</strong> Conversões mapeadas via <code>conversion_id</code> e <code>conversion_label</code>. Passa <code>transaction_id</code> pra deduplicar com o CAPI.</li>
  <li><strong>HubSpot.</strong> Eventos customizados via <code>_hsq.push(['trackCustomBehavioralEvent'])</code>, ou via API se quiser server-side. Associa ao contato via <code>email</code>.</li>
</ul>

<h2>Os cinco anti-padrões que mais derrubam projeto</h2>

<ol>
  <li><strong>Camel/snake misturado.</strong> Já falado, mas a fonte mais comum é o desenvolvedor puxar direto do payload JSON do backend sem normalizar.</li>
  <li><strong>Valores localizados.</strong> <code>adicionar_ao_carrinho</code> no site PT e <code>add_to_cart</code> no site EN. O report não soma, o BI passa a ter que fazer CASE WHEN em toda query.</li>
  <li><strong>Evento pra tudo, variável pra nada.</strong> Alguém empurra <code>dataLayer.push({event: 'user_logged_in', logged: true})</code>, e o GTM passa a disparar tag cada vez que o usuário se loga. <code>logged_in</code> é variável de contexto, não evento.</li>
  <li><strong>IDs instáveis.</strong> Usar o label traduzido como id (<code>cta_id: "Ver projetos"</code>). Muda o texto do botão, muda a chave do dashboard inteiro.</li>
  <li><strong>Push antes do dataLayer existir.</strong> <code>window.dataLayer.push(...)</code> sem o <code>window.dataLayer = window.dataLayer || []</code> anterior. Quebra silencioso no Safari e em algumas versões de Edge.</li>
</ol>

<h2>O checklist de passagem pra produção</h2>

<ol>
  <li>Schema v{N} definido em repositório com owner claro.</li>
  <li>Todos os eventos listados têm push implementado e testado em staging.</li>
  <li>Script de validação passa em CI sem erro.</li>
  <li>GTM tem Custom Template de validação rodando.</li>
  <li>Endpoint de log de erros de schema está configurado.</li>
  <li>Time de marketing tem acesso ao arquivo schema (não só dev).</li>
  <li>Doc explicando "quando adicionar um evento novo" existe e é lida.</li>
</ol>

<p>Se você passou nos 7, o data layer virou fundação. Se falhou em algum, é aí que o relatório vai parar de fechar seis meses depois. Data layer bem modelado é paciência antes do código, e é o que separa projeto de martech sério de fila de tickets.</p>

<p><em>Projetos relacionados: <a href="/projetos/fix-pixel-x-google-ads-shopify/">Fix de colisão de pixel Twitter/X vs Google Ads em Shopify</a> e <a href="/projetos/utm-persistence-arquitetura-martech-3-bus/">UTM persistence e arquitetura martech em 3 BUs</a></em>.</p>`,
    seo_title: 'Guia de data layer bem modelado pra GTM',
    seo_description:
      'Data layer como contrato versionado, não sobra. Schema, nomenclatura estável, evento vs variável, validação em QA e os 5 anti-padrões mais comuns.',
    keywords: [
      'data layer GTM',
      'data layer schema versionado',
      'nomenclatura data layer',
      'validação GTM QA',
      'GA4 data layer',
    ],
  },

  'guia-canibalizacao-keywords-auditoria': {
    title: 'Guia de canibalização de keywords, auditoria e fix',
    excerpt:
      'Duas ou três URLs do seu site competindo pela mesma query e nenhuma rankeando direito. Como detectar com GSC + crawl + Semrush, a árvore de decisão pra consolidar, fundir, reescrever ou usar canonical, e o que NÃO é canibalização.',
    tag: 'SEO Técnico',
    published_at: '2026-04-28',
    read_time_min: 10,
    body: `<p>Canibalização de keyword é o jeito mais silencioso de perder tráfego. Você publica mais conteúdo, seu site tem mais URLs, mais backlinks, aparentemente está fazendo tudo certo. E mesmo assim o gráfico de tráfego no Search Console fica plano ou cai. Quando você investiga, descobre que duas ou três URLs do próprio site estão brigando pela mesma query, e nenhuma rankeia tão bem quanto uma só rankearia.</p>

<p>Esse guia é pra identificar, decidir e resolver. Com foco em não inventar canibalização onde não tem, que é o erro mais comum depois de ignorar o problema.</p>

<h2>O que é (e o que não é) canibalização</h2>

<p>Canibalização acontece quando <strong>duas ou mais URLs do seu site competem pela mesma intenção de busca</strong>, e o Google não consegue decidir com confiança qual rankear pra uma query específica. O sintoma clássico, o rank da query oscila entre duas URLs ao longo das semanas, e o CTR agregado é pior do que uma URL teria.</p>

<p>O que NÃO é canibalização, e esse é o ponto que mais gente erra:</p>

<ul>
  <li><strong>Duas URLs rankeando pra queries diferentes mas com overlap de palavras.</strong> "Como fazer pão" e "receita de pão francês" têm palavras em comum, mas são intenções diferentes. O Google entende. Não é canibalização, é cobertura de long tail.</li>
  <li><strong>Uma URL rankeando pra N queries diferentes.</strong> É a URL fazendo seu trabalho. Não mexa.</li>
  <li><strong>Ranking oscilando normalmente.</strong> Toda URL oscila ±3 posições sem razão aparente. Pânico por 2 posições de queda é receita pra mudança prematura.</li>
</ul>

<h2>Como detectar com confiança</h2>

<p>Três fontes cruzadas. Nenhuma resolve sozinha.</p>

<h3>1. Google Search Console, a fonte da verdade</h3>

<p>No GSC, vá em Performance, filtre por Query, escolha uma query suspeita, clique na aba Pages. Se aparecem 2+ URLs com impressões relevantes (não só uma com 1000 e outra com 3), é um candidato.</p>

<p>Pra scan em massa, exporte os dados via API do GSC. Um script simples que agrupa por query e conta URLs com &gt;= 5% do share de impressões da query faz o trabalho.</p>

<h3>2. Crawl do site pra confirmar estrutura</h3>

<p>Screaming Frog ou Sitebulb roda crawl completo. Exporte <code>title</code>, <code>h1</code>, <code>meta_description</code>, <code>canonical</code>. Onde o title ou h1 é idêntico entre URLs diferentes, canibalização é quase certa. Onde o canonical aponta pra uma URL consistente, o Google provavelmente já entende.</p>

<h3>3. Rank tracker histórico</h3>

<p>Semrush, Ahrefs ou equivalente. Pegue a query suspeita e veja o histórico de 90 dias. Se o rank alterna entre URLs diferentes semanas sim, semanas não, é canibalização. Se está estável numa URL só, relaxa.</p>

<h2>A árvore de decisão</h2>

{{DIAGRAM:canibalizacao-decisao}}

<p>Antes de aplicar a árvore, confirme as três coisas do painel inferior: o Google está alternando URLs (não só uma ganhando devagar da outra), o CTR agregado está abaixo do que uma URL só teria, e existe link equity concentrado em alguma URL do cluster. Sem essas três, você pode estar transformando variação natural em projeto de refactoring.</p>

<p>A árvore tem quatro saídas:</p>

<h3>Consolidar com 301</h3>

<p>A saída mais comum. Uma URL do cluster é objetivamente melhor (mais tráfego histórico, mais backlinks, melhor CTR). Mantém ela, redireciona as outras com 301, atualiza links internos pra apontar pra nova canônica.</p>

<p>Truque importante: antes de redirecionar, <strong>mescla o conteúdo útil das URLs que vão sumir na URL que fica</strong>. Se a "URL perdedora" tinha uma seção boa que a vencedora não tem, copia antes de apagar. O 301 passa link equity mas não passa conteúdo.</p>

<h3>Fundir em pilar</h3>

<p>Quando há 5+ URLs pequenas cobrindo o mesmo tema em fragmentos. Cria uma página-hub (pilar) que cobre o tema de ponta a ponta, move o conteúdo das pequenas pra seções da pilar, e redireciona as pequenas com 301 pra pilar (ou pra anchors específicas dela).</p>

<p>Resultado, uma página com autoridade agregada em vez de cinco diluídas. Esse é o movimento clássico de reorganização de blog antigo.</p>

<h3>Reescrever uma</h3>

<p>Quando descobre que as URLs estavam competindo por acidente, mas na verdade deveriam cobrir intenções diferentes (ex.: uma informacional e outra comercial). Em vez de consolidar, reescreve uma pra deixar claro o ângulo diferente. Título, H1, primeiro parágrafo, schema, tudo ajustado pra sinalizar pro Google o que é cada página.</p>

<p>Demora mais que consolidar, mas preserva a cobertura de duas intenções.</p>

<h3>Canonical explícito</h3>

<p>A saída menos comum. Você tem duas URLs pra mesma intenção, mas servindo públicos diferentes (por exemplo, página B2B em <code>/empresa/solucao</code> e B2C em <code>/solucao</code>). O Google não precisa decidir, você decide, colocando <code>&lt;link rel="canonical"&gt;</code> explícito apontando uma pra outra.</p>

<p>Só usa canonical se realmente não dá pra consolidar, porque canonical não transmite todo o link equity que um 301 transmite.</p>

<h2>Padrões comuns de canibalização</h2>

<p>Nove em cada dez casos que audito caem num destes padrões:</p>

<ol>
  <li><strong>Tag archives vs categoria vs post.</strong> WordPress cria <code>/tag/seo</code> e <code>/category/seo</code> pra o mesmo tópico, e se o post se chama "guia de SEO", três URLs competem. Solução padrão, <code>noindex</code> nos tag archives.</li>
  <li><strong>Paginação competindo com página 1.</strong> <code>/blog/page/2/</code> rankeando pro mesmo termo do <code>/blog/</code>. Use <code>rel="next"</code> e <code>rel="prev"</code> corretamente, e o canonical de todas as paginadas aponta pra página 1.</li>
  <li><strong>URLs com e sem trailing slash / com e sem www.</strong> Canonical resolve. Config do servidor resolve melhor.</li>
  <li><strong>Duplicação por parâmetros.</strong> <code>?sort=price</code>, <code>?category=x</code>. Todas servem conteúdo praticamente igual. Canonical pra URL sem parâmetros.</li>
  <li><strong>Versão móvel em subdomínio (<code>m.site.com</code>).</strong> Era padrão em 2013, hoje é dívida. Consolida em responsive, redireciona <code>m.</code> com 301.</li>
  <li><strong>Autor de blog com bio rankeando pro mesmo tema.</strong> <code>/autor/fulano</code> lista posts dele, e um desses posts se chama "Fulano Silva é o especialista em X". As duas URLs competem. Ajusta o title da página de autor pra ser explicitamente de autor ("Posts de Fulano Silva"), não do tópico.</li>
</ol>

<h2>Como consolidar sem perder tráfego</h2>

<p>Checklist do movimento de consolidação:</p>

<ol>
  <li><strong>Identifique a URL vencedora.</strong> A que tem mais backlinks e mais tráfego histórico na query-alvo.</li>
  <li><strong>Mescle conteúdo útil.</strong> Traga as seções boas das URLs perdedoras pra vencedora. Atualize a data de publicação pra hoje se fizer sentido (trigger de "novo" no Google).</li>
  <li><strong>Atualize internal links.</strong> Todos os links do seu site que apontavam pras URLs perdedoras agora apontam pra vencedora direto. Não dependa do 301.</li>
  <li><strong>Aplique 301.</strong> Só agora. As perdedoras redirecionam pra vencedora.</li>
  <li><strong>Monitore por 30 dias.</strong> GSC na query-alvo, Page que está impressionando, CTR. O sucesso é a vencedora absorvendo o tráfego das perdedoras + um pouco a mais (porque o Google agora confia).</li>
</ol>

<h2>O que medir pra provar que funcionou</h2>

<ul>
  <li><strong>Impressões agregadas na query-alvo.</strong> Devem ficar estáveis ou subir. Queda forte é bandeira vermelha.</li>
  <li><strong>CTR.</strong> Melhora sempre. Antes, múltiplos resultados da mesma query dilutivam o CTR. Depois, concentrado numa URL, clique sobe.</li>
  <li><strong>Rank médio da URL vencedora.</strong> Sobe 2 a 5 posições em média na query-alvo.</li>
  <li><strong>Sessões orgânicas na URL vencedora.</strong> Sobe proporcionalmente.</li>
</ul>

<p>Se todas as quatro melhoram em 30 dias, a consolidação foi bem feita. Se alguma piora, volta nos logs, olha se o 301 está direito, e verifica se não destruiu nenhum anchor interno importante.</p>

<h2>Ferramentas que ajudam</h2>

<ul>
  <li><strong>GSC API + script em Python</strong> pra pegar todas as queries com &gt;1 URL impressionando. Saída em CSV.</li>
  <li><strong>Screaming Frog</strong> pra crawl + comparação de title/h1/canonical.</li>
  <li><strong>Semrush ou Ahrefs</strong> pro histórico de rank por URL.</li>
  <li><strong>Sheets</strong> pra matriz de decisão. Cada cluster vira uma linha com URLs, tráfego, backlinks, saída escolhida.</li>
</ul>

<p>Canibalização é problema comum mas diagnosticável. O erro real é diagnosticar de mais, porque "tem palavras em comum" vira projeto gigante de reestruturação que não precisava acontecer. Olha o sintoma (rank oscilando, CTR baixo), confirma com dados, age cirurgicamente.</p>

<p><em>Projeto relacionado: <a href="/projetos/linkagem-semantica-embeddings-sanar/">Linkagem semântica por embeddings em 5 propriedades Sanar</a>, onde o engine previne canibalização desde o desenho do ecossistema</em>.</p>`,
    seo_title: 'Canibalização de keywords, auditoria e fix',
    seo_description:
      'Como detectar canibalização com GSC + crawl + rank tracker, a árvore de decisão pra consolidar, fundir, reescrever ou canonical, e o que não é canibalização.',
    keywords: [
      'canibalização de keywords',
      'auditoria SEO canibalização',
      'consolidar URLs SEO',
      '301 canibalização',
      'rel canonical explícito',
    ],
  },

  'guia-programmatic-seo-wordpress': {
    title: 'Guia de programmatic SEO em WordPress',
    excerpt:
      'Programmatic SEO em WordPress feito com disciplina, não planilha exportada pro formulário do plugin. Arquitetura em 4 camadas, importer PHP idempotente e os erros que transformam escala em thin content.',
    tag: 'SEO Técnico',
    published_at: '2026-04-26',
    read_time_min: 12,
    body: `<p>Programmatic SEO, quando funciona, é uma das alavancas de crescimento mais eficientes que existem. Você gera dezenas ou centenas de páginas a partir de uma fonte estruturada (planilha, banco, API), cada uma atacando uma cauda longa específica, e o tráfego orgânico escala não-linearmente depois que o Google indexa.</p>

<p>Quando não funciona, é um desastre em câmera lenta. O Google detecta thin content, rebaixa o domínio inteiro, e 3 meses depois você está tentando entender por que o blog principal também caiu.</p>

<p>A diferença entre os dois cenários é arquitetura. Este guia descreve o motor que eu rodo em WordPress pra publicar a escala sem queimar domínio.</p>

<h2>Quando programmatic SEO faz sentido</h2>

<p>Três pré-condições. Se uma falta, procure outro alavanca.</p>

<ol>
  <li><strong>Você tem dado estruturado que vira conteúdo útil.</strong> Catálogo de produtos com especificações, lista de cidades com dados oficiais de saúde, 114 exames laboratoriais com preparo e valores de referência. Dado cru + template de boa qualidade vira página útil. Planilha de palavras-chave aleatórias vira spam.</li>
  <li><strong>Cada página tem valor próprio.</strong> Se você não consegue explicar em uma frase por que um usuário humano acharia útil visitar aquela página, o Google também não vai achar.</li>
  <li><strong>Volume ≥ 100 páginas e crescendo.</strong> Pra menos que isso, não vale o overhead. Escreve à mão.</li>
</ol>

<p>No <a href="/projetos/arquitetura-conteudo-scaffold-php-import/">case 6</a> (SanarMed Exames) publicamos 114 páginas A-Z de exames laboratoriais, cada uma com preparo, indicação, valores de referência, interpretação. Três pré-condições atendidas. Resultado, +295% em keywords orgânicas e 5,6K sessões/mês no hub <code>/exames/</code>.</p>

<h2>A arquitetura em 4 camadas</h2>

{{DIAGRAM:programmatic-seo-arquitetura}}

<p>Quatro camadas empilhadas. Cada uma tem uma responsabilidade clara e não invade as outras. Desenho assim é o que permite manter o motor ao longo de anos sem virar espaguete.</p>

<h3>Camada 01, a planilha como single source of truth</h3>

<p>Google Sheets ou Excel com 6 abas tipadas. No caso dos Exames:</p>

<ul>
  <li><strong>aba <code>exames</code></strong>, uma linha por exame. Colunas, <code>slug</code>, <code>title</code>, <code>indication</code>, <code>preparation</code>, <code>reference_values</code>, <code>category</code>, <code>body</code>.</li>
  <li><strong>aba <code>categorias</code></strong>, a taxonomia que agrupa os exames (hematologia, bioquímica, etc). Uma linha por categoria.</li>
  <li><strong>aba <code>subcategorias</code></strong>, 2ª camada de agrupamento se necessária.</li>
  <li><strong>aba <code>sinonimos</code></strong>, mapping de nomes alternativos pro nome canônico (pra internal linking).</li>
  <li><strong>aba <code>referencias</code></strong>, bibliografia citada no corpo. Referência é tabela à parte, FK por id.</li>
  <li><strong>aba <code>changelog</code></strong>, o que foi revisado quando e por quem. Fica versionado implicitamente pelo próprio Google Docs.</li>
</ul>

<p>Três coisas importam nessa camada. Primeiro, <strong>o time editorial edita aqui, não no WordPress</strong>. A planilha é autoritativa. Segundo, <strong>os dados têm tipo</strong> (enum pra categoria, texto longo pro body, lista pra referências). Terceiro, <strong>há um pipeline que exporta a planilha pra um JSON normalizado</strong> toda vez que alguém edita. Esse JSON é o input do próximo estágio.</p>

<h3>Camada 02, o importer PHP idempotente</h3>

<p>Essa é a parte técnica chave. Script PHP rodado via <code>wp-cli</code>, lê o JSON, converte cada linha em um post do CPT correspondente, aplica schema.org. <strong>Idempotente</strong> significa que pode rodar N vezes sem efeito colateral. O importer detecta o que mudou (via hash MD5 da linha) e só atualiza o que de fato precisa.</p>

<pre><code class="language-php">// Trecho do importer, hash da linha como checksum
\$hash = md5( serialize( \$row ) );
\$existing = get_page_by_path( \$row['slug'], OBJECT, 'exame_medico' );

if ( \$existing && get_post_meta( \$existing-&gt;ID, '_source_hash', true ) === \$hash ) {
    continue; // Nenhuma mudança, pula
}

\$id = wp_insert_post( \$this-&gt;map_fields( \$row, \$existing-&gt;ID ?? 0 ) );
update_post_meta( \$id, '_source_hash', \$hash );
\$this-&gt;apply_taxonomy( \$id, \$row['category'] );</code></pre>

<p>Por que idempotência é não negociável no programmatic SEO? Porque <strong>o editor vai querer rodar o script 50 vezes durante a vida do projeto</strong>. Corrigiu um preparo? Rodou o script. Adicionou 20 exames novos? Rodou. Mudou o template de valores de referência? Rodou. Se cada run pudesse duplicar ou sobrescrever tudo, ninguém usaria.</p>

<p>O <a href="/blog/importer-idempotente-php-rodar-n-vezes/">guia de importer idempotente</a> entra em mais profundidade nas três estratégias (chave natural, hash, log auditável).</p>

<h3>Camada 03, CPT + schema automático</h3>

<p>Cada linha da planilha vira um post num Custom Post Type específico (<code>exame_medico</code>, no caso), com taxonomia aplicada, permalink amigável e schema.org injetado pelo próprio importer.</p>

<p>Schema é onde a mágica de AEO acontece. Pra cada tipo de página, um schema adequado:</p>

<ul>
  <li><strong>Exames</strong>, <code>MedicalWebPage</code> + <code>MedicalTest</code>.</li>
  <li><strong>CID-10</strong>, <code>MedicalWebPage</code> + <code>MedicalCondition</code>.</li>
  <li><strong>Cidades em catálogo de serviço</strong>, <code>Service</code> + <code>areaServed</code>.</li>
  <li><strong>Produtos</strong>, <code>Product</code> com <code>offers</code>, <code>review</code>, <code>aggregateRating</code>.</li>
</ul>

<p>O schema não é nice-to-have em programmatic SEO. É o que faz o Google distinguir sua página de 100 páginas genéricas com o mesmo template. É também o que faz os AI engines (ChatGPT, Claude, Gemini) citarem sua página como fonte quando o usuário pergunta algo relacionado.</p>

<p>Um detalhe operacional, valide o schema com o <a href="https://search.google.com/test/rich-results" target="_blank" rel="noopener">Rich Results Test</a> no primeiro post gerado antes de deixar o importer processar os 114. Schema quebrado em escala é dor de cabeça cara.</p>

<h3>Camada 04, internal linking que fecha o loop</h3>

<p>Sem internal linking, programmatic SEO vira cemitério de páginas órfãs. Cada página precisa ter um caminho de entrada do restante do site, e cada página precisa linkar pra páginas relacionadas.</p>

<p>Dois padrões complementares:</p>

<p><strong>1. Hub + spokes.</strong> A página-categoria (<code>/exames/hematologia/</code>) é o hub. Todas as páginas de exame daquela categoria são spokes, linkam de volta pro hub, e o hub linka pra todos. Site map visual, estrela.</p>

<p><strong>2. Linkagem semântica por embeddings.</strong> No topo de cada página de exame, um bloco "Exames relacionados" puxado via similarity search no pgvector. Isso escala sem marcação manual e cruza naturalmente entre categorias (o que é ouro pra cobertura de cauda longa).</p>

<p>O <a href="/projetos/linkagem-semantica-embeddings-sanar/">case 7</a> entra nesse detalhe, e a combinação de programmatic SEO + linkagem por embeddings é o que transforma um "banco de páginas" num ecossistema navegável.</p>

<h2>Os quatro erros que transformam escala em thin content</h2>

<ol>
  <li><strong>Template com 80% de conteúdo repetido.</strong> Se o cabeçalho, o disclaimer, a seção "sobre este exame" e os CTAs são idênticos em todas as páginas, e só o nome do exame muda, o Google detecta template-heavy content. Solução, coloque conteúdo variável em maior proporção. Valores de referência específicos, casos de uso, indicações clínicas, bibliografia.</li>
  <li><strong>Sem dado único por página.</strong> Se a página de "Exame X" não tem nenhum dado que só ela tem, não existe razão pra ela existir. Thin content é Google-speak pra "essa página não agrega nada que outras 50 não agregariam".</li>
  <li><strong>Geração a partir de LLM sem revisão humana.</strong> LLM gera conteúdo competente mas genérico. Pro Google, genérico é morte. O motor que roda no Sanar tem revisão médica obrigatória antes da publicação, <a href="/projetos/pipeline-editorial-ia-revisao-medica/">case 1</a>.</li>
  <li><strong>Indexação precipitada.</strong> Publicar 500 páginas de uma vez e deixar o Google descobrir é pior que publicar em ondas de 50 com 2 semanas entre cada. O crawl budget é finito e o Google penaliza sites que parecem ter spam em massa. Publica aos poucos, monitora qualidade por coorte.</li>
</ol>

<h2>Métricas que importam</h2>

<ol>
  <li><strong>Indexação rate por coorte.</strong> Dos 50 publicados na semana X, quantos estão indexados em 30 dias? Se menos de 70%, algo no template está sinalizando thin.</li>
  <li><strong>Impressões médias por página indexada.</strong> Meta realista, 5 a 50 impressões/mês por página programática. Se for abaixo, a cauda longa não está sendo capturada (problema de title, schema ou linkagem).</li>
  <li><strong>Sessões orgânicas no hub.</strong> O hub (categoria) deve concentrar 30-40% do tráfego agregado das páginas-filho. Se for menos, internal linking está fraco.</li>
  <li><strong>Keywords únicas cobertas.</strong> Proxy de cauda longa. O case 6 entregou +295% de keywords em produção.</li>
</ol>

<h2>Ordem recomendada pra implementar</h2>

<ol>
  <li>Defina a planilha-fonte com 2-3 abas pequenas e valida com 10 linhas.</li>
  <li>Escreve o importer PHP rodando via wp-cli em ambiente de staging. Testa idempotência rodando 5 vezes.</li>
  <li>Gera 10 páginas em staging. Valida schema no Rich Results Test. Abre no browser e confere se o conteúdo é útil.</li>
  <li>Aplica internal linking básico (hub + spokes). Ainda em staging.</li>
  <li>Sobe pra produção com as primeiras 30-50 páginas. Publica no sitemap, aguarda Google descobrir.</li>
  <li>Monitora indexação por 15 dias. Se &gt; 70% indexou e está aparecendo em impressão, publique a próxima onda.</li>
  <li>Itere. Adiciona embeddings pro internal linking quando o volume justificar (&gt;500 páginas).</li>
</ol>

<p>Programmatic SEO em WordPress não é simples mas é sistemático. Com as 4 camadas certas, a planilha vira página útil, o Google confia, e o gráfico de keywords orgânicas cresce em curva não-linear. Sem elas, vira o pesadelo de thin content que todo mundo já viu.</p>

<p><em>Projetos relacionados: <a href="/projetos/arquitetura-conteudo-scaffold-php-import/">Arquitetura de conteúdo e scaffold PHP para import em escala</a> e <a href="/projetos/linkagem-semantica-embeddings-sanar/">Linkagem semântica por embeddings em 5 propriedades Sanar</a></em>.</p>`,
    seo_title: 'Programmatic SEO em WordPress',
    seo_description:
      'Arquitetura em 4 camadas pra programmatic SEO que escala, planilha-fonte, importer PHP idempotente, CPT com schema e internal linking que fecha o loop.',
    keywords: [
      'programmatic SEO WordPress',
      'importer PHP wp-cli',
      'thin content escala',
      'schema markup CPT',
      'internal linking hub spokes',
    ],
  },

  'guia-migracao-seo-sem-perder-trafego': {
    title: 'Guia de migração SEO sem perder tráfego',
    excerpt:
      'Cinco fases com gate entre cada uma, do inventário à estabilização pós-cutover. O que fazer T-30, T-14, T-7, T-0 e T+30, os sete erros que derrubam tráfego e as ferramentas que de fato ajudam.',
    tag: 'SEO Técnico',
    published_at: '2026-04-24',
    read_time_min: 13,
    body: `<p>Toda migração SEO começa com alguém dizendo "é só subir o site novo e colocar os redirects". Toda migração SEO ruim termina com um report de queda de 40% de tráfego orgânico três meses depois. A distância entre as duas frases é planejamento.</p>

<p>Este guia descreve o que eu faço em migração de domínio (com ou sem mudança de CMS), com a ressalva de que nenhum passo é opcional. Cada fase tem um gate, e saltar um gate é o que transforma migração técnica em incidente de negócio. Se você está lendo isso porque tem uma migração agendada, a regra de ouro é começar 30 dias antes do cutover. Se começou ontem pra amanhã, adie.</p>

<h2>Por que migração mata tráfego</h2>

<p>Três causas, em ordem de frequência:</p>

<ol>
  <li><strong>Redirect mapping incompleto.</strong> URLs com tráfego sumiram sem redirect 1:1. Google chega, bate 404, remove do índice.</li>
  <li><strong>Mudança de estrutura sem preservação de sinais.</strong> URLs novas, mas canonical, schema, internal linking ou hreflang quebrados. Google re-indexa mas perde o contexto que fazia aquela URL rankear.</li>
  <li><strong>Performance pior que a anterior.</strong> Site novo com CWV ruim, JS bloqueante, imagens não otimizadas. O Google mede isso e demora pra reestabilizar o ranking.</li>
</ol>

<p>As três são previsíveis e todas mitigáveis com o plano abaixo.</p>

<h2>O plano em cinco fases</h2>

{{DIAGRAM:migracao-seo-fases}}

<p>Lê da esquerda pra direita. Cada fase tem um artefato de saída e um gate de passagem. Sem gate cumprido, não avança. Esse é o único disciplinamento que salva projeto.</p>

<h2>Fase 01, T-30, inventário que previne 90% dos problemas</h2>

<p>O erro mais comum é começar pelo redirect mapping. Errado. Comece pelo inventário completo de URLs <strong>com tráfego</strong>. Isso significa juntar três fontes:</p>

<ul>
  <li><strong>Google Analytics / GA4.</strong> Pages com cliques no último ano, não só no último mês. URL sazonal pode valer.</li>
  <li><strong>Google Search Console.</strong> Pages com impressão e clique, mesmo as que você nem sabe que existem (tag archives antigas, URLs de parâmetro, paginação).</li>
  <li><strong>Logs do servidor.</strong> O acesso real do Googlebot. Nem tudo aparece em GSC (especialmente URLs canibalizadas ou não indexadas). 30 dias de log mostra o crawl budget efetivo.</li>
</ul>

<p>Une as três em uma planilha, deduplica, ordena por tráfego decrescente. Essa é sua lista mestra. Marque também os top 20% que representam 80% do tráfego (Pareto) e trate eles com especial cuidado nas próximas fases.</p>

<p><strong>Gate de passagem, 100% das URLs com &gt;10 cliques/mês cobertas pelo inventário.</strong></p>

<h2>Fase 02, T-14, mapeamento 1:1 por regra clara</h2>

<p>Cada URL antiga do inventário recebe uma das quatro saídas abaixo. A decisão é a parte que demanda o maior esforço humano do projeto e não pode ser delegada pra script.</p>

{{DIAGRAM:migracao-seo-redirects}}

<p>As quatro saídas:</p>

<ul>
  <li><strong>301 pra URL equivalente direta.</strong> O caso mais comum, conteúdo continua existindo no novo site. Redirect 1:1 com canonical apontando pro destino.</li>
  <li><strong>301 pro canônico consolidado.</strong> Várias URLs antigas viram uma nova (típico em reestruturação de categoria). Todas as antigas redirecionam pra canônica, e essa canônica vira o ponto de convergência de link equity.</li>
  <li><strong>301 pra página-pai.</strong> Quando a página-filho some (por exemplo, uma landing de produto descontinuado), redirecione pra categoria-pai, não pra home. Perder contexto é ruim, mas redirect pra home é pior.</li>
  <li><strong>410 Gone.</strong> Conteúdo removido de propósito. 410 sinaliza ao Google que a URL não volta. Limpa o índice em semanas; redirect pra home deixaria o Google tentando entender por meses.</li>
</ul>

<p>Três regras fixas que valem em qualquer migração:</p>

<ol>
  <li><strong>Nunca use 302 em migração permanente.</strong> 302 passa menos link equity e confunde o Google sobre qual URL é canônica.</li>
  <li><strong>Evite chains.</strong> A → B → C é pior que A → C. Sempre resolva direto pro destino final, mesmo que isso signifique reescrever regras antigas.</li>
  <li><strong>Preserve parâmetros relevantes.</strong> UTM, gclid, fbclid precisam atravessar o redirect. Em nginx, <code>rewrite ^/old /new$is_args$args permanent;</code>. Em Next.js, garanta via middleware.</li>
</ol>

<p><strong>Gate de passagem, zero URL órfã no diff e mapeamento aprovado por SEO + engenharia.</strong></p>

<h2>Fase 03, T-7, staging com crawl + diff</h2>

<p>O site novo precisa estar em staging acessível pro time (com basic auth pra não indexar). Aqui rodamos dois passos técnicos:</p>

<ol>
  <li><strong>Crawl completo no staging.</strong> <a href="https://www.screamingfrog.co.uk/" target="_blank" rel="noopener">Screaming Frog</a> ou <a href="https://www.sitebulb.com/" target="_blank" rel="noopener">Sitebulb</a>. Objetivo, capturar title, description, H1, canonical, hreflang, status code, schema e internal links de cada URL. Export em CSV.</li>
  <li><strong>Diff com produção.</strong> Rodar o mesmo crawl no site atual e comparar CSV contra CSV. Colunas que importam, title, description, canonical, status, schema. Onde o diff aparece, investiga. Onde o diff é intencional (reestruturação), documenta.</li>
</ol>

<p>Além do crawl, teste os redirects direto via curl. Um shell script que lê a planilha de mapeamento e bate <code>curl -sI -o /dev/null -w "%{http_code} %{redirect_url}\\n" &lt;url_antiga&gt;</code>. Cada linha que volta com código diferente de 301 ou com redirect_url errado é bug bloqueante.</p>

<p><strong>Gate de passagem, diff aprovado + 100% dos redirects retornando 301 pro destino correto.</strong></p>

<h2>Fase 04, T-0, cutover em janela de baixa demanda</h2>

<p>Deploy em janela de baixa demanda (madrugada, fim de semana), nunca em horário comercial. Checklist do próprio dia:</p>

<ul>
  <li><strong>Subir o novo site</strong> com DNS apontado.</li>
  <li><strong>Aplicar as regras de redirect</strong> no servidor/edge.</li>
  <li><strong>Atualizar <code>sitemap.xml</code></strong> com as URLs novas, submeter no GSC.</li>
  <li><strong>Usar a ferramenta Change of Address</strong> do GSC se for mudança de domínio.</li>
  <li><strong>Atualizar robots.txt</strong> se havia regra específica.</li>
  <li><strong>Smoke test em 50 URLs</strong> do top tráfego, manual, no browser. Cada uma tem que abrir em 200 com conteúdo esperado e canonical apontando pra ela mesma.</li>
</ul>

<p><strong>Gate de passagem, 95% da amostra de smoke test retorna 200 com conteúdo correto.</strong> Se 5% ou mais falhou, rollback e recomeço na próxima janela.</p>

<h2>Fase 05, T+30, monitoramento e fix loop</h2>

<p>Aqui mora o trabalho ingrato. Nas 4 semanas pós-cutover, três coisas precisam ser olhadas diariamente nos 7 primeiros dias e semanalmente depois:</p>

<ol>
  <li><strong>Logs do servidor.</strong> Qualquer 404 ou 500 vindo do Googlebot vira ticket imediato. Normalmente é um redirect faltando ou uma regex mal formada.</li>
  <li><strong>GSC, relatório de cobertura.</strong> Páginas com status "Duplicado, Google escolheu canônica diferente" são sinal de que você não preservou canonical. "Descobriu, atualmente não indexado" pode ser crawl budget comido por URLs velhas ainda na fila.</li>
  <li><strong>Rank tracking por URL.</strong> Compare o rank médio das top 100 URLs antes e depois. Queda brusca (mais de 5 posições em mais de 20% delas) é bandeira vermelha, investiga individual.</li>
</ol>

<p>O fix loop é semanal. Toda segunda: pega os 404s do Googlebot da semana anterior, cria os redirects faltantes, deploya. Em 4 semanas o número de 404s semanais cai pra zero e você pode declarar estabilização.</p>

<h2>Os sete erros que mais derrubam tráfego</h2>

<ol>
  <li><strong>Redirecionar tudo pra home.</strong> O clássico. Google vê N-mil URLs convergindo pra raiz e reclassifica como soft 404.</li>
  <li><strong>Chains de redirect.</strong> A → B → C. Perda de link equity a cada hop. Resolve direto.</li>
  <li><strong>Mudar URLs "por estética" sem necessidade.</strong> Se a URL antiga funciona, deixa. Reestruturar sem motivo claro é queimar capital SEO.</li>
  <li><strong>Esquecer do hreflang.</strong> Sites multi-idioma, tags de hreflang novas precisam estar no novo site apontando pras URLs canônicas corretas.</li>
  <li><strong>Lançar com schema quebrado.</strong> Valida tudo em <a href="https://validator.schema.org/" target="_blank" rel="noopener">validator.schema.org</a> e <a href="https://search.google.com/test/rich-results" target="_blank" rel="noopener">Rich Results Test</a> antes do cutover.</li>
  <li><strong>Subir com CWV pior.</strong> Se LCP sobe, rank cai. Meça CWV no staging e só vai pra produção se estiver igual ou melhor.</li>
  <li><strong>Não avisar o GSC.</strong> Submeter novo sitemap e usar Change of Address acelera a re-indexação em semanas.</li>
</ol>

<h2>Ferramentas que de fato ajudam</h2>

<ul>
  <li><strong>Screaming Frog</strong> pra crawl e diff. Paga porque vale.</li>
  <li><strong>GoAccess</strong> ou <strong>Matomo</strong> pra parsear logs do servidor. Se o servidor é Apache/nginx, vem dos logs mesmo, não precisa de nada fancy.</li>
  <li><strong>Semrush</strong> ou <strong>Ahrefs</strong> pra rank tracking por URL. GSC serve pra impressão e clique, mas pra rank médio histórico você precisa de uma dessas.</li>
  <li><strong>Sheets</strong> pra planilha de mapeamento. Não inventa ferramenta de "redirect manager", planilha resolve e é auditável.</li>
  <li><strong>curl + bash</strong> pro shell de validação dos redirects. Simples, ninguém quebra.</li>
</ul>

<h2>O que medir no fim</h2>

<p>Trinta dias depois do cutover, três métricas de sucesso:</p>

<ol>
  <li><strong>Tráfego orgânico total.</strong> Dentro de ±10% do pré-migração é sucesso. Queda maior que 20% é incidente.</li>
  <li><strong>Impressões no GSC.</strong> Curva de impressão acompanhando ou superando a curva pré-cutover.</li>
  <li><strong>Rank médio das top 100 URLs.</strong> Diferença menor que 2 posições no agregado.</li>
</ol>

<p>Se as três estão estáveis ou melhores, a migração cumpriu o objetivo. Se alguma está negativa, volte pro fix loop da fase 05 e investigue URL por URL.</p>

<p>Migração bem feita é invisível. Usuário não percebe, Google reindexa em silêncio, e o gráfico do GSC continua subindo sem degrau. O trabalho não aparece, e é exatamente esse o sinal de que foi bem feito.</p>`,
    seo_title: 'Guia de migração SEO sem perder tráfego',
    seo_description:
      'Plano em 5 fases com gate entre cada, T-30 a T+30. Inventário, mapeamento 1:1, staging com diff, cutover e fix loop. Os 7 erros que derrubam tráfego.',
    keywords: [
      'migração SEO',
      'redirect 301 migração',
      'Screaming Frog crawl diff',
      'change of address GSC',
      '410 gone vs 301',
    ],
  },

  'guia-motor-conteudo-ia-local-deepseek': {
    title:
      'Guia de motor de geração de conteúdo com IA local e DeepSeek',
    excerpt:
      'Pipeline editorial em seis estágios, humano no meio, com roteamento de modelo por custo. LLM local faz triagem e extração, DeepSeek escreve o rascunho, Claude entra só no que importa.',
    tag: 'Automação com LLM',
    published_at: '2026-04-22',
    read_time_min: 12,
    body: `<p>Quase todo time que quer publicar mais conteúdo em 2026 chega na mesma conta. Um artigo médico bem feito leva de três a cinco horas entre pesquisa, redação e revisão. A equipe tem banda pra uns vinte e cinco por mês. O funil pede o quádruplo. Então o time ou congela a operação, ou terceiriza pra uma fábrica de texto, ou monta um motor próprio.</p>

<p>Este guia descreve o terceiro caminho. É o que rodamos no Sanar para alimentar o Blog e o funil do <a href="https://pos.sanar.com.br" target="_blank" rel="noopener">SanarPós</a>, e é a forma que eu recomendo pra qualquer editorial com volume mínimo que justifique a arquitetura. O diferencial versus o "ChatGPT + copiar e colar" é a disciplina de <strong>rotear cada tarefa pro modelo mais barato que ainda entrega qualidade</strong>.</p>

<h2>A arquitetura de referência em seis estágios</h2>

<p>Antes do código, a forma geral. O motor tem seis estágios sequenciais e um humano no meio. O humano não é gargalo, é feature, e a razão disso fica clara no estágio 4.</p>

{{DIAGRAM:motor-conteudo-pipeline}}

<p>Leia da esquerda pra direita. Cada estágio recebe um artefato do anterior e entrega um novo pro próximo. O loop de baixo é o que dá vida ao motor com o tempo, o que rankeou no estágio 06 retroalimenta o scoring do estágio 02, e o modelo aprende o que merece ser escrito a seguir.</p>

<ol>
  <li><strong>Descoberta.</strong> Um cron diário varre portais médicos, feeds da Agência Brasil Saúde, Google Trends, Google News. Saída, uma lista crua de candidatos.</li>
  <li><strong>Scoring.</strong> Cada candidato recebe três notas, relevância clínica, fit com o catálogo comercial (cursos, produtos, soluções) e buzz (o quanto o tema está subindo). Saída, os top-K do dia.</li>
  <li><strong>Rascunho.</strong> O LLM gera o artigo seção a seção, seguindo um template SEO/AEO que cobre introdução, diagnóstico diferencial, conduta e referências. Saída, rascunho em Markdown.</li>
  <li><strong>Revisão humana.</strong> Um especialista (médico, advogado, engenheiro, dependendo do domínio) valida o técnico, ajusta E-E-A-T e adiciona o CTA comercial. Saída, artigo publicável.</li>
  <li><strong>Publicação.</strong> O post sobe no WordPress (ou equivalente) com schema, meta tags, imagens otimizadas e link interno para páginas canônicas do ecossistema.</li>
  <li><strong>Medição.</strong> A cada artigo, contamos os dias até 1000 cliques orgânicos. Essa é a métrica de rampa, e ela alimenta o scoring do estágio 2 pra priorizar o que já provou performar.</li>
</ol>

<h2>Onde o custo explode (e por que Claude só não é a resposta)</h2>

<p>A tentação é usar o melhor modelo disponível em tudo. Se Claude Opus gera artigo médico decente, por que não rodar Opus em todos os seis estágios? Porque o preço por token escala muito mais rápido que a qualidade marginal.</p>

<p>Um artigo médio de 1200 palavras consome, somando rascunho e revisão adversarial, algo como 8k tokens de entrada e 4k de saída. Multiplica por 30 artigos/mês e você está em 240k in + 120k out. Em Claude Opus, isso custa na casa dos R$ 100/mês só em geração, sem contar triagem, extração, classificação e dedup que também são chamadas de LLM.</p>

<p>O truque é admitir que nem toda tarefa precisa do modelo mais caro. Triagem de fontes é um <em>binary classification problem</em> que um Llama 3.x rodando local resolve com 99% de acurácia. Extração de entidades médicas é tarefa de NER (reconhecimento de entidades nomeadas), campo onde modelos open-source com fine-tune específico (Meditron, por exemplo, que é um Llama treinado em literatura médica) batem modelos generalistas fechados.</p>

<h2>A trinca que funciona hoje, LLM local + DeepSeek + Claude seletivo</h2>

<p>O desenho abaixo é o mapa de roteamento de modelos. Quatro lanes, do mais barato pro mais caro, com as tarefas que pertencem a cada uma.</p>

{{DIAGRAM:motor-conteudo-roteamento}}

<h3>Tier 1, LLM rodando local</h3>

<p>Custo por token, zero. Custo real, hardware (uma máquina com GPU razoável ou mesmo Apple Silicon roda Llama 3.x 70B quantizado sem suar) e um pouco de energia. Vale pra tudo que é repetitivo, de baixa criatividade e alto volume, porque é nessas tarefas que a conta em cloud vira terror.</p>

<p>As tarefas naturais dessa lane são:</p>

<ul>
  <li><strong>Triagem de fontes.</strong> Dado um feed de 200 títulos, filtrar os 20 que merecem virar candidatos. Prompt simples, temperatura baixa, saída estruturada (JSON com score + razão curta).</li>
  <li><strong>Extração NER.</strong> Puxar do corpo de um artigo todos os termos médicos canônicos (doenças, exames, procedimentos, CID). Aqui faz diferença usar um modelo fine-tuned em domínio, caso médico use <a href="https://huggingface.co/epfl-llm/meditron-70b" target="_blank" rel="noopener">Meditron</a>.</li>
  <li><strong>Classificação.</strong> Mapear um candidato pro curso/produto correspondente. Problema de multi-label classification, trivial pra LLM local.</li>
  <li><strong>Dedupe.</strong> Detectar que "Chikungunya surto 2026" e "Vírus Chikungunya avança em SP" são a mesma pauta. Usa embeddings locais (Sentence-Transformers, por exemplo) e similaridade coseno, não precisa nem de LLM geradora.</li>
</ul>

<h3>Tier 2, DeepSeek</h3>

<p>DeepSeek é a surpresa agradável de 2025/2026. <a href="https://api-docs.deepseek.com/" target="_blank" rel="noopener">DeepSeek-V3 Chat</a> custa na ordem de 50x menos por token que Claude Opus pra qualidade de texto que, em teste cego, bate Claude em português brasileiro estruturado. A Reasoner é o modelo de raciocínio, útil pra tarefas que envolvem passo-a-passo.</p>

<p>Lane 2 cobre:</p>

<ul>
  <li><strong>Rascunho do artigo.</strong> Geração seção por seção. Isso é importante, não peça o artigo inteiro de uma vez, peça título, depois introdução, depois cada H2. Dá pra paralelizar, e você controla o tamanho do output por chamada.</li>
  <li><strong>Revisão adversarial.</strong> Depois do rascunho, rode uma segunda chamada com prompt de "revisor crítico" que simula um editor procurando erros. Mesmo modelo, prompt diferente, custo quase dobrado mas qualidade muito superior.</li>
  <li><strong>Meta e snippet.</strong> Title, description, FAQ schema. Tarefa bem delimitada, ideal pra saída JSON curta.</li>
  <li><strong>Resumo executivo.</strong> TL;DR + bullets. Útil pra alimentar o próprio pipeline (os resumos viram input do scoring futuro).</li>
</ul>

<h3>Tier 3, modelo premium (Claude, GPT-5) seletivo</h3>

<p>Aqui mora a disciplina. Premium só entra <strong>quando a métrica prova que vale</strong>. Duas entradas típicas:</p>

<ul>
  <li><strong>Polimento final do top 10% de tráfego.</strong> Artigos que já provaram performance (entraram no top 10% do mês em cliques) recebem um passe extra do premium pra afinar a escrita antes de um boost de internal linking. Custo marginal pequeno porque é seletivo.</li>
  <li><strong>Desempate em casos ambíguos.</strong> Se a chamada do Tier 2 voltar com score de confiança abaixo de um threshold (por exemplo, menos de 0.7 de probabilidade de estar correto em termos clínicos), escalamos automaticamente pro Tier 3. Zero trabalho humano pra decidir, a escalada é condicional.</li>
</ul>

<h3>Lane 4, humano especialista</h3>

<p>Não negociável. Mesmo em domínios menos regulados, um especialista validando antes da publicação é o que separa um motor de conteúdo que rankeia de uma fábrica que queima domínio. No nosso setup, a médica revisora valida o técnico, ajusta E-E-A-T, adiciona o CTA comercial e publica. Tempo médio, 30 minutos por artigo, contra as 3-5 horas do fluxo manual integral.</p>

<h2>Seis truques concretos pra reduzir consumo de tokens em 70%</h2>

<p>Depois de montar o motor, o trabalho seguinte é afinar. Esses são os seis ajustes que mais deslocam a conta final:</p>

<ol>
  <li><strong>Prompt cache.</strong> Anthropic, DeepSeek e OpenAI todos oferecem prompt caching com TTL de 5 a 10 minutos. System prompt longo (2-4k tokens de instruções editoriais) fica cacheado e você só paga 10-20% do valor em chamadas subsequentes. Se o seu pipeline roda em lote de 30 artigos numa janela, isso economiza 70% do input.</li>
  <li><strong>Saída estruturada (JSON schema).</strong> Pedir resposta em JSON com schema definido força o modelo a ser terso. Respostas em prosa livre tendem a 2x-3x o tamanho necessário. Em todas as APIs modernas existe parâmetro de <code>response_format</code>.</li>
  <li><strong>Geração por seção, não whole-article.</strong> Em vez de um prompt gigante pedindo o artigo inteiro, quebre em chamadas menores (intro, H2 #1, H2 #2, conclusão). Você paga por tokens de input a cada chamada, mas ganha controle sobre tamanho de output e consegue paralelizar.</li>
  <li><strong>Retrieval em vez de context stuffing.</strong> Não mande a base de conhecimento inteira pro prompt. Use embeddings locais pra trazer os 5 documentos mais relevantes por chamada. 80% menos input tokens com qualidade igual ou superior.</li>
  <li><strong>Short circuit em confiança alta.</strong> Se o Tier 1 voltou com 0.95 de confiança na triagem, não roda o Tier 2 de verificação. Só escala quando confiança está em zona cinza.</li>
  <li><strong>Limite rígido de max_tokens.</strong> Defina um ceiling realista (por exemplo 1500 tokens por seção de artigo). O modelo respeita e você não paga por conclusões prolixas que o humano iria cortar de qualquer jeito.</li>
</ol>

<h2>O humano, por que o "gargalo" é feature</h2>

<p>Gasta-se muito texto em artigos de AI discutindo como tirar o humano do loop. Eu discordo na raiz. Em domínios regulados (saúde, finanças, direito) ou em qualquer território YMYL (Your Money or Your Life, termo que o Google usa pra flaggar conteúdo que afeta decisões de vida), a assinatura de um especialista é o que separa conteúdo que o Google mantém rankeado de conteúdo que cai em 3 meses.</p>

<p>No nosso teste, 20 artigos gerados por IA + médica versus 20 redigidos só por médica. Avaliação cega por outras médicas, 14 dos 20 com IA preferidos, contra 6 dos 20 só-humano. O ponto aqui não é "IA ganhou", é "IA com médica no loop ganhou". Tirar a médica quebraria o resultado.</p>

<h2>Como medir se está funcionando</h2>

<p>Três métricas. Nenhuma é "artigos por dia", apesar de ser a primeira que o stakeholder vai pedir.</p>

<ol>
  <li><strong>Dias até 1000 cliques orgânicos.</strong> Essa é a rampa. Artigo manual só-humano bate 1k em média em 27 dias. IA + humano bateu em 9 dias no nosso experimento (800 cliques já no dia 9, tendência pra cruzar 1k antes dos 15). Só-IA sem revisão, 19 dias (pior que IA + humano e perto de humano só).</li>
  <li><strong>Preferência em teste cego.</strong> Uma vez por trimestre, produza 20 artigos em cada trilha e avalie com especialistas sem dizer qual foi como. Se a trilha do motor não estiver acima de 60%, alguma coisa regrediu.</li>
  <li><strong>Tempo humano por artigo.</strong> Proxy de UX da ferramenta de revisão. No nosso caso caiu de 4h (fluxo manual integral) para 30 minutos (revisão do rascunho do motor). Se esse número começar a subir, a ferramenta de revisão precisa de amor.</li>
</ol>

<h2>O que reaproveitar do seu lado e o que construir</h2>

<p>Se você está começando do zero, a ordem que minimiza risco é:</p>

<ol>
  <li><strong>Estágio 2 (scoring) manual + estágio 3 (rascunho) com DeepSeek.</strong> Mais barato possível, prova o conceito. Humano escolhe o tema, IA rascunha, humano revisa.</li>
  <li><strong>Automatize o estágio 1 (descoberta).</strong> Dez scripts Python em N feeds e Trends resolvem o básico.</li>
  <li><strong>Adicione o Tier 1 (LLM local).</strong> Primeiro pra triagem e classificação, depois NER e dedupe. Aqui a conta de API cai significativamente.</li>
  <li><strong>Instrumente o estágio 6 (medição).</strong> Sem medir, você está voando cego e qualquer otimização é chutadeira.</li>
  <li><strong>Adicione Tier 3 seletivo por último.</strong> Quando você tem dados de performance dos artigos, consegue identificar o top 10% que vale Claude em cima.</li>
</ol>

<p><em>Projeto relacionado: <a href="/projetos/pipeline-editorial-ia-revisao-medica/">Pipeline editorial com IA e revisão médica</a>, onde esse motor roda em produção no Sanar Medicina com Claude e DeepSeek</em>.</p>`,
    seo_title: 'Motor de conteúdo com IA local e DeepSeek',
    seo_description:
      'Pipeline editorial em 6 estágios com roteamento por custo, LLM local pra triagem, DeepSeek pro rascunho e Claude só no top 10%. Humano como feature.',
    keywords: [
      'motor de geração de conteúdo',
      'LLM local Llama Meditron',
      'DeepSeek V3',
      'roteamento de modelos',
      'custo de tokens LLM',
      'E-E-A-T pipeline editorial',
    ],
  },

  'google-ads-perde-atribuicao-pixel-x': {
    title:
      'Por que o Google Ads perde atribuição quando você instala o Pixel do X (e como auditar em 5 minutos)',
    excerpt:
      'O pixel do X reescreve a URL via history.replaceState, engole UTM e gclid, e o Google Ads perde o rastro no checkout. Três passos pra detectar isso sem abrir DevTools.',
    tag: 'Martech',
    published_at: '2026-04-20',
    read_time_min: 6,
    body: `<p>Toda vez que um cliente me chama dizendo "o Google Ads parou de atribuir conversão sem a gente mudar nada nas campanhas", a primeira coisa que eu pergunto é se alguém instalou um pixel novo nos últimos 30 dias. A resposta quase sempre é sim, e a suspeita número um é o pixel do X (antigo Twitter).</p>

<p>O problema não é o pixel em si. É o que ele faz com a URL quando ele aterrissa na página.</p>

<h2>O mecanismo do bug</h2>

<p>O pixel do X injeta parâmetros próprios (<code>tw_source</code>, <code>tw_adid</code> e similares) via <code>history.replaceState()</code>. Essa chamada substitui a URL do browser <strong>sem recarregar</strong>, e é aí que mora o drama: se o pixel não for cuidadoso em preservar a query string existente, ele reescreve tudo, incluindo <code>utm_*</code> e <code>gclid</code>.</p>

<p>A maioria das tags de analytics (Google Ads, GA4, HubSpot) lê esses parâmetros na hora do submit de formulário ou do checkout, não no pageload. Se o pixel do X disparou antes, quando o Google Ads for ler, <code>gclid</code> já era. A atribuição cai pra "direct" ou pra "other", e o dashboard do anunciante começa a mostrar uma narrativa errada.</p>

<h2>Como auditar em 5 minutos</h2>

<p>Sem precisar mexer em código:</p>

<ol>
  <li><strong>Acesse seu site com um UTM + gclid manualmente.</strong> Algo como <code>?utm_source=test&amp;gclid=debug123</code> na barra de endereço.</li>
  <li><strong>Espere 3 segundos.</strong> Todos os pixels já dispararam.</li>
  <li><strong>Copie a URL da barra de endereço.</strong> Se o <code>gclid=debug123</code> ainda estiver lá, você passou. Se sumiu ou foi trocado por <code>tw_*</code>, o pixel do X sobrescreveu.</li>
</ol>

<p>Esse teste leva mais tempo pra abrir a janela anônima do que pra rodar. Funciona em qualquer stack (Shopify, WordPress, Next.js, Webflow) porque o bug é na camada de browser, não no backend.</p>

<h2>A correção em uma linha</h2>

<p>A correção longa está num case que publiquei sobre uma loja DTC de vestuário onde apliquei esse fix, mas o princípio é simples: um <em>guard script</em> carregado antes de qualquer pixel, via GTM no início do <code>&lt;head&gt;</code>, que persiste os parâmetros críticos em <code>sessionStorage</code> e intercepta chamadas a <code>history.pushState</code>/<code>replaceState</code> pra reaplicar.</p>

<pre><code class="language-javascript">const CRITICAL = ['utm_source', 'utm_medium', 'utm_campaign',
                  'utm_content', 'utm_term', 'gclid', 'fbclid'];
// ...captura, persiste, e restaura após cada replaceState de terceiros</code></pre>

<p>No caso da loja que audito, isso recuperou 100% da atribuição do Google Ads. O Meta, o X e o Google passaram a coexistir sem conflito.</p>

<h2>Por que isso não aparece no lighthouse ou no tag assistant</h2>

<p>O Tag Assistant valida se a tag disparou, não se ela deixou a página num estado saudável pra próxima tag. O Lighthouse mede performance, não atribuição. Esse tipo de colisão só aparece quando você <strong>compara o dashboard antes e depois</strong>, e nessa altura o estrago já rodou por semanas.</p>

<p>Auditoria cross-pixel precisa entrar no checklist de QA sempre que uma tag nova sobe. Não é paranoia; é higiene.</p>

<p><em>Projeto relacionado: <a href="/projetos/fix-pixel-x-google-ads-shopify/">Fix de colisão de pixel Twitter/X vs Google Ads em Shopify</a></em>.</p>`,
    seo_title: 'Google Ads perde atribuição com o Pixel do X',
    seo_description:
      'O pixel do X reescreve a URL via history.replaceState e engole UTM e gclid. Como auditar em 5 minutos e o guard script que resolve o conflito.',
    keywords: [
      'pixel do X sobrescrevendo UTM',
      'Google Ads perdendo atribuição',
      'gclid sumindo no checkout',
      'history.replaceState conflito',
      'auditoria martech',
    ],
  },

  'internal-linking-semantico-sem-plugin-pgvector': {
    title:
      'Internal linking semântico sem plugin, da taxonomia manual ao pgvector escolhendo por volume',
    excerpt:
      'Plugin de "related posts" resolve até certo ponto. Depois dele, existe um degrau de taxonomia manual, um de co-ocorrência, e um de embeddings. Escolher bem depende do volume de conteúdo que você tem.',
    tag: 'SEO Técnico',
    published_at: '2026-04-15',
    read_time_min: 8,
    body: `<p>A pergunta que todo time de conteúdo faz em algum momento é "como a gente melhora internal linking em escala". A resposta padrão é instalar um plugin de "related posts" e seguir o dia. Funciona até certo ponto, e o ponto é bem mais cedo do que as pessoas imaginam.</p>

<p>Existem quatro degraus de qualidade em linkagem interna. Cada degrau tem um custo de implementação e um volume mínimo de conteúdo a partir do qual ele começa a valer a pena.</p>

<h2>Degrau 1, plugin de related por tag</h2>

<p>Funciona até ~200 posts. O matcher olha as tags em comum e sugere até N artigos. Problemas conhecidos: tags mal mantidas destroem o algoritmo, artigos novos demoram pra serem sugeridos, e nunca linka entre tipos de conteúdo (blog não linka pra página de categoria, por exemplo).</p>

<p>Custo zero. Ganho marginal. Suficiente pra blog pequeno.</p>

<h2>Degrau 2, taxonomia manual mantida</h2>

<p>A partir de ~500 posts, o time editorial senta e define 20 a 40 entidades canônicas (conceitos centrais do domínio), marca manualmente cada post com as entidades relevantes, e um query simples puxa vizinhos por sobreposição de entidades.</p>

<p>O ganho aqui vem da disciplina, não do algoritmo. O problema é manutenção: quem garante que o novo redator vai marcar direito? Custos reais de processo, e é o degrau onde a maioria dos projetos morre por falta de governança.</p>

<h2>Degrau 3, co-ocorrência de termos</h2>

<p>Um script noturno processa o corpo de cada post, extrai os N substantivos mais frequentes (stopwords removidas, stemming aplicado), e monta uma matriz de co-ocorrência. Dois posts são similares se compartilham termos raros (TF-IDF alto).</p>

<p>Funciona bem a partir de ~1000 posts. Não exige NER nem embeddings. Capta relações óbvias ("diabetes" e "hemoglobina glicada" aparecem juntas em vários posts, logo são similares), mas falha em sinônimos ("infarto agudo do miocárdio" e "ataque cardíaco").</p>

<h2>Degrau 4, embeddings vetoriais</h2>

<p>Aqui você precisa ter (a) volume que justifique, (b) times que publicam mais rápido do que humanos conseguem classificar, (c) múltiplas properties com silos de SEO. A partir de ~2500 documentos em um domínio vertical, embeddings começam a entregar o que nenhum dos degraus anteriores entrega, que é <strong>similaridade por significado</strong>.</p>

<p>"Insulina basal" e "hemoglobina glicada" viram vetores próximos mesmo sem palavra em comum. "Hiperplasia adrenal congênita" liga pro CID-10 E25 sem que ninguém tenha marcado essa relação.</p>

<p>O custo sobe: crawler de ingest, embedding API, banco vetorial (pgvector é o que uso hoje), shortcode de renderização com cache, diversificação por tipo de propriedade pra não virar câmara de eco. Mas o retorno é não-linear quando o domínio é rico em entidades, que é o caso típico de EdTech médica, jurídico e e-commerce multi-marca.</p>

<h2>O framework de decisão</h2>

<ul>
  <li>&lt;200 posts: plugin de related. Não otimize prematuramente.</li>
  <li>200–500: taxonomia manual <em>se</em> você tem governança editorial.</li>
  <li>500–2500: co-ocorrência. Retorno alto pro custo de implementação.</li>
  <li>&gt;2500 ou múltiplas properties: embeddings. É onde o ROI paga a complexidade.</li>
</ul>

<h2>O que ninguém fala sobre embeddings</h2>

<p>Embedding é só metade da solução. A outra metade é diversificação. Se você buscar os top-K vizinhos de um post, os 10 mais próximos vão ser quase todos do mesmo tipo (se é blog, vão ser outros blogs). Isso cria câmara de eco e não ajuda o usuário a descobrir o ecossistema.</p>

<p>No engine que rodo pro Sanar, o resultado final mistura: 1 CID, 1 Exame, 1 Ferramenta, 1 Curso. Quatro vizinhos, cada um de uma propriedade diferente. Isso é o que faz o usuário sair da leitura com quatro páginas vistas em vez de uma.</p>

<p><em>Projeto relacionado: <a href="/projetos/linkagem-semantica-embeddings-sanar/">Linkagem semântica por embeddings em 5 propriedades Sanar</a></em>.</p>`,
    seo_title: 'Internal linking semântico sem plugin',
    seo_description:
      'Quatro degraus de linkagem interna, do plugin de related ao pgvector. Framework de decisão por volume e o que ninguém fala sobre embeddings.',
    keywords: [
      'internal linking semântico',
      'pgvector related posts',
      'embeddings SEO',
      'taxonomia manual vs automática',
      'AEO topical authority',
    ],
  },

  'pipeline-editorial-ia-revisor-humano-gargalo-saudavel': {
    title:
      'Pipeline editorial com IA que não vira fábrica de spam, o papel do revisor humano como gargalo saudável',
    excerpt:
      'A promessa de "1000 artigos por dia com IA" é o jeito mais rápido de queimar domínio no Google. O que eu aprendi montando pipeline médico com revisão humana obrigatória.',
    tag: 'Automação com LLM',
    published_at: '2026-04-10',
    read_time_min: 7,
    body: `<p>Toda proposta de "geração de conteúdo em escala com IA" que passou pela minha mesa em 2025 tinha a mesma premissa implícita, que era tirar o humano do loop pra destravar volume. Todas elas, sem exceção, subestimavam duas coisas: o custo de erro em domínios regulados e a velocidade com que o Google aprendeu a detectar conteúdo sem revisão.</p>

<p>O pipeline que rodo hoje numa plataforma de educação médica (#1 do Brasil em B2C) publica artigos gerados com Claude e DeepSeek. <strong>Cada artigo passa por um médico revisor antes de ir pro ar.</strong> Isso não é concessão à auditoria, é decisão de arquitetura. Deixa eu explicar por quê.</p>

<h2>O gargalo não é o gargalo</h2>

<p>Quando você instrumenta um pipeline de 6 horas por artigo pra rodar em 35 minutos, fica tentado a concluir que o revisor humano virou o novo gargalo. Virou, mas é o gargalo certo.</p>

<p>Três razões concretas:</p>

<ol>
  <li><strong>Consequência clínica.</strong> Em conteúdo médico, um erro de dose pediátrica não é typo, é dano. Nenhum modelo de 2026 é confiável o suficiente pra assinar protocolo clínico sem revisão.</li>
  <li><strong>E-E-A-T ainda é real.</strong> Google penaliza conteúdo que não tem autoria visível e verificável em YMYL (Your Money Your Life). "Revisado por Dr. X, CRM 12345" é o único sinal que sobreviveu a todas as updates de 2024 e 2025.</li>
  <li><strong>Distribuição de trabalho.</strong> Com revisão obrigatória, o time editorial parou de escrever do zero e começou a auditar, editar e publicar. Um editor médico passou a cobrir 20 artigos por semana em vez de 3. O gargalo se deslocou, mas a capacidade total subiu.</li>
</ol>

<h2>Arquitetura em 3 camadas</h2>

<p>A separação que uso é bem pragmática:</p>

<ul>
  <li><strong>Camada 1, briefing estruturado.</strong> Um radar editorial no Notion captura o tema, o ângulo, a fonte primária, o CID ou exame relacionado. O briefing é o primeiro momento de controle humano, <em>antes</em> do modelo escrever.</li>
  <li><strong>Camada 2, geração adversarial.</strong> Claude gera um draft. DeepSeek gera uma revisão adversarial (simulando um revisor crítico). A Claude faz o merge. É caro em token, mas barato comparado ao custo de um erro publicado.</li>
  <li><strong>Camada 3, revisão médica obrigatória.</strong> CPT customizado no WordPress com post status próprio. Só sai do rascunho quando um usuário com role <code>medical_reviewer</code> aprova.</li>
</ul>

<h2>O que muda quando você assume a revisão como feature</h2>

<p>Assumir revisão como parte do pipeline (não como "etapa manual chata a ser minimizada") muda três decisões de produto:</p>

<p><strong>1. O modelo otimiza pra ser auditável, não pra ser criativo.</strong> Prompts pedem estrutura explícita (contexto, diagnóstico diferencial, conduta, referências), facilitando a leitura do revisor. Artigo bonito que não se audita em 10 minutos é artigo ruim, independentemente da prosa.</p>

<p><strong>2. A UX do revisor é produto.</strong> Investimos em highlighting de referências, diff visual entre draft e revisão adversarial, e atalho de teclado pra aprovar. Aprovação média caiu de 18 minutos pra 6.</p>

<p><strong>3. Métricas mudam.</strong> Em vez de "artigos por dia", medimos "aprovados sem edição" (proxy de qualidade do modelo) e "tempo médio de revisão" (proxy de UX). Volume é consequência.</p>

<h2>O teste cego</h2>

<p>Antes de publicar um artigo gerado pelo pipeline, fizemos um teste com 30 editores-médicos (pares do revisor). Dois artigos, mesmo tema, um gerado pelo pipeline e outro escrito por um humano experiente. 70% dos editores preferiram o gerado pelo pipeline.</p>

<p>Esse número só fez sentido porque o revisor ficou no loop. Sem revisor, seria 70% preferindo o pipeline e 100% do SEO desmoronando em 3 meses.</p>

<p><em>Projeto relacionado: <a href="/projetos/pipeline-editorial-ia-revisao-medica/">Pipeline editorial com IA e revisão médica</a></em>.</p>`,
    seo_title: 'Pipeline editorial com IA sem virar spam',
    seo_description:
      'Claude e DeepSeek com revisão médica obrigatória. Por que o revisor humano é feature de produto, não gargalo a ser eliminado.',
    keywords: [
      'geração de conteúdo com IA',
      'pipeline editorial com LLM',
      'revisão humana no loop',
      'E-E-A-T YMYL',
      'Claude DeepSeek conteúdo médico',
    ],
  },

  'importer-idempotente-php-rodar-n-vezes': {
    title:
      'Importer idempotente em PHP, por que seu script deveria poder rodar N vezes sem medo',
    excerpt:
      'A diferença entre um script que "funciona no primeiro run" e um script que você roda com confiança em produção é uma linha de hash. E vai muito além de WordPress.',
    tag: 'Plugin WP',
    published_at: '2026-04-05',
    read_time_min: 6,
    body: `<p>Todo dev que já importou planilha em produção conhece o frio na espinha do segundo run. Você rodou o script, 114 páginas foram criadas, aparentemente deu certo. Aí o time de conteúdo pede pra você rodar de novo porque mudou uma linha. Você cruza os dedos e espera que o script não duplique tudo.</p>

<p>Esse frio na espinha é sintoma de um script que não foi projetado pra idempotência. E idempotência não é detalhe, é a propriedade que separa um script de uso único de uma ferramenta operacional.</p>

<h2>O que significa idempotente</h2>

<p>Um script idempotente pode ser executado N vezes com o mesmo input e o estado final é igual ao de uma única execução. Se rodar 1 vez ou 50 vezes, o banco fica do mesmo jeito.</p>

<p>Na prática, isso significa que o script precisa <strong>detectar o que já foi feito</strong> antes de decidir o que fazer. Três estratégias em ordem de robustez:</p>

<h3>1. Chave natural no banco</h3>

<p>Se você está importando pra uma tabela com constraint de unicidade (ou um CPT do WordPress com <code>post_name</code> único por tipo), use <code>INSERT ... ON DUPLICATE KEY UPDATE</code> ou <code>wp_insert_post</code> com <code>ID</code> resolvido via <code>get_page_by_path</code>. Custo: mínimo. Ganho: você não duplica.</p>

<p>Armadilha: isso não protege contra <em>updates desnecessários</em>. Se você rodar o script toda noite com a mesma planilha, vai reescrever 114 posts intocados toda noite.</p>

<h3>2. Hash da linha como checksum</h3>

<p>Aqui mora o truque. Antes de atualizar um post, você calcula um hash da linha de entrada (md5, sha1, não importa, desde que seja determinístico) e compara com o hash que foi persistido na última importação. Se for igual, pula. Se for diferente, atualiza e persiste o novo hash.</p>

<pre><code class="language-php">\$hash = md5( serialize( \$row ) );
\$existing = get_page_by_path( \$row['slug'], OBJECT, 'exame_medico' );

if ( \$existing && get_post_meta( \$existing-&gt;ID, '_source_hash', true ) === \$hash ) {
    continue; // Nenhuma mudança, pula
}

\$id = wp_insert_post( \$this-&gt;map_fields( \$row, \$existing-&gt;ID ?? 0 ) );
update_post_meta( \$id, '_source_hash', \$hash );</code></pre>

<p>Custo: 1 chamada extra ao meta por linha. Ganho: você pode rodar o script N vezes e só mexe no que de fato mudou.</p>

<h3>3. Log de execução auditável</h3>

<p>Pra scripts críticos, eu persisto em uma tabela própria cada execução: id, timestamp, total_rows, rows_inserted, rows_updated, rows_skipped, rows_failed. Isso vira auditoria e também vira debug quando o time reclama que "não importou direito".</p>

<h2>Por que isso importa fora do WordPress</h2>

<p>O mesmo princípio aparece em:</p>

<ul>
  <li><strong>ETL.</strong> Reprocessar um batch do S3 não pode duplicar linhas no data warehouse.</li>
  <li><strong>Migração de dados.</strong> Você vai rodar o script em dev, em staging e em produção. Preferencialmente com o mesmo script.</li>
  <li><strong>Webhooks.</strong> Retries acontecem. Se seu endpoint não for idempotente, você vai cobrar duas vezes o cliente.</li>
  <li><strong>CI/CD.</strong> Migrações de banco (rails, django, laravel) são idempotentes por design, com hash de versão. Isso não é coincidência, é a mesma ideia.</li>
</ul>

<h2>O teste que todo importer deveria passar</h2>

<p>Antes de considerar qualquer importer "pronto", rode ele duas vezes seguidas e compare o estado do banco. Se o diff for diferente de zero, ele não é idempotente. Se for zero, você acabou de eliminar metade dos bugs de produção que teria daqui a 3 meses.</p>

<p><em>Projetos relacionados: <a href="/projetos/arquitetura-conteudo-scaffold-php-import/">Arquitetura de conteúdo e scaffold PHP para import em escala</a> e <a href="/projetos/plugin-wordpress-fix-timezone-utc/">Plugin WordPress com fix de timezone (UTC)</a></em>.</p>`,
    seo_title: 'Importer idempotente em PHP, rodar N vezes',
    seo_description:
      'Três estratégias pra tornar um importer idempotente (chave natural, hash de linha, log auditável) e como eliminar metade dos bugs de produção.',
    keywords: [
      'importer idempotente PHP',
      'hash checksum importação',
      'wp-cli scaffold',
      'ETL WordPress',
      'PHP boas práticas backend',
    ],
  },

  'core-web-vitals-wordpress-sem-plugin-cache': {
    title: 'Core Web Vitals verdes em WordPress sem plugin de cache',
    excerpt:
      'Plugin de cache é analgésico. Corta a dor por um tempo, mas o problema estrutural continua lá. O que de fato move LCP, INP e CLS em WordPress quando você para de terceirizar a decisão.',
    tag: 'Front-end',
    published_at: '2026-03-28',
    read_time_min: 9,
    body: `<p>A pergunta mais comum que recebo de donos de site WordPress é "qual plugin de cache você recomenda". A resposta honesta decepciona, que é "nenhum, até a gente entender por que seu site está lento".</p>

<p>Plugin de cache mascara sintoma. Se o seu LCP é 4 segundos sem cache e 1,8 segundo com cache, o site continua estruturalmente pesado, só que escondido atrás de uma camada de HTML estático. Na primeira visita de um usuário novo (cache miss), os 4 segundos voltam. No Google CrUX, essas visitas pesam.</p>

<p>O caminho é mais longo, mas entrega LCP estável independente de cache. Cinco intervenções, em ordem de ROI.</p>

<h2>1. Budget de imagem na pasta uploads</h2>

<p>A primeira auditoria que rodo em qualquer WordPress lento é <code>find wp-content/uploads -name "*.jpg" -size +300k</code>. Quase sempre aparecem dezenas de imagens de 2 a 5 MB subidas direto do celular, sem compressão, sem redimensionamento.</p>

<p>Intervenção: ativar geração automática de AVIF e WebP (o próprio core do WP 6.5+ faz isso), definir tamanhos de imagem no <code>functions.php</code> que cobrem os breakpoints reais do tema (não os 7 defaults do WP), e forçar <code>decoding="async"</code> + <code>loading="lazy"</code> em todas as imagens abaixo da fold.</p>

<p>Resultado típico: LCP cai 30 a 40%. Zero cache envolvido.</p>

<h2>2. Critical CSS inline no head</h2>

<p>Todo WordPress carrega um <code>style.css</code> do tema via <code>&lt;link rel="stylesheet"&gt;</code>. Esse link bloqueia a renderização até baixar e parsear o CSS inteiro. Se seu tema tem 80 KB de CSS, você acabou de pagar ~150ms de LCP antes mesmo de começar.</p>

<p>Intervenção: extrair o CSS crítico (o que é visível na primeira dobra) com <code>critical</code> ou <code>penthouse</code> no build, inline-ar no <code>&lt;head&gt;</code>, e carregar o resto com <code>media="print" onload="this.media='all'"</code>. Trabalho de uma tarde. Ganho permanente.</p>

<h2>3. JavaScript que não é crítico, deferido ou removido</h2>

<p>WordPress clássico carrega jQuery por default, e a maioria dos plugins empilha JS no <code>wp_head</code>. Resultado: 300 a 800 KB de JS antes da primeira renderização.</p>

<p>Regra prática: <strong>nenhum JS no <code>&lt;head&gt;</code> deve ser síncrono.</strong> Ou é <code>async</code> (GTM, analytics), ou é <code>defer</code> (scripts do tema), ou é removido. Pra plugins barulhentos, <code>wp_dequeue_script</code> em páginas que não precisam deles (por exemplo, formulários de contato só carregados em <code>/contato</code>).</p>

<p>Ganho: INP cai dramaticamente. Main thread livre pra o que importa.</p>

<h2>4. Font loading disciplinado</h2>

<p>FOIT (Flash of Invisible Text) é um dos maiores atrasos em LCP. Resolve com <code>font-display: swap</code> no <code>@font-face</code> e <code>&lt;link rel="preload" as="font" type="font/woff2" crossorigin&gt;</code> pra fonte crítica do primeiro viewport.</p>

<p>Bônus: usar a system font stack na base (<code>-apple-system, BlinkMacSystemFont, 'Segoe UI', ...</code>) elimina o problema inteiro. É o que faço no portfólio. LCP abaixo de 1s em 3G.</p>

<h2>5. Eliminar redirecionamentos na homepage</h2>

<p>Conferir com <code>curl -IL https://seudominio.com</code>. Cada 301/302 no caminho pra homepage é um RTT. HTTP → HTTPS, não-www → www, trailing slash: esses três juntos podem adicionar 500ms. Configurar o servidor pra responder direto na URL canônica (uma única linha de nginx/htaccess) vale mais que qualquer plugin de cache.</p>

<h2>Por que cache entra por último (e às vezes não entra)</h2>

<p>Depois das cinco intervenções acima, se o site ainda está lento, aí faz sentido considerar cache. Mas na maioria dos projetos que audito, os cinco passos acima já deixam o Lighthouse verde e o CrUX estabilizado. Cache vira cereja.</p>

<p>A razão pela qual isso não é senso comum é simples, que é a indústria de plugins de cache ganha vendendo o atalho. O atalho funciona até a primeira falha de cache, e aí o problema volta, só que mais difícil de debugar porque agora tem uma camada a mais no caminho.</p>

<p>Performance em WordPress não exige framework novo nem stack exótica. Exige disciplina com o que o core do WP já oferece e auditoria do que o tema e os plugins estão empilhando no caminho. O resto é cache camuflando sintoma.</p>`,
    seo_title: 'Core Web Vitals verdes em WordPress',
    seo_description:
      'Cinco intervenções em ordem de ROI pra LCP, INP e CLS verdes em WordPress sem plugin de cache, com budget de imagem, critical CSS e JS deferido.',
    keywords: [
      'Core Web Vitals WordPress',
      'LCP sem plugin de cache',
      'performance WordPress',
      'critical CSS inline',
      'INP WordPress',
    ],
  },
};

export function postSlugs(): string[] {
  return Object.keys(posts);
}

export function allPostsSortedByDate(): { slug: string; data: Post }[] {
  return Object.entries(posts)
    .map(([slug, data]) => ({ slug, data }))
    .sort((a, b) => b.data.published_at.localeCompare(a.data.published_at));
}
