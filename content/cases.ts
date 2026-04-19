import type { Case } from './types';

const assets = '/images/cases';

export const cases: Record<string, Case> = {
  'pipeline-editorial-ia-revisao-medica': {
    title: 'Pipeline editorial com IA e revisão médica',
    excerpt:
      'Pipeline em três camadas com Claude + DeepSeek e revisão médica integrada ao WordPress. De 6h para 35min por artigo, 70% de preferência em teste cego.',
    category: 'Automação com LLM',
    client_anon: 'Plataforma de educação médica B2C, #1 no Brasil',
    sector: 'EdTech médica',
    role: 'Arquiteto do pipeline',
    duration: '2025 (em produção)',
    stack: [
      { item: 'PHP 8.2' },
      { item: 'WordPress' },
      { item: 'Claude API' },
      { item: 'DeepSeek API' },
      { item: 'Custom CPT' },
      { item: 'REST endpoints' },
    ],
    featured_order: 1,

    s1_context: `<p><strong>O que é:</strong> um pipeline editorial em WordPress que gera artigos médicos com Claude e DeepSeek APIs e obriga revisão humana por profissional de saúde antes de publicar. Reduziu o tempo de produção de 6h para ~35min por artigo e passou em teste cego contra editorial humano.</p><p>Contexto: time editorial limitado, demanda crescente por conteúdo médico indexável e revisado. A questão não era "gerar mais conteúdo", era "gerar mais sem perder qualidade médica e sem inflar custo de revisão".</p>`,
    s2_problem:
      '<p>Produção editorial manual levava em média 6 horas por artigo entre briefing, redação e revisão médica. Impossível escalar sem comprometer qualidade ou explodir headcount.</p>',
    s2_baseline: '6h por artigo, 1 médico revisor dedicado.',
    s3_approach: `<p>Pipeline em três camadas: (1) briefing estruturado com parâmetros SEO populado automaticamente em um banco Notion, (2) geração com Claude + DeepSeek em roles diferentes (draft vs revisão adversarial), (3) fila de revisão médica no próprio WP via CPT e post status custom. A física médica revisora aprova antes da publicação.</p><figure><img src="${assets}/motor-sanarmed-notion-radar.png" alt="Database Notion Radar de notícias com mais de 20 briefings editoriais gerados pela IA, com colunas de curso, ângulo editorial, contexto e score." loading="lazy"><figcaption>Radar editorial no Notion, cada linha é um briefing gerado automaticamente a partir de fontes médicas monitoradas.</figcaption></figure>`,
    s4_execution: `<p>Integração direta com a API da Anthropic via <code>wp_remote_post</code>, sem dependências externas. Cada artigo nasce como CPT <code>medical_draft</code> e transita por status custom até virar post publicado. O engine é open source e está publicado em <a href="https://github.com/sergiopatrick/motor-sanarmed-ai-vercel" target="_blank" rel="noopener">github.com/sergiopatrick/motor-sanarmed-ai-vercel</a>.</p><figure><img src="${assets}/motor-sanarmed-notion-detail.png" alt="Página detalhe no Notion de um briefing sobre Manejo integral da Doença de Parkinson, com campos Ângulo Editorial, Buzz, Fit, Fonte Principal, Relevância, Score e Tags." loading="lazy"><figcaption>Cada briefing vira uma página no Notion com metadata rica, score, fit, relevância, tags de especialidade, pronto para o revisor médico avaliar.</figcaption></figure>`,
    s4_snippets: [
      {
        lang: 'php',
        file_label: 'inc/radar/class-content-generator.php',
        code: `public function generate_draft( array \$brief ): array {
    \$response = wp_remote_post( self::CLAUDE_ENDPOINT, [
        'timeout' => 120,
        'headers' => [
            'Content-Type'      => 'application/json',
            'x-api-key'         => \$this->api_key,
            'anthropic-version' => '2023-06-01',
        ],
        'body' => wp_json_encode( [
            'model'      => 'claude-opus-4-7',
            'max_tokens' => 4096,
            'system'     => \$this->load_system_prompt( 'medical-editorial' ),
            'messages'   => [[
                'role'    => 'user',
                'content' => \$this->render_brief( \$brief ),
            ]],
        ] ),
    ] );

    if ( is_wp_error( \$response ) ) {
        return [ 'error' => \$response->get_error_message() ];
    }

    \$body = json_decode( wp_remote_retrieve_body( \$response ), true );
    return \$this->parse_completion( \$body['content'][0]['text'] ?? '' );
}`,
        caption: 'Chamada direta à Claude API via wp_remote_post, sem SDK externo.',
      },
    ],
    s5_results: [
      { value: '90%', label: 'Redução de tempo de produção', context: 'De 6h para ~35min por artigo' },
      { value: '70%', label: 'Preferência em teste cego', context: 'Vs baseline editorial humano' },
      { value: '1.000', label: 'Cliques projetados em 15 dias', context: 'Ramp-up pós-lançamento' },
    ],
    s5_results_text: `<p><strong>Artigos em produção no Sanar Medicina</strong>, todos gerados pelo pipeline e aprovados por revisão médica antes da publicação:</p><ul class="link-list"><li><a href="https://sanarmed.com/obesidade-infantil-avaliacao-risco-cardiovascular-conduta/" target="_blank" rel="noopener">Obesidade infantil: avaliação de risco cardiovascular e conduta</a></li><li><a href="https://sanarmed.com/pense-2026-manejo-crise-saude-mental-adolescentes/" target="_blank" rel="noopener">PeNSE 2026: manejo da crise de saúde mental em adolescentes</a></li><li><a href="https://sanarmed.com/campanha-vacinacao-influenza-2026-protocolo-aps/" target="_blank" rel="noopener">Campanha de vacinação Influenza 2026: protocolo na APS</a></li><li><a href="https://sanarmed.com/chikungunya-diagnostico-manejo-controle-vetorial/" target="_blank" rel="noopener">Chikungunya: diagnóstico, manejo e controle vetorial</a></li><li><a href="https://sanarmed.com/vacinacao-hpv-adolescentes-cobertura-catch-up/" target="_blank" rel="noopener">Vacinação HPV em adolescentes: cobertura e catch-up</a></li><li><a href="https://sanarmed.com/diagnostico-manejo-tea-pratica-clinica/" target="_blank" rel="noopener">Diagnóstico e manejo do TEA na prática clínica</a></li></ul><figure><img src="${assets}/motor-sanarmed-notion-briefing.png" alt="Recorte aproximado de dois briefings editoriais no Notion mostrando Tema, Curso, Fontes, Angulo Editorial e Justificativa." loading="lazy"><figcaption>Recorte do Notion: tema + curso + fontes + ângulo editorial + justificativa, tudo populado automaticamente.</figcaption></figure>`,
    s6_reusable: `<p>PRD completo do pipeline, mega prompt versionado (sistema de prompts por tipo de conteúdo), documento de fluxo de revisão médica. Engine open source em <a href="https://github.com/sergiopatrick/motor-sanarmed-ai-vercel" target="_blank" rel="noopener">github.com/sergiopatrick/motor-sanarmed-ai-vercel</a>, reaproveitável em qualquer vertical de conteúdo.</p><p><em>Cada artigo gerado por este pipeline entra no grafo semântico descrito no <a href="/work/linkagem-semantica-embeddings-sanar/">case 7, linkagem por embeddings</a>, conectando-se automaticamente ao CID, ao exame e ao curso relacionado.</em></p>`,
    seo_title: 'Pipeline editorial com IA e revisão médica no WordPress',
    seo_description:
      'Pipeline WordPress com Claude + DeepSeek e revisão médica humana. Briefing no Notion, geração adversarial, publicação com post status custom. 6h → 35min por artigo.',
    keywords: [
      'pipeline editorial com IA',
      'Claude API WordPress',
      'geração de conteúdo médico',
      'revisão médica',
      'Notion editorial',
    ],
  },

  'refactor-calculadoras-design-system': {
    title: 'Refactor de calculadoras com Design System',
    excerpt:
      'Suite de calculadoras médicas refatorada como Web Components nativos, 100% aderentes ao design system, com a11y AA+ e zero dependências JS.',
    category: 'Front-end',
    client_anon: 'Plataforma de educação médica B2C, #1 no Brasil',
    sector: 'EdTech médica',
    role: 'Front-end developer',
    duration: '2025',
    stack: [
      { item: 'HTML' },
      { item: 'CSS' },
      { item: 'JavaScript vanilla' },
      { item: 'Web Components' },
      { item: 'Design Tokens' },
    ],
    featured_order: 2,

    s1_context:
      '<p><strong>O que é:</strong> refactor completo de uma suite de calculadoras médicas (IMC, TFG, dose pediátrica) para Web Components nativos, aderentes ao design system corporativo e com WCAG AA+. Zero framework, zero build step. <a href="https://sanarmed.com/ferramentas-medicas/" target="_blank" rel="noopener">Live em sanarmed.com/ferramentas-medicas</a>.</p><p>Contexto: suite herdada com código inconsistente, sem acessibilidade e fora do design system. Cada calculadora era uma ilha de HTML/CSS inline, impossível de atualizar sem tocar N arquivos.</p>',
    s2_problem:
      '<p>Impossível atualizar visual sem tocar N arquivos. Zero acessibilidade. Não aderente ao design system (cores, tipografia, spacing).</p>',
    s2_baseline: '',
    s3_approach:
      '<p>Refactor completo como Web Components nativos. Um component por calculadora, compartilhando base class e tokens CSS. Zero framework, zero build step, full a11y.</p>',
    s4_execution:
      '<p>Cada calculadora é um <code>customElement</code>. Form controls nativos com labels corretas, <code>aria-live</code> para resultado dinâmico, navegação por teclado completa.</p>',
    s4_snippets: [
      {
        lang: 'javascript',
        file_label: 'assets/js/calculators/bmi-calculator.js',
        code: `class BmiCalculator extends HTMLElement {
  connectedCallback() {
    this.render();
    this.form = this.querySelector('form');
    this.output = this.querySelector('[data-output]');
    this.band = this.querySelector('[data-band]');
    this.live = this.querySelector('[data-live]');
    this.form.addEventListener('input', () => this.compute());
  }

  compute() {
    const weight = Number(this.form.weight.value);
    const height = Number(this.form.height.value) / 100;
    if (!weight || !height) return this.announce('');

    const bmi = weight / (height * height);
    const band = this.classify(bmi);
    this.output.textContent = bmi.toFixed(1);
    this.band.textContent = band;
    this.announce(\`IMC \${bmi.toFixed(1)}, \${band}\`);
  }

  classify(bmi) {
    if (bmi < 18.5) return 'Abaixo do peso';
    if (bmi < 25) return 'Peso saudável';
    if (bmi < 30) return 'Sobrepeso';
    return 'Obesidade';
  }

  announce(message) {
    this.live.textContent = message;
  }
}

customElements.define('bmi-calculator', BmiCalculator);`,
        caption: 'Web Component nativo, zero framework.',
      },
      {
        lang: 'css',
        file_label: 'assets/css/components/calculator.css',
        code: `.calculator {
  display: grid;
  gap: var(--s-5);
  padding: var(--s-6);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--color-bg-2);
  font-family: var(--font-body);
}

.calculator__output {
  font-family: var(--font-display);
  font-size: var(--fs-3xl);
  font-weight: 500;
  letter-spacing: var(--tracking-tighter);
  color: var(--color-ink);
}`,
        caption: 'Componente aderente ao design system via tokens compartilhados.',
      },
    ],
    s5_results: [
      { value: '100%', label: 'Aderência ao design system', context: 'Tokens compartilhados' },
      { value: 'AA+', label: 'WCAG contraste e navegação', context: 'Validado com axe' },
      { value: '0 KB', label: 'Dependências JS externas', context: 'Zero framework' },
    ],
    s5_results_text: '',
    s6_reusable:
      '<p>Base class <code>CalculatorComponent</code>, biblioteca de design tokens, padrão de a11y replicável para qualquer formulário dinâmico do ecossistema.</p><p><em>Cada calculadora é um nó na camada semântica descrita no <a href="/work/linkagem-semantica-embeddings-sanar/">case 7, linkagem por embeddings</a>: da página da calculadora, o usuário é roteado pro exame correspondente, pro código CID e pro curso da especialidade.</em></p>',
    seo_title: 'Refactor de calculadoras médicas em Web Components nativos',
    seo_description:
      'Calculadoras médicas refatoradas em Web Components nativos, 100% aderentes ao design system, WCAG AA+, zero framework e zero build step. Live em sanarmed.com.',
    keywords: [
      'Web Components',
      'calculadoras médicas',
      'design system',
      'WCAG AA+',
      'JavaScript vanilla',
    ],
  },

  'plugin-wordpress-fix-timezone-utc': {
    title: 'Plugin WordPress com fix de timezone (UTC)',
    excerpt:
      'Plugin com datas deslocadas 3h em cenários de cron. Regra única: UTC como fonte da verdade, conversão só no display. Zero tickets pós-deploy.',
    category: 'Plugin WP',
    client_anon: 'Plataforma de pós-graduação médica',
    sector: 'Educação',
    role: 'Plugin developer e debug',
    duration: '2025',
    stack: [
      { item: 'PHP 8.2' },
      { item: 'WordPress Plugin API' },
      { item: 'DateTimeImmutable' },
    ],
    featured_order: 3,

    s1_context:
      '<p><strong>O que é:</strong> fix de bug de timezone em plugin WordPress que integrava plataforma educacional externa (Lyceum) ao site institucional. Datas de turmas apareciam deslocadas 3 horas para alguns usuários, derrubando matrículas. Solução: UTC como single source of truth, conversão só no display layer com <code>DateTimeImmutable</code>.</p><p>Contexto: cascata de inconsistência típica de plugins que tratam data como string. Usuários em horário-padrão viam uma data; cron rodando em UTC persistia outra; página renderizada com <code>date()</code> do PHP mostrava uma terceira.</p>',
    s2_problem:
      '<p>O plugin armazenava datas no timezone do servidor (America/Sao_Paulo) e exibia com <code>date()</code> do PHP, que usa o timezone atual do runtime. Em operações batch rodando em UTC via cron, as datas saíam erradas. Cascata de inconsistência.</p>',
    s2_baseline: '',
    s3_approach:
      '<p>Regra única: armazenar tudo em UTC, converter no display layer. DateTime nunca string. Parse e format sempre explícitos.</p>',
    s4_execution:
      '<p>Criada classe dedicada a horários. Toda leitura/escrita passa por ela. Testes unitários simples cobrindo edge cases (DST, virada de dia, virada de mês).</p>',
    s4_snippets: [
      {
        lang: 'php',
        file_label: 'inc/class-course-schedule.php',
        code: `<?php
declare( strict_types=1 );

final class Course_Schedule {
    private const DISPLAY_TZ = 'America/Sao_Paulo';

    public function save( string \$local_datetime, string \$tz = self::DISPLAY_TZ ): string {
        \$local = new DateTimeImmutable( \$local_datetime, new DateTimeZone( \$tz ) );
        return \$local
            ->setTimezone( new DateTimeZone( 'UTC' ) )
            ->format( DATE_ATOM );
    }

    public function display( string \$utc_datetime ): string {
        \$utc = new DateTimeImmutable( \$utc_datetime, new DateTimeZone( 'UTC' ) );
        return \$utc
            ->setTimezone( new DateTimeZone( self::DISPLAY_TZ ) )
            ->format( 'd/m/Y \\à\\s H:i' );
    }
}`,
        caption: 'UTC como single source of truth. Conversão só no display.',
      },
    ],
    s5_results: [
      { value: '100%', label: 'Datas corretas em produção', context: 'Em todos os cenários de cron e request' },
      { value: '0', label: 'Tickets de suporte sobre horário', context: 'Após o deploy' },
    ],
    s5_results_text: '',
    s6_reusable:
      '<p>Padrão "UTC as single source of truth, convert at display" documentado para o time. Classe portável para outros plugins internos.</p>',
    seo_title: 'Plugin WordPress: fix de timezone com UTC como fonte única',
    seo_description:
      'Datas deslocadas 3h em cronjob: apliquei UTC como single source of truth e conversão só no display com DateTimeImmutable. Zero tickets de suporte pós-deploy.',
    keywords: [
      'plugin WordPress timezone',
      'UTC DateTimeImmutable',
      'PHP datetime bug',
      'cron WordPress',
    ],
  },

  'fix-pixel-x-google-ads-shopify': {
    title: 'Fix de colisão de pixel Twitter/X vs Google Ads em Shopify',
    excerpt:
      'Pixel do X sobrescrevia UTMs e gclid via history.replaceState(), quebrando atribuição do Google Ads. Guard script recuperou 100% da atribuição.',
    category: 'Martech',
    client_anon: 'Marca DTC de vestuário performance',
    sector: 'E-commerce',
    role: 'Debug e implementação',
    duration: '2025',
    stack: [
      { item: 'Shopify' },
      { item: 'GTM' },
      { item: 'JavaScript' },
      { item: 'Pixel X' },
      { item: 'Pixel Meta' },
      { item: 'Google Ads' },
    ],
    featured_order: 4,

    s1_context:
      '<p><strong>O que é:</strong> debug e fix de colisão entre o pixel do Twitter/X e o rastreamento do Google Ads numa loja Shopify. O pixel do X reescrevia a URL via <code>history.replaceState()</code>, engolindo UTMs e <code>gclid</code>, e quebrando a atribuição no checkout. Guard script recuperou 100% da atribuição.</p><p>Contexto: loja DTC com Meta Ads, Google Ads e X Ads simultâneos. Atribuição no Google Ads começou a cair sem mudança nas campanhas, sintoma clássico de conflito entre tags cliente.</p>',
    s2_problem:
      '<p>Pixel do X injetava parâmetros <code>tw_source</code>, <code>tw_adid</code> e similares via <code>history.replaceState()</code>, sobrescrevendo a URL e engolindo UTMs e <code>gclid</code> originais. O Google Ads perdia a atribuição no checkout.</p>',
    s2_baseline: '',
    s3_approach:
      '<p>Interceptar e proteger os parâmetros críticos antes que qualquer tag os modifique. Persistir em sessionStorage. Monitorar mutações na URL e re-aplicar se sobrescritas.</p>',
    s4_execution:
      '<p>Script carregado no início do <code>&lt;head&gt;</code> via GTM, antes de qualquer outro pixel. Observer em <code>history.pushState</code> e <code>history.replaceState</code>.</p>',
    s4_snippets: [
      {
        lang: 'javascript',
        file_label: 'snippets/attribution-guard.js',
        code: `(function attributionGuard() {
  const CRITICAL = ['utm_source', 'utm_medium', 'utm_campaign',
                    'utm_content', 'utm_term', 'gclid', 'fbclid'];

  const params = new URLSearchParams(window.location.search);
  const saved = {};
  CRITICAL.forEach((k) => {
    if (params.has(k)) saved[k] = params.get(k);
  });

  if (Object.keys(saved).length) {
    sessionStorage.setItem('sp_attribution', JSON.stringify(saved));
  }

  const restore = () => {
    const current = new URLSearchParams(window.location.search);
    let dirty = false;
    Object.entries(saved).forEach(([k, v]) => {
      if (!current.has(k)) {
        current.set(k, v);
        dirty = true;
      }
    });
    if (dirty) {
      const clean = \`\${window.location.pathname}?\${current}\`;
      window.history.replaceState({}, '', clean);
    }
  };

  // Intercepta mudanças de URL feitas por outros scripts
  const originalReplace = history.replaceState;
  history.replaceState = function (...args) {
    originalReplace.apply(this, args);
    restore();
  };

  window.addEventListener('DOMContentLoaded', restore);
})();`,
        caption: 'Guard script carregado antes de qualquer pixel.',
      },
    ],
    s5_results: [
      { value: '100%', label: 'Atribuição Google Ads recuperada', context: 'Medido via comparação antes/depois' },
      { value: '0', label: 'Conflitos remanescentes', context: 'Meta, X e Google coexistem' },
    ],
    s5_results_text: '',
    s6_reusable:
      '<p>Documentação técnica do conflito (nível de browser), checklist de validação cross-pixel, snippet reaplicável em qualquer Shopify com stack similar.</p>',
    seo_title: 'Fix: pixel X sobrescrevendo UTM e gclid no Shopify',
    seo_description:
      'Pixel do X sobrescrevia UTM e gclid via history.replaceState, quebrando atribuição no Google Ads. Guard script interceptou pushState/replaceState e recuperou 100%.',
    keywords: [
      'pixel X Shopify',
      'atribuição Google Ads',
      'gclid UTM sobrescrito',
      'history.replaceState guard',
    ],
  },

  'utm-persistence-arquitetura-martech-3-bus': {
    title: 'UTM persistence script e arquitetura martech em 3 BUs',
    excerpt:
      'Governança única de UTM, persistência via sessionStorage e propagação automática em links internos. Atribuição 100% coberta ponta a ponta.',
    category: 'Martech',
    client_anon: 'Grupo de educação com 3 unidades de negócio',
    sector: 'Educação',
    role: 'Lead de arquitetura martech',
    duration: '2025-2026',
    stack: [
      { item: 'JavaScript vanilla' },
      { item: 'GTM' },
      { item: 'HubSpot' },
      { item: 'GA4' },
      { item: 'WordPress' },
    ],
    featured_order: 5,

    s1_context:
      '<p><strong>O que é:</strong> governança unificada de UTM e arquitetura martech cross-BU num grupo de educação com 3 unidades de negócio. Script de persistência via <code>sessionStorage</code> + propagação automática em links internos + push no <code>dataLayer</code> para HubSpot e GA4 consumirem. Resultado: 100% de cobertura de atribuição ponta a ponta.</p><p>Contexto: 3 BUs com nomenclaturas de UTM distintas, implementações parciais de HubSpot e atribuição fragmentada. Era impossível responder "essa lead veio de onde" com confiança.</p>',
    s2_problem:
      '<p>UTMs se perdiam em navegações internas entre sites das 3 BUs. Formulários capturavam apenas o último referrer. Atribuição ficava incompleta no HubSpot.</p>',
    s2_baseline: '',
    s3_approach:
      '<p>Governança unificada de UTM nomenclature + script de persistência via sessionStorage + injeção automática em links internos + push para dataLayer para HubSpot e GA4 consumirem.</p>',
    s4_execution:
      '<p>Script único carregado em todas as 3 BUs via GTM. Captura entry point, persiste na sessão, propaga em navegação interna, expõe no dataLayer.</p>',
    s4_snippets: [
      {
        lang: 'javascript',
        file_label: 'assets/js/utm-governance.js',
        code: `const SESSION_KEY = 'sp_session_attribution';
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign',
                  'utm_content', 'utm_term'];

function captureEntryPoint() {
  const stored = sessionStorage.getItem(SESSION_KEY);
  if (stored) return JSON.parse(stored);

  const params = new URLSearchParams(window.location.search);
  const captured = {};
  UTM_KEYS.forEach((k) => {
    if (params.has(k)) captured[k] = params.get(k);
  });

  if (Object.keys(captured).length) {
    captured.captured_at = new Date().toISOString();
    captured.landing_page = window.location.pathname;
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(captured));
  }
  return captured;
}

function appendToInternalLinks(attribution) {
  if (!Object.keys(attribution).length) return;
  const selector = \`a[href^="/"], a[href*="\${window.location.hostname}"]\`;
  document.querySelectorAll(selector).forEach((a) => {
    const url = new URL(a.href, window.location.origin);
    UTM_KEYS.forEach((k) => {
      if (attribution[k] && !url.searchParams.has(k)) {
        url.searchParams.set(k, attribution[k]);
      }
    });
    a.href = url.toString();
  });
}

const attribution = captureEntryPoint();
appendToInternalLinks(attribution);

window.dataLayer = window.dataLayer || [];
window.dataLayer.push({ event: 'sp_attribution_ready', attribution });`,
        caption: 'Captura + persistência + propagação em uma função só.',
      },
    ],
    s5_results: [
      { value: '3', label: 'BUs unificadas', context: 'Governança única' },
      { value: '100%', label: 'Cobertura de atribuição', context: 'UTM preservada ponta a ponta' },
    ],
    s5_results_text: '',
    s6_reusable:
      '<p>Convenção UTM governada em documento, script versionado, plano de teste pré-produção, playbook para replicar em novas BUs.</p>',
    seo_title: 'UTM persistence e arquitetura martech em 3 BUs de educação',
    seo_description:
      'Governança única de UTM em 3 BUs: sessionStorage, propagação em links internos e push no dataLayer. HubSpot e GA4 com 100% de cobertura de atribuição.',
    keywords: [
      'UTM persistence',
      'arquitetura martech',
      'HubSpot GA4 atribuição',
      'sessionStorage UTM',
      'governança multi-BU',
    ],
  },

  'arquitetura-conteudo-scaffold-php-import': {
    title: 'Arquitetura de conteúdo e scaffold PHP para import em escala',
    excerpt:
      '114 páginas de referência e 14 categorias importadas via script PHP idempotente. Planilha como fonte de verdade, hash como checksum.',
    category: 'Front-end',
    client_anon: 'Plataforma de educação médica B2C, #1 no Brasil',
    sector: 'EdTech médica',
    role: 'Arquiteto de conteúdo + dev backend',
    duration: '2025',
    stack: [
      { item: 'Excel' },
      { item: 'PHP 8.2' },
      { item: 'WordPress' },
      { item: 'Custom Post Types' },
      { item: 'wp-cli' },
    ],
    featured_order: 6,

    s1_context:
      '<p><strong>O que é:</strong> arquitetura de conteúdo + importer PHP idempotente para WordPress que publicou 114 páginas A-Z de exames, 14 categorias e 80 subcategorias a partir de uma planilha-fonte. Hash por linha como checksum, reexecutável N vezes sem efeito colateral. <a href="https://sanarmed.com/exames/" target="_blank" rel="noopener">Live em sanarmed.com/exames</a>; exemplo de página individual: <a href="https://sanarmed.com/exames/17-oh-progesterona/" target="_blank" rel="noopener">17-OH-progesterona</a>.</p><p>Contexto: plano de expansão com 14 categorias e ~80 subcategorias alinhadas aos 5 ciclos de formação médica. Importação manual era inviável e não versionável.</p>',
    s2_problem:
      '<p>Criar ~100 páginas de taxonomia e 114 páginas de referência (A-Z Exames) à mão era lento, propenso a erro e impossível de versionar.</p>',
    s2_baseline: '',
    s3_approach:
      '<p>Planilha como fonte de verdade (6 abas). Exportação para JSON normalizado. Importer PHP idempotente (pode rodar N vezes, só atualiza o que mudou). Hash da linha como checksum.</p>',
    s4_execution:
      '<p>Script CLI rodando via wp-cli. Cada linha vira um post no CPT certo, com meta fields populados e taxonomias aplicadas.</p>',
    s4_snippets: [
      {
        lang: 'php',
        file_label: 'bin/import-exam-pages.php',
        code: `<?php
declare( strict_types=1 );

require_once __DIR__ . '/../../../wp-load.php';

final class Exam_Importer {
    public function __construct( private string \$source ) {}

    public function run(): void {
        \$rows = json_decode( file_get_contents( \$this->source ), true );
        foreach ( \$rows as \$row ) {
            \$hash = md5( serialize( \$row ) );
            \$existing = get_page_by_path( \$row['slug'], OBJECT, 'exame_medico' );

            if ( \$existing && get_post_meta( \$existing->ID, '_source_hash', true ) === \$hash ) {
                continue; // Nenhuma mudança, pula
            }

            \$id = wp_insert_post( \$this->map_fields( \$row, \$existing->ID ?? 0 ) );
            update_post_meta( \$id, '_source_hash', \$hash );
            \$this->apply_taxonomy( \$id, \$row['category'] );
        }
    }

    private function map_fields( array \$row, int \$id = 0 ): array {
        return [
            'ID'           => \$id ?: 0,
            'post_type'    => 'exame_medico',
            'post_status'  => 'publish',
            'post_title'   => \$row['title'],
            'post_name'    => \$row['slug'],
            'post_content' => \$row['body'],
            'meta_input'   => [
                '_cpt_indication'  => \$row['indication'],
                '_cpt_preparation' => \$row['preparation'],
                '_cpt_references'  => \$row['references'],
            ],
        ];
    }

    private function apply_taxonomy( int \$post_id, string \$category ): void {
        wp_set_object_terms( \$post_id, \$category, 'exam_category', false );
    }
}

( new Exam_Importer( __DIR__ . '/data/exames.json' ) )->run();`,
        caption: 'Importer idempotente. Hash como checksum.',
      },
    ],
    s5_results: [
      { value: '114', label: 'Páginas A-Z Exames publicadas', context: 'Via importer' },
      { value: '14', label: 'Categorias e 80 subcategorias', context: 'Alinhadas aos 5 ciclos' },
      { value: 'Idempotente', label: 'Reexecutável N vezes', context: 'Seguro em qualquer ambiente' },
    ],
    s5_results_text: `<p>Resultado em tráfego orgânico após a publicação do hub <code>/exames/</code> e das 114 páginas de referência individuais:</p><figure><img src="${assets}/sanarmed-exames-analytics.png" alt="Dashboard de SEO do domínio sanarmed.com/exames mostrando 35 menções em IA, 3,1K menções totais, 4,6K páginas citadas, 5,6K de tráfego orgânico, 3K palavras-chave orgânicas com +295% de crescimento, e curva de tráfego ascendente de dez/2025 a abr/2026." loading="lazy"><figcaption>sanarmed.com/exames, 5,6K sessões orgânicas, +295% em palavras-chave e 35 menções em motores de IA (ChatGPT, Claude, Gemini) pós-importação.</figcaption></figure>`,
    s6_reusable:
      '<p>Workbook de 6 abas como sistema de planejamento, importer parametrizável para qualquer CPT, convenção de hash para controle de mudança.</p><p><em>Este case alimenta o grafo semântico do <a href="/work/linkagem-semantica-embeddings-sanar/">case 7, linkagem por embeddings</a>: cada uma das 114 páginas virou nó no engine que conecta Exames, CID-10, Ferramentas e Blog.</em></p>',
    seo_title: 'Importer PHP idempotente: 114 páginas publicadas via wp-cli',
    seo_description:
      'Planilha como fonte, importer PHP idempotente (hash por linha) e wp-cli: 114 páginas A-Z Exames publicadas em escala. +295% em keywords no sanarmed.com/exames.',
    keywords: [
      'importer PHP WordPress',
      'wp-cli scaffold',
      'idempotente hash checksum',
      'programmatic SEO médico',
    ],
  },

  'linkagem-semantica-embeddings-sanar': {
    title: 'Linkagem semântica por embeddings em 5 propriedades Sanar',
    excerpt:
      'Arquitetura que conecta CID-10, Exames, Ferramentas médicas, Blog e SanarPós via embeddings vetoriais. Cada página descobre suas vizinhas semânticas automaticamente, o usuário fica no ecossistema e o funil converge pros cursos pagos.',
    category: 'SEO Técnico',
    client_anon: 'Plataforma de educação médica B2C, #1 no Brasil',
    sector: 'EdTech médica',
    role: 'Arquiteto da camada de linkagem semântica',
    duration: '2026',
    stack: [
      { item: 'Embeddings multilingual 1024d' },
      { item: 'pgvector' },
      { item: 'PHP 8.2' },
      { item: 'WordPress shortcodes' },
      { item: 'Python (ingest)' },
      { item: 'NER para backlinks contextuais' },
    ],
    featured_order: 7,

    s1_context:
      '<p><strong>O que é:</strong> uma camada de linkagem semântica entre 5 propriedades Sanar, <a href="https://sanarmed.com/cid10/" target="_blank" rel="noopener">CID-10</a>, <a href="https://sanarmed.com/exames/" target="_blank" rel="noopener">Exames</a>, <a href="https://sanarmed.com/ferramentas-medicas/" target="_blank" rel="noopener">Ferramentas médicas</a>, <a href="https://sanarmed.com/" target="_blank" rel="noopener">Blog</a> e <a href="https://pos.sanar.com.br/" target="_blank" rel="noopener">SanarPós</a>, via embeddings vetoriais. Cada página descobre automaticamente suas vizinhas semânticas (sem depender de tag ou taxonomia manual) e o funil de navegação converge para o catálogo de cursos pagos em <code>pos.sanar.com.br</code>.</p><p>Contexto: 5 propriedades com SEO individual excelente vivendo em silos. Um artigo sobre hiperplasia adrenal congênita no blog não linkava pro <a href="https://sanarmed.com/cid10/capitulo-iv/e20-e35/e25/" target="_blank" rel="noopener">CID E25</a>, nem pro exame <a href="https://sanarmed.com/exames/17-oh-progesterona/" target="_blank" rel="noopener">17-OH progesterona</a>, nem pra calculadora pediátrica, nem pro curso de Endocrinologia. Era a quíntupla óbvia daquele usuário, e ninguém ligava os pontos.</p>',
    s2_problem:
      '<p>Linkagem manual é inviável em escala. O Sanar publica novos posts, exames, códigos CID e cursos toda semana sem coordenação entre times. Matching por keyword é superficial: um artigo sobre "insulina basal" deveria linkar pra "hemoglobina glicada", mas o matcher de tag não enxerga isso. Resultado: o usuário entrava via busca orgânica, lia uma página, saía.</p><p>Além disso, cada property fazia SEO para si. Ninguém passava link juice de forma sistemática pros cursos, a camada que realmente monetiza.</p>',
    s2_baseline:
      'CTR inter-property < 1%. Páginas/sessão ~1,5. Bounce rate ~68%. Entrada orgânica em /cursos a partir de conteúdo Sanar: desprezível.',
    s3_approach:
      '<p>A ideia central: transformar cada URL em um <strong>vetor</strong> que representa o significado semântico da página (não só as palavras). Vetores próximos = páginas que tratam de conceitos próximos, mesmo sem palavra em comum. Na renderização, o engine busca os <code>top-K</code> vizinhos mais próximos e diversifica por tipo de propriedade, 1 CID + 1 Exame + 1 Ferramenta + 1 Curso, para que o bloco "Relacionados" nunca caia em câmara de eco.</p>{{DIAGRAM:sanar-ecosystem}}<p>Um segundo passo detecta entidades médicas no corpo do artigo via NER e injeta backlinks contextuais automaticamente: toda menção a um nome de exame vira link pra página canônica em <code>/exames/</code>, todo código CID vira link pra <code>/cid10/</code>, etc. Isso é o que fecha o anel de autoridade tópica.</p>',
    s4_execution:
      '<p><strong>Ingest:</strong> crawler Python coleta title + body + meta de todas as 5 properties, Blog (~2,5k artigos), Exames (114 páginas), CID-10 (~12k códigos), Ferramentas (calculadoras) e SanarPós (20+ cursos). Chunking de 2k tokens por documento, embedding via API multilingual (1024 dimensões).</p><p><strong>Store:</strong> pgvector via Supabase. Index HNSW para busca sub-100ms em ~20k vetores. Metadata indexada separadamente para filtro por <code>property_type</code> e <code>published_at</code>.</p><p><strong>Runtime no WordPress:</strong> shortcode <code>[sp_related diversify=true limit=4]</code> consulta a similarity API e renderiza o bloco. Middleware em <code>the_content</code> escaneia o HTML e converte termos médicos em links contextuais usando um léxico canônico mantido pelo time editorial.</p>',
    s4_snippets: [
      {
        lang: 'php',
        file_label: 'inc/embeddings/class-related.php',
        code: `final class Sp_Related_Shortcode {
    public function render( array \$atts ): string {
        \$atts = shortcode_atts( [
            'limit'     => 4,
            'diversify' => 'true',
        ], \$atts );

        \$post_id = get_the_ID();
        \$key     = 'sp_related_' . \$post_id . '_' . md5( serialize( \$atts ) );
        \$cached  = get_transient( \$key );
        if ( \$cached !== false ) {
            return \$cached;
        }

        \$response = wp_remote_post( self::API . '/similar', [
            'timeout' => 8,
            'body'    => wp_json_encode( [
                'url'       => get_permalink( \$post_id ),
                'k'         => (int) \$atts['limit'],
                'diversify' => \$atts['diversify'] === 'true',
            ] ),
        ] );

        if ( is_wp_error( \$response ) ) {
            return '';
        }

        \$items = json_decode( wp_remote_retrieve_body( \$response ), true ) ?: [];
        \$html  = \$this->render_items( \$items );
        set_transient( \$key, \$html, HOUR_IN_SECONDS );
        return \$html;
    }
}`,
        caption: 'Shortcode com cache de 1h: a similarity API é externa mas o custo fica amortizado por hits.',
      },
      {
        lang: 'python',
        file_label: 'ingest/embed_and_index.py',
        code: `from pgvector.psycopg import register_vector

def embed_and_index(doc: dict) -> None:
    '''Embed a single document and upsert into pgvector.'''
    text = f"{doc['title']}\\n\\n{doc['body'][:8000]}"
    vector = embedding_client.embed(text)  # 1024-dim

    with conn.cursor() as cur:
        cur.execute(
            '''
            INSERT INTO documents (url, title, property_type, published_at, embedding)
            VALUES (%s, %s, %s, %s, %s)
            ON CONFLICT (url) DO UPDATE SET
                title = EXCLUDED.title,
                embedding = EXCLUDED.embedding,
                updated_at = NOW()
            ''',
            (doc['url'], doc['title'], doc['property_type'],
             doc['published_at'], vector),
        )

def similar(url: str, k: int = 4, diversify: bool = True) -> list[dict]:
    with conn.cursor() as cur:
        cur.execute('SELECT embedding FROM documents WHERE url = %s', (url,))
        source = cur.fetchone()
        if not source:
            return []

        query = '''
            SELECT url, title, property_type,
                   1 - (embedding <=> %s) AS similarity
            FROM documents
            WHERE url != %s
            ORDER BY embedding <=> %s ASC
            LIMIT %s
        '''
        cur.execute(query, (source[0], url, source[0], k * 4))
        rows = cur.fetchall()

    return _diversify_by_property(rows, k) if diversify else rows[:k]`,
        caption: 'Pipeline de ingest em Python. A fase de diversificação garante mix de CID + Exame + Ferramenta + Curso.',
      },
    ],
    s5_results: [
      { value: '-24 pp', label: 'Bounce rate', context: 'De 68% para 44% em páginas com bloco Relacionados' },
      { value: '+73%', label: 'Páginas por sessão', context: '1,5 → 2,6 em média' },
      { value: '12%', label: 'CTR inter-property', context: 'De <1% para ~12% após injeção de backlinks' },
      { value: '+18%', label: 'Entries em SanarPós', context: 'A partir de conteúdo do ecossistema' },
    ],
    s5_results_text:
      '<p>A história que os números contam: o usuário que entrava no blog pelo Google para ler sobre hiperplasia adrenal congênita agora termina a sessão com quatro páginas vistas, um código CID pra referência, um exame laboratorial pra diagnóstico, uma calculadora pediátrica pra dose de corticoide e, no fim, uma página de curso de Endocrinologia Pediátrica no SanarPós. Ele não foi empurrado pro curso; ele chegou lá seguindo o próprio interesse, porque cada página tinha a vizinha semântica certa.</p>',
    s6_reusable:
      '<p>O engine é agnóstico de CMS, o contrato é <code>{url, title, body, property_type, published_at}</code>. Reaproveitável em qualquer ecossistema com múltiplas propriedades (e-commerce multi-marca, editora com várias revistas, SaaS com docs + blog + pricing).</p><p>Artefatos reutilizáveis: pipeline de ingest (Python), shortcode WordPress com cache, léxico de entidades médicas para NER, playbook de diversificação por tipo de propriedade, queries pgvector otimizadas com HNSW.</p>',
    seo_title: 'Linkagem semântica por embeddings entre 5 propriedades Sanar',
    seo_description:
      'Arquitetura de internal linking com embeddings vetoriais conectando CID-10, Exames, Ferramentas, Blog e SanarPós. -24pp bounce, +73% pages/session, +18% entries em cursos pagos.',
    keywords: [
      'internal linking semântico',
      'embeddings WordPress',
      'pgvector',
      'AEO topical authority',
      'ecossistema de conteúdo médico',
      'funil editorial para curso',
    ],
  },
};

export const caseCategories = [
  'Front-end',
  'SEO Técnico',
  'Martech',
  'Automação com LLM',
  'Plugin WP',
] as const;

export function categorySlug(name: string): string {
  return name
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

export function caseSlugs(): string[] {
  return Object.keys(cases);
}

export function allCasesSortedByFeature(): { slug: string; data: Case }[] {
  return Object.entries(cases)
    .map(([slug, data]) => ({ slug, data }))
    .sort((a, b) => {
      const byOrder = a.data.featured_order - b.data.featured_order;
      if (byOrder !== 0) return byOrder;
      return a.slug.localeCompare(b.slug);
    });
}

export function casesByCategorySlug(slug: string): { slug: string; data: Case }[] {
  return allCasesSortedByFeature().filter(
    (c) => categorySlug(c.data.category) === slug,
  );
}
