import type { SiteOptions, TimelineRow, Faq } from './types';

export const siteOptions: SiteOptions = {
  hero_title: 'Consultor de SEO técnico e GEO',
  hero_title_tail: 'que também escreve o código.',
  hero_subtitle:
    "Eu ajudo empresas a serem achadas no Google e citadas pelas IAs. E implemento o que recomendo, em WordPress, Next.js ou Shopify. Nove anos de SEO para QConcursos, Cora, Unilever, VTEX, Inter, Sanar e Insider Store.",
  hero_cta_label: 'Ver como funciona a consultoria',
  hero_cta_url: '/consultoria-seo/',

  home_seo_title: 'Consultor SEO técnico e GEO, Sérgio Patrick',
  home_seo_description:
    'Consultor de SEO técnico e GEO que também programa. +105% de tráfego orgânico no QConcursos, +61% na Cora. Auditoria, implementação e SEO para IA.',
  home_keywords: [
    'consultor seo',
    'consultor de seo',
    'consultoria seo',
    'especialista em seo',
    'seo técnico',
    'geo seo',
    'seo para ia',
    'desenvolvedor wordpress',
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
    "Sou consultor independente de SEO técnico e GEO. Antes de abrir a consultoria, fui SEO Lead no QConcursos e na VTEX, liderei a internacionalização do Inter e atendi Unilever e L'Oreal em agência. Hoje cuido do orgânico e da visibilidade em IA de marcas como Insider Store, Sanar, Hapvida NotreDame e Fluency. Comecei no front-end e nunca parei de programar, por isso entrego a recomendação e o código. Base em Salvador, atendo o Brasil inteiro e falo inglês fluente.",

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

export const timeline: TimelineRow[] = [
  { year: '2026-Atual', company: 'Consultoria independente', role: 'Consultor de SEO técnico e GEO', note: 'Insider Store, Sanar, Hapvida NotreDame e Fluency.' },
  { year: '2023-2026', company: 'Gupy', role: 'Tech and SEO Specialist', note: 'SEO técnico, front-end de performance e automação com LLM.' },
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
    a: 'Consultoria de SEO técnico e GEO, auditoria, implementação em WordPress, Next.js ou Shopify, e automação com IA (pipelines editoriais com Claude e DeepSeek). Atendo por projeto fechado ou por acompanhamento mensal.',
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
