import type { Post } from './types';

export const posts: Record<string, Post> = {
  'geo-guia-completo-baseado-em-evidencias': {
    title: 'GEO (Generative Engine Optimization): o guia baseado em evidências',
    excerpt:
      'O mega guia de GEO sem hype: o que os papers (KDD 2024, AutoGEO, GEO-16) e os dados de mercado (Ahrefs, Semrush, Pew, SparkToro) realmente provam sobre ser citado por ChatGPT e Google AI Overviews. Mecanismos, números datados, o que é mito e um playbook priorizado por nível de evidência.',
    tag: 'SEO Técnico',
    published_at: '2026-06-02',
    read_time_min: 34,
    body: `<p><strong>Resposta curta:</strong> GEO (Generative Engine Optimization) é otimizar conteúdo para ser citado nas respostas geradas por IA, como AI Overviews do Google e ChatGPT. A evidência de 2024 a 2026 converge num ponto desconfortável pra quem vende GEO como disciplina nova: na maior parte, <strong>ainda é SEO</strong>. O que torna sua página <em>elegível</em> a aparecer é SEO técnico padrão (estar indexada e poder ganhar um snippet). O que faz ela ser <em>selecionada e citada</em> é qualidade, estrutura extraível, frescor relativo, autoridade e presença em fontes de terceiros. Quase nenhuma tática "exclusiva de IA" (llms.txt, reescrita para LLM) tem suporte empírico.</p>

<p><strong>Resposta detalhada:</strong> este guia separa o que tem evidência do que é folclore. Cada número aqui veio de fonte primária (paper, documentação oficial de plataforma) ou de estudo de mercado de grande amostra, e está <strong>datado</strong>, porque o campo muda mês a mês. Onde a evidência é fraca, contestada ou ausente, eu sinalizo. É um guia longo de propósito, pra ser referência. Se você quer o passo a passo de <em>como escrever</em> um post citável, o atalho está no <a href="/blog/manual-aeo-geo-escrever-post-citado-llm/">Manual de AEO/GEO</a>, que é o companheiro prático deste aqui.</p>

<h2>O que é GEO, de onde veio o termo</h2>

<p>GEO foi formalizado em <strong>2024</strong> por um paper acadêmico: <a href="https://arxiv.org/abs/2311.09735">"GEO: Generative Engine Optimization", de Aggarwal et al., apresentado no KDD 2024</a> (a principal conferência de mineração de dados, da ACM). O paper define GEO como "o primeiro paradigma para ajudar criadores a melhorar a visibilidade do seu conteúdo nas respostas de motores generativos", e define motor generativo como um sistema que <strong>sintetiza informação de várias fontes e resume via LLM</strong>, em vez de devolver dez links azuis.</p>

<p>Vale separar do barulho de mercado. Você vai ver os acrônimos <strong>GEO</strong> (Generative Engine Optimization), <strong>AEO</strong> (Answer Engine Optimization) e até <strong>AI SEO</strong> usados quase como sinônimos. A diferença é mais de branding de agência do que de substância. O Google, inclusive, trata a sopa de letrinhas com desconfiança, e eu volto a isso na seção de ceticismo. Para este guia: GEO é otimizar pra ser citado por motores que geram resposta, e os dois que mais importam em volume são <strong>Google AI Overviews / AI Mode</strong> e <strong>ChatGPT (search)</strong>, com Perplexity e Gemini logo atrás.</p>

<h3>Uma linha do tempo rápida</h3>

<p>Pra situar onde estamos: o paper que cunhou GEO saiu em <strong>novembro de 2023</strong> (a versão final, no KDD, é de 2024). Em <strong>maio de 2024</strong> o Google começou a liberar os AI Overviews em larga escala nos EUA. Ao longo de <strong>2025</strong> vieram os grandes estudos de impacto (Pew, Ahrefs, Semrush, SparkToro) que transformaram a discussão de especulação em dado. E em <strong>2026</strong> o campo entrou numa fase de consolidação e ceticismo saudável, com o próprio Google publicando material pra dizer que "AEO/GEO ainda é SEO" e desencorajar táticas mágicas. Esse arco, de hype a evidência, é exatamente o que este guia tenta refletir.</p>

<h2>O dado que iniciou a corrida: a busca virou zero-click</h2>

<p>A razão de GEO existir como pauta é simples: a resposta gerada por IA fica entre o usuário e o seu site, e ela canibaliza o clique. Isso parou de ser teoria.</p>

<p>O estudo mais limpo é do <a href="https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/">Pew Research (julho de 2025)</a>, porque mede comportamento real de navegação, não opinião: 900 adultos nos EUA, quase 69 mil buscas reais. Quando aparece um AI Overview na página, o usuário clica num resultado orgânico em <strong>8% das visitas, contra 15% quando não há resumo de IA</strong>, ou seja, cerca de metade. Clica num link <em>dentro</em> do resumo em apenas <strong>1%</strong>. E encerra a sessão de navegação em <strong>26% das páginas com AI Overview, contra 16%</strong> das páginas só com resultados tradicionais. Esse é o comportamento "zero-click": a pessoa teve a resposta e foi embora.</p>

<p>Do lado de quem rankeia, a <a href="https://ahrefs.com/blog/ai-overviews-reduce-clicks/">Ahrefs analisou 300 mil keywords</a> e achou que a presença de um AI Overview correlaciona com <strong>CTR 34,5% menor</strong> na posição 1 (comparando março de 2024, pré-rollout nos EUA, com março de 2025). Em 2026 a própria Ahrefs revisou esse número pra cerca de <strong>58%</strong> de queda. Dois avisos importantes aqui, e eles valem pro guia inteiro: primeiro, é <strong>correlação</strong>, não causa isolada, o Google Search Console não deixa separar clique de AI Overview do resto, então o efeito é inferido. Segundo, é dado de <em>vendor</em> de SEO, robusto em amostra mas com interesse comercial. O Google contesta publicamente tanto o Pew quanto a tese de queda de CTR, embora até hoje não tenha apresentado números próprios pra rebater.</p>

<p>O contrapeso otimista: o tráfego que <em>vem</em> dos assistentes cresce rápido. A <a href="https://www.semrush.com/blog/chatgpt-search-insights/">Semrush mediu +206% de crescimento ano a ano</a> nos referrals do ChatGPT pra sites (comparando janeiro de 2025 a janeiro de 2026, sobre 1 bilhão de linhas de clickstream). É um número grande, mas sobre uma base baixíssima (o ChatGPT search mal tinha lançado no início de 2025), e o volume absoluto ainda é pequeno perto da busca tradicional. A leitura honesta é: o canal existe, está crescendo, e ainda é minoritário.</p>

<p>Outras leituras reforçam a tendência sem encerrar a controvérsia. A Similarweb apontou crescimento de referrals de IA na casa de três dígitos percentuais em 2025; a Digiday reportou que alguns publishers associaram os AI Overviews a uma queda de cerca de 25% no tráfego de referência. Some tudo e aparece uma assimetria incômoda: o lado da <em>perda</em> (cliques que somem do orgânico quando a IA já respondeu) é grande e imediato; o lado do <em>ganho</em> (tráfego que vem dos assistentes) é real e cresce rápido, mas ainda é pequeno em volume absoluto. Pra maioria dos sites em 2026, a conta líquida de tráfego direto de IA ainda é modesta. O motivo de fazer GEO, então, não é um pico de sessões no analytics no mês que vem, é presença e autoridade na superfície onde as pessoas estão, cada vez mais, buscando, mais a proteção da marca contra o cenário em que o concorrente é citado e você não.</p>

<p>Há uma mudança de mentalidade embutida aqui. Por anos, a métrica final do SEO foi o clique. Com respostas geradas, parte do valor passa a ser <strong>aparecer na resposta</strong> mesmo sem clique, como menção, recomendação ou citação que constrói lembrança e confiança de marca. Não dá pra medir isso direito com a régua antiga de sessões, e fingir que dá é parte do problema. O enquadramento mais útil pra 2026 é separar duas metas: <strong>tráfego</strong> (que ainda vem majoritariamente do orgânico clássico e do clique) e <strong>presença em IA</strong> (ser a fonte que o assistente escolhe citar). As táticas pra alcançar as duas se sobrepõem bastante, é por isso que "ainda é SEO" faz sentido, mas as metas e as métricas não são a mesma coisa, e tratá-las como se fossem leva a relatórios que não explicam o que está acontecendo. Quem entende essa separação para de entrar em pânico com a queda de CTR e começa a perguntar a pergunta certa: estou sendo a resposta, ou só mais um link que ninguém abre?</p>

<h2>Como os motores realmente escolhem e citam fontes</h2>

<p>Antes de qualquer tática, você precisa entender o mecanismo, porque ele desmonta metade das "dicas de GEO" que circulam. Os motores generativos não inventam citações do nada: eles fazem <strong>retrieval</strong> (recuperam documentos) e <strong>grounding</strong> (ancoram a resposta nesses documentos) em cima de um índice de busca, e na prática esse índice é o mesmo da busca tradicional ou muito parecido.</p>

<p>Em termos simples, o que acontece por baixo é um <strong>RAG</strong> (Retrieval-Augmented Generation): em vez de responder só com o que "lembra" do treino, o modelo primeiro <em>busca</em> documentos relevantes, e depois <em>gera</em> a resposta ancorada neles, citando de onde tirou. Isso tem uma implicação que muda a estratégia inteira: pra ser citado, você não precisa "estar no modelo" (ter sido usado no treino), precisa <strong>estar recuperável no momento da pergunta</strong>. Ou seja, ser indexável e relevante vale mais do que qualquer coisa relacionada a treino. É também por isso que conteúdo novo, que nunca poderia estar num modelo treinado meses atrás, aparece nas respostas: ele entra pela porta do retrieval, não pela do treino.</p>

<h3>Google AI Overviews e AI Mode usam query fan-out</h3>

<p>O mecanismo central do Google se chama <strong>query fan-out</strong>. Em vez de buscar a sua pergunta literal, o sistema a <strong>decompõe em várias subconsultas e dispara todas em paralelo</strong>, depois junta os resultados e sintetiza. Isso não é especulação de SEO: está descrito no <a href="https://blog.google/products-and-platforms/products/search/google-search-ai-mode-update/">blog oficial do Google</a> ("AI Mode uses our query fan-out technique, breaking down your question into subtopics and issuing a multitude of queries simultaneously") e numa <a href="https://patents.google.com/patent/US20240289407A1">patente do Google (US20240289407A1)</a> que descreve a geração de "synthetic queries".</p>

<p>Na API do Gemini (o <a href="https://ai.google.dev/gemini-api/docs/google-search">grounding with Google Search</a>), dá pra ver o encanamento: o modelo <strong>decide sozinho</strong> se vale buscar (há um classificador com threshold), pode gerar várias queries, e devolve metadados de citação, <code>webSearchQueries</code> (as queries que usou), <code>groundingChunks</code> (as fontes, com URL e título) e <code>groundingSupports</code> (que mapeia cada trecho do texto à fonte que o sustenta, é daí que saem as citações inline).</p>

<h3>ChatGPT search e Perplexity</h3>

<p>O ChatGPT search teve, no início de 2025, forte alinhamento com o índice do <strong>Bing</strong>. A <a href="https://www.seerinteractive.com/insights/87-percent-of-searchgpt-citations-match-bings-top-results">Seer Interactive mediu (fevereiro de 2025)</a> que 87% das citações batiam no topo orgânico do Bing, contra só 56% de match com o Google. Mas atenção, e esse é um caso onde uma afirmação popular não sobrevive à verificação: <strong>esse 87% NÃO prova "dependência forte e permanente" do Bing</strong>. As citações são pós-hoc (geradas depois da resposta), o número é um snapshot de uma metodologia específica, e ele já erodiu, a Profound mostrou o alinhamento ChatGPT-Bing caindo de ~26% para ~8% ao longo de 2025 enquanto a OpenAI roda mais o seu próprio crawler. Use como foto datada, não como lei.</p>

<p>A Perplexity opera de forma parecida (retrieval + síntese com citações explícitas), e é a que mais se aproxima do ranking orgânico tradicional, como você vai ver no overlap abaixo.</p>

<p>Vale uma dose de humildade aqui: boa parte do que sabemos sobre como ChatGPT e Perplexity montam o índice e escolhem fontes é inferência a partir de comportamento observado, não documentação oficial detalhada. A OpenAI confirma que o OAI-SearchBot indexa pra busca do ChatGPT, mas não publica os critérios de ranqueamento interno. Por isso, no nível desses motores, a estratégia segura é não perseguir um algoritmo específico (que muda e é opaco), e sim fazer o que funciona pra qualquer sistema de retrieval: conteúdo acessível, relevante, profundo e confiável. Quanto mais opaco o motor, mais você deveria apostar nos fundamentos em vez de em truques.</p>

<h3>A distinção que organiza tudo: elegibilidade × seleção</h3>

<p>Guarde esta separação, ela é o esqueleto do guia: <strong>elegibilidade</strong> é o que coloca sua página no conjunto de candidatas, e é puro SEO técnico (estar indexada, ser rastreável, poder ganhar snippet). <strong>Seleção</strong> é o que faz, dentre as candidatas, a sua ser a citada, e aí entram qualidade, estrutura, frescor, autoridade e presença em terceiros. Quase toda confusão sobre GEO vem de misturar as duas.</p>

<h3>Os quatro motores, lado a lado</h3>

<p>Generalizar "a IA" é o erro mais comum de quem começa em GEO. Cada motor recupera, renderiza e prefere fontes de um jeito diferente, e isso muda o que você faz. Esta tabela resume o que a evidência de 2025-2026 mostra:</p>

<table>
  <thead>
    <tr>
      <th>Motor</th>
      <th>Como recupera</th>
      <th>Renderiza JS?</th>
      <th>Viés de frescor</th>
      <th>Preferência de fonte</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Google AI Overviews / AI Mode</strong></td>
      <td>Grounding + query fan-out sobre o índice do Google (Googlebot)</td>
      <td>Sim (usa o WRS do Googlebot)</td>
      <td>Mais baixo (cita o conteúdo mais antigo, ~1.432 dias em média)</td>
      <td>Fontes comerciais e autoritativas; propriedades do ecossistema Google</td>
    </tr>
    <tr>
      <td><strong>ChatGPT (search)</strong></td>
      <td>OAI-SearchBot + índice próprio (historicamente alinhado ao Bing, alinhamento caindo)</td>
      <td>Não</td>
      <td>Mais alto (cita o conteúdo mais novo, ~958 dias em média)</td>
      <td>Forte uso de comunidade/Reddit em várias categorias</td>
    </tr>
    <tr>
      <td><strong>Perplexity</strong></td>
      <td>Retrieval + síntese com citações explícitas</td>
      <td>Não</td>
      <td>Médio</td>
      <td>Maior overlap com o ranking orgânico tradicional (~28,6%)</td>
    </tr>
    <tr>
      <td><strong>Gemini</strong></td>
      <td>Grounding with Google Search (o modelo decide se busca)</td>
      <td>Sim (infra do Google)</td>
      <td>Médio</td>
      <td>Índice do Google + decisão dinâmica de quando buscar</td>
    </tr>
  </tbody>
</table>

<p>A leitura prática dessa tabela: pro <strong>Google e o Gemini</strong>, JavaScript não é problema e o jogo é muito parecido com SEO clássico. Pro <strong>ChatGPT, a Perplexity e o Claude</strong>, o conteúdo precisa estar no HTML do servidor, o frescor pesa mais, e presença em comunidade pode importar dependendo do nicho. Um único conteúdo bem feito atende todos eles, mas saber a diferença evita gastar esforço no motor errado, por exemplo, brigar por velocidade de atualização pensando no Google AI Overviews, que é justamente o que menos liga pra frescor.</p>

<h2>GEO × SEO: o que muda e o que continua igual</h2>

<p>A pergunta que todo mundo faz: rankear bem no Google ainda importa pra ser citado pela IA? A resposta é <strong>sim, mas só parcialmente, e cada vez menos no nível do prompt literal</strong>.</p>

<p>A <a href="https://ahrefs.com/blog/does-ranking-higher-on-google-mean-youll-get-cited-in-ai-overviews/">Ahrefs cruzou 1 milhão de keywords</a> que disparam AI Overview com 1,9 milhão de links citados e achou uma correlação de Spearman de <strong>0,347</strong>, "positiva moderada", entre estar no top-10 orgânico e ser citado. O dado mais ilustrativo: <strong>mesmo páginas em 1º lugar só aparecem entre os três links citados no AI Overview cerca de 50% das vezes</strong>. É cara ou coroa. E a Ahrefs é explícita: "os AI Overviews não são uma simples reembalagem dos top results".</p>

<p>Quando você olha o overlap no <em>prompt original</em>, ele despenca. Outra <a href="https://ahrefs.com/blog/ai-search-overlap/">análise da Ahrefs</a> (via Brand Radar, 15 mil queries long-tail) achou que <strong>só ~12% das URLs citadas por ChatGPT, Gemini e Copilot estão no top-10 do Google para o mesmo prompt</strong>. A Perplexity é a exceção, com ~28,6% de overlap. Por que tão baixo? Por causa do fan-out: o assistente não busca o seu prompt, busca várias reformulações dele. Uma página que rankeia em 6º lugar para várias queries relacionadas pode ser citada acima de uma página que é 1ª numa única query.</p>

<p>Isso tem uma consequência tática forte, e ela é apoiada por dados: a <a href="https://surferseo.com/blog/ai-citation-report/">Surfer analisou 173 mil URLs</a> e achou que páginas que rankeiam para a query principal <strong>mais pelo menos uma query de fan-out</strong> têm <strong>+161% de chance de citação</strong> (Spearman de 0,77 entre número de fan-out queries cobertas e citação), e que 68% das páginas citadas estavam <em>fora</em> do top-10 da query principal. Em português direto: cobrir o <strong>tema inteiro</strong> (o cluster de subperguntas) vale mais do que cravar a posição 1 numa keyword só.</p>

<p>Um exemplo torna isso palpável. Imagine a pergunta "qual o melhor plano de saúde para autônomo?". O motor não busca essa frase literal, ele dispara um leque de subconsultas, algo como "planos de saúde individuais 2026", "plano de saúde para MEI vale a pena", "carência de plano de saúde individual", "reembolso em plano individual" e "plano de saúde autônomo x CLT". Quem ganha a citação não é necessariamente quem está em 1º lugar para "melhor plano para autônomo", é quem responde bem <em>esse conjunto inteiro de subperguntas</em> num conteúdo só. É por isso que, na prática, um guia profundo e abrangente sobre o tema vence um post raso superotimizado para uma única keyword. E é também por isso que a tática "uma página, uma keyword" do SEO antigo perde força: o fan-out premia quem trata o assunto como um bloco coeso.</p>

<p>Uma ressalva de método que importa: a parcela de citações que vem do top-10 não é estável. A Ahrefs viu cair de ~76% (julho de 2025) pra ~37-38% em medições posteriores; a BrightEdge reporta números ainda menores, na casa de 17%. Não cite um desses números como "o" número, eles são móveis. O que é estável é a direção: <strong>rankear ajuda, não garante, e cobrir o cluster ajuda mais do que cravar uma keyword</strong>.</p>

<h2>O que a evidência diz que funciona no conteúdo</h2>

<p>Aqui está o coração do paper de 2024, e é a parte com evidência controlada mais forte que existe. Aggarwal et al. testaram <strong>nove estratégias</strong> de reescrita sobre o GEO-Bench (um benchmark de 10 mil queries) e mediram quanto cada uma muda a visibilidade da fonte na resposta gerada.</p>

<p>Um parêntese sobre o GEO-Bench, porque entender o teste ajuda a calibrar a confiança. São 10 mil queries de 25 domínios diferentes, e pra cada uma o benchmark usa os <strong>cinco primeiros resultados do Google</strong> como fontes candidatas. O método pega essas fontes, aplica uma estratégia de reescrita a uma delas, e mede se ela passa a ser mais "visível" na resposta gerada (uma métrica que combina se a fonte é citada e quanto da resposta vem dela). É um desenho sólido pra comparar estratégias entre si, mas note o que ele <em>não</em> é: não é o Google AI Overviews real, é um motor que imita o comportamento de um assistente sobre essas fontes. Daí a regra que repito no guia, ótimo pra direção, fraco pra cravar números absolutos em produção.</p>

<table>
  <thead>
    <tr>
      <th>Estratégia</th>
      <th>Efeito medido</th>
      <th>Veredito</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Citações de fontes (Cite Sources)</strong></td>
      <td>Entre as campeãs, +30-40% relativo</td>
      <td>Vale o trabalho</td>
    </tr>
    <tr>
      <td><strong>Estatísticas (Statistics Addition)</strong></td>
      <td>Entre as campeãs</td>
      <td>Vale o trabalho</td>
    </tr>
    <tr>
      <td><strong>Citação direta com aspas (Quotation)</strong></td>
      <td>Entre as campeãs</td>
      <td>Vale o trabalho</td>
    </tr>
    <tr>
      <td><strong>Fluência (Fluency Optimization)</strong></td>
      <td>Entre as campeãs</td>
      <td>Vale o trabalho</td>
    </tr>
    <tr>
      <td>Keyword stuffing (SEO clássico)</td>
      <td>~10% PIOR que o baseline (na Perplexity)</td>
      <td>Não faça</td>
    </tr>
  </tbody>
</table>

<p>Olhando os números por estratégia, as campeãs ficam na faixa de <strong>+30% a +41% de visibilidade relativa</strong>: citação direta com aspas no topo, seguida de estatística com fonte e de referência inline a fontes primárias. Um detalhe que casa com o que vimos sobre autoridade: o ganho de citar fontes externas tende a ser <strong>ainda maior em sites pequenos ou novos</strong>, porque a fonte confiável "empresta" credibilidade a um domínio que ainda não a construiu. Se o seu site é jovem, citar bem fontes fortes é das alavancas mais baratas que existem.</p>

<p>O número de manchete do paper é "<strong>até +40% de visibilidade</strong>". Ele é verdadeiro e importante, mas exige três asteriscos que quase ninguém coloca: (1) é <strong>teto, melhor caso por estratégia, não média nem garantia</strong>; (2) foi medido sobre o GEO-Bench num motor que <strong>imita o Bing Chat</strong>, e o único teste em motor real foi na Perplexity, onde o ganho chegou a <strong>+37%</strong>, não há validação direta no Google AI Overviews nem no ChatGPT; (3) há um alerta ético embutido. Lendo o código que o próprio paper publicou, as estratégias campeãs de "quotes" e "citações" incluem, no benchmark, a possibilidade de <strong>fabricar</strong> citações ("invented but plausible citations"). <strong>Não faça isso.</strong> Citação e estatística inventadas destroem confiança, contradizem E-E-A-T e, em qualquer tema sério, são um risco real. A versão honesta da tática é: use dados e quotes <strong>reais e verificáveis</strong>, com link pra fonte primária.</p>

<h3>Na prática: o que "dado extraível" quer dizer</h3>

<p>A diferença entre uma frase que vira citação e uma que é ignorada é concreta. Compare:</p>

<p><strong>Versão genérica (raramente citada):</strong> "A maioria das buscas hoje já mostra algum tipo de resumo de IA."</p>

<p><strong>Versão extraível (citável):</strong> "Cerca de 18% das buscas no Google já exibiam um AI Overview em meados de 2025, segundo o <a href="https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/">Pew Research</a> (12.593 de 68.879 buscas analisadas)."</p>

<p>A segunda versão entrega ao motor exatamente o que ele precisa pra citar com segurança: um número específico, uma fonte nomeada e linkada, e uma frase que faz sentido sozinha, fora do parágrafo. Repare que isso também é, simplesmente, escrever com rigor, é a sobreposição GEO-SEO em ação. Você não está "enganando a IA", está produzindo o tipo de conteúdo que um editor humano também acharia mais confiável. Essa é a melhor heurística que existe: <strong>o que aumenta a confiança de um leitor exigente costuma ser o mesmo que aumenta a chance de citação por IA</strong>.</p>

<p>O trabalho seguinte confirma e refina. O <a href="https://arxiv.org/abs/2510.11438">AutoGEO (CMU, aceito no ICLR 2026)</a> mostrou que regras aprendidas automaticamente superam as heurísticas manuais do paper de 2024 (ganho médio de ~36%, até ~51% sobre o melhor baseline), e trouxe um achado conceitual: <strong>cada motor e cada domínio têm preferências próprias, não existe receita única universal</strong>. Com uma ressalva que reduz a confiança: os "motores" do AutoGEO também são simulados (LLMs grandes instruídos a agir como motores), não os produtos reais.</p>

<p>Por que confiar nesses estudos, então, se os motores são simulados? Porque eles isolam variáveis de um jeito que a observação de mercado não consegue: num experimento controlado você muda só a estatística, ou só a citação, e mede o efeito sem o ruído de mil outros fatores. A fraqueza é a validade externa (será que vale no ChatGPT real?), e por isso o uso correto é <strong>combinar as duas evidências</strong>: o experimento controlado diz <em>o que tende a causar</em> efeito, e o dado de mercado diz <em>o que está acontecendo</em> nos motores reais. Quando os dois apontam na mesma direção, como no caso de "dados e citações reais ajudam a ser citado", você pode agir com bastante confiança. Quando só um aponta, trate como hipótese, não como lei.</p>

<h3>Frescor: importa, mas é relativo</h3>

<p>Conteúdo novo é citado com mais frequência, só que de forma desigual entre motores. A <a href="https://ahrefs.com/blog/do-ai-assistants-prefer-to-cite-fresh-content/">Ahrefs analisou quase 17 milhões de URLs citadas</a> (julho de 2025) e achou que citações de IA são, em média, <strong>25,7% mais "frescas"</strong> que o resultado orgânico (1.064 contra 1.432 dias). O ranking de preferência por recência: <strong>ChatGPT cita o conteúdo mais novo</strong> (média de 958 dias), e o <strong>Google AI Overviews o mais antigo</strong> (1.432 dias), com Copilot, Gemini e Perplexity no meio.</p>

<p>Antes de sair atualizando data de tudo: <strong>dentro de um conjunto de candidatas, relevância pesa mais que frescor</strong> ("freshness alone isn't enough; relevance still does the heavy lifting", nas palavras da Ahrefs), e há páginas com 7+ anos sendo citadas. Além disso, o efeito cai pra 13,1% quando medido por data de <em>última atualização</em> em vez de publicação, o que sugere que <strong>manter conteúdo antigo atualizado conta tanto quanto publicar novo</strong>. Frescor é desempate, principalmente em temas de notícia, não é o fator dominante.</p>

<h3>Estrutura: escreva para ser fragmentado</h3>

<p>Os motores recortam seu post em pedaços (chunks) e recuperam o pedaço, não o artigo. Por isso estrutura é função, não estética: H2 descritivos, resposta direta na primeira frase de cada seção, listas, tabelas e blocos autocontidos. Como esse é exatamente o assunto do <a href="/blog/manual-aeo-geo-escrever-post-citado-llm/">Manual de AEO/GEO</a>, não vou repetir o passo a passo aqui, o resumo é: cada H2 precisa fazer sentido lido isoladamente.</p>

<h3>Autoridade e E-E-A-T: o filtro invisível</h3>

<p>Há um fator que não cabe numa lista de "9 estratégias de reescrita" mas atravessa tudo: autoridade. Os motores preferem citar fontes que parecem confiáveis, e isso se manifesta em sinais de E-E-A-T (experiência, expertise, autoridade e confiabilidade) e na reputação da marca/entidade. Uma estimativa da Brainlabs sugere que cerca de <strong>96% das fontes citadas por IA passariam num filtro de E-E-A-T</strong>, o que diz muito sobre o piso de qualidade necessário só pra entrar na conversa. Na prática, isso significa autor real e identificável, credenciais visíveis, fontes primárias linkadas, consistência da marca pela web e presença em lugares que o motor já trata como confiáveis. É o tipo de coisa que não se "hackeia" num post, se constrói ao longo do tempo, e é justamente onde o GEO mais se confunde com a boa e velha construção de autoridade do SEO. Se você tem que escolher onde investir e seu domínio é jovem, autoridade rende mais no longo prazo do que qualquer ajuste de formatação.</p>

<h2>Reddit, UGC e mídia de terceiros: o fator que varia mais</h2>

<p>Um dos achados mais úteis e mais mal interpretados de 2025 é o peso de fóruns e conteúdo de comunidade nas citações. A resposta curta: <strong>depende brutalmente do nicho e do motor</strong>, e qualquer afirmação de "Reddit domina as citações de IA" sem qualificar o vertical está errada.</p>

<p>A <a href="https://surferseo.com/blog/ai-citation-report/">Surfer analisou 36 milhões de AI Overviews</a> (março a agosto de 2025) e o contraste por vertical é gritante: em <strong>games</strong>, o AI Overview cita o Reddit em ~78% das vezes; em <strong>e-commerce</strong>, ~11%; em <strong>esportes</strong>, ~13%; em <strong>saúde</strong>, comunidade quase não aparece, dominam fontes clínicas (NIH ~39%, Healthline ~15%, Mayo Clinic ~15%). Ou seja: em tema sério e regulado, autoridade institucional vence; em tema de experiência pessoal, comunidade vence.</p>

<p>E o motor muda tudo. A <a href="https://www.semrush.com/blog/most-cited-domains-ai/">Semrush rastreou 230 mil prompts</a> e viu que o <strong>Google AI Mode prefere fontes comerciais e autoritativas</strong> (em finanças, Bankrate e NerdWallet dominam), enquanto o <strong>ChatGPT trata o Reddit como autoridade primária</strong> em várias categorias. Dois cuidados: números como "Reddit citado em 176,89%" carregam falsa precisão sobre uma saída estatística instável, leia como direção, não decimal; e há diferença entre o domínio ser <em>consultado</em> internamente e ser <em>citado</em> de forma visível (um estudo da 5W/Discovered Labs estima o Reddit como fonte interna em ~27% das respostas do ChatGPT, mas citação visível em só ~0,35%).</p>

<p>O prego final no caixão de qualquer ranking fixo de domínios: eles são <strong>voláteis</strong>. A Semrush viu a participação do Reddit nas respostas do ChatGPT <strong>cair de ~60% para ~10% em cerca de duas semanas</strong>, e a da Wikipedia de ~55% pra menos de 20% na mesma janela. Não construa estratégia em cima de um share de domínio de um mês. A leitura acionável e estável é outra: <strong>presença em fontes de terceiros (menções, reviews, presença em comunidades relevantes do seu nicho) é um sinal real, e o peso dele varia por vertical e por motor</strong>.</p>

<h2>A camada técnica: crawlers, rendering, robots.txt, schema</h2>

<p>Esta é a parte mais acionável e menos ambígua do GEO, porque é documentada pelas próprias plataformas. E é onde mais se erra por confundir bots.</p>

<h3>Os crawlers de IA têm funções diferentes</h3>

<p>Bloquear "a IA" não é uma decisão única, porque cada bot faz uma coisa. A <a href="https://developers.openai.com/api/docs/bots">documentação da OpenAI</a> e a <a href="https://developers.cloudflare.com/ai-crawl-control/reference/bots/">taxonomia da Cloudflare</a> deixam claro:</p>

<table>
  <thead>
    <tr>
      <th>Categoria</th>
      <th>Função</th>
      <th>Bots</th>
      <th>O que acontece se você bloquear</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Treino</td>
      <td>Coletar dados pra treinar o modelo</td>
      <td>GPTBot, ClaudeBot, Google-Extended, Bytespider, Meta-ExternalAgent</td>
      <td>Sai do treino. NÃO afeta ser citado nas respostas.</td>
    </tr>
    <tr>
      <td>Busca / retrieval</td>
      <td>Indexar pra busca do assistente</td>
      <td>OAI-SearchBot, PerplexityBot</td>
      <td>Bloquear OAI-SearchBot = some das respostas de busca do ChatGPT.</td>
    </tr>
    <tr>
      <td>Ação do usuário</td>
      <td>Buscar quando um humano pede</td>
      <td>ChatGPT-User, Perplexity-User</td>
      <td>Afeta fetch em tempo real a pedido do usuário.</td>
    </tr>
  </tbody>
</table>

<p>A OpenAI é literal: "sites que optam por sair do OAI-SearchBot não serão mostrados nas respostas de busca do ChatGPT". E os controles são independentes, dá pra liberar o OAI-SearchBot (pra ser citado) e bloquear o GPTBot (pra não treinar o modelo) no mesmo <code>robots.txt</code>.</p>

<p>Na prática, um <code>robots.txt</code> de quem quer aparecer na busca do ChatGPT mas não alimentar o treino fica assim:</p>

<pre><code class="language-text"># Quero ser citado na busca do ChatGPT
User-agent: OAI-SearchBot
Allow: /

# Mas não quero alimentar o treino do modelo da OpenAI
User-agent: GPTBot
Disallow: /

# Idem para o treino do Gemini (atenção: isto NÃO te tira do AI Overviews)
User-agent: Google-Extended
Disallow: /</code></pre>

<p>Repare no comentário da última linha. É o erro mais comum: gente que bloqueia o <code>Google-Extended</code> achando que "saiu da IA do Google" e continua aparecendo no AI Overviews do mesmo jeito, porque o AI Overviews lê pelo Googlebot, não pelo Google-Extended.</p>

<p>A pegadinha que derruba muita gente é o Google. <strong>O AI Overviews e o AI Mode usam o Googlebot, não o Google-Extended.</strong> Bloquear o <code>Google-Extended</code> tira você do treino e do grounding do Gemini, mas <strong>não</strong> tira do AI Overviews, que segue o índice de busca normal. E bloquear o <code>Googlebot</code> tira você de tudo, inclusive da busca orgânica. Então "bloquear a IA do Google" sem perder busca é, na prática, quase impossível, é o mesmo crawler.</p>

<h3>Os crawlers de IA (quase todos) não executam JavaScript</h3>

<p>Esse é o item técnico mais subestimado. Um <a href="https://vercel.com/blog/the-rise-of-the-ai-crawler">estudo da Vercel/MERJ sobre mais de 500 milhões de requisições</a> (dezembro de 2024) concluiu: <strong>nenhum dos principais crawlers de IA renderiza JavaScript</strong>, vale pra OpenAI (GPTBot, OAI-SearchBot, ChatGPT-User), Anthropic (ClaudeBot), Meta, ByteDance e Perplexity. O ChatGPT chega a baixar arquivos <code>.js</code> em ~11,5% das requisições, e o Claude em ~24%, mas <strong>nenhum executa</strong> esse JavaScript.</p>

<p>A consequência é dura e direta: <strong>se o conteúdo só aparece depois do JavaScript rodar no navegador, esses motores não veem nada.</strong> Tudo que importa, corpo do texto, títulos, metadados, navegação, links, precisa estar no <strong>HTML renderizado no servidor (SSR)</strong> ou pré-renderizado. A exceção é o Google, AI Overviews e Gemini renderizam JS porque usam a infra do Googlebot (o WRS), e o AppleBot também. Mas projetar pra exceção é arriscado: o piso seguro é <strong>conteúdo essencial no HTML inicial</strong>.</p>

<p>O teste é trivial e vale ouro: pegue a URL e veja o HTML <em>bruto</em>, sem deixar o JavaScript rodar. Pelo terminal:</p>

<pre><code class="language-bash">curl -sL https://seusite.com.br/sua-pagina/ | grep -i "trecho do seu texto principal"</code></pre>

<p>Se o trecho que você procurou <strong>não</strong> aparecer no retorno, ele provavelmente está sendo injetado por JavaScript no navegador, e os crawlers de ChatGPT, Claude e Perplexity não vão vê-lo. O mesmo teste serve pra navegador: abra a página, use "Ver código-fonte da página" (Ctrl+U) e procure pelo texto, isso mostra o HTML inicial, diferente do "Inspecionar elemento", que mostra o DOM já modificado pelo JS. Em stacks modernas (React, Vue, Angular) sem renderização no servidor, é comum o corpo do artigo só existir depois do JS, o que é fatal pra esses motores. A correção é SSR (server-side rendering), SSG (geração estática) ou pré-renderização da rota.</p>

<h3>Schema.org não é requisito (mas não é inútil)</h3>

<p>O Google é inequívoco na <a href="https://developers.google.com/search/docs/appearance/ai-features">documentação oficial</a>: "você não precisa criar arquivos legíveis por máquina, arquivos de texto de IA, ou markup pra aparecer nessas features. Também não há nenhum schema.org especial que você precise adicionar". A elegibilidade pro AI Overviews e AI Mode é <strong>a mesma do Google Search</strong>: estar indexado e poder ser mostrado com snippet.</p>

<p>Isso não quer dizer que schema seja inútil. "Não obrigatório" é diferente de "sem valor", o Google ainda recomenda dados estruturados pra <em>rich results</em>, que as features de IA podem aproveitar. E há um sinal acadêmico, com asteriscos: o framework <a href="https://arxiv.org/abs/2509.10762">GEO-16 (preprint de set/2025)</a>, sobre 1.702 citações em três motores, achou que metadados/frescor, HTML semântico e dados estruturados estavam entre os fatores <strong>associados</strong> a mais citação, e que qualidade geral de página é forte preditor estatístico (odds ratio 4,2). Os asteriscos: é preprint não revisado, é <strong>correlacional, não causal</strong>, é restrito a páginas B2B SaaS em inglês, e não cobre ChatGPT nem Gemini. Traduzindo pra decisão: faça schema porque é boa higiene de SEO e ajuda em rich results, <strong>não</strong> porque alguém te prometeu que LLM cita mais por causa dele.</p>

<h3>llms.txt: a tática sem evidência</h3>

<p>O <code>llms.txt</code> é um arquivo proposto pra "dar instruções aos LLMs" sobre seu site. A evidência de que ele funciona é, hoje, <strong>nula</strong>. A <a href="https://seranking.com/blog/llms-txt/">SE Ranking analisou cerca de 300 mil domínios</a>: ter <code>llms.txt</code> não tornava o site mais propenso a ser citado, e <strong>remover essa variável do modelo até melhorou a precisão</strong>. Só ~10% dos sites têm o arquivo. E o Google foi explícito por dois porta-vozes: Gary Illyes disse que "o Google não suporta llms.txt e não planeja", e John Mueller que "nenhum sistema de IA usa llms.txt hoje". Custa pouco pra implementar, mas não é tática de GEO, é, no máximo, aposta especulativa. Não venda isso como resultado.</p>

<h3>Nota sobre o caso Perplexity × Cloudflare</h3>

<p>Vale conhecer porque ilustra uma zona cinzenta. Em agosto de 2025, a <a href="https://blog.cloudflare.com/perplexity-is-using-stealth-undeclared-crawlers-to-evade-website-no-crawl-directives/">Cloudflare acusou a Perplexity</a> de usar crawlers "furtivos" que trocam user-agent e IP pra <strong>ignorar o robots.txt</strong>. A <a href="https://www.perplexity.ai/hub/blog/agents-or-bots-making-sense-of-ai-on-the-open-web">Perplexity rebateu</a> dizendo que são "agentes disparados pelo usuário" (que, como os fetchers do próprio Google, priorizam o pedido da pessoa sobre o robots.txt) e que a Cloudflare confundiu tráfego de um terceiro com o dela. É uma <strong>disputa não resolvida entre duas partes interessadas</strong> (a Cloudflare vende bloqueio de bots; a Perplexity se defende), sem logs públicos pra arbitrar. A lição prática: <strong>o robots.txt não é tratado como vinculante para retrieval iniciado pelo usuário</strong>, então não conte com ele como mecanismo de controle absoluto.</p>

<h2>Como medir GEO (e por que é mais difícil do que parece)</h2>

<p>Existe um mercado crescente de ferramentas pra medir "visibilidade em IA", Profound, Ahrefs Brand Radar, Semrush AI Toolkit, Otterly, Peec AI, Scrunch, entre outras. Elas geralmente fazem <strong>prompt sampling</strong> (rodam um conjunto de prompts repetidamente) e reportam métricas como <em>share of voice</em> e <em>citation share</em> (quanto a sua marca/domínio aparece versus os concorrentes).</p>

<p>O problema é de validade, e é sério. A <a href="https://sparktoro.com/blog/new-research-ais-are-highly-inconsistent-when-recommending-brands-or-products-marketers-should-take-care-when-tracking-ai-visibility/">SparkToro rodou um estudo (fim de 2025, ~3 mil execuções)</a> e achou que as respostas de IA são <strong>quase irreprodutíveis</strong>: há <strong>menos de 1 chance em 100</strong> de o ChatGPT ou a IA do Google devolverem a <em>mesma lista de marcas</em> em duas rodadas da mesma pergunta, e cerca de <strong>1 em 1.000</strong> de devolverem na <em>mesma ordem</em>. Ou seja, qualquer métrica de visibilidade baseada em poucas rodadas é um ponto numa distribuição muito ruidosa.</p>

<p>Isso não significa "não meça". Significa medir direito: trate visibilidade em IA como uma <strong>distribuição, não um número</strong>. Rode cada prompt muitas vezes, reporte faixas e tendências ao longo do tempo em vez de uma foto, e desconfie de qualquer ferramenta que te dê um share de voz com duas casas decimais e ar de certeza. Não existe, até onde a evidência alcança, um benchmark independente comparando a validade dessas ferramentas entre si.</p>

<h3>Um método de medição que aguenta a crítica</h3>

<p>Se você precisa reportar visibilidade em IA pra um cliente ou pra diretoria, dá pra fazer de forma defensável, desde que você aceite a natureza ruidosa do dado:</p>

<ol>
  <li><strong>Defina um conjunto fixo de prompts</strong> que representem a intenção real do seu público (as perguntas que levam à sua categoria), não só o nome da sua marca.</li>
  <li><strong>Rode cada prompt de 10 a 30 vezes</strong> por motor, nunca uma só. O achado da SparkToro torna a rodada única estatisticamente inútil.</li>
  <li><strong>Reporte como frequência, com intervalo:</strong> "minha marca apareceu em 40% das 30 rodadas deste prompt no ChatGPT", e não "estou em 1º lugar".</li>
  <li><strong>Acompanhe a tendência mês a mês</strong>, não o valor absoluto. A pergunta certa é "estou aparecendo mais ou menos do que no mês passado?".</li>
  <li><strong>Cruze com o tráfego de referência real</strong> de domínios de IA no seu analytics. Esse é o único sinal que não é estimado.</li>
</ol>

<p>Sobre as ferramentas: todas fazem variações de prompt sampling e diferem mais em cobertura e preço do que em método. A <strong>Profound</strong> e a <strong>Peec AI</strong> nasceram focadas em visibilidade em IA; o <strong>Ahrefs Brand Radar</strong> e o <strong>Semrush AI Toolkit</strong> acoplam isso a suítes de SEO que você talvez já use; <strong>Otterly</strong> e <strong>Scrunch</strong> miram monitoramento de marca em respostas de IA. Nenhuma escapa do problema de reprodutibilidade, então o critério de escolha é prático (cobertura dos motores que te interessam, integração com o resto do seu stack, custo), não a promessa de precisão.</p>

<h2>Hype × realidade: o caso cético e a posição do Google</h2>

<p>Eu fechei o guia com isto de propósito, porque é o contraponto que dá credibilidade ao resto. A posição mais defensável hoje, e ela vem do próprio Google e de vozes respeitadas do SEO, é que <strong>"GEO ainda é SEO"</strong>.</p>

<p>O <a href="https://developers.google.com/search/docs/appearance/ai-features">guia oficial do Google sobre AI features</a> (reforçado por um material de maio de 2026) reafirma que <strong>não há otimização especial necessária</strong> pra AI Overviews e AI Mode, e desmente nominalmente llms.txt, "content chunking" e reescrita "para IA" como requisitos. John Mueller, do Google, chegou a dizer (agosto de 2025) que <a href="https://ppc.land/googles-john-mueller-warns-ai-seo-acronyms-signal-spam-tactics/">a urgência em torno dos acrônimos GEO/AEO costuma sinalizar táticas de spam/scam</a>. E o Rand Fishkin, da SparkToro, resume a tese cética numa frase: é <strong>"Search Everywhere Optimization"</strong>, a mesma disciplina aplicada a mais superfícies, não uma ciência nova.</p>

<p>Mas ceticismo bem feito não vira negação. O que os céticos <strong>concedem</strong> importa: os fatores de <em>seleção</em> (qualidade, profundidade, estrutura extraível, E-E-A-T, presença em terceiros) <strong>realmente influenciam</strong> quais páginas elegíveis são citadas. Uma estimativa da Brainlabs sugere que ~96% das fontes citadas passariam num filtro de E-E-A-T. Então o debate real não é "GEO existe ou não", é mais preciso que isso: <strong>a regra de elegibilidade é SEO puro; a otimização de desempenho e a medição é onde o "novo" mora, e é menos exótico do que o marketing vende.</strong></p>

<p>Pra ser justo com os dois lados, vale separar o que está em disputa do que não está. Ninguém sério nega que os motores generativos mudaram a descoberta e que vale a pena ser citado. O que os céticos disputam é mais específico: que exista um conjunto de táticas "de GEO", distintas de boas práticas de SEO e de conteúdo, com retorno comprovado. Nessa parte eles têm razão pela evidência, a maioria das "técnicas exclusivas de IA" ou não tem suporte (llms.txt) ou é simplesmente bom conteúdo com nome novo (dados, estrutura, autoridade). O risco prático do hype é concreto: times redirecionam orçamento pra táticas mágicas e param de fazer o feijão com arroz que de fato move o ponteiro. A postura madura é tratar GEO como uma <em>lente</em> nova sobre o trabalho de sempre, com alguns ajustes apoiados em dados, e não como um balde de truques inéditos.</p>

<h2>Mitos pra aposentar (afirmações que não sobrevivem à evidência)</h2>

<p>Pra fechar a parte conceitual, uma lista de coisas que circulam como verdade e que <strong>não se sustentam</strong> quando você checa a fonte:</p>

<ul>
  <li><strong>"llms.txt aumenta suas citações."</strong> Sem evidência; estudo de 300 mil domínios não achou efeito, e o Google não usa.</li>
  <li><strong>"GEO dá +40% de visibilidade garantido."</strong> O +40% é teto, em motor simulado; o real medido (Perplexity) foi +37%, e como melhor caso, não média.</li>
  <li><strong>"O ChatGPT depende fortemente do Bing."</strong> Era um snapshot de início de 2025 (87%) que caiu pra ~8% no mesmo ano.</li>
  <li><strong>"Reddit/Wikipedia/YouTube é o domínio número 1 das citações."</strong> Varia por vertical, por motor e por semana; nenhum ranking fixo se sustenta.</li>
  <li><strong>"Schema faz o LLM te citar mais."</strong> Google diz que não é requisito; a evidência a favor é correlacional e fraca.</li>
  <li><strong>"Menção de marca importa mais que backlink em GEO."</strong> Tese plausível, mas a cifra que circulava pra prová-la foi refutada; falta evidência quantificada.</li>
</ul>

<h2>GEO na prática: três cenários</h2>

<p>Como a evidência vira decisão muda conforme o tipo de site. Três exemplos do que eu priorizaria em cada caso.</p>

<h3>E-commerce e catálogo</h3>

<p>O risco número um aqui é técnico: páginas de produto que carregam preço, estoque e descrição via JavaScript ficam invisíveis pro ChatGPT e pra Perplexity, que não executam JS. Primeira tarefa, então, é garantir SSR do conteúdo essencial do produto. Depois, foque em conteúdo de comparação ("X vs Y", "melhor X para Y") que cubra o cluster de subperguntas de compra, porque é isso que o fan-out recupera. Reviews e presença em terceiros (marketplaces, comparadores) pesam, mas o peso de comunidade em e-commerce é baixo (~11% de citação ao Reddit nos dados da Surfer), então não aposte só nisso.</p>

<h3>Publisher e conteúdo informacional</h3>

<p>Aqui frescor e profundidade são seus aliados, principalmente pro ChatGPT, que tem o maior viés de recência. Atualize conteúdo evergreen com data de revisão real (lembre que atualizar conta tanto quanto publicar novo), estruture cada matéria em seções autocontidas com resposta direta no topo, e use dados e citações reais com fonte. Em temas sérios (saúde, finanças, direito), autoridade institucional e E-E-A-T são decisivos, comunidade quase não é citada nesses verticais, ao contrário de games ou cultura pop.</p>

<h3>Marca, SaaS e B2B</h3>

<p>Seu objetivo costuma ser ser citado quando alguém pergunta "melhores ferramentas de X". Isso depende menos do seu próprio site e mais da sua presença em fontes de terceiros que o motor confia: listicles de comparação, reviews, menções em mídia do setor. Crie o conteúdo de fundo no seu site (é o que sustenta a elegibilidade e a sua narrativa), mas invista também em estar presente, com dado real, nas páginas que os motores recuperam pra essas perguntas. E meça com humildade: como mostrou a SparkToro, a sua posição nessas listas oscila a cada rodada, então pense em frequência ao longo do tempo, não em "cravei o 1º lugar".</p>

<h2>Os erros mais comuns de GEO (e como evitar)</h2>

<p>Depois de toda a evidência, é útil olhar pelo avesso, os tropeços que mais aparecem na prática:</p>

<ol>
  <li><strong>Tratar "a IA" como uma coisa só.</strong> Otimizar para frescor pensando no Google AI Overviews (que é o que menos liga pra recência) ou esquecer que o ChatGPT não enxerga seu conteúdo em JavaScript. Cada motor é diferente; volte à tabela comparativa.</li>
  <li><strong>Esquecer o teste de HTML bruto.</strong> Investir meses em conteúdo que os crawlers de ChatGPT, Claude e Perplexity nunca veem porque depende de JS. É o erro mais caro e o mais fácil de evitar.</li>
  <li><strong>Comprar tática sem evidência.</strong> Gastar energia com llms.txt, reescrita "para IA" ou schema "pra ser citado" enquanto o conteúdo de fundo continua raso.</li>
  <li><strong>Confiar num share de voz de uma rodada.</strong> Como a medição é quase irreprodutível, reportar "estou em 1º na IA" com base numa única consulta é se enganar e enganar o cliente.</li>
  <li><strong>Fabricar dados ou citações.</strong> Além de antiético, contradiz E-E-A-T e é risco real em qualquer tema sério. O efeito do paper vem de dados <em>reais</em> bem apresentados, não de invenção.</li>
  <li><strong>Brigar por uma keyword em vez de cobrir o tema.</strong> O fan-out premia quem responde o cluster inteiro de subperguntas; a obsessão por posição numa única query é herança do SEO antigo.</li>
</ol>

<h2>Playbook acionável, priorizado por nível de evidência</h2>

<p>Junta tudo. Eu organizei por <strong>força da evidência</strong>, não por hype, porque é assim que você aloca esforço sem se enganar.</p>

<h3>Nível 1, evidência forte, faça primeiro</h3>

<ol>
  <li><strong>Garanta elegibilidade técnica.</strong> Esteja indexado, rastreável, e com conteúdo essencial no HTML renderizado no servidor (porque ChatGPT, Claude e Perplexity não executam JavaScript). Isso é pré-requisito; sem isso, o resto não acontece.</li>
  <li><strong>Continue fazendo SEO bem.</strong> Rankear no orgânico ainda correlaciona com ser citado, e cobrir o <em>cluster</em> de subperguntas (não só uma keyword) maximiza a chance via fan-out, +161% de chance de citação nos dados da Surfer.</li>
  <li><strong>Estruture pra ser fragmentado.</strong> H2 descritivos, resposta direta no topo de cada seção, listas e tabelas, blocos autocontidos. Detalhe operacional no <a href="/blog/manual-aeo-geo-escrever-post-citado-llm/">Manual de AEO/GEO</a>.</li>
  <li><strong>Use dados, estatísticas e citações reais com fonte.</strong> São as estratégias campeãs do paper. Reais e linkadas, nunca fabricadas.</li>
</ol>

<h3>Nível 2, evidência moderada, faça em seguida</h3>

<ol>
  <li><strong>Mantenha conteúdo atualizado.</strong> Frescor é desempate, e atualizar conteúdo antigo conta tanto quanto publicar novo.</li>
  <li><strong>Construa presença em fontes de terceiros</strong> relevantes pro seu nicho (menções, reviews, comunidades). O peso varia por vertical, mas é um sinal real.</li>
  <li><strong>Invista em autoridade e E-E-A-T</strong> (autor real, credenciais, fontes primárias). É o que diferencia entre candidatas elegíveis.</li>
  <li><strong>Mantenha schema/dados estruturados</strong> pela higiene de SEO e rich results, sem esperar que ele "faça" a citação.</li>
</ol>

<h3>Nível 3, sem evidência, não invista esforço sério</h3>

<ol>
  <li><strong>llms.txt.</strong> Baixo custo, mas não espere retorno. Implemente por experimentação, não como estratégia.</li>
  <li><strong>Reescrever conteúdo "pra IA"</strong> de forma diferente do que é bom pro leitor. O Google desmente, e bom conteúdo é o denominador comum.</li>
  <li><strong>Perseguir um share de voz com duas casas decimais.</strong> A medição é ruidosa demais; foque em tendência, não em foto.</li>
</ol>

<h3>Como medir sem se enganar</h3>

<p>Escolha um conjunto de prompts que representem a intenção do seu público, rode cada um <strong>várias vezes</strong>, e acompanhe <strong>tendência ao longo do tempo</strong> (sua marca aparece mais ou menos, mês a mês?) em vez de um número absoluto numa rodada. Cruze com o que dá pra medir de verdade: tráfego de referência vindo de domínios de IA (chat.openai.com, perplexity.ai etc.) no seu analytics. Esse é o sinal mais concreto que você tem.</p>

<h2>Perguntas frequentes sobre GEO</h2>

<h3>GEO vai substituir o SEO?</h3>

<p>Não, e a evidência aponta o contrário. A elegibilidade pra ser citado por IA é, na maior parte, SEO técnico padrão, e rankear bem ainda correlaciona com ser citado. O termo mais honesto, do Rand Fishkin, é "Search Everywhere Optimization": a mesma disciplina aplicada a mais superfícies, não uma ciência nova que substitui a anterior.</p>

<h3>Preciso bloquear os crawlers de IA pra proteger meu conteúdo?</h3>

<p>Depende do seu objetivo, e os efeitos são diferentes. Bloquear o GPTBot tira você do treino do modelo, mas não muda se você é citado nas respostas. Bloquear o OAI-SearchBot tira você das respostas de busca do ChatGPT, o que reduz visibilidade. No Google, não dá pra sair do AI Overviews sem sair da busca orgânica, porque é o mesmo Googlebot.</p>

<h3>Vale a pena criar um arquivo llms.txt?</h3>

<p>Pela evidência atual, não como estratégia. Um estudo de cerca de 300 mil domínios não achou efeito sobre citação, e o Google declarou que não usa o arquivo. Custa pouco implementar e você pode testar, mas não prometa retorno mensurável a ninguém com base nele.</p>

<h3>Schema markup ajuda a ser citado por IA?</h3>

<p>Não é requisito, segundo o próprio Google. Faça schema pela higiene de SEO e por rich results, não porque alguém prometeu mais citações de IA. A evidência a favor disso é correlacional e fraca, e o Google afirma explicitamente que não há schema especial necessário pra aparecer nas features de IA.</p>

<h3>Por que meu concorrente é citado e eu não, se eu ranqueio melhor que ele?</h3>

<p>Porque ranking não garante citação (uma página em 1º só entra no top-3 de links citados cerca de 50% das vezes) e porque o fan-out recupera por várias reformulações da query. Quem cobre melhor o cluster de subperguntas tende a vencer, mesmo sem ser o 1º na keyword principal. Vale também checar o básico: o conteúdo dele está acessível no HTML e o seu, talvez, dependa de JavaScript?</p>

<h3>Qual a única coisa mais importante que eu posso fazer hoje?</h3>

<p>Garantir que o conteúdo essencial das suas páginas está no HTML renderizado no servidor (porque ChatGPT, Claude e Perplexity não executam JavaScript) e que você cobre seus temas com profundidade, usando dados e fontes reais. O resto é refinamento sobre essa base.</p>

<h2>O que a evidência ainda não responde</h2>

<p>Um guia honesto também marca os limites do que se sabe. Estes pontos seguem em aberto em meados de 2026, e desconfie de quem te der resposta categórica sobre eles:</p>

<ul>
  <li><strong>Schema causa mais citação?</strong> Há associação correlacional (GEO-16) mas também estudos que não acham efeito e a declaração do Google de que não é requisito. Falta um experimento controlado que isole a variável.</li>
  <li><strong>Menção de marca vale mais que backlink em GEO?</strong> A tese é popular, mas o número que circulava pra prová-la foi refutado. Falta evidência quantificada e replicada.</li>
  <li><strong>Os achados valem para conteúdo em português?</strong> Quase toda a evidência modelada é em inglês e exclui o ChatGPT. A transferência pra outros idiomas e pro motor mais usado ainda não foi medida com rigor.</li>
  <li><strong>Como medir de forma reprodutível?</strong> Dada a instabilidade das respostas, ainda não há um padrão metodológico consolidado nem benchmark independente de validade entre as ferramentas comerciais.</li>
</ul>

<p>Nada disso invalida o playbook, ele é construído sobre o que <em>tem</em> evidência. Mas saber onde a evidência acaba é o que separa um guia sério de um folheto de vendas.</p>

<h2>Conclusão: o que levar pra casa</h2>

<p>GEO é real no sentido de que motores generativos agora intermediam a descoberta, e isso muda como o clique acontece. Mas a maior parte do que funciona pra ser citado é o que sempre funcionou pra ranquear bem, mais um punhado de ajustes de estrutura e cobertura de tema apoiados por evidência. A diferença entre fazer GEO com método e cair no hype está em três hábitos: <strong>separar elegibilidade de seleção, datar todo número (porque o campo muda mês a mês), e exigir evidência antes de gastar esforço.</strong> Se você fizer só isso, já está à frente da maioria dos guias de GEO que existem por aí.</p>

<p><em>Última revisão: 2 de junho de 2026. As estatísticas de mercado citadas são datadas porque o comportamento dos motores muda rápido; trate-as como direção e tendência, não como constantes.</em></p>`,
    seo_title: 'GEO (Generative Engine Optimization): guia baseado em evidências',
    seo_description:
      'Mega guia de GEO sem hype: o que os papers (KDD 2024, AutoGEO, GEO-16) e os dados (Ahrefs, Semrush, Pew, SparkToro) provam sobre ser citado por ChatGPT e Google AI Overviews. Mecanismos, números datados e playbook por nível de evidência.',
    keywords: [
      'GEO',
      'Generative Engine Optimization',
      'AEO',
      'AI Overviews',
      'ChatGPT search',
      'otimização para IA',
      'citação por LLM',
      'SEO para IA',
      'query fan-out',
      'GEO baseado em evidências',
    ],
  },
  'guia-sitemap-dinamico-em-escala': {
    title: 'Sitemap dinâmico em escala, sem estourar memória',
    excerpt:
      'Como gerar e atualizar sitemap de milhões de URLs sem derrubar o servidor. Arquitetura em três camadas, delta updates, e os sete erros que fazem o Google parar de ler seu sitemap do dia pra noite.',
    tag: 'SEO Técnico',
    published_at: '2026-04-21',
    read_time_min: 12,
    body: `<p>Programmatic SEO no WordPress (ou em qualquer stack) gera uma conta que o time de engenharia nem sempre espera: um site de trezentas URLs vira um site de dois milhões, e de repente o sitemap que era um arquivo de 40kb precisa virar uma infraestrutura. Abordagem naïve (juntar tudo em memória, renderizar, servir em uma rota dinâmica) estoura em dois lugares, ou o servidor trava tentando montar o XML, ou o Googlebot desiste porque o arquivo é maior que 50 MB e não lê mais nada.</p>

<p>Este post é como eu monto a estrutura de sitemap em sites de catálogo grande, programmatic SEO ou e-commerce com milhões de SKUs. Técnico, mas não precisa ser dev sênior pra acompanhar, o objetivo é deixar claro o que precisa acontecer e onde as decisões importam.</p>

<h2>O que o sitemap precisa fazer bem</h2>

<p>O sitemap tem três funções práticas, e só três:</p>

<ol>
  <li><strong>Listar as URLs canônicas do site.</strong> A versão oficial de cada página, sem duplicatas com parâmetro.</li>
  <li><strong>Sinalizar quando cada URL mudou de verdade.</strong> É o campo <code>lastmod</code>, e é o único sinal forte que o Google ainda leva a sério no protocolo.</li>
  <li><strong>Respeitar os dois limites do formato.</strong> No máximo 50.000 URLs por arquivo e no máximo 50 MB descomprimido. Passou disso, o Google simplesmente ignora.</li>
</ol>

<p>Três coisas que o sitemap <em>não</em> precisa fazer, e que a gente perde tempo configurando à toa:</p>

<ul>
  <li><strong>priority.</strong> O Google ignora esse campo há anos. Pode deletar.</li>
  <li><strong>changefreq.</strong> Idem. O Google confia no <code>lastmod</code> real, não na estimativa de frequência.</li>
  <li><strong>Listar URLs com parâmetro de tracking.</strong> UTMs e similares entram como ruído e geram duplicata. Só a URL canônica.</li>
</ul>

<h2>Os dois limites do protocolo, e como dar folga</h2>

<p>O limite oficial é 50.000 URLs ou 50 MB por arquivo. Na prática, eu trabalho com 40.000 URLs por arquivo, pra dar folga caso o conteúdo cresça entre uma geração e a próxima. Passou de 40k, divido em um sitemap a mais.</p>

<p>Quando o site tem mais que 40k URLs, a estrutura correta é um <strong>sitemap de sitemaps</strong> (o nome formal é <em>sitemap index</em>). Fica assim:</p>

<pre><code class="language-xml">&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"&gt;
  &lt;sitemap&gt;
    &lt;loc&gt;https://exemplo.com.br/sitemap-produtos-1.xml&lt;/loc&gt;
    &lt;lastmod&gt;2026-04-21T14:00:00Z&lt;/lastmod&gt;
  &lt;/sitemap&gt;
  &lt;sitemap&gt;
    &lt;loc&gt;https://exemplo.com.br/sitemap-produtos-2.xml&lt;/loc&gt;
    &lt;lastmod&gt;2026-04-20T09:30:00Z&lt;/lastmod&gt;
  &lt;/sitemap&gt;
  &lt;sitemap&gt;
    &lt;loc&gt;https://exemplo.com.br/sitemap-categorias.xml&lt;/loc&gt;
    &lt;lastmod&gt;2026-04-15T18:00:00Z&lt;/lastmod&gt;
  &lt;/sitemap&gt;
&lt;/sitemapindex&gt;</code></pre>

<p>Só o sitemap index é submetido no Search Console. O Google segue os ponteiros e lê cada arquivo filho sozinho.</p>

<h2>Por que gerar ingênuo estoura</h2>

<p>O jeito errado (que eu já vi em produção várias vezes) é:</p>

<ol>
  <li>A rota <code>/sitemap.xml</code> aciona um controller no framework.</li>
  <li>O controller faz um <code>SELECT *</code> em toda a tabela de produtos.</li>
  <li>Coloca o resultado inteiro num array na memória do processo.</li>
  <li>Monta a string do XML concatenando linha por linha.</li>
  <li>Devolve a resposta.</li>
</ol>

<p>Em um site de 50 mil URLs isso funciona mal, mas funciona. Em um site de 2 milhões, o processo consome 3 GB de RAM, estoura o limite do worker, e o Googlebot recebe um erro 500 ou um tempo de resposta altíssimo. No primeiro caso o crawl fica capado. No segundo, o Google reduz a frequência de visita no domínio todo, o que arrasta outras páginas junto.</p>

<p>A correção é parar de gerar sob demanda e parar de carregar tudo em memória. As duas coisas.</p>

<h2>Arquitetura em três camadas</h2>

<p>O padrão que eu uso em site grande tem três camadas bem separadas.</p>

<h3>1. Fonte, o banco de dados</h3>

<p>A verdade sobre quais URLs existem está no banco. Uma tabela (ou view materializada) que tem as URLs canônicas do site, com o timestamp real da última modificação de cada uma. Essa view é atualizada via triggers ou via um job quando os dados de origem mudam.</p>

<p>O importante aqui é que consultar essa view tem que ser rápido. Indexe pela coluna que você usa pra particionar (tipo de conteúdo, range de ID, data). Se a consulta sozinha demora dois minutos, o job de sitemap fica escravo disso.</p>

<h3>2. Geração, um worker que escreve em streaming</h3>

<p>O sitemap é gerado em <strong>worker separado</strong>, não na rota que o Googlebot chama. Esse worker roda em horário controlado (1x por hora ou por cron mais espaçado pra partes que mudam pouco), abre um cursor no banco (não um <code>SELECT *</code>, um cursor que busca em blocos de 1000 linhas), escreve o XML direto em arquivo usando escritor em streaming (<code>XMLWriter</code> em PHP, <code>xml2js</code> streaming em Node, <code>lxml.etree</code> em Python), e faz upload do resultado pra um storage (S3, CloudFront origin, disco local servido via CDN).</p>

<p>O consumo de memória dessa versão é constante, não importa se o site tem 10 mil ou 10 milhões de URLs. Sempre 20-40 MB de RAM no processo, porque a qualquer momento só mil linhas estão carregadas.</p>

<h3>3. Servir, via CDN, nunca dinâmico</h3>

<p>O Googlebot chama <code>/sitemap.xml</code> e recebe um arquivo estático do storage, via CDN. A rota nunca aciona código de aplicação em tempo real. O tempo de resposta fica em dezenas de milissegundos, independente do tamanho do arquivo.</p>

<p>Se o framework obriga a passar por alguma rota (Next.js, Laravel), a rota lê o arquivo do storage e devolve, sem regerar. A geração é uma coisa, o serviço é outra.</p>

<h2>Estratégia de particionamento, o que vai em cada arquivo</h2>

<p>Com um sitemap index, você decide como quebrar o site em partições. Existem dois padrões comuns.</p>

<h3>Por tipo de conteúdo (recomendado)</h3>

<p>Um arquivo pra produtos, um pra categorias, um pra blog, um pra páginas institucionais. Esse padrão ganha em um ponto crítico, <strong>invalidação seletiva</strong>. Se só os produtos mudaram, você regera só o sitemap de produtos e atualiza o <code>lastmod</code> daquela entrada no index. Os outros arquivos ficam parados.</p>

<p>Quando produtos passam de 40k URLs, o sitemap de produtos vira dois (<code>sitemap-produtos-1.xml</code>, <code>sitemap-produtos-2.xml</code>). Você pode dividir por range de ID, alfabético, por categoria principal, não importa muito desde que seja determinístico, ou seja, a URL X cai sempre na mesma partição.</p>

<h3>Por range de ID (mais simples, pior pra manutenção)</h3>

<p>Todos os tipos misturados, divididos só por ID. É mais simples de gerar, mas qualquer mudança em qualquer tipo invalida o arquivo inteiro. Só uso esse padrão em protótipo.</p>

<h2>Lastmod de verdade vs lastmod de enfeite</h2>

<p>O Google aprendeu, com o tempo, quais sites mentem no <code>lastmod</code>. Quando o sistema detecta que o campo sempre muda pra "agora" em toda requisição, mas o conteúdo da página não mudou de fato, ele começa a ignorar o <code>lastmod</code> daquele site inteiro. Isso é ruim, porque é o único sinal forte que o sitemap ainda carrega.</p>

<p>Regra de bolso: o <code>lastmod</code> tem que vir do timestamp real da última edição de conteúdo, o campo <code>updated_at</code> (ou equivalente) da tabela. Nunca <code>NOW()</code> na hora de gerar o sitemap.</p>

<p>No sitemap index, o <code>lastmod</code> de cada entrada deve ser o maior <code>updated_at</code> das URLs dentro daquele arquivo filho. Isso sinaliza pro Google exatamente quais arquivos vale a pena rechecar desde a última visita, e ele consegue priorizar.</p>

<h2>Delta updates, regerar só o que mudou</h2>

<p>Em site de escala, regerar o sitemap inteiro a cada cron é desnecessário e caro. O padrão maduro é:</p>

<ol>
  <li>Uma tabela de controle marca quais partições estão "sujas" (ou seja, tiveram alguma mudança desde a última geração).</li>
  <li>O cron lê essa tabela, regera só as partições sujas, atualiza o <code>lastmod</code> delas no sitemap index, e marca como limpas.</li>
  <li>Partições sem mudança ficam intocadas, servidas direto da CDN com o mesmo arquivo da semana passada.</li>
</ol>

<p>Efeito prático, em um site de 2 milhões de URLs que eu trabalhei, o sitemap completo regerava em 12 minutos. Depois do delta update, a execução típica regerava 3 a 5 partições de 40k URLs e terminava em 40 segundos. O cron passou de 1x por dia pra 1x por hora sem encostar em custo.</p>

<h2>gzip, economizando 80% de banda</h2>

<p>O sitemap é texto XML, comprime muito bem. O Google aceita <code>.xml.gz</code> sem cerimônia. Sempre gere o arquivo e suba comprimido. A economia de banda é significativa em site grande, e o tempo de download pra o bot também cai.</p>

<p>A única ressalva, submeta a URL com a extensão <code>.xml.gz</code> no Search Console pra deixar explícito.</p>

<h2>Imagem, vídeo e news, quando vale a pena</h2>

<p>Existem extensões do protocolo pra imagem, vídeo e news. Minha recomendação:</p>

<ul>
  <li><strong>Imagem.</strong> Vale se o site depende de tráfego em Google Imagens (moda, catálogo, receita). O ganho é real. Pode ser embutido nos sitemaps existentes (namespace extra) em vez de arquivo separado.</li>
  <li><strong>Vídeo.</strong> Vale só se o site hospeda vídeo próprio com ambição de ranquear. Embutar direto em YouTube sem vídeo no próprio site dispensa.</li>
  <li><strong>News.</strong> Só pra publicações registradas no Google News. Requer formato específico e regras de frescor, não é drop-in.</li>
</ul>

<p>Em geral, não crie tipo de sitemap que você não vai manter. Manter vazio ou desatualizado é pior que não ter.</p>

<h2>Submissão e monitoramento</h2>

<p>Dois lugares pra declarar o sitemap:</p>

<ol>
  <li><strong>Search Console.</strong> Submeta a URL do sitemap index. O Search Console vai ler recursivamente. Acompanhe a coluna "Last read" (Última leitura), se o valor não atualizar em mais de 7 dias, algo está errado.</li>
  <li><strong>robots.txt.</strong> Adicione uma linha <code>Sitemap: https://exemplo.com.br/sitemap.xml</code>. Alguns crawlers (incluindo motores menores) descobrem o sitemap por aí.</li>
</ol>

<p>Monitoramento semanal mínimo, veja no Search Console:</p>

<ul>
  <li>Status de cada sitemap (Success vs Couldn't fetch).</li>
  <li>Discovered URLs vs Indexed URLs. Se a diferença é grande e aumenta, algo na qualidade das URLs está afastando o Google (canônica errada, thin content, duplicata).</li>
  <li>"Última leitura" próxima da data do cron. Se o Google está lendo rápido, seu sitemap está saudável.</li>
</ul>

<h2>Sete anti-padrões que fazem o Google parar de confiar</h2>

<ol>
  <li><strong>Colocar URL que retorna 404.</strong> É o pior erro possível. O Google penaliza fortemente domínios que listam URLs mortas no sitemap, a leitura pode parar inteira.</li>
  <li><strong>Colocar URL que redireciona (301).</strong> Segunda pior coisa. O sitemap é pra versão final, não pra alias que redireciona.</li>
  <li><strong>Colocar URL com <code>noindex</code> na página.</strong> Contradição direta, o bot lê, verifica a página, encontra noindex, perde a confiança no seu sitemap em geral.</li>
  <li><strong><code>lastmod</code> sempre igual ao momento atual.</strong> Mencionei antes. Se for assim, melhor não ter <code>lastmod</code> do que ter <code>lastmod</code> fake.</li>
  <li><strong>URL com parâmetro de tracking.</strong> Entra como duplicata da versão canônica e gera ruído no índice.</li>
  <li><strong>Gerar na hora da requisição em site grande.</strong> Tempo de resposta de segundos, bot desiste, crawl budget vai embora.</li>
  <li><strong>Não declarar o charset em UTF-8.</strong> Caracteres acentuados quebram. O XML precisa começar com <code>&lt;?xml version="1.0" encoding="UTF-8"?&gt;</code>.</li>
</ol>

<h2>Esqueleto em PHP, em streaming</h2>

<p>Pra quem vai implementar, esqueleto mínimo em PHP usando <code>XMLWriter</code> (streaming) e <code>PDO</code> com cursor:</p>

<pre><code class="language-php">&lt;?php
$pdo = new PDO($dsn, $user, $pass, [
  PDO::ATTR_ERRMODE =&gt; PDO::ERRMODE_EXCEPTION,
  PDO::ATTR_EMULATE_PREPARES =&gt; false, // cursor server-side real
]);

$xml = new XMLWriter();
$xml-&gt;openUri('php://output');
$xml-&gt;startDocument('1.0', 'UTF-8');
$xml-&gt;startElement('urlset');
$xml-&gt;writeAttribute('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9');

$stmt = $pdo-&gt;prepare(
  'SELECT slug, updated_at FROM produtos WHERE ativo = 1 ORDER BY id'
);
$stmt-&gt;execute();

while ($row = $stmt-&gt;fetch(PDO::FETCH_ASSOC)) {
  $xml-&gt;startElement('url');
  $xml-&gt;writeElement('loc', "https://exemplo.com.br/produto/{$row['slug']}/");
  $xml-&gt;writeElement('lastmod', (new DateTime($row['updated_at']))-&gt;format('c'));
  $xml-&gt;endElement();
  $xml-&gt;flush(); // descarrega pro buffer, evita acúmulo
}

$xml-&gt;endElement();
$xml-&gt;endDocument();</code></pre>

<p>Esse worker escreve o arquivo inteiro com consumo constante de memória, independente do número de produtos. Depois, um passo adicional comprime em gzip e sobe pro S3 ou equivalente.</p>

<h2>Quando dinâmico em requisição ainda vale</h2>

<p>Sitemap gerado na hora faz sentido só em dois casos. Site pequeno (menos de 10 mil URLs totais), onde o custo de gerar é desprezível. E site com requisito de freshness extremo (ex: conteúdo de notícia em tempo real), onde atrasar o sitemap em 15 minutos é problema. Fora desses dois casos, sempre gere em background e sirva estático.</p>

<p>Se o site é Next.js, o padrão <code>sitemap.ts</code> do App Router roda no build, ou em ISR, e funciona bem até uns 30-50 mil URLs. Passou disso, também migre pra worker externo que publica o arquivo, e transforme o endpoint do Next em um proxy que lê do storage.</p>

<h2>Fechando</h2>

<p>Três ideias pra guardar. Sitemap é arquivo, não aplicação, separe quem gera de quem serve. <code>lastmod</code> é o único sinal forte que ainda importa no protocolo, trate com cuidado e nunca minta. E delta update é a diferença entre sitemap saudável em escala e servidor travado toda hora.</p>

<p>Pra conectar com o resto da trilha, o <a href="/blog/guia-programmatic-seo-wordpress/">guia de programmatic SEO em WordPress</a> mostra o lado de gerar as URLs em volume, e o <a href="/projetos/arquitetura-conteudo-scaffold-php-import/">case do scaffold de importação em PHP</a> traz o mesmo padrão de streaming que descrevi aqui, aplicado à ingestão em vez de à exposição.</p>`,
    seo_title: 'Sitemap dinâmico em escala, sem estourar memória',
    seo_description:
      'Como gerar e atualizar sitemap de milhões de URLs sem derrubar o servidor. Streaming, delta updates, particionamento e os sete erros que matam o crawl.',
    keywords: [
      'sitemap xml',
      'sitemap dinâmico',
      'sitemap escala',
      'sitemap index',
      'programmatic SEO sitemap',
      'lastmod sitemap',
      'delta update sitemap',
      'streaming XML PHP',
    ],
  },
  'guia-conteudo-citavel-por-llm': {
    title: 'Como estruturar conteúdo pra ser citado por LLM',
    excerpt:
      'Como o Perplexity, o ChatGPT e o AI Overview do Google escolhem quem citar, e o que mudar no seu conteúdo pra entrar nessa lista. Sete erros comuns que deixam seu site invisível pra IA e três formas práticas de medir se o trabalho está funcionando.',
    tag: 'SEO Técnico',
    published_at: '2026-04-21',
    read_time_min: 11,
    body: `<p>Tráfego em 2026 vem de dois caminhos bem diferentes. O Google e o Bing, que o mercado aprendeu a otimizar nos últimos vinte anos. E os buscadores com IA, Perplexity, ChatGPT Search, Claude, o "AI Overview" do próprio Google, que funcionam por citação em vez de lista de links azuis. O primeiro caminho quase todo mundo conhece. O segundo, quase ninguém estruturou o site pra disputar de verdade.</p>

<p>O ponto que confunde gerente de marketing é que ranquear bem no Google não garante citação nesses buscadores novos. Sua página pode estar em primeiro lugar pra "consent mode v2" e nunca aparecer como fonte no Perplexity pra mesma pergunta. A IA avalia o conteúdo de um jeito diferente, olha outras coisas, e descarta trechos que o Google indexou sem problema. Este post é o que eu faço na prática pra aumentar a chance de um pedaço do seu conteúdo virar citação.</p>

<h2>O que "ser citado por IA" realmente quer dizer</h2>

<p>Um buscador com IA não lê a internet na hora em que alguém pergunta. Ele tem um índice próprio, um "caderno de anotações" com pedaços de texto que já leu antes. Quando chega uma pergunta, ele escolhe alguns desses pedaços e monta a resposta em cima deles. Sua disputa deixa de ser por página inteira e passa a ser por pedaço. Cada parágrafo (ou bloco curto de parágrafos) precisa fazer sentido sozinho, desconectado do resto da página.</p>

<p>Isso muda a forma de trabalhar. No Google, a página é a unidade que você otimiza. Na IA, o parágrafo é. Muda também o que você mede. Não existe mais "impressões" e "CTR", o que você acompanha é taxa de citação num conjunto de perguntas que importa pro seu negócio.</p>

<h2>Os três filtros invisíveis entre seu conteúdo e a citação</h2>

<p>Entre publicar uma página e a IA citar você, existem três filtros que ninguém documenta. Eu observei cada um funcionando em dezenas de perguntas de cliente ao longo de 2025.</p>

<ol>
  <li><strong>O robô da IA precisa conseguir ler seu site.</strong> Cada buscador com IA tem o próprio robô, parecido com o Googlebot. Se o conteúdo principal do seu site só aparece depois que o navegador processa JavaScript, o robô não enxerga e o seu texto fica de fora do índice. Site que depende de framework moderno sem "renderização no servidor" tende a cair nesse buraco.</li>
  <li><strong>Quantidade de informação por parágrafo.</strong> O sistema dá preferência a pedaços que contam muita coisa em pouco espaço. Dois parágrafos com número, nome próprio e data concretos ganham de dez parágrafos de introdução romantizada.</li>
  <li><strong>O parágrafo precisa fazer sentido sozinho.</strong> Se ele começa com "Essa técnica" ou "Como vimos acima", no momento em que o sistema recorta a página em pedaços aquele parágrafo fica órfão e é descartado. Parágrafo que depende dos anteriores pra ser entendido nunca vira citação.</li>
</ol>

<h2>Estrutura da página, o que mudou</h2>

<p>Algumas regras que valiam em 2016 pra SEO continuam de pé. Outras mudam de peso. E algumas práticas que eram opcionais viraram determinantes.</p>

<h3>1. Comece com a resposta, não com o aquecimento</h3>

<p>A velha regra de jornalismo (resposta primeiro, contexto depois) voltou com força. Os dois primeiros parágrafos da página precisam conter a resposta mais direta possível pra pergunta central. A IA costuma puxar abertura como resumo, então introdução que dá duas voltas ("Há anos a comunidade debate…") é suicídio de citação.</p>

<p>Revise conteúdo antigo com essa régua. Pega o título, identifica a pergunta embutida nele, e garante que os primeiros 300 caracteres respondam essa pergunta de forma autônoma.</p>

<h3>2. Um parágrafo, uma ideia, zero pronomes soltos</h3>

<p>Parágrafo que começa com "Isso" ou "Essa técnica" só faz sentido no contexto da página inteira. Quando o sistema corta a página em pedaços menores, metade dos parágrafos fica sem referência e é descartada. Repete o sujeito. Escreve "O Consent Mode v2 funciona em dois estágios…" em vez de "Ele funciona em dois estágios…", mesmo que tenha mencionado no parágrafo anterior.</p>

<p>Pro humano fica um pouco mais repetitivo. O ganho em citação compensa com folga. Em testes que rodei em 2025, o mesmo conteúdo com pronomes substituídos foi citado 2 a 4 vezes mais que a versão original.</p>

<h3>3. Datas e versões visíveis no texto, não só no rodapé</h3>

<p>A IA, quando avalia se o conteúdo está atualizado, olha pra datas escritas dentro do texto, não só pra data de publicação do sistema. Frases como "a partir de março de 2026", "na versão 4.2 do plugin", "após a política de 2023 do Google" servem de âncora temporal clara. Datas relativas ("recentemente", "nos últimos meses") envelhecem mal e confundem o modelo.</p>

<h3>4. Listas com frase completa em cada item</h3>

<p>Item de lista que é uma palavra só ("Rápido", "Escalável", "Seguro") não é citável, o sistema não tem contexto pra entender. Item que é uma frase inteira ("O pipeline reduz o tempo de ingestão de 40 minutos pra 6 minutos em benchmark de 10 mil URLs") é ouro, a IA recupera aquele item sozinho e cita.</p>

<h2>Densidade de fatos, a régua que quase ninguém usa</h2>

<p>Chamo de densidade de fatos a quantidade de informação concreta (número, data, nome próprio, versão, referência externa) por 100 palavras. Artigo médio de blog tem 1 a 2 fatos. Artigo que funciona bem em IA tem 4 a 8.</p>

<p>Comparação direta:</p>

<blockquote><p><em>Baixa densidade (1 fato em 35 palavras):</em> Otimizar Core Web Vitals é importante porque impacta a experiência do usuário e também é um fator de ranqueamento considerado pelo Google nos últimos anos em praticamente todos os tipos de site.</p></blockquote>

<blockquote><p><em>Alta densidade (6 fatos em 38 palavras):</em> LCP abaixo de 2.5s, INP abaixo de 200ms, CLS abaixo de 0.1 são os três limites verdes definidos pelo Google em março de 2024 como critério de Core Web Vitals em navegação mobile.</p></blockquote>

<p>O segundo tem números citáveis, fonte (Google) e data (março 2024). Quando a IA recebe uma pergunta do tipo "qual o limite bom de LCP", vai puxar o segundo parágrafo e ignorar o primeiro, sem concorrência.</p>

<p>Checklist que uso antes de publicar, parágrafo a parágrafo: tem pelo menos um número, uma data ou um nome próprio? Se não tem, reescrevo ou removo.</p>

<h2>Cada seção precisa se sustentar sozinha</h2>

<p>Pensa em cada seção de 200 a 500 palavras como um mini-post. Tem que ter, sozinha:</p>

<ul>
  <li><strong>Um título que já afirma algo.</strong> Título explícito ("Densidade de fatos se mede por 100 palavras") vence título genérico ("Como medir densidade de fatos").</li>
  <li><strong>Uma abertura que não depende do que veio antes.</strong> Evita "continuando", "além disso", "como vimos". Reintroduz o conceito em uma frase.</li>
  <li><strong>Um exemplo ou número nas primeiras linhas.</strong> Se a seção fica abstrata por meia página antes do primeiro exemplo, o pedaço central não tem nada citável.</li>
  <li><strong>Um fechamento que não precisa de conclusão externa.</strong> A seção resolve a própria afirmação.</li>
</ul>

<p>Fiz esse exercício em três posts de um cliente no trimestre passado. Antes da revisão, zero citações no Perplexity em 15 perguntas-alvo. Depois, oito citações consistentes ao longo de seis semanas de acompanhamento. Mesma URL, mesma autoridade de domínio, mesmos backlinks. A diferença foi só estrutural.</p>

<h2>Marcação de schema que ainda importa</h2>

<p>Tem muita conversa sobre schema pra ser citado por IA. Metade é placebo. Separando o que move o ponteiro do que não move:</p>

<h3>Schema com impacto real</h3>

<ul>
  <li><strong>Article com autor e datas de publicação e atualização.</strong> Identifica quem escreveu. Sem isso, seu conteúdo fica anônimo pros buscadores com IA, o que reduz a confiança no trecho.</li>
  <li><strong>Organization no domínio, com links pra Wikipedia, Wikidata e LinkedIn.</strong> Amarra seu site a entidades que o modelo já reconhece. Faz diferença real em marcas já estabelecidas.</li>
  <li><strong>FAQPage.</strong> O Google deixou de mostrar esse formato como destaque em 2023, mas os buscadores com IA continuam extraindo pares de pergunta e resposta desse formato com altíssima precisão. É o schema com melhor custo-benefício específico pra citação em IA hoje.</li>
  <li><strong>BreadcrumbList.</strong> Ajuda o robô a entender a hierarquia do site, o que influencia como cada seção é contextualizada.</li>
</ul>

<h3>Schema que é só ritual</h3>

<ul>
  <li><strong>HowTo.</strong> Descontinuado pelo Google em 2023, sem sinal de que os buscadores com IA tratem diferente. Emite se te agrada, mas não conta como trabalho útil.</li>
  <li><strong>ImageObject sem imagem correspondente.</strong> Os modelos visuais de hoje entendem imagem direto, esse schema cosmético agrega pouco.</li>
  <li><strong>AggregateRating sem reviews visíveis na página.</strong> Além de não ajudar a IA, é risco de penalização pelo Google sob a <a href="https://developers.google.com/search/blog/2023/09/review-snippet-policy-update" target="_blank" rel="noopener">política de snippet de avaliações</a>.</li>
</ul>

<h2>Sete erros que deixam seu conteúdo invisível pra IA</h2>

<ol>
  <li><strong>Conteúdo principal que só aparece depois do JavaScript.</strong> Se o texto só carrega depois que o navegador processa o código do site, o robô da IA não enxerga. O teste rápido é desligar JavaScript no navegador e ver o que sobra.</li>
  <li><strong>Parede de introdução.</strong> Quinhentas palavras antes da primeira afirmação concreta. Os primeiros pedaços da página são os mais puxados pela IA, se estão vazios você perde a disputa.</li>
  <li><strong>Pronomes soltos.</strong> "Ele", "ela", "isso", "essa abordagem" atravessando parágrafos. Quebra no momento em que o sistema recorta a página.</li>
  <li><strong>Afirmação sem número.</strong> "Rápido", "econômico", "escalável" sem medida. A IA prefere "reduz latência em 34%" mil vezes a "reduz latência de forma significativa".</li>
  <li><strong>Fonte em nota de rodapé, longe da afirmação.</strong> O sistema não liga o parágrafo a uma referência que está duas mil palavras abaixo. Atribui a fonte dentro do próprio parágrafo ("segundo o estudo X de 2025").</li>
  <li><strong>Robô da IA bloqueado sem querer.</strong> Revisa o <code>robots.txt</code> e as regras de firewall. Muitos sites bloqueiam os robôs do ChatGPT ou do Claude sem perceber, por herança de plugin de segurança ou configuração antiga.</li>
  <li><strong>Republicar sem atualizar a data.</strong> Página com data de 2022 falando de "Consent Mode v2" é descartada como inconsistente. Atualiza a data de modificação toda vez que edita de verdade.</li>
</ol>

<h2>Como medir hoje</h2>

<p>Não existe Search Console pra IA. Mas dá pra montar medição em três camadas, da mais barata à mais cara.</p>

<h3>Camada 1, teste manual semanal</h3>

<p>Define 20 a 30 perguntas que representam as dores que o seu negócio resolve. Toda sexta, alguém do time roda essas perguntas no Perplexity, ChatGPT Search, Claude e AI Overview do Google, e registra numa planilha:</p>

<ul>
  <li>A resposta citou o site? Sim ou não.</li>
  <li>Se não, quem citou? Concorrente, Wikipedia, publicação do setor.</li>
  <li>Qual trecho da resposta parece ter vindo do seu conteúdo?</li>
</ul>

<p>Três meses dessa disciplina já mostram tendência clara.</p>

<h3>Camada 2, referência no Google Analytics</h3>

<p>Separa o tráfego que vem das IAs. No GA4, cria um segmento que filtra referenciadores como <code>chatgpt.com</code>, <code>perplexity.ai</code>, <code>claude.ai</code>, <code>gemini.google.com</code>. O volume absoluto ainda é pequeno na maior parte dos setores, mas a tendência vale muito. Cliente em nicho técnico B2B já vê 3 a 8% do tráfego vindo de IA em 2026, e esse número vem dobrando a cada dois trimestres.</p>

<h3>Camada 3, automação</h3>

<p>Se o volume justifica, monta um script que roda semanalmente, dispara as perguntas direto nas APIs das IAs, detecta menções ao seu domínio ou marca, e alimenta um painel. Custo operacional fica em torno de US$ 20 a US$ 50 por mês pra 100 perguntas × 4 ferramentas. Um pipeline parecido aparece no <a href="/projetos/linkagem-semantica-embeddings-sanar/">case de linkagem semântica</a>, onde monitorei share of voice em nicho de educação médica.</p>

<h2>Três tentações caras</h2>

<ol>
  <li><strong>Assinar ferramenta de "dashboard de IA" sem ter linha de base.</strong> A ferramenta entrega relatório bonito. Se você ainda não sabe quais são suas perguntas-alvo, o relatório é decoração.</li>
  <li><strong>Encher o site de FAQ genérico gerado por IA.</strong> Perguntas fracas baixam a qualidade média do conteúdo. Melhor 15 FAQs reais que 150 automáticas.</li>
  <li><strong>Tentar enganar a IA repetindo palavra-chave.</strong> Os buscadores com IA já são bem resistentes a isso e punem via baixa recuperação. Densidade de fatos não é a mesma coisa que densidade de palavra-chave.</li>
</ol>

<h2>Fechando</h2>

<p>Essa área ainda é nova e parte do que escrevi aqui vai precisar de revisão em doze meses. Mas três coisas não vão mudar: seu conteúdo tem que ser lido sem JavaScript, cada parágrafo tem que se sustentar sozinho, e densidade de fatos vence prosa. Comece por aí.</p>

<p>Pra conectar com o resto da trilha, o <a href="/blog/internal-linking-semantico-sem-plugin-pgvector/">guia de ligação semântica entre páginas</a> mostra como aplicar o mesmo raciocínio de recuperação por trechos no seu próprio site, e o <a href="/blog/guia-data-layer-bem-modelado/">guia de data layer bem modelado</a> aplica o princípio de "pedaço autocontido e rico em fatos" a dados em vez de texto.</p>`,
    seo_title: 'Como estruturar conteúdo pra ser citado por IA',
    seo_description:
      'Como entrar nas citações do Perplexity, ChatGPT Search e AI Overview. Erros comuns, o que marcar na página e três formas de medir o resultado.',
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
    published_at: '2026-04-20',
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
    published_at: '2026-04-20',
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
    published_at: '2026-04-20',
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
    published_at: '2026-04-20',
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
    published_at: '2026-04-20',
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
  'manual-aeo-geo-escrever-post-citado-llm': {
    title: 'Manual de AEO/GEO, como escrever um post que LLM cita',
    excerpt:
      'Manual prático pra escrever post de blog que ChatGPT, Perplexity, Gemini e Claude citem. TL;DR no topo, seções autocontidas, citações com fonte, tabela comparativa, FAQ no final, mais checklist e template prontos pra colar no editorial.',
    tag: 'SEO Técnico',
    published_at: '2026-04-26',
    read_time_min: 13,
    body: `<p><strong>Resposta curta:</strong> LLM não lê post inteiro, ele fragmenta em pedaços de 100 a 300 palavras e recupera o pedaço isolado pra citar. Pra entrar nessa lista, cada seção precisa fazer sentido sozinha, começar pela resposta direta, e trazer um elemento extraível (estatística com fonte, citação com aspas, tabela ou item justificado).</p>

<p><strong>Resposta detalhada:</strong> as cinco técnicas com efeito empírico medido em <a href="https://arxiv.org/abs/2311.09735">Aggarwal et al. (KDD'24)</a> são citação direta com aspas e atribuição (<strong>+41% de visibilidade em respostas geradas</strong>), inclusão de estatística com fonte (+33%), referência inline com link pra fonte primária (+30%, e até +115% em sites pequenos), tabela comparativa explícita, e atributo justificador em bold ("<strong>40% mais rápido</strong> porque…"). Anti-padrões com efeito negativo medido: keyword stuffing (-8%) e tom autoritativo sem dado (efeito quase nulo, segundo <a href="https://aclanthology.org/2024.acl-long.547/">Wan et al., ACL'24</a>).</p>

<h2>A regra de ouro, cada H2 será lido isolado</h2>

<p>LLM não lê como humano. Ele <strong>fragmenta</strong> o post em pedaços de 100 a 300 palavras (chunks), embeda cada pedaço em vetor, e recupera apenas o trecho mais relevante pra cada query. Isso muda o peso de tudo na escrita.</p>

<p>Significa que se a sua melhor frase está no parágrafo 8 e ela referencia o parágrafo 3, o motor não cita. Ele só recuperou o pedaço 8 e não tem o contexto do 3. Se o parágrafo começa com "Essa técnica" ou "Como vimos acima", vira órfão no momento do recorte e é descartado.</p>

<p>Regra de produção: <strong>escreva assumindo que cada <code>&lt;h2&gt;</code> será lido isoladamente</strong>. Repete o sujeito ("O Consent Mode v2 funciona…" em vez de "Ele funciona…"), entrega a resposta na primeira frase da seção, e fecha cada bloco com pelo menos um elemento extraível.</p>

<h2>Anatomia de um post otimizado, do topo ao fim</h2>

<p>A estrutura abaixo é a que funciona em 2026 pra Perplexity, ChatGPT Search, AI Overview do Google e Claude. Não é estética, é função.</p>

<h3>1. Título (H1) que reflete a query real</h3>

<p>Padrões que vencem: "Como fazer X", "X vs Y, qual escolher", "O que é X (e quando usar)", "Melhores X pra Y". Evite título opaco ("A revolução silenciosa do mercado"). LLM não decifra metáfora, decifra intenção. Mantém entre 50 e 65 caracteres pra não cortar no SERP.</p>

<h3>2. TL;DR no topo, em dois níveis</h3>

<p>Pesquisa da <a href="https://www.frase.io/research/ai-citations-2026/">Frase.io (2026, análise de 17M de citações)</a> mostra que <strong>44% das citações em ChatGPT vêm do primeiro terço do conteúdo</strong>. Comece pela resposta antes de qualquer contexto. Formato que funciona: uma frase curta com a resposta direta, seguida de duas a três frases com nuance, números e contexto. Nada de aquecimento, nada de "no mundo cada vez mais digital".</p>

<h3>3. H2s descritivos, resposta na primeira frase</h3>

<p>Cada H2 precisa de quatro coisas. Pergunta ou afirmação clara como heading (não criativa). Resposta direta na primeira frase, é essa frase que o LLM extrai. Dois a quatro parágrafos curtos depois, uma ideia cada. E pelo menos um elemento extraível por seção, estatística, citação, lista ou tabela.</p>

<p><strong>Tamanho ideal por seção: 150 a 300 palavras.</strong> Esse é o tamanho típico de chunk em sistemas RAG. Seção mais longa será fragmentada pelo motor, e você perde controle sobre qual pedaço vai virar citação.</p>

<h3>4. FAQ no final, alta taxa de citação</h3>

<p>LLM <em>adora</em> FAQ. Schema <code>FAQPage</code> tem das maiores taxas de citação em AI Overviews e Perplexity, segundo análise de 17M citações da Frase.io. Use cinco a oito perguntas, escritas exatamente como o usuário faria, com resposta direta de uma a três frases. Inclua variações de "People Also Ask" do Google quando souber.</p>

<h3>5. Bio do autor + data de revisão</h3>

<p>Bloco final com nome real do autor, uma a duas linhas de credenciais, link pra LinkedIn ou página do autor, e "Última revisão em DD/MM/AAAA". Isso ativa schema <code>Person</code> e sinais de E-E-A-T, que o Gemini valoriza explicitamente em sua documentação pública de qualidade de conteúdo.</p>

<h2>As 5 técnicas com efeito empírico de impacto</h2>

<p>A tabela abaixo resume as técnicas testadas em <a href="https://arxiv.org/abs/2311.09735">GEO: Generative Engine Optimization (Aggarwal et al., KDD'24)</a>, com o lift médio de visibilidade em respostas geradas. As cinco que valem o trabalho:</p>

<table>
  <thead>
    <tr>
      <th>Técnica</th>
      <th>O que faz</th>
      <th>Lift médio</th>
      <th>Esforço</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Quotation Addition</strong></td>
      <td>Citação direta com aspas e atribuição</td>
      <td>+41%</td>
      <td>Baixo</td>
    </tr>
    <tr>
      <td><strong>Statistics Addition</strong></td>
      <td>Substituir afirmação qualitativa por número com fonte</td>
      <td>+33%</td>
      <td>Médio</td>
    </tr>
    <tr>
      <td><strong>Cite Sources</strong></td>
      <td>Referência inline com link pra fonte primária</td>
      <td>+30% (até +115% em sites pequenos)</td>
      <td>Baixo</td>
    </tr>
    <tr>
      <td><strong>Comparison Tables</strong></td>
      <td>Tabela markdown comparando opções</td>
      <td>Não medido isolado, alto na prática</td>
      <td>Médio</td>
    </tr>
    <tr>
      <td><strong>Justification Attributes</strong></td>
      <td>Atributo curto + razão quantificada em bold</td>
      <td>Não medido isolado, alto em "best X for Y"</td>
      <td>Baixo</td>
    </tr>
  </tbody>
</table>

<h3>Técnica 1, Quotation Addition (+41%)</h3>

<p>É a estratégia mais eficaz medida no paper. Substitui afirmação genérica por citação direta, com aspas, atribuição e fonte.</p>

<p>Genérico (não citável): <em>Estudos indicam que o setor cresceu nos últimos anos.</em></p>

<p>Citação direta (citável): <em>Em relatório de outubro de 2025, a McKinsey afirmou: "<strong>A adoção de IA generativa em empresas brasileiras passou de 18% para 47% em apenas 14 meses</strong>" (Estado da IA no Brasil, 2025).</em></p>

<p><strong>Densidade ideal: uma a duas citações diretas a cada 800 palavras.</strong> Mais que isso vira plágio. Menos perde o efeito.</p>

<h3>Técnica 2, Statistics Addition (+33%)</h3>

<p>Toda afirmação que contém "muitos", "a maioria", "geralmente", "cresceu" ou "diminuiu" precisa virar número com fonte.</p>

<p>Genérico: <em>A maioria dos brasileiros usa WhatsApp.</em></p>

<p>Quantificado: <strong>93% dos brasileiros conectados usam WhatsApp diariamente</strong>, segundo a <a href="https://cetic.br/pt/pesquisa/domicilios/">Pesquisa TIC Domicílios 2024</a> do Cetic.br.</p>

<p>Meta de densidade: um dado quantificado a cada 80 a 120 palavras.</p>

<h3>Técnica 3, Cite Sources (+30%, até +115% em sites pequenos)</h3>

<p>Inclua referência inline com link pra fonte primária. Não é só "segundo a Forbes", é com link real pro artigo específico. Em ordem decrescente de peso, prefira papers acadêmicos (arXiv, ACL, NeurIPS), relatórios oficiais (governo, órgão regulador), pesquisas originais de empresa (McKinsey, Gartner, Pew), imprensa séria (Reuters, AP, Folha, Valor) e blogs reconhecidos como último recurso.</p>

<p>O lift de até +115% em sites pequenos vem da contrapartida de autoridade que a fonte externa empresta ao seu domínio jovem.</p>

<h3>Técnica 4, Comparison Tables explícitas</h3>

<p>LLM extrai tabela inteira como bloco. É uma das formas mais "sequestráveis" de conteúdo. Use pra comparar produto, recurso, plano, método, prós e contras.</p>

<table>
  <thead>
    <tr>
      <th>Critério</th>
      <th>Opção A</th>
      <th>Opção B</th>
      <th>Opção C</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Preço inicial</td>
      <td>R$ 99/mês</td>
      <td>R$ 149/mês</td>
      <td>R$ 79/mês</td>
    </tr>
    <tr>
      <td>Limite de usuários</td>
      <td>5</td>
      <td>Ilimitado</td>
      <td>10</td>
    </tr>
    <tr>
      <td>Suporte 24/7</td>
      <td>Não</td>
      <td>Sim</td>
      <td>Não</td>
    </tr>
    <tr>
      <td>Integração Slack</td>
      <td>Sim</td>
      <td>Sim</td>
      <td>Não</td>
    </tr>
  </tbody>
</table>

<h3>Técnica 5, Justification Attributes em destaque</h3>

<p>Não diga "é bom". Diga "é bom porque [razão quantificada]".</p>

<p>Genérico: <em>Tem ótima bateria.</em></p>

<p>Justificado: <strong>Bateria de 12h em uso intenso</strong>, 50% mais que a média da categoria (8h, segundo benchmark da TechRadar 2025).</p>

<p>LLM em resposta de "best X for Y" extrai atributo justificador, frase curta com claim mais evidência. Use bold no atributo principal.</p>

<h2>O que NÃO fazer, anti-padrões com efeito medido</h2>

<p>Cinco práticas com efeito negativo ou nulo documentado em pesquisa empírica. Cortar essas vale mais que adicionar técnica nova.</p>

<ul>
  <li><strong>Keyword stuffing.</strong> Resultado: -8% de visibilidade em LLM, segundo Aggarwal et al. Repetir "consultoria empresarial" 30 vezes confunde o embedding semântico.</li>
  <li><strong>Tom autoritativo sem dado.</strong> Efeito quase nulo, segundo Wan et al., ACL'24. "É amplamente reconhecido que…" sem nome e sem número é desperdício de palavras.</li>
  <li><strong>Introdução-fluff.</strong> "No mundo atual, em constante transformação digital, as empresas precisam se adaptar…" vai pro lixo. LLM raramente extrai das primeiras 100 palavras de aquecimento.</li>
  <li><strong>Parágrafo de 8+ linhas.</strong> Vira chunk único e indivisível. O motor extrai tudo ou nada. Quebre em parágrafo de uma a três frases.</li>
  <li><strong>Conteúdo escondido em JS.</strong> Se o texto principal só aparece após renderização JavaScript, muitos crawlers de AI não pegam. Teste com <code>curl -A "ChatGPT-User" sua-url | grep "frase principal"</code>.</li>
</ul>

<p>Bonus, dois anti-padrões com correlação de citação medida no <a href="https://www.frase.io/research/ai-citations-2026/">GEO-16 da Frase</a>: heading criativo sem keyword, e ausência de data visível (correlação 0,68 com citação, a mais alta do estudo).</p>

<h2>Schema markup mínimo pra um post</h2>

<p>Adicione no <code>&lt;head&gt;</code> ou via plugin. Esse bloco ativa <code>Article</code> + <code>Person</code> e é o piso pra qualquer post sério em 2026.</p>

<pre><code class="language-json">{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Título do post",
  "datePublished": "2026-04-26",
  "dateModified": "2026-04-26",
  "author": {
    "@type": "Person",
    "name": "Nome do Autor",
    "url": "https://seusite.com/autor",
    "sameAs": [
      "https://linkedin.com/in/seuautor",
      "https://twitter.com/seuautor"
    ]
  },
  "publisher": {
    "@type": "Organization",
    "name": "Nome do Blog",
    "logo": {
      "@type": "ImageObject",
      "url": "https://seusite.com/logo.png"
    }
  },
  "description": "Resumo de 150 a 160 caracteres",
  "image": "https://seusite.com/imagem-do-post.jpg"
}</code></pre>

<p>Pra post com FAQ, adicione <code>FAQPage</code> schema separado. Pra tutorial, <code>HowTo</code>. Sem schema, o motor ainda lê, mas perde sinal estrutural que diferencia post sério de post genérico.</p>

<h2>Tamanho ideal e frescor de conteúdo</h2>

<p>Análise da Frase.io em 2026 sobre 17M de citações dá uma faixa clara. Post curto (menos de 800 palavras) tem baixa taxa de citação, falta substância. Post médio (1.500 a 2.500 palavras) é o sweet spot, cobertura sem dispersão. Post long-form (3.000+ palavras) só vale pra guia pilar, e exige subseção autocontida ou o motor se perde.</p>

<p>Mais importante que tamanho é <strong>densidade de informação</strong>. 1.500 palavras com cinco estatísticas, três citações e uma tabela vencem 3.000 palavras de prosa solta.</p>

<p>Sobre frescor, o mesmo relatório aponta que <strong>URLs citadas por AI são 25,7% mais frescas que orgânico tradicional</strong>. Inclua o ano em headings quando relevante ("Melhores ferramentas de X em 2026"), atualize posts antigos com nota visível ("Atualizado em abril/2026, adicionada análise dos novos modelos") e mantenha <code>dateModified</code> atualizado no schema apenas quando houver edição real, motores detectam fraude.</p>

<h2>Linking interno, não é só pra SEO</h2>

<p>LLM usa link interno pra entender clusters de tópico. Post bem citado precisa estar conectado a outros relacionados. Regras práticas: três a sete links internos por post, sempre contextuais e nunca em footer; anchor text descritivo ("guia completo de Generative Engine Optimization") em vez de "clique aqui"; link de página antiga pra post novo, não só o contrário; e clusters formados por uma página pilar e cinco a dez posts que linkam entre si e pra ela.</p>

<p>Pra ver o lado conceitual desse mesmo problema, com foco em por que a IA escolhe um trecho em vez de outro, leia o <a href="/blog/guia-conteudo-citavel-por-llm/">guia de conteúdo citável por LLM</a>. O post atual é o operacional, esse é o conceitual.</p>

<h2>Checklist pré-publicação</h2>

<p>Cole no seu editorial. Use antes de cada publicação. A meta é checar todos os itens, não só os "fáceis".</p>

<h3>Estrutura</h3>
<ul>
  <li>H1 reflete query real, não criatividade</li>
  <li>TL;DR de duas a três frases no topo, em dois níveis (curta + detalhada)</li>
  <li>H2s descritivos, não criativos</li>
  <li>Cada seção autocontida, faz sentido sozinha</li>
  <li>Parágrafos de uma a três frases</li>
  <li>Pelo menos um elemento extraível por seção (lista, tabela, citação ou estatística)</li>
</ul>

<h3>Conteúdo</h3>
<ul>
  <li>Uma a duas citações diretas com aspas e atribuição</li>
  <li>Três a cinco estatísticas com fonte</li>
  <li>Cinco a dez links externos pra fonte primária</li>
  <li>Uma tabela comparativa, se aplicável</li>
  <li>Justification attributes em bold ("<strong>40% mais rápido</strong> porque…")</li>
  <li>Seção FAQ no final, cinco a oito perguntas</li>
  <li>Bio do autor com credenciais</li>
</ul>

<h3>Técnico</h3>
<ul>
  <li>Schema <code>Article</code> + <code>FAQPage</code> se houver FAQ</li>
  <li>Data de publicação e revisão visíveis no corpo, não só no rodapé</li>
  <li>Três a sete links internos contextuais</li>
  <li>Conteúdo principal no HTML, não só JS</li>
  <li>Meta description de 150 a 160 caracteres</li>
  <li>URL slug com keyword principal, sem datas e sem números aleatórios</li>
</ul>

<h3>Anti-padrões verificados</h3>
<ul>
  <li>Sem keyword stuffing</li>
  <li>Sem introdução-fluff</li>
  <li>Sem afirmação vaga ("muitas pessoas", "estudos mostram") sem dado</li>
  <li>Sem parágrafo gigante</li>
  <li>Sem heading criativo sem keyword</li>
</ul>

<h2>Template-base de blog post otimizado</h2>

<p>Esqueleto pronto pra colar no editor. Cada bloco tem propósito de citação, não é só preenchimento.</p>

<pre><code class="language-markdown"># [Título com keyword principal e intent claro]

**Resposta curta:** [Resposta direta em uma a duas frases.]

**Resposta detalhada:** [Duas a três frases com nuance, número e fonte.]

## [H2 que é uma pergunta ou afirmação clara]

[Frase de abertura que responde diretamente o H2.]

[Parágrafo curto com contexto.]

[Lista, tabela, citação ou estatística relevante.]

## [Próximo H2]

[Mesmo padrão.]

> "Citação direta de fonte autoritativa, com atribuição clara." —
> [Fonte com link](https://link.real)

## Comparativo, [tema] vs [alternativa]

| Critério | Opção A | Opção B |
|----------|---------|---------|
| ...      | ...     | ...     |

## Perguntas frequentes

### [Pergunta exata como usuário faria]?
[Resposta de uma a três frases.]

### [Próxima pergunta]?
[Resposta.]

---

*Escrito por [Nome], [credencial].
Última revisão: [data].
[Link para LinkedIn].*</code></pre>

<h2>Resumo executivo, dez regras pra colar na parede</h2>

<ol>
  <li>Comece pela resposta (TL;DR no topo, em dois níveis).</li>
  <li>Cada seção autocontida, 150 a 300 palavras.</li>
  <li>Citações diretas com aspas e atribuição (a estratégia #1 da pesquisa, +41%).</li>
  <li>Estatísticas com fonte em vez de adjetivos vagos.</li>
  <li>Headings descritivos, nunca criativos.</li>
  <li>FAQ no final, sempre, cinco a oito perguntas.</li>
  <li>Schema markup completo (Article + FAQPage + Person).</li>
  <li>Datas visíveis e atualizadas com honestidade.</li>
  <li>Tabelas comparativas quando fizer sentido.</li>
  <li>Bio do autor com credenciais ativando E-E-A-T.</li>
</ol>

<p>Resumo do resumo: <strong>escreva como se o LLM fosse pegar só uma seção sua e mostrar isolada para o usuário</strong>. Porque é exatamente isso que ele faz.</p>

<h2>Perguntas frequentes</h2>

<h3>GEO substitui SEO?</h3>

<p>Não. GEO (Generative Engine Optimization) é complemento, não substituto. SEO continua entregando tráfego do Google e Bing tradicionais. GEO entrega visibilidade em respostas geradas por LLM (ChatGPT, Perplexity, AI Overview). Sites bem otimizados em 2026 fazem os dois em paralelo, e várias práticas (densidade de informação, fonte primária, schema) ajudam ambos.</p>

<h3>Qual o tamanho ideal de um post pra ser citado por LLM?</h3>

<p>Entre 1.500 e 2.500 palavras é o sweet spot, segundo análise da Frase.io de 17M citações em 2026. Posts abaixo de 800 palavras raramente têm densidade suficiente. Acima de 3.000 só vale pra guia pilar, e exige subseções autocontidas. Mais importante que tamanho é densidade de fato (número, data, nome próprio) por 100 palavras.</p>

<h3>Preciso reescrever todos os posts antigos?</h3>

<p>Não. Priorize por tráfego e por intenção comercial. Pegue os dez posts que mais geram tráfego ou conversão, aplique o checklist completo, e meça citação em três a quatro semanas. Posts longtail de baixo volume podem esperar. ROI de reescrita está concentrado em poucos posts pilares, não em volume.</p>

<h3>Como mensuro se o post está sendo citado?</h3>

<p>Três métodos práticos. Primeiro, monitorar logs de servidor por user-agents de bot de AI (ChatGPT-User, PerplexityBot, ClaudeBot, Google-Extended), volume crescente indica indexação ativa. Segundo, rodar manualmente um conjunto fixo de 20 a 30 perguntas relevantes ao seu negócio em ChatGPT, Perplexity e AI Overview, registrando se seu domínio aparece como fonte. Terceiro, ferramentas dedicadas (Profound, Otterly, AthenaHQ) que automatizam essa medição em escala.</p>

<h3>FAQ no final é mesmo necessário?</h3>

<p>É. Schema <code>FAQPage</code> tem das maiores taxas de citação em AI Overviews e Perplexity, segundo análise de 17M citações da Frase.io. Use cinco a oito perguntas, escritas como o usuário faria (não como você gostaria que fossem feitas), com resposta de uma a três frases.</p>

<h3>Posso usar IA pra escrever o post?</h3>

<p>Pode, mas com revisão humana de citação e fonte. Modelos alucinam estatística e atribuição, e citação fake é o pior anti-padrão possível, queima credibilidade do domínio em ciclos futuros. Use IA pra primeiro draft de estrutura, mas valide cada número, cada link e cada nome próprio à mão antes de publicar.</p>

<hr/>

<p><em>Pra fechar a trilha, o <a href="/blog/guia-conteudo-citavel-por-llm/">guia de conteúdo citável por LLM</a> traz a explicação conceitual de por que esses padrões funcionam, e o <a href="/blog/guia-sitemap-dinamico-em-escala/">guia de sitemap dinâmico em escala</a> resolve o pré-requisito técnico de garantir que o motor consiga ler seu site de fato.</em></p>`,
    seo_title: 'Manual de AEO/GEO, como escrever um post que LLM cita',
    seo_description:
      'Manual prático com checklist e template pra escrever post que ChatGPT, Perplexity e Gemini citem. Cinco técnicas com lift medido, anti-padrões, schema markup.',
    keywords: [
      'GEO',
      'AEO',
      'Generative Engine Optimization',
      'Answer Engine Optimization',
      'conteúdo citado por LLM',
      'SEO ChatGPT',
      'SEO Perplexity',
      'AI Overview Google',
      'checklist GEO',
      'template blog AEO',
    ],
  },
  'tech-seo-google-news-top-stories': {
    title: 'Google News e Top Stories, o que de fato decide aparecer',
    excerpt:
      'Candidatura ao Google News acabou em 2019, AMP deixou de ser obrigatório em 2021, e Top Stories nem usa o índice do Google News. As 12 coisas que decidem indexação rápida e citação em carrossel, com news-sitemap dinâmico, schema completo e hook de IndexNow no publish.',
    tag: 'SEO Técnico',
    published_at: '2026-05-08',
    read_time_min: 14,
    body: `<p><strong>Resposta curta:</strong> Google News e Top Stories são dois produtos distintos. Top Stories é onde está 90% do tráfego de notícia, usa o índice principal do Google e não exige aprovação em lugar nenhum. Pra entrar, o que decide é news-sitemap dinâmico das últimas 48h, schema <code>NewsArticle</code> com <code>datePublished</code>/<code>dateModified</code> em ISO 8601 com timezone, autoria com <code>sameAs</code> apontando pra perfil real, SSR do schema, link da home pra URL nova, três aspect ratios de imagem, e hook automático de IndexNow + URL Inspection API no publish.</p>

<p><strong>Resposta detalhada:</strong> a maior parte do que se lê em PT-BR sobre Google News é de 2019 a 2022, fala de candidatura (acabou) e AMP (deixou de ser obrigatório em junho/2021). O que realmente move ponteiro hoje é (1) entender que Top Stories usa o índice normal e Google News usa um índice próprio, (2) news-sitemap separado com regra dura de 48h, (3) <code>NewsArticle</code> renderizado server-side, não client-side, (4) consistência entre header HTTP <code>Last-Modified</code> e <code>dateModified</code> do JSON-LD (quando divergem, Google ignora), (5) imagem em 16:9, 4:3 e 1:1 porque cada superfície escolhe diferente, (6) crawl budget priorizado pra URLs frescas via <code>robots.txt</code> agressivo nos arquivos antigos, (7) janela de relevância em horas, então hook de IndexNow + URL Inspection API no <code>publish_post</code> é não-negociável.</p>

<h2>A confusão que custa caro, Google News ≠ Top Stories ≠ Discover</h2>

<p>Três produtos diferentes, três caminhos pra otimizar. Misturar os três é o motivo mais comum de cliente reclamar que "investiu em Google News e não viu retorno".</p>

<p><strong>Google News</strong> é o app/aba dedicada (news.google.com). Tem índice próprio, audiência menor mas qualificada (jornalistas, analistas, gente que já busca notícia direto). Pra entrar, configurar Publisher Center ajuda, mas não é obrigatório desde 2019.</p>

<p><strong>Top Stories</strong> é o carrossel que aparece no SERP normal do google.com em queries de notícia. Usa o índice principal do Google, não o índice do Google News. Não tem candidatura, é elegibilidade técnica. <strong>É onde está cerca de 90% do tráfego de news</strong> em sites comerciais.</p>

<p><strong>Discover</strong> é o feed mobile no app do Google e na home do Chrome Android. Não é busca, é recomendação. Otimização separada (imagem grande de alta qualidade pesa mais, intent não importa). Discover entrega volume de tráfego de marca como nenhum outro canal, mas é instável.</p>

<p>Implicação prática: se o seu blog é de marca (não veículo), <strong>foque Top Stories e Discover</strong>. Google News dedicado é pra portal puro-sangue.</p>

<h2>O que mudou desde 2019, e os guides desatualizados não contam</h2>

<p>Antes de qualquer checklist, descarte mentalmente o que ficou pra trás:</p>

<ul>
  <li><strong>Candidatura ao Google News acabou em dezembro/2019.</strong> Hoje é auto-discovery via crawl. Quem ainda vende "aprovação no Google News" tá vendendo placebo.</li>
  <li><strong>AMP deixou de ser obrigatório no Top Stories em junho/2021.</strong> Continua funcional, mas não dá mais boost. Se você ainda mantém AMP só por isso, pode tirar.</li>
  <li><strong>Standout markup foi descontinuado.</strong> Não use, ignora silenciosamente.</li>
  <li><strong>Subscriber-only content via structured data</strong> substitui o cloaking pra paywall. Use <code>isAccessibleForFree</code> + <code>cssSelector</code> apontando pro bloco premium.</li>
  <li><strong>IndexNow virou caminho prático</strong> pra acelerar descoberta. Bing aceita oficialmente, Google ainda não confirma, mas vale o ping pelo custo zero.</li>
</ul>

<h2>News-sitemap, a regra dura de 48 horas</h2>

<p>O sitemap de notícias é separado do principal e tem três regras que não podem ser quebradas:</p>

<ol>
  <li><strong>Só URLs publicadas nas últimas 48 horas.</strong> URL com mais que isso é ignorada e queima a confiança no arquivo. Se o sitemap consistentemente serve URLs velhas, Google reduz frequência de leitura.</li>
  <li><strong>No máximo 1.000 URLs por arquivo.</strong> Acima disso, divide em sitemap-index dedicado pra news.</li>
  <li><strong>Atualizar a cada publicação.</strong> Sitemap de news estático que regenera de hora em hora perde 30 a 50 minutos de janela em cada matéria. Em news, isso é a diferença entre entrar no Top Stories ou não.</li>
</ol>

<p>Estrutura mínima do XML:</p>

<pre><code class="language-xml">&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"&gt;
  &lt;url&gt;
    &lt;loc&gt;https://exemplo.com.br/noticia/slug-da-materia/&lt;/loc&gt;
    &lt;news:news&gt;
      &lt;news:publication&gt;
        &lt;news:name&gt;Nome do Veículo&lt;/news:name&gt;
        &lt;news:language&gt;pt&lt;/news:language&gt;
      &lt;/news:publication&gt;
      &lt;news:publication_date&gt;2026-05-08T09:30:00-03:00&lt;/news:publication_date&gt;
      &lt;news:title&gt;Título exato da matéria&lt;/news:title&gt;
    &lt;/news:news&gt;
  &lt;/url&gt;
&lt;/urlset&gt;</code></pre>

<p>No WordPress, o gerador dinâmico vive como rota custom registrada via <code>add_rewrite_rule</code>, com query filtrando posts dos últimos dois dias. Um esqueleto:</p>

<pre><code class="language-php">add_action('init', function () {
  add_rewrite_rule('^news-sitemap\\.xml$', 'index.php?news_sitemap=1', 'top');
});

add_filter('query_vars', fn($v) => array_merge($v, ['news_sitemap']));

add_action('template_redirect', function () {
  if (!get_query_var('news_sitemap')) return;

  header('Content-Type: application/xml; charset=UTF-8');
  $posts = get_posts([
    'post_type'      => 'post',
    'post_status'    => 'publish',
    'posts_per_page' => 1000,
    'date_query'     => [['after' => '48 hours ago']],
  ]);

  echo '&lt;?xml version="1.0" encoding="UTF-8"?&gt;';
  echo '&lt;urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" '
     . 'xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"&gt;';

  foreach ($posts as $p) {
    $date = get_the_date('c', $p);
    printf(
      '&lt;url&gt;&lt;loc&gt;%s&lt;/loc&gt;&lt;news:news&gt;'
      . '&lt;news:publication&gt;&lt;news:name&gt;%s&lt;/news:name&gt;'
      . '&lt;news:language&gt;pt&lt;/news:language&gt;&lt;/news:publication&gt;'
      . '&lt;news:publication_date&gt;%s&lt;/news:publication_date&gt;'
      . '&lt;news:title&gt;%s&lt;/news:title&gt;&lt;/news:news&gt;&lt;/url&gt;',
      esc_url(get_permalink($p)),
      esc_html(get_bloginfo('name')),
      esc_html($date),
      esc_html(get_the_title($p))
    );
  }

  echo '&lt;/urlset&gt;';
  exit;
});</code></pre>

<p>Em Next.js, a mesma lógica vive num route handler em <code>app/news-sitemap.xml/route.ts</code> com <code>revalidate</code> baixo (60 segundos é razoável) e o mesmo filtro de 48h aplicado à fonte de dados.</p>

<h2>NewsArticle schema, o que importa de verdade</h2>

<p>Schema <code>Article</code> serve pra blog post comum. Pra matéria de notícia, use <code>NewsArticle</code> ou <code>ReportageNewsArticle</code> (esse último pra reportagem original). O motor distingue, e Top Stories prioriza explicitamente <code>NewsArticle</code>.</p>

<p>Os campos que decidem inclusão:</p>

<ul>
  <li><strong><code>datePublished</code> e <code>dateModified</code> em ISO 8601 com timezone.</strong> <code>2026-05-08T09:30:00-03:00</code> e não <code>2026-05-08</code>. Sem timezone, Google trata como UTC e a matéria parece ter sido publicada três horas antes ou depois do que de fato.</li>
  <li><strong><code>author</code> como <code>Person</code> com <code>@id</code> e <code>sameAs</code>.</strong> Apontar pra página de autor interna e perfis externos verificáveis (LinkedIn, X). Mais sobre isso na seção de E-E-A-T.</li>
  <li><strong><code>publisher</code> com logo em URL pública direta.</strong> Não pode ser CDN com auth, não pode ser sprite, não pode ser imagem por trás de redirect. Proporção máxima 600x60px.</li>
  <li><strong><code>image</code> como array com três aspect ratios.</strong> 16:9, 4:3, 1:1. Detalhe na seção dedicada.</li>
  <li><strong><code>headline</code> com no máximo 110 caracteres.</strong> Regra silenciosa, headline maior que isso pode ser ignorada e Google usa o <code>title</code> tag.</li>
  <li><strong><code>articleSection</code></strong> com a editoria principal (Saúde, Tecnologia, Negócios). Reforça contexto temático.</li>
</ul>

<p>JSON-LD canônico pra colar no <code>&lt;head&gt;</code>:</p>

<pre><code class="language-json">{
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  "headline": "Título exato com no máximo 110 caracteres",
  "datePublished": "2026-05-08T09:30:00-03:00",
  "dateModified": "2026-05-08T09:30:00-03:00",
  "author": {
    "@type": "Person",
    "@id": "https://exemplo.com.br/autores/maria-silva/#person",
    "name": "Maria Silva",
    "url": "https://exemplo.com.br/autores/maria-silva/",
    "sameAs": [
      "https://www.linkedin.com/in/mariasilvarealperfil/",
      "https://twitter.com/mariasilvareal"
    ]
  },
  "publisher": {
    "@type": "Organization",
    "name": "Nome do Veículo",
    "logo": {
      "@type": "ImageObject",
      "url": "https://exemplo.com.br/logo-publisher.png",
      "width": 600,
      "height": 60
    }
  },
  "image": [
    "https://exemplo.com.br/img/materia-16x9.jpg",
    "https://exemplo.com.br/img/materia-4x3.jpg",
    "https://exemplo.com.br/img/materia-1x1.jpg"
  ],
  "articleSection": "Saúde",
  "description": "Resumo de 150 a 160 caracteres",
  "mainEntityOfPage": "https://exemplo.com.br/noticia/slug-da-materia/"
}</code></pre>

<h2>Os contra-intuitivos, onde a maioria queima sem perceber</h2>

<h3>1. Top Stories e AI Overviews disputam o mesmo pixel</h3>

<p>Quando AI Overview dispara numa query, o carrossel de Top Stories costuma sumir ou descer pra abaixo da dobra. Isso muda a estratégia: <strong>otimizar pra Top Stories em queries informacionais virou jogo perdedor</strong>. O ouro hoje é query transacional, query local, query de evento (eleição, jogo, lançamento) e breaking news verdadeira, onde AIO ainda não dispara por questão de latência e responsabilidade. Mapeie suas queries por SERP feature antes de investir.</p>

<h3>2. A trap do <code>dateModified</code></h3>

<p>Atualizar uma matéria já publicada perde freshness. Google trata como "republished" e a matéria pode sair do Top Stories antes do esperado. Estratégia contra-intuitiva pra atualização substancial: <strong>republicar em URL nova</strong> com <code>301</code> da antiga, preservando sinal de "matéria nova" no índice de news. Pra correção pequena (typo, ajuste factual), atualizar in-place está ok, mas não inflar <code>dateModified</code> pra ganhar boost, é detectado e penaliza.</p>

<h3>3. <code>Last-Modified</code> do header HTTP vence o <code>dateModified</code> do schema</h3>

<p>Quando os dois divergem, Google prioriza o header HTTP. WordPress com cache mal configurado serve a página com header de duas horas atrás enquanto o JSON-LD diz que foi atualizada agora. Resultado, Google ignora a "atualização" e a notícia perde freshness sem ninguém perceber.</p>

<p>Cheque o header com <code>curl -I https://exemplo.com.br/materia/</code>. Se o <code>Last-Modified</code> não bate com a data real do post, é problema de cache. Em WordPress, o hook <code>publish_post</code> precisa fazer purge da página, do feed RSS e do news-sitemap em uma operação atômica.</p>

<h3>4. O período de quarentena não-documentado</h3>

<p>Domínios novos não entram em Top Stories nas primeiras quatro a oito semanas mesmo fazendo tudo certo do lado técnico. Não está em nenhuma documentação oficial, mas é consistente em casos observados. Importante setar expectativa do cliente, "vamos publicar com tudo certo desde o dia 1, mas o tráfego de Top Stories só começa a aparecer no segundo mês".</p>

<h3>5. Mobile-first crawler + schema client-side = invisível</h3>

<p>Se o seu schema <code>NewsArticle</code> é injetado por JavaScript depois do <code>DOMContentLoaded</code>, o Googlebot mobile pode não pegar pra Top Stories. SSR ou SSG do JSON-LD não é luxo, é requisito. Em Next.js, isso significa renderizar via metadata API ou inline no componente do server. Em WordPress, hookar em <code>wp_head</code> com <code>echo</code> direto, não enfileirar script.</p>

<h2>Os subestimados, sinais que pesam mais do que parecem</h2>

<h3>Imagem em três aspect ratios não é vaidade</h3>

<p>Cada superfície do Google escolhe um aspect ratio diferente:</p>

<ul>
  <li><strong>Top Stories desktop</strong> usa 4:3 ou 16:9.</li>
  <li><strong>Top Stories mobile</strong> usa 16:9.</li>
  <li><strong>Discover</strong> usa 1:1 ou imagens largas com no mínimo 1200px de largura, marcadas com <code>max-image-preview:large</code>.</li>
  <li><strong>Google News app</strong> usa thumbnail quadrado.</li>
</ul>

<p>Faltar uma proporção = sumir daquela superfície. Em editor WordPress, isso vira upload obrigatório de três variações no momento do publish, ou um pipeline de geração automática via Sharp/ImageMagick a partir de uma master image.</p>

<h3>Link da homepage pro novo post é mais forte que IndexNow</h3>

<p>Internal link da home pra URL recém-publicada é um dos sinais mais fortes de "isso é breaking, indexa agora". Por isso todo portal de notícia tem bloco "últimas notícias" no header, não é UX, é arquitetura de SEO de news. Se a sua home tem cinco notícias visíveis, o sexto post fica órfão até alguém clicar na categoria. Implicação: bloco dinâmico de últimas dez ou últimas quinze, com link direto, sem JS.</p>

<h3><code>sameAs</code> no autor muda ranking</h3>

<p>Google verifica se o autor existe fora do site. <code>Person</code> schema com <code>sameAs</code> apontando pra LinkedIn ativo, X ativo e (idealmente) ORCID ou outro perfil profissional ranqueia diferente de byline anônima. Isso cresce em peso quando o tema é YMYL (saúde, finanças, jurídico).</p>

<p>Anti-padrão clássico: criar autores fictícios com bio inventada e foto de stock. Detectado por reverse image search e por ausência de pegada externa. Resultado: rebaixamento do domínio inteiro, não só da matéria.</p>

<h3>Velocidade de TTFB importa muito mais em news que em web normal</h3>

<p>Janela de relevância de uma notícia é em horas, às vezes minutos. Durante surge de tráfego (quebra de notícia grande), Googlebot abandona crawl em sites lentos antes de pegar a matéria. Core Web Vitals não captura isso, porque CWV é métrica do usuário final pós-cache; o que importa pra crawler de news é TTFB de origem em pico de tráfego. Stress test antes do próximo evento previsível.</p>

<h2>Os ignorados, onde tem alavanca grande</h2>

<h3>Crawl budget priorizado pra URLs frescas</h3>

<p>Em sites grandes, Googlebot perde tempo em paginação infinita, tag pages, archive de autor e parâmetros de filtro. Cada URL não-news que ele crawleia é uma URL fresca que ele não crawleia. Robots.txt agressivo bloqueando tudo que não é matéria libera budget pra news:</p>

<pre><code class="language-text">User-agent: *
Disallow: /tag/
Disallow: /author/
Disallow: /page/
Disallow: /*?s=
Disallow: /*?page=
Disallow: /*?utm_

Sitemap: https://exemplo.com.br/sitemap.xml
Sitemap: https://exemplo.com.br/news-sitemap.xml</code></pre>

<p>Em sites com volume editorial alto (algumas centenas de matérias por dia), essa é a diferença entre indexar matéria nova em 30 minutos ou em 6 horas.</p>

<h3>Site Reputation Abuse Policy (mar/2024)</h3>

<p>Política do Google que pune marca publicando conteúdo "parasita" sob domínio principal pra rankear em temas que não tem a ver com a marca core. Relevante pra qualquer SaaS ou B2B que decide criar <code>/noticias/</code> pra capturar tráfego informacional sem ter linha editorial real. Aplicada com mão pesada desde maio/2024.</p>

<p>Como evitar, três regras: (1) o conteúdo precisa ser produzido por equipe interna ou parceiros com vínculo declarado, não por agência terceirizada por palavra; (2) tema precisa ter nexo com a área de atuação da marca; (3) autoria real, com bio e credencial verificáveis.</p>

<h3>CDN cache servindo <code>dateModified</code> velho</h3>

<p>Cenário comum: você atualiza a matéria, a origem tem o JSON-LD novo, mas o CDN serve a versão cacheada com <code>dateModified</code> antigo por mais 10 minutos. Google entra, vê inconsistência entre header HTTP <code>Last-Modified</code> (que veio do CDN) e <code>dateModified</code> do schema (idem, velho), e a "atualização" vira fantasma.</p>

<p>Solução: hook automático de purge no <code>publish_post</code> e <code>save_post</code> chamando a API do CDN (Cloudflare, Fastly, BunnyCDN) pra invalidar a URL específica e o news-sitemap. Sem manual.</p>

<h3>Search Console, aba "Notícias" em tipo de busca</h3>

<p>Em Performance → tipo de busca, existe a opção "Notícias" separada de "Web". Quase ninguém olha. Mostra exatamente queries que trouxeram tráfego do Google News (não Top Stories, esse aparece em Web). Use pra calibrar editoria, identificar tópicos com tração e cortar tópicos com zero retorno.</p>

<h2>Velocidade publish-to-index, onde a corrida é decidida</h2>

<p>Em news, o ranking é decidido em 30 minutos a 2 horas após publicação. Quem chega depois pega o resto. Três alavancas pra acelerar descoberta:</p>

<ol>
  <li><strong>Ping de news-sitemap</strong> via <code>https://www.google.com/ping?sitemap=https://exemplo.com.br/news-sitemap.xml</code>. Ainda funciona pra news (deixou de funcionar pra sitemap normal em 2023).</li>
  <li><strong>URL Inspection API</strong> do Search Console, força recrawl programático da URL específica.</li>
  <li><strong>IndexNow</strong> via Bing (oficial) e via Yandex. Google ainda não confirma uso, mas o ping é gratuito e cobre Bing News, que tem distribuição via Microsoft Start.</li>
</ol>

<p>Hook em WordPress que dispara as três no publish:</p>

<pre><code class="language-php">add_action('publish_post', function ($post_id, $post) {
  if ($post->post_type !== 'post') return;

  $url = get_permalink($post_id);

  // 1. Ping de news-sitemap
  wp_remote_get(
    'https://www.google.com/ping?sitemap=' . urlencode(home_url('/news-sitemap.xml')),
    ['timeout' => 5, 'blocking' => false]
  );

  // 2. IndexNow (Bing)
  wp_remote_post('https://api.indexnow.org/indexnow', [
    'headers'  => ['Content-Type' => 'application/json'],
    'body'     => wp_json_encode([
      'host'        => parse_url(home_url(), PHP_URL_HOST),
      'key'         => INDEXNOW_KEY,
      'urlList'     => [$url],
    ]),
    'timeout'  => 5,
    'blocking' => false,
  ]);

  // 3. Purge CDN (exemplo Cloudflare)
  wp_remote_post(
    'https://api.cloudflare.com/client/v4/zones/' . CF_ZONE . '/purge_cache',
    [
      'headers'  => [
        'Authorization' => 'Bearer ' . CF_TOKEN,
        'Content-Type'  => 'application/json',
      ],
      'body'     => wp_json_encode(['files' => [$url, home_url('/news-sitemap.xml')]]),
      'timeout'  => 5,
      'blocking' => false,
    ]
  );
}, 10, 2);</code></pre>

<p>URL Inspection API é mais chata (OAuth + biblioteca Google), mas vale pro time de SEO ter um botão de "forçar reindexação" no painel admin pra matéria que não foi pega após 30min.</p>

<h2>YMYL pra news, o filtro extra que ninguém comenta</h2>

<p>Top Stories aplica filtro de credibilidade mais agressivo em temas YMYL (Your Money or Your Life), saúde, finanças, jurídico, eleição. Não basta ter <code>NewsArticle</code> e bom schema, precisa de:</p>

<ul>
  <li><strong>Autor com credencial declarada via <code>hasCredential</code>.</strong> Pra saúde, CRM, CRP, CRO ou similar como propriedade do <code>Person</code>.</li>
  <li><strong>Revisor médico/jurídico nomeado e linkado.</strong> Schema <code>reviewedBy</code> é underused, mas válido.</li>
  <li><strong>Citação de fonte primária.</strong> Em saúde, PubMed, Ministério da Saúde, sociedade médica brasileira da especialidade. Em finanças, Banco Central, B3, fonte oficial.</li>
  <li><strong>Data de revisão visível no corpo,</strong> não só no schema.</li>
  <li><strong>Política editorial pública.</strong> Página explicando processo de revisão e correção.</li>
</ul>

<p>Conteúdo médico, jurídico ou financeiro sem essa camada raramente entra em Top Stories mesmo fazendo tudo do checklist técnico. E quando entra, sai rápido na primeira reavaliação algorítmica.</p>

<h2>Checklist final, em ordem de prioridade</h2>

<p>Cole no editorial. Itens 1 a 5 são bloqueadores, 6 a 9 são sinais de força, 10 a 12 são otimização fina.</p>

<h3>Bloqueadores</h3>
<ol>
  <li>News-sitemap separado, dinâmico, só URLs das últimas 48h, máximo 1.000 URLs.</li>
  <li><code>NewsArticle</code> renderizado server-side, com <code>datePublished</code> e <code>dateModified</code> em ISO 8601 com timezone.</li>
  <li>Author como <code>Person</code> com <code>sameAs</code> apontando pra perfis externos verificáveis.</li>
  <li>Imagem em três aspect ratios (16:9, 4:3, 1:1), todas em URL pública direta.</li>
  <li>Header HTTP <code>Last-Modified</code> consistente com <code>dateModified</code> do schema.</li>
</ol>

<h3>Sinais de força</h3>
<ol start="6">
  <li>Hook automático de IndexNow + ping de news-sitemap + purge de CDN no publish.</li>
  <li>Bloco "últimas notícias" na home com link direto, no HTML, sem JS.</li>
  <li>Robots.txt bloqueando paginação, archives e parâmetros de filtro.</li>
  <li>Página de autor por pessoa, com bio real, foto, credencial e link externo.</li>
</ol>

<h3>Otimização fina</h3>
<ol start="10">
  <li>Publisher Center configurado (vale se você quer Google News app).</li>
  <li>Stress test de TTFB de origem em pico de tráfego.</li>
  <li>URL Inspection API exposta como botão admin pra recrawl manual de matérias atrasadas.</li>
</ol>

<h2>O que NÃO vale o esforço em 2026</h2>

<ul>
  <li><strong>AMP.</strong> Deprecated pro Top Stories, sem boost. Mantém só se já tem instalado e funciona, não cria novo.</li>
  <li><strong>Standout markup.</strong> Descontinuado.</li>
  <li><strong>Re-submeter URLs antigas.</strong> Não acelera nada, só queima budget.</li>
  <li><strong>Pagar consultoria que promete "aprovação no Google News".</strong> Não existe candidatura desde 2019.</li>
  <li><strong>Schema duplicado pra "garantir".</strong> Dois <code>NewsArticle</code> na mesma página confundem o motor, escolha um e mantenha.</li>
</ul>

<h2>Perguntas frequentes</h2>

<h3>Meu blog de marca pode aparecer no Top Stories?</h3>

<p>Pode. Top Stories não exige ser veículo de notícia, só elegibilidade técnica e tema com tração de news. Marca que publica conteúdo editorial sério em ritmo previsível, com autoria real e schema completo, entra. O risco é a Site Reputation Abuse Policy se o conteúdo for descolado da área de atuação da marca.</p>

<h3>Preciso publicar todo dia pra entrar em Top Stories?</h3>

<p>Não. Mas precisa de <strong>regularidade previsível</strong>, três a cinco matérias por semana é suficiente em nicho. Publicar em rajada e sumir queima sinal de "fonte ativa de news". Calendário editorial estável pesa mais que volume.</p>

<h3>Quanto tempo até aparecer?</h3>

<p>Com tudo certo do lado técnico, descoberta acontece em 5 a 30 minutos por matéria. Inclusão no Top Stories pode levar de 4 a 8 semanas se o domínio é novo (período de quarentena não-documentado). Domínio com histórico bom indexa e aparece no mesmo ciclo.</p>

<h3>AMP ainda ajuda?</h3>

<p>Não pra ranking, sim pra UX em mobile lento se você não tem CWV verde de outro jeito. Em 2026 é mais fácil resolver CWV de origem do que manter AMP paralelo. Quem cria site novo hoje, não cria com AMP.</p>

<h3>Top Stories e AI Overviews vão coexistir?</h3>

<p>Coexistem hoje no mesmo SERP, mas competem pelo mesmo espaço acima da dobra. AI Overview tende a aparecer em query informacional ampla, Top Stories em query de notícia recente, evento ou nome próprio. A leitura prática é: monitorar SERP feature por query e escolher pelo que aparece, não pelo que você quer que apareça.</p>

<h3>Vale a pena configurar Publisher Center se foco é Top Stories?</h3>

<p>Não como prioridade. Publisher Center serve Google News app/aba, que é fração pequena do tráfego de news. Configure se quiser cobrir o canal completo, mas Top Stories não depende disso.</p>

<h3>Como meço se entrei no Top Stories?</h3>

<p>Search Console em Performance → Aparência da pesquisa filtra por "Notícias" e por "Top Stories" (esse último em "tipos de resultado"). Em paralelo, monitorar logs de servidor por <code>Googlebot-News</code> user-agent dá pista da frequência de leitura. Pra validação manual, rodar conjunto fixo de queries de notícia em janela anônima e verificar presença no carrossel.</p>

<hr/>

<p><em>Pra fechar a trilha técnica, o <a href="/blog/guia-sitemap-dinamico-em-escala/">guia de sitemap dinâmico em escala</a> resolve o sitemap principal (separado do news-sitemap), e o <a href="/blog/guia-core-web-vitals-wordpress-sem-plugin-cache/">guia de Core Web Vitals em WordPress</a> cobre a base de TTFB e renderização que o Top Stories assume como ponto de partida.</em></p>`,
    seo_title: 'Google News e Top Stories, tech SEO em 2026',
    seo_description:
      'Como aparecer no Google News e Top Stories sem ser veículo. News-sitemap dinâmico, NewsArticle schema, hook de IndexNow, contra-intuitivos que ninguém escreve em PT-BR.',
    keywords: [
      'Google News SEO',
      'Top Stories SEO',
      'tech SEO notícias',
      'news sitemap',
      'NewsArticle schema',
      'Publisher Center 2026',
      'IndexNow WordPress',
      'URL Inspection API',
      'Discover SEO',
      'YMYL news',
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
