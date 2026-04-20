import type { SiteOptions, Service, TimelineRow, Faq } from './types';

export const siteOptions: SiteOptions = {
  hero_title: 'Front-end development com profundidade em SEO técnico.',
  hero_subtitle:
    "9 anos construindo interfaces performáticas, temas e plugins WordPress customizados, e estratégias de SEO técnico para Unilever, L'Oreal, VTEX, Inter, Cora e QConcursos. Atualmente como Tech and SEO Specialist na Gupy.",
  hero_cta_label: 'Ver projetos',
  hero_cta_url: '#selected-work',

  home_seo_title: 'Sérgio Patrick, front-end developer e SEO técnico',
  home_seo_description:
    'Front-end developer com 9 anos em WordPress custom, Core Web Vitals, SEO técnico e automação com LLM. Unilever, VTEX, Inter, Cora, Gupy, Sanar.',
  home_keywords: [
    'front-end developer Brasil',
    'WordPress developer',
    'SEO técnico',
    'AEO AI Engine Optimization',
    'Core Web Vitals',
    'automação com LLM',
    'Claude API',
    'Salvador Bahia',
  ],

  results_strip: [
    { client_name: 'QConcursos', metric: '+105%', metric_label: 'Sessões orgânicas (+11.7MM)' },
    { client_name: 'Cora', metric: '+61%', metric_label: 'Sessões orgânicas (+2.2MM)' },
    { client_name: 'Unilever', metric: '+32%', metric_label: 'Sessões + Core Web Vitals' },
    { client_name: 'VTEX (clientes)', metric: '+25%', metric_label: 'Sessões orgânicas (+2.5MM)' },
    { client_name: 'Recepedia', metric: '+23%', metric_label: 'Sessões orgânicas (+1.1MM)' },
  ],
  results_footnote:
    'Resultados atribuíveis à atuação como SEO Lead ou Technical SEO Specialist nos respectivos períodos.',

  services: [
    {
      name: 'Front-end development e performance',
      description:
        'Interfaces performáticas com HTML, CSS e JavaScript vanilla, temas e plugins WordPress custom, Core Web Vitals no verde, design systems escaláveis.',
      deliverables:
        'Implementação, refactor, otimização de performance, componentes reutilizáveis.',
    },
    {
      name: 'SEO técnico e AEO',
      description:
        'Auditoria técnica, arquitetura de conteúdo, otimização para AI Overviews e motores generativos, Core Web Vitals, schema markup, indexação em escala.',
      deliverables:
        'Diagnóstico, roadmap, sistema de briefing semântico, implementação.',
    },
    {
      name: 'Automação e integrações com LLM',
      description:
        'Pipelines editoriais com revisão humana, integrações com APIs (Claude, DeepSeek), scripts de produção, arquitetura martech (tracking, atribuição, UTM governance).',
      deliverables:
        'PRD, mega prompts, pipeline funcional, métricas de ganho de tempo.',
    },
  ],

  stack_groups: [
    {
      group_name: 'Core dev',
      items: [
        { name: 'HTML' },
        { name: 'CSS' },
        { name: 'JavaScript' },
        { name: 'PHP' },
        { name: 'Node' },
      ],
    },
    {
      group_name: 'Frameworks e plataformas',
      items: [
        { name: 'WordPress (temas e plugins custom)' },
        { name: 'Gatsby' },
        { name: 'Shopify' },
        { name: 'Elementor' },
      ],
    },
    {
      group_name: 'Dev e martech',
      items: [
        { name: 'VSCode' },
        { name: 'Claude Code' },
        { name: 'Git' },
        { name: 'GTM' },
        { name: 'Cloudflare' },
        { name: 'Zaraz' },
        { name: 'HubSpot' },
        { name: 'Meta Pixel' },
        { name: 'Launch Darkly' },
      ],
    },
    {
      group_name: 'Análise, SEO e LLM',
      items: [
        { name: 'Screaming Frog' },
        { name: 'Ahrefs' },
        { name: 'SEMrush' },
        { name: 'SimilarWeb' },
        { name: 'GSC' },
        { name: 'GA4' },
        { name: 'Looker Studio' },
        { name: 'Adobe Analytics' },
        { name: 'Power BI' },
        { name: 'Tableau' },
        { name: 'Claude API' },
        { name: 'DeepSeek API' },
        { name: 'MCP servers' },
      ],
    },
  ],

  about_preview:
    "Front-end developer com 9 anos construindo para empresas globais. Trajetória entre e-commerce enterprise (VTEX, L'Oreal, Unilever), fintech (Cora, Inter), saúde (Bayer, Sanofi US, Zoetis) e EdTech (QConcursos, SanarMed). Hoje como Tech and SEO Specialist na Gupy, combinando front-end de performance, SEO técnico e automação com LLM. Cursando Análise e Desenvolvimento de Sistemas na FGV. Base em Salvador, Bahia. Falo português nativo e inglês fluente.",

  email: 'sergio.patrick@outlook.com.br',
  linkedin: 'https://www.linkedin.com/in/sergiopatrick1',
  github: 'https://github.com/sergiopatrick',
  github_handle: '@sergiopatrick',
  whatsapp: '71 98391-1751',

  brands_kicker: 'Marcas que confiam no meu trabalho',
  brands_title: '9 anos atendendo times enterprise e startups em crescimento.',
  brands: [
    { name: 'Banco Inter', logo: 'inter.svg', url: 'https://www.bancointer.com.br' },
    { name: 'Cora', logo: 'cora.svg', url: 'https://www.cora.com.br' },
    { name: 'Gupy', logo: 'gupy.svg', url: 'https://www.gupy.io' },
    { name: 'Insider Store', logo: 'insider.svg', url: 'https://www.insiderstore.com.br' },
    { name: 'Qive', logo: 'qive.svg', url: 'https://qive.com.br' },
    { name: 'Sanar Cetrus', logo: 'sanar.svg', url: 'https://sanarmed.com' },
    { name: 'QConcursos', logo: 'qconcursos.svg', url: 'https://www.qconcursos.com' },
    { name: 'VTEX', logo: 'vtex.svg', url: 'https://vtex.com' },
    { name: 'Greenpark Content', logo: 'greenpark.svg', url: 'https://greenparkcontent.com' },
    { name: 'Ybera Paris', logo: 'ybera.svg', url: 'https://yberaparis.com' },
  ],
};

