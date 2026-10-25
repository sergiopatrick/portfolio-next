import type { Service, ServiceGroup } from './types';

// Páginas de serviço. O slug vira a URL na raiz (ex. /consultoria-seo/).
// Regras de texto do Sérgio. Frases curtas, sem travessão, sem dois-pontos fora de código.
// Números, clientes e trechos de código só os que estão em content/cases.ts e content/site.ts.

export const services: Record<string, Service> = {
  'consultoria-seo': {
    number: '01',
    group: 'consultoria',
    title: 'Consultoria SEO técnica e de GEO para empresas que precisam crescer no orgânico',
    short_title: 'Consultoria SEO',
    kicker: 'Consultoria',
    focus_keyword: 'consultoria seo',
    excerpt:
      'Consultoria de SEO técnico e GEO com implementação própria. Eu faço o diagnóstico, o plano e o código, e meço o resultado.',
    direct_answer:
      'Consultoria SEO é o trabalho de descobrir por que um site não cresce no Google e corrigir isso em ordem de impacto. Na minha consultoria, eu faço o diagnóstico, escrevo o plano e implemento as correções no código, sem repassar para outro time. Com esse método, liderei o SEO do QConcursos no período de +105% em sessões orgânicas.',
    body_lead:
      '<p>Muita consultoria de SEO termina num PDF. O relatório aponta dezenas de problemas e o site continua igual, porque o time de desenvolvimento não tem tempo para mexer. Eu trabalho de outro jeito. Eu recomendo e eu implemento. Escrevo o schema, ajusto o template, crio o plugin e configuro a medição.</p><p>Sou Sérgio Patrick e trabalho com SEO desde 2017. Fui SEO Lead no QConcursos, na VTEX e no Inter, e Technical SEO da Greenpark, em Londres, atendendo a Unilever. Hoje atendo como consultor independente a Insider Store, a Sanar, a Hapvida NotreDame e a Fluency.</p><p>A consultoria também cobre GEO (Generative Engine Optimization). É a camada que prepara o site para ser lido e citado por ferramentas de IA, como ChatGPT, Gemini e a visão geral de IA do Google.</p>',
    problems_standalone: [
      {
        title: 'O tráfego orgânico parou de crescer',
        body: 'Você publica conteúdo toda semana e as sessões não sobem. Quase sempre falta arquitetura de conteúdo, link interno e foco na intenção de busca certa. Eu acho o gargalo antes de sugerir mais posts.',
      },
      {
        title: 'A auditoria anterior virou um PDF parado',
        body: 'O relatório listou dezenas de itens e ninguém implementou. Eu priorizo por impacto e esforço e entrego as correções prontas no código.',
      },
      {
        title: 'O time de dev não tem tempo para SEO',
        body: 'Cada ajuste de título, canonical ou schema entra numa fila de meses. Eu faço o ajuste direto no tema, no plugin ou no GTM, com revisão do seu time.',
      },
      {
        title: 'Seu site não aparece nas respostas de IA',
        body: 'O ChatGPT e a visão geral de IA do Google citam concorrentes no seu tema. Eu estruturo as páginas para serem fáceis de ler e de citar, sem prometer citação garantida.',
      },
      {
        title: 'Migração ou redesign no horizonte',
        body: 'Trocar de plataforma ou de layout sem plano derruba tráfego. Eu monto o mapa de redirecionamentos, testo antes de publicar e acompanho depois.',
      },
      {
        title: 'Muito conteúdo e pouco controle',
        body: 'Com centenas de páginas, ninguém sabe o que otimizar primeiro. No SanarMed, o time passou a fazer 332 otimizações contra 228 posts novos em 2024, tratando conteúdo como ativo.',
      },
      {
        title: 'Atribuição quebrada esconde o resultado',
        body: 'Se o UTM ou o gclid se perdem no caminho, o orgânico e a mídia parecem piores do que são. Eu corrijo a medição antes de cobrar resultado dela.',
      },
    ],
    problems_combined: [
      {
        axis: 'SEO técnico e auditoria',
        axis_slug: 'seo-tecnico',
        body: 'A consultoria começa por uma auditoria técnica. Se você só precisa do diagnóstico e das correções, sem acompanhamento mensal, a auditoria de SEO técnico resolve como projeto fechado.',
      },
      {
        axis: 'GEO e SEO para IA',
        axis_slug: 'geo-seo-para-ia',
        body: 'GEO é uma camada por cima do SEO. Quando a base técnica está arrumada, eu adapto as páginas principais para as respostas de IA, com resposta direta, dado com fonte e autor identificado.',
      },
    ],
    steps: [
      {
        title: 'Diagnóstico',
        body: 'Rastreio o site com Screaming Frog, leio o Search Console e o GA4 e abro o código dos templates. O diagnóstico mostra o que está travando o crescimento e por quê.',
      },
      {
        title: 'Plano',
        body: 'Transformo o diagnóstico numa lista priorizada por impacto e esforço. Cada item diz o que fazer, onde mexer e como medir.',
      },
      {
        title: 'Implementação',
        body: 'Eu mesmo aplico as correções no tema, nos plugins, no schema e no GTM. Quando o código é do seu time, entrego o ajuste pronto para revisão.',
      },
      {
        title: 'Medição',
        body: 'Acompanho Search Console, GA4 e a posição das palavras-chave. O que funcionou vira padrão. O que não funcionou volta para o plano.',
      },
    ],
    deliverables: [
      'Diagnóstico técnico do site com lista priorizada de problemas',
      'Plano de SEO por impacto e esforço, com dono e prazo por item',
      'Correções implementadas no código (template, schema, canonical e redirecionamentos)',
      'Arquitetura de conteúdo com páginas pilar, satélites e links internos',
      'Camada de GEO nas páginas principais (resposta direta, FAQ e dados estruturados)',
      'Painel no Looker Studio com Search Console e GA4',
      'Reunião de acompanhamento com o que foi feito, o que mudou e o próximo passo',
      'Documentação para o seu time manter o que foi feito',
    ],
    stack: [
      'Screaming Frog',
      'Google Search Console',
      'GA4',
      'Looker Studio',
      'Semrush',
      'Ahrefs',
      'PageSpeed Insights',
      'schema.org JSON-LD',
      'WordPress',
      'GTM',
      'Claude Code',
    ],
    implementation: {
      title: 'Eu recomendo e eu implemento',
      body: 'No Sanar, o diagnóstico mostrou cinco propriedades isoladas, sem link entre elas. Em vez de pedir links manuais ao time editorial, eu escrevi a camada de linkagem por embeddings e o shortcode que mostra as páginas relacionadas. A taxa de rejeição caiu 24 pontos e as páginas por sessão subiram 73%.',
      snippet: {
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

        // ...
    }
}`,
        caption: 'Shortcode do bloco de relacionados, com cache de 1 hora.',
      },
    },
    related_case_slugs: [
      'sistema-editorial-sanarmed-1113-posts',
      'linkagem-semantica-embeddings-sanar',
      'fix-pixel-x-google-ads-shopify',
    ],
    related_post_slugs: [
      'auditoria-seo-tecnico-checklist',
      'seo-e-geo-diferencas-na-pratica',
      'guia-migracao-seo-sem-perder-trafego',
      'guia-canibalizacao-keywords-auditoria',
    ],
    faqs: [
      {
        q: 'Quanto tempo leva para ver resultado com uma consultoria SEO?',
        a: 'Correções técnicas, como Core Web Vitals e dados estruturados, costumam aparecer em 2 a 6 semanas. Mudanças de arquitetura e de link interno levam de 2 a 4 meses para amadurecer no Google. Desconfie de quem promete primeira posição em 30 dias.',
      },
      {
        q: 'Como começa a consultoria?',
        a: 'Começa com uma conversa sobre o site, o negócio e as metas. Depois peço acesso de leitura ao Search Console e ao GA4 e mando uma proposta com escopo e prazo. Respondo todo contato em até 48 horas úteis.',
      },
      {
        q: 'Como você cobra pela consultoria de SEO?',
        a: 'Trabalho em três formatos. Projeto fechado, como auditoria ou migração, tem valor fixo. Consultoria contínua vai por retainer mensal. Emergência e debug pontual vão por hora. O valor sai na proposta, depois que eu entendo o tamanho do problema.',
      },
      {
        q: 'Você atende empresa de qualquer tamanho?',
        a: "Sim. Já trabalhei com marcas grandes como Unilever, L'Oréal e VTEX e com empresas em crescimento como Cora e QConcursos. O formato se ajusta ao tamanho do site e do time que vai manter o trabalho.",
      },
      {
        q: 'Tem contrato?',
        a: 'Sim. Todo trabalho começa com proposta por escrito, com escopo, entregáveis, prazo e forma de pagamento, e segue em contrato de prestação de serviço. Trabalho remoto, com base em Salvador, no fuso de Brasília.',
      },
      {
        q: 'Qual a diferença entre contratar um consultor e uma agência de SEO?',
        a: 'Na agência, o diagnóstico costuma passar por várias pessoas até chegar a quem implementa. Comigo, quem analisa é quem escreve o código. Você fala direto com quem faz, e o caminho entre achar o problema e corrigir fica mais curto.',
      },
    ],
    seo_title: 'Consultoria SEO técnica e de GEO com implementação',
    seo_description:
      'Consultoria SEO técnica e de GEO com implementação no código. Diagnóstico, plano e correção. Como SEO Lead, +105% de sessões orgânicas no QConcursos.',
    keywords: [
      'consultoria seo',
      'consultoria de seo',
      'consultor seo',
      'consultoria em seo',
      'consultor de seo',
      'contratar seo',
      'seo freelancer',
    ],
  },

  'seo-tecnico': {
    number: '02',
    group: 'consultoria',
    title: 'SEO técnico com auditoria completa e correção feita no código',
    short_title: 'SEO técnico e auditoria',
    kicker: 'Consultoria',
    focus_keyword: 'seo técnico',
    excerpt:
      'Auditoria de SEO técnico com rastreio, Search Console e leitura do código, seguida da correção. Indexação, Core Web Vitals, schema e arquitetura.',
    direct_answer:
      'SEO técnico é a parte do SEO que cuida de como o Google rastreia, entende e indexa o site. Envolve velocidade, HTML, dados estruturados, canonical, sitemap e links internos. Eu faço a auditoria de SEO técnico e corrijo o que encontro direto no código.',
    body_lead:
      '<p>Conteúdo bom não ranqueia se o Google não consegue ler a página. Uma tag canonical errada (a tag que diz ao Google qual é a versão oficial da página), um sitemap desatualizado ou um template lento podem esconder centenas de URLs.</p><p>A minha auditoria cruza três fontes. O rastreio com Screaming Frog mostra o que o robô vê. O Search Console mostra o que o Google indexou. O código mostra por que isso acontece. Sem a terceira fonte, a auditoria vira lista de sintomas.</p><p>No SanarMed, apliquei esse checklist nos 100 URLs mais acessados. No ciclo de 2024 e 2025, 88 deles receberam pelo menos um ajuste.</p>',
    problems_standalone: [
      {
        title: 'Páginas descobertas, mas não indexadas',
        body: 'O Search Console mostra muitas URLs fora do índice. A causa pode ser conteúdo raso, rastreio mal distribuído ou estrutura confusa. Eu acho a causa antes de pedir reindexação.',
      },
      {
        title: 'Core Web Vitals no vermelho',
        body: 'Core Web Vitals são as métricas de experiência do Google (LCP para carregamento, INP para resposta ao clique e CLS para estabilidade do layout). Eu meço com dados reais e corrijo no template.',
      },
      {
        title: 'Duas páginas disputando a mesma busca',
        body: 'É a canibalização, e nenhuma das duas ranqueia bem. Eu consolido o conteúdo, faço o redirecionamento 301 e reorganizo os links internos.',
      },
      {
        title: 'Dados estruturados ausentes ou errados',
        body: 'Dados estruturados (schema) são o código que descreve a página para o Google e para as IAs. Article, FAQPage, Product, MedicalWebPage e BreadcrumbList têm regras próprias. Schema errado pode ser pior que nenhum.',
      },
      {
        title: 'Migração sem plano de redirecionamento',
        body: 'Troca de domínio, de plataforma ou de layout derruba tráfego quando URLs somem. Eu monto o mapa um para um, testo antes e acompanho depois do lançamento.',
      },
      {
        title: 'Sitemap desalinhado com o site',
        body: 'Sitemap com URL que dá erro ou com data de atualização falsa gasta o rastreio do Google. Eu gero o sitemap a partir dos dados reais do site.',
      },
      {
        title: 'Concorrente com conteúdo pior ranqueando melhor',
        body: 'Quase sempre a diferença está em arquitetura de conteúdo, link interno e sinais de autoria. Eu comparo a estrutura, não o número de palavras.',
      },
    ],
    problems_combined: [
      {
        axis: 'Desenvolvedor WordPress e front-end',
        axis_slug: 'desenvolvedor-wordpress',
        body: 'Boa parte das correções de SEO técnico mora no tema e nos plugins. Quando o site é WordPress, eu ajusto o template, crio o plugin e deixo o Core Web Vitals no verde no mesmo projeto.',
      },
      {
        axis: 'Consultoria SEO',
        axis_slug: 'consultoria-seo',
        body: 'A auditoria resolve o que está quebrado hoje. A consultoria mensal mantém o site saudável, acompanha o Search Console e transforma o resultado em plano para o próximo trimestre.',
      },
    ],
    steps: [
      {
        title: 'Rastreio',
        body: 'Rodo o Screaming Frog no site inteiro e cruzo com o Search Console. Vejo status, canonical, profundidade de clique, títulos e dados estruturados.',
      },
      {
        title: 'Leitura do código',
        body: 'Abro os templates e os plugins para achar a origem de cada problema. Um erro no template pode se repetir em milhares de páginas.',
      },
      {
        title: 'Plano priorizado',
        body: 'Cada problema ganha nota de impacto e de esforço. Você recebe a ordem de ataque, com o que fazer em cada item.',
      },
      {
        title: 'Correção e validação',
        body: 'Eu implemento as correções, valido no Search Console e no PageSpeed Insights e registro o antes e o depois.',
      },
    ],
    deliverables: [
      'Relatório de auditoria com problemas priorizados por impacto e esforço',
      'Checklist aplicado aos URLs de maior tráfego',
      'Correções de indexação, canonical, redirecionamentos e sitemap',
      'Dados estruturados em JSON-LD revisados e validados',
      'Plano e execução de Core Web Vitals',
      'Mapa de redirecionamentos para migração, quando houver',
      'Arquitetura de links internos entre páginas pilar e satélites',
      'Registro do antes e do depois de cada correção',
    ],
    stack: [
      'Screaming Frog',
      'Google Search Console',
      'PageSpeed Insights',
      'Lighthouse',
      'WebPageTest',
      'Ahrefs',
      'Semrush',
      'schema.org JSON-LD',
      'Python',
      'wp-cli',
    ],
    implementation: {
      title: 'A correção sai junto com o diagnóstico',
      body: 'Criar páginas à mão não escala e não deixa histórico. No SanarMed, montei a arquitetura de 14 categorias e escrevi um importador em PHP que publicou 114 páginas de exames a partir de uma planilha. Ele roda quantas vezes for preciso e só altera o que mudou.',
      snippet: {
        lang: 'php',
        file_label: 'bin/import-exam-pages.php',
        code: `final class Exam_Importer {
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
}`,
        caption: 'Importador idempotente. O hash de cada linha diz se algo mudou.',
      },
    },
    related_case_slugs: [
      'arquitetura-conteudo-scaffold-php-import',
      'linkagem-semantica-embeddings-sanar',
      'sistema-editorial-sanarmed-1113-posts',
    ],
    related_post_slugs: [
      'auditoria-seo-tecnico-checklist',
      'guia-canibalizacao-keywords-auditoria',
      'guia-migracao-seo-sem-perder-trafego',
      'guia-sitemap-dinamico-em-escala',
      'core-web-vitals-wordpress-sem-plugin-cache',
    ],
    faqs: [
      {
        q: 'O que é uma auditoria de SEO técnico?',
        a: 'É uma revisão de tudo que afeta como o Google rastreia e indexa o site. Olho rastreio, indexação, velocidade, dados estruturados, canonical, sitemap e links internos. O resultado é uma lista priorizada do que corrigir.',
      },
      {
        q: 'Quanto tempo leva para ver resultado do SEO técnico?',
        a: 'Correções de Core Web Vitals e de dados estruturados aparecem em 2 a 6 semanas. Arquitetura e links internos levam de 2 a 4 meses. Migração mal feita derruba tráfego na hora, por isso eu planejo com cuidado.',
      },
      {
        q: 'Você só aponta os problemas ou também corrige?',
        a: 'Eu corrijo. Escrevo o código no tema, nos plugins, no GTM ou no servidor. Se o seu time prefere implementar, entrego o ajuste pronto para revisão.',
      },
      {
        q: 'A auditoria serve para sites fora do WordPress?',
        a: 'Sim. O rastreio e o Search Console funcionam em qualquer plataforma. Já trabalhei com VTEX, Shopify, Gatsby e sites próprios. O que muda é onde a correção é feita.',
      },
      {
        q: 'Qual a diferença entre SEO técnico e SEO on page?',
        a: 'SEO on page cuida do conteúdo da página, como título, texto e intertítulos. SEO técnico cuida da estrutura que deixa essa página ser rastreada, entendida e carregada rápido. Os dois andam juntos, e eu faço os dois.',
      },
    ],
    seo_title: 'SEO técnico e auditoria de SEO com correção no código',
    seo_description:
      'SEO técnico com auditoria completa e correção no código. Indexação, Core Web Vitals e schema. 88 dos 100 URLs mais acessados do SanarMed foram ajustados.',
    keywords: [
      'seo técnico',
      'auditoria seo',
      'auditoria de seo',
      'seo tecnico',
      'auditoria de seo técnico',
      'core web vitals',
      'dados estruturados',
    ],
  },

  'geo-seo-para-ia': {
    number: '03',
    group: 'consultoria',
    title: 'SEO para IA e GEO, a camada que prepara o site para ser citado pelas IAs',
    short_title: 'GEO e SEO para IA',
    kicker: 'Consultoria',
    focus_keyword: 'seo para ia',
    excerpt:
      'GEO como camada por cima do SEO. Resposta direta, dado com fonte, autoria e dados estruturados para o site ser fácil de citar por ChatGPT, Gemini e Google.',
    direct_answer:
      'SEO para IA, também chamado de GEO (Generative Engine Optimization), é o trabalho de deixar o site fácil de ler, entender e citar por ferramentas como ChatGPT, Gemini, Perplexity e a visão geral de IA do Google. GEO não substitui o SEO. É uma camada por cima dele. Ninguém controla o que a IA cita, então eu trabalho para aumentar a chance, sem prometer citação.',
    body_lead:
      '<p>As IAs de busca montam a resposta a partir de páginas que já estão bem indexadas. Por isso a base continua sendo SEO técnico, com site rápido, HTML limpo e conteúdo rastreável.</p><p>Por cima dessa base, o GEO muda a forma da página. Pergunta clara no intertítulo, resposta direta logo abaixo, números com fonte, autor identificado e dados estruturados. É o formato que facilita a IA extrair um trecho e citar a origem.</p><p>Eu também cuido da parte técnica que pouca gente olha, como o robots.txt liberando os robôs das IAs e o arquivo llms.txt. Depois que reorganizei a seção de exames do SanarMed, o painel de SEO passou a registrar 35 menções em motores de IA.</p>',
    problems_standalone: [
      {
        title: 'A visão geral de IA responde e não cita você',
        body: 'A busca mostra uma resposta pronta no topo e o clique cai. Eu reorganizo as páginas que respondem essas perguntas para que o trecho certo seja fácil de extrair.',
      },
      {
        title: 'O ChatGPT cita concorrentes no seu tema',
        body: 'Muitas vezes o concorrente tem a resposta mais clara, com número e fonte. Eu comparo as páginas citadas com as suas e mostro o que falta.',
      },
      {
        title: 'Conteúdo longo sem resposta direta',
        body: 'O texto demora três parágrafos para chegar ao ponto. Eu reescrevo a abertura para responder a pergunta nas duas primeiras frases.',
      },
      {
        title: 'Os robôs das IAs estão bloqueados',
        body: 'Um robots.txt genérico ou uma regra de firewall pode barrar GPTBot, ClaudeBot e PerplexityBot. Eu reviso o acesso e libero o que faz sentido para o negócio.',
      },
      {
        title: 'Falta sinal de autoria e de fonte',
        body: 'O Google e as IAs dão peso a quem escreve e à origem do dado. Eu ligo cada página a um autor com schema Person e coloco a fonte junto do número.',
      },
      {
        title: 'Ninguém mede a presença em IA',
        body: 'Sem medição, GEO vira palpite. Eu acompanho menções em ferramentas como o Semrush e cruzo com o tráfego que chega das IAs no GA4.',
      },
    ],
    problems_combined: [
      {
        axis: 'SEO técnico e auditoria',
        axis_slug: 'seo-tecnico',
        body: 'GEO não funciona em site que o Google não indexa. Se a base técnica tem problema, a auditoria vem primeiro e o GEO entra em seguida, nas mesmas páginas.',
      },
      {
        axis: 'Automação com IA',
        axis_slug: 'automacao-com-ia',
        body: 'Quando o volume de conteúdo é grande, eu levo o formato de GEO para dentro do pipeline editorial. Cada briefing já nasce com pergunta, resposta direta e fonte, e uma pessoa aprova antes de publicar.',
      },
    ],
    steps: [
      {
        title: 'Mapa de perguntas',
        body: 'Levanto as perguntas que o seu público faz no Google e nas IAs, com Semrush e Search Console. Fico com as que têm relação com o que você vende.',
      },
      {
        title: 'Teste de presença',
        body: 'Faço essas perguntas ao ChatGPT, ao Gemini, ao Perplexity e ao Google. Anoto quem é citado e que tipo de página aparece.',
      },
      {
        title: 'Ajuste das páginas',
        body: 'Reescrevo a abertura, os intertítulos e o FAQ, coloco dados com fonte e implemento o schema. Reviso robots.txt, sitemap e llms.txt.',
      },
      {
        title: 'Acompanhamento',
        body: 'Repito o teste de presença e acompanho o tráfego vindo das IAs. O que ganhou citação vira modelo para as próximas páginas.',
      },
    ],
    deliverables: [
      'Mapa de perguntas e temas com potencial de citação',
      'Teste de presença no ChatGPT, Gemini, Perplexity e Google',
      'Páginas principais reescritas com resposta direta e FAQ',
      'Dados estruturados de FAQPage, Article e Person',
      'Revisão do robots.txt e do acesso dos robôs de IA',
      'Arquivo llms.txt com serviços, conteúdos e autoria',
      'Guia de escrita para o seu time produzir no formato certo',
      'Medição do tráfego vindo das IAs no GA4',
    ],
    stack: [
      'Semrush',
      'Google Search Console',
      'GA4',
      'schema.org JSON-LD',
      'ChatGPT',
      'Gemini',
      'Perplexity',
      'Claude API',
      'pgvector',
    ],
    implementation: {
      title: 'Autoridade no tema feita em código',
      body: 'Cobrir o tema de ponta a ponta e ligar bem as páginas ajuda o Google e as IAs a entender do que o site trata. No Sanar, eu transformei cada página em um vetor (uma representação numérica do significado) e liguei automaticamente artigo, CID, exame, calculadora e curso. O clique entre as propriedades saiu de menos de 1% para cerca de 12%.',
      snippet: {
        lang: 'python',
        file_label: 'ingest/embed_and_index.py',
        code: `def similar(url: str, k: int = 4, diversify: bool = True) -> list[dict]:
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
        caption: 'Busca das páginas vizinhas por significado, com pgvector.',
      },
    },
    related_case_slugs: [
      'linkagem-semantica-embeddings-sanar',
      'arquitetura-conteudo-scaffold-php-import',
      'sistema-editorial-sanarmed-1113-posts',
    ],
    related_post_slugs: [
      'geo-guia-completo-baseado-em-evidencias',
      'seo-e-geo-diferencas-na-pratica',
      'manual-aeo-geo-escrever-post-citado-llm',
      'guia-conteudo-citavel-por-llm',
    ],
    faqs: [
      {
        q: 'O que é GEO?',
        a: 'GEO é a sigla de Generative Engine Optimization. É a otimização de conteúdo para motores generativos, as IAs que escrevem respostas, como ChatGPT, Gemini, Perplexity e a visão geral de IA do Google. O objetivo é ser usado como fonte nessas respostas.',
      },
      {
        q: 'GEO substitui o SEO?',
        a: 'Não. As IAs de busca se apoiam em páginas bem indexadas, então a base continua sendo SEO técnico. GEO muda a forma das páginas por cima dessa base. Quem tem SEO bem feito chega ao GEO com vantagem.',
      },
      {
        q: 'Qual a diferença entre GEO, AEO e LLMO?',
        a: 'São nomes diferentes para ideias próximas. AEO (Answer Engine Optimization) foca em respostas diretas. LLMO (Large Language Model Optimization) foca nos modelos de linguagem. GEO é o termo mais usado hoje para o conjunto.',
      },
      {
        q: 'Você garante que minha marca vai ser citada pelo ChatGPT?',
        a: 'Não. Nenhuma empresa controla o que uma IA cita, e quem garante está prometendo o que não pode cumprir. Eu aumento a chance com página clara, dado com fonte e base técnica sólida, e meço o resultado.',
      },
      {
        q: 'Em quanto tempo o GEO dá resultado?',
        a: 'Depende de quando o Google e as IAs voltam a ler as páginas. Ajustes em páginas que já ranqueiam costumam ser percebidos antes. Por isso eu começo pelas páginas que já têm tráfego e acompanho a presença a cada ciclo.',
      },
      {
        q: 'O que é llms.txt e eu preciso de um?',
        a: 'É um arquivo de texto na raiz do site que resume quem você é e aponta as páginas principais para modelos de IA. Ainda não há confirmação de que as grandes IAs usam esse arquivo. Como o custo é baixo, eu crio quando faz sentido, sem tratar como prioridade.',
      },
    ],
    seo_title: 'SEO para IA e GEO, a camada por cima do SEO técnico',
    seo_description:
      'SEO para IA e GEO para o site ser lido e citado por ChatGPT, Gemini e Google, sem promessa de citação. 35 menções em IA no hub de exames do SanarMed.',
    keywords: [
      'seo para ia',
      'seo e geo',
      'geo seo',
      'geo x seo',
      'seo para ias',
      'llmo',
      'o que é geo',
      'generative engine optimization',
    ],
  },

  'desenvolvedor-wordpress': {
    number: '01',
    group: 'desenvolvimento',
    title: 'Desenvolvedor WordPress e front-end para sites que precisam ranquear',
    short_title: 'Desenvolvedor WordPress',
    kicker: 'Desenvolvimento',
    focus_keyword: 'desenvolvedor wordpress',
    excerpt:
      'Temas e plugins WordPress sob medida, front-end leve e Core Web Vitals no verde. Código pensado para SEO desde a primeira linha.',
    direct_answer:
      'Sou desenvolvedor WordPress e front-end com foco em SEO. Eu crio temas e plugins sob medida, refatoro código legado e deixo o Core Web Vitals no verde. Como também sou consultor de SEO, cada template já sai com HTML semântico, schema e velocidade pensados para ranquear.',
    body_lead:
      '<p>Muito site lento não é culpa da hospedagem. É código acumulado, com plugin sobre plugin e JavaScript que ninguém revisa. Meu trabalho vai na direção contrária. JavaScript puro primeiro, framework só quando o problema pede, e velocidade como padrão.</p><p>Escrevo temas WordPress em PHP, plugins com a API oficial do WordPress, componentes em JavaScript puro e scripts de importação com wp-cli. Também trabalho com Shopify, Gatsby e Next.js.</p><p>No SanarMed, refiz a suíte de calculadoras médicas como Web Components, que são componentes nativos do navegador e funcionam sem framework. O resultado ficou 100% aderente ao design system, com acessibilidade WCAG AA+ e nenhuma dependência de JavaScript externa.</p>',
    problems_standalone: [
      {
        title: 'Site lento perdendo posição e venda',
        body: 'O LCP (tempo até o maior elemento da tela aparecer) passa de 2,5 segundos. Eu meço com dados reais, acho o que pesa e corrijo em ordem de impacto.',
      },
      {
        title: 'Tema legado que quebra a cada mudança',
        body: 'CSS global, jQuery em tudo e código copiado de um lugar para outro. Eu refatoro aos poucos para um tema com componentes reutilizáveis, sem tirar o site do ar.',
      },
      {
        title: 'Plugin que faz o que não deveria',
        body: 'Data errada, cron que falha, conflito com outro plugin. Num plugin de turmas, as datas apareciam 3 horas deslocadas. Depois da correção, os chamados de suporte sobre horário zeraram.',
      },
      {
        title: 'Clique que demora a responder',
        body: 'O INP (tempo de resposta a uma interação) fica alto em formulários e filtros. Eu uso o profiler do Chrome para achar as tarefas longas e aliviar o código.',
      },
      {
        title: 'Layout pulando enquanto carrega',
        body: 'O CLS (quanto o layout se mexe durante o carregamento) sobe por fonte, imagem ou anúncio sem espaço reservado. Eu estabilizo sem perder a flexibilidade do design.',
      },
      {
        title: 'Acessibilidade lembrada só no fim',
        body: 'Contraste, navegação por teclado e leitor de tela entram desde o começo. Eu valido com axe e corrijo o que falta.',
      },
      {
        title: 'Conteúdo em massa criado à mão',
        body: 'Centenas de páginas de referência digitadas uma a uma. Eu escrevo um importador que publica a partir de planilha e pode rodar de novo sem duplicar nada.',
      },
    ],
    problems_combined: [
      {
        axis: 'SEO técnico e auditoria',
        axis_slug: 'seo-tecnico',
        body: 'Refatorar o tema sem pensar em SEO desperdiça a chance. Eu junto as duas coisas. O template novo já sai com canonical, schema, breadcrumb e Core Web Vitals revisados.',
      },
      {
        axis: 'Automação com IA',
        axis_slug: 'automacao-com-ia',
        body: 'Um pipeline com IA pode publicar centenas de páginas por mês. O tema precisa aguentar esse volume sem ficar lento. Eu desenho os dois juntos, com template enxuto e cache correto.',
      },
    ],
    steps: [
      {
        title: 'Medição',
        body: 'Rodo Lighthouse, WebPageTest e o relatório de Core Web Vitals do Search Console. Leio o código do tema e a lista de plugins.',
      },
      {
        title: 'Escopo',
        body: 'Defino o que refatorar, o que reescrever e o que manter. Refatorar por partes quase sempre vale mais que refazer tudo.',
      },
      {
        title: 'Desenvolvimento',
        body: 'Escrevo o código com Git e ambiente de teste. Começo pela página de maior tráfego ou de maior conversão.',
      },
      {
        title: 'Entrega e medição',
        body: 'Publico, comparo as métricas com o antes e documento o que foi feito para o seu time manter.',
      },
    ],
    deliverables: [
      'Tema WordPress sob medida ou refatoração do tema atual',
      'Plugins WordPress próprios com a API oficial',
      'Componentes reutilizáveis com design tokens',
      'Otimização de Core Web Vitals (LCP, INP e CLS)',
      'Acessibilidade WCAG AA+',
      'Importadores e scripts com wp-cli',
      'Schema, canonical e breadcrumb no template',
      'Código versionado no Git e documentado',
    ],
    stack: [
      'WordPress',
      'PHP 8.2',
      'JavaScript',
      'Web Components',
      'CSS custom properties',
      'wp-cli',
      'Shopify',
      'Gatsby',
      'Next.js',
      'Lighthouse',
      'WebPageTest',
      'Git',
    ],
    implementation: {
      title: 'Plugin que resolve a causa',
      body: 'O plugin gravava as datas no fuso do servidor, e o cron rodava em UTC (o horário universal). Eu criei uma classe única de horários. Tudo é salvo em UTC e convertido só na hora de exibir. Depois do deploy, nenhum chamado de suporte sobre horário.',
      snippet: {
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
        caption: 'UTC como fonte única. Conversão só na exibição.',
      },
    },
    related_case_slugs: [
      'refactor-calculadoras-design-system',
      'plugin-wordpress-fix-timezone-utc',
      'arquitetura-conteudo-scaffold-php-import',
    ],
    related_post_slugs: [
      'core-web-vitals-wordpress-sem-plugin-cache',
      'importer-idempotente-php-rodar-n-vezes',
      'guia-programmatic-seo-wordpress',
      'internal-linking-semantico-sem-plugin-pgvector',
    ],
    faqs: [
      {
        q: 'Você só trabalha com WordPress?',
        a: 'WordPress é onde tenho mais experiência, mas também trabalho com Shopify, Gatsby e Next.js. Evito framework pesado quando HTML, CSS e JavaScript puros resolvem. Em site de conteúdo, isso costuma deixar a página mais rápida e mais fácil de manter.',
      },
      {
        q: 'Você cria plugin WordPress sob medida?',
        a: 'Sim. Escrevo plugins em PHP com a API oficial do WordPress, para integrar sistemas, criar tipos de conteúdo, importar dados ou corrigir comportamento. Já fiz plugin de integração com sistema acadêmico e importador de páginas em massa.',
      },
      {
        q: 'Preciso refazer o site inteiro?',
        a: 'Quase nunca. Refatorar por partes costuma valer mais. Começo pela página de maior tráfego, otimizo, meço e sigo para a próxima. Refazer tudo só compensa quando consertar custa mais que recomeçar.',
      },
      {
        q: 'Como você mede o Core Web Vitals?',
        a: 'Lighthouse é o ponto de partida. Uso WebPageTest para simular rede lenta, o painel de desempenho do Chrome para achar tarefas longas e os dados reais do Search Console. Número de laboratório só importa se bater com a experiência de quem usa o site.',
      },
      {
        q: 'Você atende como desenvolvedor freelancer?',
        a: 'Sim. Atendo em projeto fechado, como um plugin ou uma refatoração, ou por hora em emergência e debug. Trabalho remoto, com base em Salvador.',
      },
    ],
    seo_title: 'Desenvolvedor WordPress e front-end com foco em SEO',
    seo_description:
      'Desenvolvedor WordPress e front-end freelancer. Temas, plugins e Core Web Vitals no verde. Calculadoras médicas em Web Components, com zero JavaScript externo.',
    keywords: [
      'desenvolvedor wordpress',
      'desenvolvimento wordpress',
      'criar plugin wordpress',
      'core web vitals',
      'desenvolvedor front end freelancer',
      'desenvolvedor freelancer',
      'tema wordpress sob medida',
    ],
  },

  'automacao-com-ia': {
    number: '02',
    group: 'desenvolvimento',
    title: 'Automação com IA para conteúdo e marketing, com revisão humana antes de publicar',
    short_title: 'Automação com IA',
    kicker: 'Desenvolvimento',
    focus_keyword: 'automação com ia',
    excerpt:
      'Pipelines editoriais com Claude e DeepSeek e revisão humana obrigatória, mais a arquitetura de medição com UTM, dataLayer e GTM.',
    direct_answer:
      'Automação com IA, no meu trabalho, é um sistema que usa modelos como Claude e DeepSeek para tirar a parte repetitiva da produção de conteúdo e de marketing. Uma pessoa sempre aprova antes de publicar. No SanarMed, o tempo por artigo caiu de 6 horas para cerca de 35 minutos, com revisão médica obrigatória.',
    body_lead:
      '<p>Usar o ChatGPT na janela do navegador ajuda uma pessoa, mas não vira processo. Um sistema de verdade tem prompts versionados, histórico, fila de revisão, controle de custo e medição de qualidade.</p><p>Eu monto esse sistema dentro do CMS que você já usa. A IA faz o briefing, a primeira versão e uma revisão crítica. O especialista aprova, edita ou recusa. No teste cego, os artigos do pipeline do SanarMed foram preferidos em 70% das comparações com o texto feito só por pessoas.</p><p>Também cuido da automação que sustenta a medição. UTM, dataLayer (a camada que leva os dados do site para as ferramentas de medição), GTM e integração com HubSpot e GA4.</p>',
    problems_standalone: [
      {
        title: 'Cada artigo leva horas para sair',
        body: 'Briefing, redação e revisão tomam o dia inteiro. Um pipeline com briefing estruturado, geração e fila de revisão corta esse tempo sem tirar o especialista do processo.',
      },
      {
        title: 'IA usada sem regra nenhuma',
        body: 'Cada pessoa usa um prompt diferente e ninguém sabe o custo. Eu levo o uso para a API, com prompts versionados, histórico e controle de gasto.',
      },
      {
        title: 'Conteúdo de IA que soa genérico',
        body: 'Sem briefing com dado e ângulo, o texto sai igual a outros 50. Eu monto o briefing com pesquisa, fonte e intenção de busca antes da geração.',
      },
      {
        title: 'Lead que veio do nada',
        body: 'A origem se perde entre páginas e formulários. Eu capturo a UTM na entrada, guardo na sessão e envio para o HubSpot e o GA4 pelo dataLayer.',
      },
      {
        title: 'Um pixel quebrando a atribuição de outro',
        body: 'Um pixel reescreve a URL e apaga o gclid do Google Ads. Eu acho o conflito no navegador e protejo os parâmetros antes de qualquer tag.',
      },
      {
        title: 'Scripts soltos que ninguém entende',
        body: 'Rotinas manuais viram código versionado e documentado, em PHP, Python ou JavaScript, com entrada e saída claras.',
      },
      {
        title: 'Time pequeno e demanda grande',
        body: 'A IA executa a repetição e a pessoa supervisiona. O ganho de tempo e a qualidade são medidos depois da implantação.',
      },
    ],
    problems_combined: [
      {
        axis: 'GEO e SEO para IA',
        axis_slug: 'geo-seo-para-ia',
        body: 'Conteúdo gerado em escala precisa ser fácil de citar. Eu coloco o formato de GEO no próprio briefing, com pergunta, resposta direta e fonte, para cada artigo já nascer pronto.',
      },
      {
        axis: 'Desenvolvedor WordPress e front-end',
        axis_slug: 'desenvolvedor-wordpress',
        body: 'O pipeline publica no WordPress por um tipo de conteúdo próprio, com status de revisão. Eu escrevo essa integração e garanto que o tema aguenta o volume sem perder velocidade.',
      },
    ],
    steps: [
      {
        title: 'Mapa do processo',
        body: 'Acompanho como o conteúdo ou o dado é produzido hoje. Meço o tempo de cada etapa e marco onde a IA ajuda e onde a pessoa decide.',
      },
      {
        title: 'Documento do pipeline',
        body: 'Escrevo o PRD (documento de requisitos) com fluxo, responsáveis, prompts e critérios de aprovação, antes de qualquer código.',
      },
      {
        title: 'Construção',
        body: 'Integro Claude, DeepSeek ou outro modelo pela API, crio a fila de revisão no CMS e registro o custo de cada peça.',
      },
      {
        title: 'Medição',
        body: 'Comparo tempo, custo e qualidade com o processo antigo, inclusive em teste cego. Ajusto os prompts com base no resultado.',
      },
    ],
    deliverables: [
      'PRD do pipeline com fluxo, responsáveis e critérios de aprovação',
      'Prompts versionados por tipo de conteúdo',
      'Integração direta com Claude e DeepSeek, sem SDK externo',
      'Fila de revisão humana no WordPress com status próprios',
      'Scripts de ingestão e orquestração em PHP ou Python',
      'Arquitetura de UTM, dataLayer e GTM',
      'Script de proteção contra conflito entre pixels',
      'Relatório de ganho de tempo, custo por peça e qualidade',
    ],
    stack: [
      'Claude API',
      'DeepSeek API',
      'MCP servers',
      'Python',
      'PHP 8.2',
      'WordPress REST API',
      'Notion',
      'GTM',
      'HubSpot',
      'GA4',
    ],
    implementation: {
      title: 'Chamada direta à API, dentro do WordPress',
      body: 'O pipeline do SanarMed chama a API da Anthropic direto do WordPress, sem biblioteca externa. Cada artigo nasce como rascunho num tipo de conteúdo próprio e só vira post depois da revisão médica. O código do motor é aberto e está no meu GitHub.',
      snippet: {
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
        caption: 'Geração do rascunho pela API do Claude, sem SDK externo.',
      },
    },
    related_case_slugs: [
      'pipeline-editorial-ia-revisao-medica',
      'utm-persistence-arquitetura-martech-3-bus',
      'fix-pixel-x-google-ads-shopify',
    ],
    related_post_slugs: [
      'pipeline-editorial-ia-revisor-humano-gargalo-saudavel',
      'guia-motor-conteudo-ia-local-deepseek',
      'guia-data-layer-bem-modelado',
      'google-ads-perde-atribuicao-pixel-x',
    ],
    faqs: [
      {
        q: 'A automação com IA substitui o time editorial?',
        a: 'Não. Ela tira a parte repetitiva, como briefing, primeira versão e padronização. O time fica com o julgamento, a nuance de marca e a aprovação final. Em todo pipeline que entreguei, uma pessoa aprova antes de publicar.',
      },
      {
        q: 'Qual modelo de IA você usa?',
        a: 'Depende da tarefa. Uso Claude em textos longos e em tarefas que pedem seguir instruções à risca, e DeepSeek quando o custo pesa mais. Sistemas mais robustos usam mais de um modelo, com plano B se um falhar. A escolha vem de teste com amostras reais.',
      },
      {
        q: 'Como garantir qualidade em conteúdo de saúde feito com IA?',
        a: 'Com revisão humana obrigatória dentro do fluxo. No SanarMed, nenhum artigo sai do rascunho sem a aprovação da revisão médica, e o próprio status do post bloqueia a publicação. Em tema sensível, a IA acelera, mas a responsabilidade continua com o profissional.',
      },
      {
        q: 'Você também automatiza marketing e medição?',
        a: 'Sim. Monto a governança de UTM, o dataLayer, as tags no GTM e a integração com HubSpot e GA4. Num grupo de educação com 3 unidades de negócio, a atribuição passou a cobrir 100% da jornada.',
      },
    ],
    seo_title: 'Automação com IA para conteúdo e marketing',
    seo_description:
      'Automação com IA usando Claude e DeepSeek, com revisão humana antes de publicar. No SanarMed, cada artigo passou de 6 horas para cerca de 35 minutos.',
    keywords: [
      'automação com ia',
      'pipeline de conteúdo com ia',
      'automação de marketing com ia',
      'claude api wordpress',
      'deepseek api',
      'utm e datalayer',
      'revisão humana em ia',
    ],
  },

  'seo-para-medicos': {
    number: '01',
    group: 'nicho',
    title: 'SEO para médicos, clínicas e healthtechs com conteúdo revisado e base técnica',
    short_title: 'SEO para saúde',
    kicker: 'Por segmento',
    focus_keyword: 'seo para médicos',
    excerpt:
      'SEO para conteúdo de saúde com a experiência do SanarMed. 1.113 artigos com revisão médica, schema MedicalWebPage e cuidado com tema sensível.',
    direct_answer:
      'SEO para médicos é o trabalho de fazer conteúdo de saúde ser achado no Google e nas IAs sem abrir mão da precisão clínica. Minha experiência vem de grandes operações de educação médica e saúde, como Sanar e Hapvida NotreDame. No SanarMed, estruturei o sistema que publicou 1.113 artigos em dois anos, todos com revisão médica antes de ir ao ar.',
    body_lead:
      '<p>O Google trata saúde como tema YMYL (Your Money or Your Life), ou seja, assunto que pode afetar a vida de quem lê. Nesse tipo de conteúdo, experiência, autoria e confiança da fonte pesam mais. Texto sem revisão e sem autor identificado perde para quem mostra essas coisas.</p><p>Eu trago o que funcionou em escala no SanarMed. Revisão médica como etapa obrigatória, revisor que assina o conteúdo, schema MedicalWebPage e uma arquitetura que liga artigo, exame, CID e calculadora.</p><p>O serviço atende clínicas, hospitais, healthtechs, operadoras e quem produz conteúdo médico. Na Valtech, também atendi marcas de saúde como Bayer, Sanofi US e Zoetis.</p>',
    problems_standalone: [
      {
        title: 'Conteúdo de saúde que não ranqueia',
        body: 'Texto genérico, sem autor e sem revisão, perde para portais grandes. Eu estruturo autoria, revisão e fontes para mostrar ao Google quem responde pelo conteúdo.',
      },
      {
        title: 'Medo de errar informação clínica',
        body: 'Produzir rápido não pode virar risco. Eu coloco a revisão por profissional de saúde como etapa obrigatória, e nada vai ao ar sem ela.',
      },
      {
        title: 'Páginas de serviço escondidas',
        body: 'Especialidades, exames e procedimentos ficam soltos, sem ligação com os artigos do blog. Eu organizo a arquitetura para o conteúdo levar o leitor até a página que gera contato.',
      },
      {
        title: 'Schema genérico em página médica',
        body: 'A página usa só Article quando poderia usar MedicalWebPage. Eu implemento o schema certo pelos campos do WordPress, de forma automática.',
      },
      {
        title: 'Centenas de termos médicos sem página própria',
        body: 'Exames, doenças e códigos CID pedem páginas de referência. No SanarMed, publiquei 114 páginas de exames a partir de uma planilha, e as palavras-chave da seção cresceram 295%.',
      },
      {
        title: 'Produção editorial lenta',
        body: 'Cada artigo levava 6 horas entre briefing, redação e revisão. Com o pipeline de IA e revisão médica, passou para cerca de 35 minutos.',
      },
    ],
    problems_combined: [
      {
        axis: 'Automação com IA',
        axis_slug: 'automacao-com-ia',
        body: 'Quando o volume de conteúdo cresce, o pipeline com IA acelera o briefing e a primeira versão. A revisão médica continua obrigatória e bloqueia a publicação até ser feita.',
      },
      {
        axis: 'GEO e SEO para IA',
        axis_slug: 'geo-seo-para-ia',
        body: 'Muita gente já pergunta sobre sintomas e exames para o ChatGPT. Eu ajusto as páginas médicas para ter resposta direta, fonte e autoria clara, o formato que facilita a citação.',
      },
    ],
    steps: [
      {
        title: 'Diagnóstico',
        body: 'Audito as páginas de maior tráfego, a autoria, o schema e a estrutura de categorias. Vejo onde o conteúdo médico perde para a concorrência.',
      },
      {
        title: 'Arquitetura e pauta',
        body: 'Monto a matriz de temas por intenção de busca e por público. No SanarMed, essa matriz cruzou 3 intenções com 5 fases da formação médica, em 15 células.',
      },
      {
        title: 'Produção com revisão',
        body: 'Defino o fluxo de produção com revisão médica obrigatória. Se fizer sentido, ligo o pipeline com IA para acelerar o rascunho.',
      },
      {
        title: 'Otimização contínua',
        body: 'Acompanho as páginas mais acessadas e as palavras paradas entre a segunda e a quarta página do Google. Otimizar o que já existe costuma render mais que publicar mais.',
      },
    ],
    deliverables: [
      'Auditoria das páginas de saúde com foco em autoria e confiança',
      'Arquitetura de categorias, especialidades e páginas de referência',
      'Fluxo editorial com revisão médica obrigatória',
      'Schema MedicalWebPage, Article e Person aplicados pelo template',
      'Páginas de referência em escala, como exames e doenças',
      'Links internos entre artigos, exames, ferramentas e serviços',
      'Monitoramento de palavras-chave e das páginas mais acessadas',
    ],
    stack: [
      'WordPress',
      'Google Search Console',
      'GA4',
      'schema.org JSON-LD',
      'Semrush',
      'Claude API',
      'DeepSeek API',
      'Notion',
      'pgvector',
    ],
    implementation: {
      title: 'Página de exame gerada por código',
      body: 'Cada exame do SanarMed tem indicação, preparo e referências em campos próprios. Eu escrevi o importador que transforma cada linha da planilha num post com esses campos preenchidos e a categoria certa. O time editorial edita a planilha e o site se atualiza sem trabalho manual.',
      snippet: {
        lang: 'php',
        file_label: 'bin/import-exam-pages.php',
        code: `private function map_fields( array \$row, int \$id = 0 ): array {
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
}`,
        caption: 'Cada linha da planilha vira uma página de exame com campos próprios.',
      },
    },
    related_case_slugs: [
      'sistema-editorial-sanarmed-1113-posts',
      'pipeline-editorial-ia-revisao-medica',
      'arquitetura-conteudo-scaffold-php-import',
      'refactor-calculadoras-design-system',
    ],
    related_post_slugs: [
      'pipeline-editorial-ia-revisor-humano-gargalo-saudavel',
      'guia-programmatic-seo-wordpress',
      'guia-conteudo-citavel-por-llm',
      'internal-linking-semantico-sem-plugin-pgvector',
    ],
    faqs: [
      {
        q: 'Você já fez SEO para clínica ou consultório?',
        a: 'Minha experiência em saúde vem de grandes operações, como o SanarMed, a Hapvida NotreDame e marcas como Bayer e Sanofi US. O método é o mesmo para clínica, hospital ou healthtech. O que muda é a escala e o tipo de página.',
      },
      {
        q: 'O que é YMYL e por que importa para médicos?',
        a: 'YMYL vem de Your Money or Your Life. É como o Google chama temas que podem afetar a saúde, o dinheiro ou a segurança de quem lê. Nesses temas, autoria, revisão e fonte pesam mais, e conteúdo sem esses sinais tem dificuldade para ranquear.',
      },
      {
        q: 'Posso usar IA para escrever conteúdo médico?',
        a: 'Pode, desde que um profissional de saúde revise e aprove antes de publicar. No SanarMed, a IA acelera o rascunho e a revisão médica é uma etapa que o sistema não deixa pular. Sem revisão, o risco é clínico e também de reputação.',
      },
      {
        q: 'Quanto tempo leva para ver resultado em SEO para saúde?',
        a: 'Ajustes técnicos e de schema costumam aparecer em 2 a 6 semanas. Arquitetura e links internos levam de 2 a 4 meses. Em saúde, a confiança da fonte se constrói com consistência, por isso o trabalho é contínuo.',
      },
      {
        q: 'O serviço inclui a redação dos artigos?',
        a: 'Eu desenho a arquitetura, a pauta, o briefing e o fluxo de revisão. A redação fica com o seu time ou com o pipeline de IA, sempre com revisão médica. Assim o conteúdo mantém a voz e a responsabilidade técnica de quem assina.',
      },
    ],
    seo_title: 'SEO para médicos e clínicas com revisão médica',
    seo_description:
      'SEO para médicos, clínicas e healthtechs com a experiência do SanarMed. 1.113 artigos com revisão médica, schema MedicalWebPage e páginas de exames.',
    keywords: [
      'seo para médicos',
      'seo para clínicas',
      'seo para saúde',
      'seo médico',
      'seo para healthtech',
      'ymyl',
      'schema medicalwebpage',
    ],
  },

  'seo-para-ecommerce': {
    number: '02',
    group: 'nicho',
    title: 'SEO para ecommerce em VTEX e Shopify, da categoria à atribuição da venda',
    short_title: 'SEO para e-commerce',
    kicker: 'Por segmento',
    focus_keyword: 'seo para ecommerce',
    excerpt:
      'SEO técnico para lojas em VTEX e Shopify. Filtros, categorias, Core Web Vitals e atribuição. +25% de sessões orgânicas em clientes enterprise da VTEX.',
    direct_answer:
      'SEO para ecommerce é o trabalho de fazer categorias e produtos de uma loja aparecerem no Google sem criar milhares de páginas duplicadas. Envolve filtros, paginação, velocidade, dados de produto e medição de venda. Fui SEO Lead na VTEX, onde os clientes enterprise ganharam 25% de sessões orgânicas, e hoje atendo a Insider Store, que roda em Shopify.',
    body_lead:
      "<p>Loja virtual tem problemas que site de conteúdo não tem. Filtros de cor e tamanho geram milhares de URLs quase iguais. Produto sai de estoque e a página some. Pixel de mídia mexe na URL e quebra a atribuição.</p><p>Fui SEO Lead de 2 squads na VTEX, a plataforma de e-commerce, com +25% de sessões orgânicas nos clientes enterprise. Pela Greenpark, em Londres, atendi a Unilever, com +32% de sessões e melhora de Core Web Vitals.</p><p>Hoje atendo a Insider Store. Em loja Shopify, eu mexo no tema, nos dados de produto e na medição, e corrijo o código quando o problema está nele.</p>",
    problems_standalone: [
      {
        title: 'Filtros criando milhares de URLs duplicadas',
        body: 'Cada combinação de cor, tamanho e preço vira uma página. O Google gasta o rastreio nelas e deixa de lado as categorias que vendem. Eu defino o que indexar, o que canonizar e o que bloquear.',
      },
      {
        title: 'Categorias sem texto e sem intenção',
        body: 'A categoria costuma ser a página que mais traz visita orgânica, mas muitas vezes tem só a grade de produtos. Eu ajusto título, texto de apoio, links internos e breadcrumb.',
      },
      {
        title: 'Produto esgotado que vira erro 404',
        body: 'Quando o produto sai do catálogo, a página e os links somem juntos. Eu defino uma regra para esgotado temporário e outra para produto descontinuado, com redirecionamento quando faz sentido.',
      },
      {
        title: 'Loja lenta no celular',
        body: 'Imagens pesadas, apps de terceiros e scripts de mídia derrubam o Core Web Vitals. Eu meço, corto o que não precisa e ajusto o tema.',
      },
      {
        title: 'Dados de produto ausentes no resultado',
        body: 'Sem schema Product com preço e disponibilidade, o resultado da busca fica sem destaque. Eu implemento e valido os dados estruturados.',
      },
      {
        title: 'Atribuição quebrada entre mídia e orgânico',
        body: 'Numa loja Shopify de vestuário, o pixel do X reescrevia a URL e apagava o gclid. Eu escrevi um script de proteção e a atribuição do Google Ads voltou a 100%.',
      },
      {
        title: 'Migração de plataforma no horizonte',
        body: 'Trocar de plataforma muda as URLs. Eu monto o mapa de redirecionamentos e acompanho o tráfego antes e depois.',
      },
    ],
    problems_combined: [
      {
        axis: 'SEO técnico e auditoria',
        axis_slug: 'seo-tecnico',
        body: 'Em loja grande, a auditoria técnica é o primeiro passo. Ela mostra quantas URLs de filtro estão no índice, quais categorias ficaram de fora e onde o rastreio se perde.',
      },
      {
        axis: 'Automação com IA',
        axis_slug: 'automacao-com-ia',
        body: 'Atribuição confiável depende de UTM, dataLayer e GTM bem montados. Eu cuido dessa camada para o resultado do orgânico e da mídia aparecer certo no GA4.',
      },
    ],
    steps: [
      {
        title: 'Rastreio da loja',
        body: 'Rastreio categorias, produtos e filtros e cruzo com o Search Console. Mostro o que está indexado e o que deveria estar.',
      },
      {
        title: 'Regras de indexação',
        body: 'Defino o que indexar em filtros, paginação, busca interna e produto esgotado. As regras viram configuração na plataforma ou código no tema.',
      },
      {
        title: 'Categorias e produtos',
        body: 'Priorizo as categorias com mais demanda e ajusto título, texto, links e schema. Depois sigo para os produtos de maior volume.',
      },
      {
        title: 'Velocidade e medição',
        body: 'Corrijo o Core Web Vitals no tema e reviso a atribuição no GA4 e no Google Ads. Sem medição certa, ninguém sabe quanto o orgânico vende.',
      },
    ],
    deliverables: [
      'Auditoria técnica da loja com foco em rastreio e indexação',
      'Regras para filtros, paginação, busca interna e produtos esgotados',
      'Otimização de categorias com texto, links e breadcrumb',
      'Schema Product e BreadcrumbList validados',
      'Plano de Core Web Vitals para o tema da loja',
      'Revisão da atribuição entre orgânico, Google Ads e pixels de mídia',
      'Mapa de redirecionamentos para migração de plataforma',
    ],
    stack: [
      'VTEX',
      'Shopify',
      'Google Search Console',
      'GA4',
      'GTM',
      'Google Ads',
      'Screaming Frog',
      'PageSpeed Insights',
      'schema.org JSON-LD',
    ],
    implementation: {
      title: 'Script que protege a atribuição',
      body: 'O pixel do X mudava a URL com history.replaceState e levava junto o UTM e o gclid. Eu escrevi um script carregado antes de qualquer pixel, que guarda esses parâmetros e devolve à URL quando alguém apaga. A atribuição do Google Ads voltou a 100%.',
      snippet: {
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
        caption: 'Script de proteção carregado antes de qualquer pixel.',
      },
    },
    related_case_slugs: [
      'fix-pixel-x-google-ads-shopify',
      'linkagem-semantica-embeddings-sanar',
    ],
    related_post_slugs: [
      'google-ads-perde-atribuicao-pixel-x',
      'core-web-vitals-wordpress-sem-plugin-cache',
      'guia-canibalizacao-keywords-auditoria',
      'guia-migracao-seo-sem-perder-trafego',
      'guia-data-layer-bem-modelado',
    ],
    faqs: [
      {
        q: 'Você faz SEO para loja VTEX?',
        a: 'Sim. Fui SEO Lead na VTEX, cuidando de 2 squads, e os clientes enterprise cresceram 25% em sessões orgânicas no período. Conheço as limitações de URL, de template e de catálogo da plataforma.',
      },
      {
        q: 'E para loja em Shopify?',
        a: 'Também. Atendo a Insider Store, que roda em Shopify, e já corrigi conflito de pixels em outra loja da plataforma. Em Shopify, boa parte do trabalho está no tema, nos apps e nas regras de URL de coleção e produto.',
      },
      {
        q: 'O que mais derruba o SEO de um e-commerce?',
        a: 'Na minha experiência, filtros indexados sem regra, categorias sem conteúdo e loja lenta no celular. Os três têm correção técnica e costumam dar retorno antes de qualquer conteúdo novo.',
      },
      {
        q: 'Quanto tempo leva para o SEO de e-commerce dar resultado?',
        a: 'Correções de indexação e de velocidade aparecem em 2 a 6 semanas. Ajustes de arquitetura de categorias levam de 2 a 4 meses para amadurecer. Eu meço por sessões orgânicas e por receita atribuída no GA4.',
      },
      {
        q: 'Você cuida de migração de plataforma?',
        a: 'Cuido do lado de SEO da migração. Mapa de redirecionamento um para um, teste antes de publicar e acompanhamento depois. Já fiz migração em VTEX, WordPress, Shopify e plataformas próprias.',
      },
    ],
    seo_title: 'SEO para ecommerce em VTEX e Shopify',
    seo_description:
      'SEO para ecommerce em VTEX e Shopify. Filtros, categorias, Core Web Vitals e atribuição. +25% de sessões orgânicas em clientes enterprise da VTEX.',
    keywords: [
      'seo para ecommerce',
      'seo vtex',
      'seo para vtex',
      'seo para shopify',
      'seo e-commerce',
      'seo para loja virtual',
      'core web vitals ecommerce',
    ],
  },
};

export const serviceGroupLabels: Record<ServiceGroup, string> = {
  consultoria: 'Consultoria',
  desenvolvimento: 'Desenvolvimento',
  nicho: 'Por segmento',
};

export function serviceSlugs(): string[] {
  return Object.keys(services);
}

export function servicesByGroup(
  group: ServiceGroup,
): { slug: string; data: Service }[] {
  return Object.entries(services)
    .filter(([, data]) => data.group === group)
    .map(([slug, data]) => ({ slug, data }))
    .sort((a, b) => a.data.number.localeCompare(b.data.number));
}
