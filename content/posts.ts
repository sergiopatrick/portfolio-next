import type { Post } from './types';

export const posts: Record<string, Post> = {
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
    seo_title:
      'Google Ads perdendo atribuição por causa do Pixel do X, auditoria em 5min',
    seo_description:
      'O pixel do X reescreve a URL via history.replaceState e engole UTM e gclid. Como detectar o conflito em 5 minutos sem abrir DevTools e o guard script que resolve.',
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
    seo_title:
      'Internal linking semântico sem plugin, decidindo por volume de conteúdo',
    seo_description:
      'Quatro degraus de linkagem interna, do plugin de related ao pgvector. Framework de decisão por volume de posts e o que ninguém fala sobre embeddings.',
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
    seo_title:
      'Pipeline editorial com IA sem virar spam, revisão humana como feature',
    seo_description:
      'Geração de conteúdo com Claude e DeepSeek + revisão médica obrigatória. Por que o revisor humano é feature de produto, não gargalo a ser eliminado.',
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
    seo_title:
      'Importer idempotente em PHP, hash como checksum pra rodar N vezes',
    seo_description:
      'Três estratégias pra tornar um importer idempotente em PHP (chave natural, hash de linha, log auditável) e por que isso elimina metade dos bugs de produção.',
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
    seo_title: 'Core Web Vitals verdes em WordPress sem plugin de cache',
    seo_description:
      'Cinco intervenções em ordem de ROI que fazem LCP, INP e CLS ficarem verdes em WordPress sem depender de plugin de cache, com budget de imagem, critical CSS e JS deferido.',
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