export const services: Record<string, Service> = {
  'front-end': {
    number: '01',
    title: 'Front-end development e performance',
    short_title: 'Front-end e performance',
    kicker: 'Eixo 01',
    excerpt:
      'Interfaces performáticas, Core Web Vitals no verde e design systems que escalam sem depender de framework pesado.',
    direct_answer:
      'Front-end development de quem entende que código bom é código rápido. HTML semântico, CSS vanilla com custom properties, JavaScript sem framework, temas e plugins WordPress custom, Core Web Vitals no verde e design systems que ainda vão rodar daqui a 5 anos sem quebrar em cada update de Node.',
    body_lead:
      '<p>A maioria dos sites lentos não é lenta por falta de hosting. É lenta porque o código acumula peso, framework sobre framework, plugin sobre plugin, build step que ninguém audita. O meu trabalho é o oposto: vanilla primeiro, framework só quando o problema realmente pede, performance como default e não como tarefa de fim de sprint.</p><p>Cada linha tem custo mensurável em LCP, INP, CLS e conta bancária de hosting. Trato front-end como disciplina de engenharia, tipagem forte onde possível, testes que importam, documentação que não apodrece.</p>',
    problems_standalone: [
      {
        title: 'LCP acima de 2,5s sangrando conversão',
        body: 'Hero lento, font blocking, JavaScript que trava o main thread. Audit com Lighthouse, WebPageTest e RUM real, depois cirurgia por prioridade.',
      },
      {
        title: 'Tema WordPress legado quebrando a cada mudança',
        body: 'Código spaghetti, CSS global, jQuery em tudo. Refactor incremental pra classic PHP theme custom com componentes reutilizáveis, sem virar um novo monstro.',
      },
      {
        title: 'INP ruim em forms e interações complexas',
        body: 'Event handlers pesados, re-render desnecessário, long tasks acima de 50ms. Trabalho com profiler real do Chrome, não com número de Lighthouse.',
      },
      {
        title: 'CLS tropeçando em fontes, imagens e ads',
        body: 'Font-display, dimensões reservadas, content-visibility. Estabiliza layout sem sacrificar flexibilidade visual.',
      },
      {
        title: 'Acessibilidade descoberta no teste de mercado',
        body: 'WCAG AA+ retroativa ou built-in: contrast, keyboard nav, ARIA landmarks, reduced motion. Axe + NVDA como parte do processo, não como revisão final.',
      },
      {
        title: 'Build step cada vez mais complexo',
        body: 'Vanilla, zero build. Ou Vite minimalista quando faz sentido. Sem webpack config de 500 linhas que ninguém mais entende.',
      },
      {
        title: 'Mobile morrendo em 3G/4G brasileiro',
        body: 'Budget real de 250KB por página, imagens responsivas com WebP, lazy loading cirúrgico. Performance em conexão ruim é a baseline, não bônus.',
      },
    ],
    problems_combined: [
      {
        axis: 'SEO técnico e AEO',
        axis_slug: 'seo',
        body: 'Front-end e SEO técnico são a mesma disciplina hoje, Core Web Vitals entra como fator de ranking, HTML semântico entra como sinal pra AI Overviews. Refatorar tema sem pensar em SEO é desperdiçar a janela; auditar SEO sem tocar o front-end é tratar sintoma. Junto, o ROI é composto: template performático + schema correto + arquitetura de conteúdo = autoridade tópica real.',
      },
      {
        axis: 'Automação e integrações com LLM',
        axis_slug: 'automation',
        body: 'Pipeline de IA gera 500 artigos novos por mês. Se o template do WordPress não aguenta renderizar isso sem inflar TTFB, o ganho de produção vira dívida de performance. Front-end performático é pré-requisito pra content velocity de verdade, template enxuto, componentes parametrizáveis e cache HTTP correto.',
      },
    ],
    deliverables: [
      'Implementação from scratch ou refactor incremental',
      'Tema/plugin WordPress custom (classic PHP, sem FSE)',
      'Componentes reutilizáveis + design tokens',
      'Otimização de Core Web Vitals (LCP, INP, CLS)',
      'Acessibilidade WCAG AA+ retroativa ou built-in',
      'Performance budget + monitoring contínuo',
      'Design system documentado e versionado',
    ],
    stack: [
      'HTML semântico',
      'CSS custom properties',
      'JavaScript vanilla',
      'Web Components',
      'WordPress (temas e plugins)',
      'PHP 8.2+',
      'Gatsby',
      'Shopify theming',
      'Vite (quando faz sentido)',
      'Lighthouse CI',
      'WebPageTest',
    ],
    related_case_slugs: [
      'refactor-calculadoras-design-system',
      'plugin-wordpress-fix-timezone-utc',
    ],
    faqs: [
      {
        q: 'Você só trabalha com WordPress ou aceita outros stacks?',
        a: 'WordPress é minha especialidade mais profunda, mas trabalho com qualquer stack onde HTML/CSS/JS vanilla resolvem. Tenho cases em Shopify, Gatsby e apps estáticos. Evito frameworks de UI pesados (React/Vue/Svelte) a menos que o problema realmente peça, na maioria dos portfolios e sites de conteúdo, vanilla + Web Components é mais rápido, mais leve e mais durável.',
      },
      {
        q: 'Como você mede performance real? Só Lighthouse?',
        a: 'Lighthouse é ponto de partida, não destino. Uso WebPageTest pra capturar real-user metrics com throttling de rede, Chrome DevTools Performance pra profiling de main thread, e quando o cliente tem RUM (CrUX, Vercel Analytics, SpeedCurve), trabalho com esses dados também. Número sintético só importa se refletir user experience.',
      },
      {
        q: 'Preciso refazer o site inteiro ou dá pra refatorar por partes?',
        a: 'Refactor incremental quase sempre vale mais que rewrite. Começo pela página de maior tráfego ou maior conversão, otimizo, meço, repito. Rewrite completo só faz sentido quando o código atual não tem como ser consertado sem custo maior que recomeçar.',
      },
    ],
    seo_title: 'Front-end e performance em WordPress',
    seo_description:
      'Front-end com WordPress custom, Core Web Vitals, JavaScript vanilla e design systems escaláveis. Refactor, otimização e builds from scratch.',
    keywords: [
      'front-end developer WordPress',
      'Core Web Vitals',
      'performance web',
      'JavaScript vanilla',
      'design system',
      'WCAG AA+',
    ],
  },

  seo: {
    number: '02',
    title: 'SEO técnico e AEO',
    short_title: 'SEO técnico e AEO',
    kicker: 'Eixo 02',
    excerpt:
      'SEO técnico de quem programa + AEO pra motores generativos. Arquitetura, schema, CWV, indexação e estrutura de resposta que AI extrai.',
    direct_answer:
      'SEO técnico feito por dev, audit com crawler + código, arquitetura de conteúdo, schema markup sem gambiarra, Core Web Vitals e indexação em escala. E AEO (AI Engine Optimization): estruturar página pra que Google SGE, ChatGPT, Claude e Gemini extraiam respostas diretas com atribuição.',
    body_lead:
      '<p>SEO mudou. Rankings tradicionais caem porque AI Overviews comem o CTR acima da dobra, e conteúdo que não segue estrutura de pergunta-e-resposta não entra no resultado gerado. Ao mesmo tempo, os fundamentos não mudaram, HTML semântico, Core Web Vitals, arquitetura de conteúdo e linkagem interna continuam sendo o alicerce.</p><p>Meu trabalho combina os dois mundos: arrumar o básico (tecnicamente impecável) e otimizar para o que vem depois (estrutura que LLM entende, embeddings que conectam páginas, schema que fala tanto com bot quanto com modelo generativo).</p>',
    problems_standalone: [
      {
        title: 'Tráfego orgânico estagnado apesar de conteúdo semanal',
        body: 'Conteúdo sem arquitetura, sem linkagem, sem intent mapeado. Audit completo e roadmap priorizado por ganho × esforço, nem todo problema SEO merece atenção igual.',
      },
      {
        title: 'Core Web Vitals vermelhos segurando rankings',
        body: 'Google usa CWV como tiebreaker real em categorias competitivas. Diagnóstico + implementação junto com o time de front-end (ou sozinho, se você não tiver um).',
      },
      {
        title: 'Canibalização de keywords entre páginas',
        body: 'Duas páginas disputam o mesmo termo e nenhuma ranqueia. Consolidação + redirects 301 + reorganização de internal linking.',
      },
      {
        title: 'Schema markup ausente ou mal implementado',
        body: 'Article, FAQPage, HowTo, Product, MedicalWebPage, BreadcrumbList, cada tipo tem nuance. Schema errado é pior que schema ausente (manual action risk).',
      },
      {
        title: 'Indexação instável no Google Search Console',
        body: '50% das páginas "descobertas mas não indexadas", sintoma de thin content, crawl budget mal alocado ou estrutura de site ruim. Diagnóstico vai no log do servidor.',
      },
      {
        title: 'Migração de domínio/plataforma planejada sem plano',
        body: 'Plano de redirect 1:1, rollout em fases, QA pré-produção, monitoring pós-launch. Já fiz em VTEX, WordPress, Shopify e stacks custom.',
      },
      {
        title: 'AI Overviews pegam o CTR mas meu site não aparece lá',
        body: 'AEO: pergunta clara no H2, resposta direta no primeiro parágrafo, FAQPage schema, linguagem semântica (não keyword stuffing). É engenharia de resposta, não SEO tradicional.',
      },
      {
        title: 'Competidor com conteúdo pior ranqueando melhor',
        body: 'Quase sempre é arquitetura de conteúdo + internal linking + E-E-A-T. Análise competitiva focada em estrutura, não em volume de palavras.',
      },
    ],
    problems_combined: [
      {
        axis: 'Front-end development e performance',
        axis_slug: 'front-end',
        body: 'SEO técnico sem front-end é receita de frustração: você identifica o problema (LCP ruim, HTML não semântico, schema ausente) e fica esperando o time de dev. Como eu toco os dois, o ciclo diagnóstico → fix → medir vira semana, não quarter.',
      },
      {
        axis: 'Automação e integrações com LLM',
        axis_slug: 'automation',
        body: 'Produzir conteúdo em escala só faz sentido se cada peça for indexável e extraível por AI. Junto com o pipeline de automação, entrego sistema de briefing semântico, score de fit por tópico, e linkagem interna via embeddings, autoridade tópica que se constrói sozinha depois de configurada.',
      },
    ],
    deliverables: [
      'Diagnóstico técnico (Screaming Frog, log analysis, GSC, PageSpeed)',
      'Roadmap SEO priorizado por impacto × esforço',
      'Arquitetura de conteúdo (pillar pages, content clusters, internal linking)',
      'Implementação de schema markup (Article, FAQPage, HowTo, Product, etc.)',
      'Plano de migração e redirect mapping',
      'Sistema de briefing semântico para produção de conteúdo',
      'Monitoring de Core Web Vitals + indexation coverage',
      'Playbook AEO (estrutura pergunta/resposta, direct-answer opener)',
    ],
    stack: [
      'Screaming Frog',
      'Ahrefs',
      'SEMrush',
      'SimilarWeb',
      'Google Search Console',
      'GA4',
      'Looker Studio',
      'PageSpeed Insights',
      'schema.org JSON-LD',
      'pgvector (semantic linking)',
      'Python (scripting)',
    ],
    related_case_slugs: [
      'arquitetura-conteudo-scaffold-php-import',
      'linkagem-semantica-embeddings-sanar',
    ],
    faqs: [
      {
        q: 'Em quanto tempo eu vejo resultado de SEO técnico?',
        a: 'Fix de CWV e schema aparece em semanas (2 a 6). Ganhos de arquitetura e internal linking levam 2 a 4 meses pra maturar no Google. Migração mal feita derruba tráfego na hora, por isso planejo com cuidado. Não prometo "primeiro lugar em 30 dias" porque quem promete, mente.',
      },
      {
        q: 'AEO substitui SEO tradicional?',
        a: 'Não. AEO é camada acima. Os fundamentos (HTML semântico, CWV, arquitetura, schema) continuam sendo alicerce. AEO adiciona estrutura de resposta pra que motores generativos extraiam a sua página. Quem fez SEO técnico bem chega em AEO com vantagem; quem tentou atalho, paga dobrado.',
      },
      {
        q: 'Você produz conteúdo ou só faz a parte técnica?',
        a: 'Faço arquitetura e sistema de briefing (o que escrever, estrutura da página, semântica, linkagem). A redação fica com o time editorial do cliente, ou entra no eixo 03 (automação com LLM + revisão humana), se fizer sentido pro volume.',
      },
    ],
    seo_title: 'SEO técnico e AEO com Core Web Vitals',
    seo_description:
      'SEO técnico feito por dev, audit, arquitetura, schema, migração e AEO pra AI Overviews, ChatGPT, Claude e Gemini extraírem resposta.',
    keywords: [
      'SEO técnico',
      'AEO',
      'AI Engine Optimization',
      'Core Web Vitals SEO',
      'schema markup',
      'auditoria SEO técnico',
    ],
  },

  automation: {
    number: '03',
    title: 'Automação e integrações com LLM',
    short_title: 'Automação e LLM',
    kicker: 'Eixo 03',
    excerpt:
      'Pipelines editoriais e operacionais com Claude, DeepSeek e outras APIs, com revisão humana no loop. Martech, tracking, UTM governance.',
    direct_answer:
      'Automação com LLM feita como engenharia, não como playground. Pipelines editoriais integrados ao WordPress (ou qualquer CMS) com Claude e DeepSeek, revisão humana como etapa obrigatória, métricas de ganho de tempo e qualidade. Mais arquitetura martech: tracking schema, UTM governance, integrações HubSpot/GA4/GTM sem conflito entre pixels.',
    body_lead:
      '<p>LLM roda direto do ChatGPT UI não é arquitetura, é produtividade individual. Sistema de verdade envolve versionamento de prompts, histórico reprodutível, fila de revisão humana, métricas de fit e custo. E quando cruza com conteúdo público, envolve SEO técnico e front-end também.</p><p>Entrego pipelines onde o operador humano continua sendo a autoridade final (aprovar, rejeitar, editar), mas o LLM retira a parte repetitiva, briefing estruturado, primeira versão, revisão adversarial. Resultado: 6h por artigo vira 35 min, qualidade medida por teste cego, custo rastreado por peça.</p>',
    problems_standalone: [
      {
        title: 'Produção editorial gastando 6h por artigo',
        body: 'Pipeline com briefing estruturado + geração + revisão adversarial + fila de revisão humana. 90% de redução de tempo sem perda de qualidade medida.',
      },
      {
        title: 'Atribuição fragmentada, lead "veio do nada"',
        body: 'Arquitetura de tracking ponta a ponta: captura de UTM no entry, persistência via sessionStorage, propagação em links internos, push no dataLayer, consumo no HubSpot/GA4.',
      },
      {
        title: 'UTMs se perdem em navegação interna',
        body: 'Governança + guard script que protege parâmetros críticos (UTM, gclid, fbclid) de ser sobrescritos por outros pixels.',
      },
      {
        title: 'Conflito entre pixels (Meta, Google, X)',
        body: 'Debug em nível de browser, observer em history.pushState/replaceState, ordem de load no GTM. Já recuperei 100% de atribuição Google Ads quebrada pelo pixel X.',
      },
      {
        title: 'Scripts manuais ad-hoc que ninguém mais entende',
        body: 'Refactor pra código versionado, documentado e testado. PHP/Python/bash com interface clara de input/output, rodando em cron ou queue.',
      },
      {
        title: 'LLM rodando direto do ChatGPT UI, sem governance',
        body: 'Migração pra API (Claude, DeepSeek) com versionamento de prompts, histórico auditável, rate limiting, cost tracking e fallback entre modelos.',
      },
      {
        title: 'Equipe pequena e demanda grande',
        body: 'Multiplica capacidade sem contratar, humano supervisiona, LLM executa repetição. Medição obrigatória de ganho de tempo e qualidade pós-implementação.',
      },
    ],
    problems_combined: [
      {
        axis: 'Front-end development e performance',
        axis_slug: 'front-end',
        body: 'Automação publica 500 artigos novos por mês no WordPress, o front-end precisa aguentar. Template performático, componentes parametrizáveis e cache HTTP correto são pré-requisitos. Automação sem front-end pensado vira dívida de performance e Google Search Console vermelho.',
      },
      {
        axis: 'SEO técnico e AEO',
        axis_slug: 'seo',
        body: 'LLM sem briefing semântico gera texto plausível mas não ranqueável, a página fica similar a 50 outras no SERP. Pipeline + sistema de briefing + linkagem via embeddings produz conteúdo com fit semântico real, que ranqueia e é extraído por AI Overviews.',
      },
    ],
    deliverables: [
      'PRD completo do pipeline (arquitetura, fluxo, responsabilidades)',
      'Mega prompts versionados (sistema de prompts por tipo de conteúdo)',
      'Integração direta com Claude / DeepSeek API (wp_remote_post, sem SDK externo)',
      'Script Python/PHP de ingest + orquestração',
      'Fluxo de revisão humana no loop (CPT, status, queue)',
      'Arquitetura martech (tracking schema, UTM governance, dataLayer)',
      'Guard scripts pra conflitos entre pixels',
      'Métricas de ganho de tempo, custo por peça e qualidade (teste cego)',
    ],
    stack: [
      'Claude API',
      'DeepSeek API',
      'MCP servers',
      'Python 3.11+',
      'PHP 8.2+',
      'WordPress REST API',
      'GTM',
      'HubSpot',
      'GA4',
      'Cloudflare',
      'sessionStorage',
      'pgvector',
    ],
    related_case_slugs: [
      'pipeline-editorial-ia-revisao-medica',
      'fix-pixel-x-google-ads-shopify',
      'utm-persistence-arquitetura-martech-3-bus',
    ],
    faqs: [
      {
        q: 'Automação com LLM substitui meu time editorial?',
        a: 'Não. Substitui a parte repetitiva (briefing, primeira versão, normalização) e libera o time editorial pra fazer o que humano faz melhor, julgamento clínico, nuance de marca, revisão adversarial. Em todos os pipelines que entreguei, o revisor humano aprova antes de publicar. LLM sem humano no loop é risco que eu não assumo.',
      },
      {
        q: 'Que LLM usar, Claude, GPT-4, DeepSeek?',
        a: 'Depende da task. Claude (Sonnet/Opus) costuma ser melhor em reasoning complexo, redação longa e adesão a instruções. GPT-4 é forte em código e uso geral. DeepSeek ganha em custo-benefício pra tarefas médias. Arquiteturas robustas usam mais de um, com fallback. Escolho com base em avaliação empírica (amostras reais), não hype.',
      },
      {
        q: 'Como garantir qualidade médica/jurídica num pipeline com IA?',
        a: 'Revisão humana como etapa obrigatória no workflow, não opcional. No case da plataforma de educação médica, a física médica revisora aprova cada artigo antes de publicar, sem aprovação, o post status custom bloqueia publicação. Em domínios regulados, LLM acelera produção mas não substitui accountability profissional.',
      },
    ],
    seo_title: 'Automação com LLM e integrações martech',
    seo_description:
      'Pipelines editoriais com Claude e DeepSeek, revisão humana no loop, tracking, UTM governance e integrações HubSpot/GA4.',
    keywords: [
      'automação com LLM',
      'Claude API WordPress',
      'pipeline editorial IA',
      'UTM governance',
      'martech architecture',
      'DeepSeek API',
    ],
  },
};

export const timeline: TimelineRow[] = [
  { year: '2023-Atual', company: 'Gupy', role: 'Tech and SEO Specialist', note: 'SEO técnico + front-end de performance + automação com LLM.' },
  { year: '2022-2023', company: 'Greenpark (Londres)', role: 'Technical SEO', note: 'Clientes Unilever, Campari Academy.' },
  { year: '2020-2022', company: 'grupoQ / QConcursos', role: 'SEO Lead', note: '+105% de sessões orgânicas (+11.7MM).' },
  { year: '2021', company: 'Inter', role: 'SEO Lead, Internationalization', note: 'Rollout internacional.' },
  { year: '2020', company: 'VTEX', role: 'SEO Lead, 2 squads', note: '+25% em clientes enterprise.' },
  { year: '2019', company: 'Valtech', role: 'SEO', note: "Clientes L'Oreal (11 marcas), Bayer, Sanofi US, Zoetis." },
  { year: '2018', company: 'Vibbra', role: 'SEO / Growth', note: '' },
  { year: '2017', company: 'UZD', role: 'SEO', note: '' },
  { year: '2016', company: 'OdontoPrev', role: 'Estágio em Marketing Digital', note: '' },
];

export const contactFaqs: Faq[] = [
  {
    q: 'Que tipo de projeto você aceita?',
    a: 'Front-end development (HTML/CSS/JS vanilla e React quando faz sentido), temas e plugins WordPress customizados, auditoria e implementação de SEO técnico, e automações com LLM (pipelines editoriais, integrações com Claude e DeepSeek, MCP servers). Aceito freelas e consultorias pontuais. Vagas CLT só em casos específicos.',
  },
  {
    q: 'Qual é o prazo típico para uma primeira resposta?',
    a: 'Respondo todos os emails dentro de 48h em dias úteis. Se for urgência real, marque no assunto e respondo no mesmo dia.',
  },
  {
    q: 'Como você cobra: por hora, por projeto ou por retainer?',
    a: 'Depende do escopo. Projetos fechados (implementação de case, refactor de componente, plugin) vão por valor fixo. Consultorias contínuas de SEO técnico e automação vão por retainer mensal. Emergência e debug pontual vai por hora. Mando proposta depois de entender o problema.',
  },
  {
    q: 'Você trabalha remoto ou presencial?',
    a: 'Remoto por default, base em Salvador (BA). Viagens pontuais para clientes em SP/RJ quando o projeto pede. Fuso: GMT-3.',
  },
];
