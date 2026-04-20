# Prompt — Extrair um case do portfólio a partir de um projeto real

Copie este arquivo para a raiz do projeto que virará case (plugin, tema, app, script, pipeline etc.) e rode dentro de um agente com leitura de arquivos (Claude Code, Cursor, etc.). Ele lê o repositório real e devolve a entrada pronta pra colar em `portfolio-next/content/cases.ts`.

---

## Contexto

Você está dentro de um projeto real do Sérgio Patrick. Sua tarefa é **ler o código, docs, README, histórico de commits e qualquer evidência** (screenshots, logs, métricas) e produzir **uma entrada `Case`** que será adicionada em `portfolio-next/content/cases.ts` do portfólio.

O portfólio segue um padrão rígido: 6 seções numeradas (Contexto, Problema, Abordagem, Execução, Resultados, Output reutilizável) + metadados + SEO. O leitor-alvo é técnico (dev/PM/SEO) — texto seco, específico, com número ou não entra.

## Schema que você deve preencher

```ts
type Case = {
  title: string;             // 4-10 palavras, direto ao ponto
  excerpt: string;           // 1-2 frases, o que é + resultado principal
  category:                  // EXATAMENTE um destes cinco:
    | 'Front-end'
    | 'SEO Técnico'
    | 'Martech'
    | 'Automação com LLM'
    | 'Plugin WP';
  client_anon: string;       // cliente anonimizado ("Marca DTC de vestuário performance")
  sector: string;            // "E-commerce" | "EdTech médica" | "Educação" | ...
  role: string;              // papel do Sérgio no projeto
  duration: string;          // "2025" | "2025 (em produção)" | "2025-2026"
  stack: { item: string }[]; // 4-8 tecnologias, nomes canônicos
  featured_order: number;    // peça pro humano — ordem relativa no grid (ver abaixo)

  s1_context: string;        // HTML. Abre com <p><strong>O que é:</strong> …
  s2_problem: string;        // HTML. Dor concreta, mensurável se possível
  s2_baseline: string;       // plaintext curto ("6h por artigo, 1 revisor dedicado.") ou ''
  s3_approach: string;       // HTML. A ideia central, não a implementação
  s4_execution: string;      // HTML. Como foi implementado, decisões técnicas
  s4_snippets: CodeSnippet[];// 1-3 trechos reais do próprio repo
  s5_results: ResultMetric[];// 2-4 métricas com value + label + context
  s5_results_text: string;   // HTML. Narrativa dos resultados + evidência (links, figures)
  s6_reusable: string;       // HTML. Artefatos reutilizáveis + cross-ref a outros cases

  seo_title: string;         // ≤ 65 chars, padrão "<mecanismo>: <benefício|métrica>"
  seo_description: string;   // ≤ 160 chars, mecanismo + benefício + número
  keywords: string[];        // 4-6, substantivas, sem stuffing
};

type CodeSnippet = {
  lang: string;              // 'php' | 'javascript' | 'python' | 'css' | 'ts' | 'html'
  file_label?: string;       // caminho real no repo: 'inc/radar/class-content-generator.php'
  code: string;              // escape $ como \$ se for template literal TS
  caption?: string;          // 1 frase explicando o porquê do snippet
};

type ResultMetric = {
  value: string;             // '90%' | '6h → 35min' | '0 KB' | '+295%'
  label: string;             // curto, substantivo ('Redução de tempo')
  context?: string;          // 1 frase dando a baseline ou recorte da medição
};
```

## Regras de voz (destiladas dos 7 cases existentes)

1. **Primeira pessoa técnica.** "Apliquei", "refatorei", "construí". Nada de "nós" corporativo.
2. **Número ou nada.** "90% de redução" > "redução expressiva". Se não houver número, diga qualitativamente o que foi medido ("zero tickets pós-deploy").
3. **Abre sempre com `<p><strong>O que é:</strong> …</p>`** no `s1_context`. Uma linha dizendo o que o projeto é, antes do contexto.
4. **Sem jargão vazio.** "Boas práticas", "escalável", "robusto" — banido. Troque por o que especificamente foi feito.
5. **Código de verdade.** Os snippets em `s4_snippets` devem vir do próprio repo, não reescritos. Preserve estilo, formatação, comentários. No TypeScript do `cases.ts` os `$` de PHP viram `\$` (template literal).
6. **Resultados ancorados.** Cada métrica em `s5_results` com `context` curto (baseline, recorte, ou "medido via X").
7. **Cross-ref quando fizer sentido.** Se o case alimenta outro (ex.: conteúdo que entra num grafo semântico), feche `s6_reusable` com `<em>Este case alimenta o <a href="/projetos/&lt;outro-slug&gt;/">case N, …</a></em>`.
8. **Figuras inline.** Use `<figure><img src="/images/cases/&lt;arquivo&gt;.png" alt="…" loading="lazy"><figcaption>…</figcaption></figure>` dentro do HTML. O path `/images/cases/` é o padrão.
9. **Links externos com `target="_blank" rel="noopener"`.**
10. **Português do Brasil, ortografia correta, sem emojis.**

## O que você deve fazer (passo a passo)

1. Liste os arquivos-chave do repositório e identifique o que o projeto faz. Leia README, `package.json`/`composer.json`, estrutura de pastas, arquivo de entrada.
2. Leia o `git log` pra entender a história — quando começou, quantos deploys, se está em produção.
3. Levante a evidência:
   - URL em produção? Pegue o HTTP 200.
   - Métrica? Procure em comments, README, PR description, screenshots.
   - Se algo crítico estiver faltando (baseline, número de usuários, resultado), **pergunte ao humano antes de inventar**.
4. Escolha 1-3 snippets curtos (≤30 linhas cada) que mostrem a decisão técnica real. Evite boilerplate.
5. Proponha o `slug` do case em kebab-case, que vira a chave em `cases` e a URL `/projetos/<slug>/`.
6. Proponha `category` (exatamente uma das 5) e `featured_order` (pergunte ao humano se não souber).
7. Redija cada campo seguindo as regras de voz acima.
8. Valide: `seo_title` ≤ 65 chars, `seo_description` ≤ 160 chars, keywords sem duplicata, HTML fechado corretamente.

## Formato de saída

Devolva **um único bloco `ts` fenced** contendo o objeto pronto para colar como nova entrada do record `cases` em `portfolio-next/content/cases.ts`. Nada antes, nada depois — só o objeto. Exemplo:

````ts
'<slug-proposto>': {
  title: '…',
  excerpt: '…',
  category: 'Front-end',
  client_anon: '…',
  sector: '…',
  role: '…',
  duration: '2026',
  stack: [{ item: '…' }],
  featured_order: 8,
  s1_context: `<p><strong>O que é:</strong> …</p>`,
  s2_problem: `<p>…</p>`,
  s2_baseline: '',
  s3_approach: `<p>…</p>`,
  s4_execution: `<p>…</p>`,
  s4_snippets: [
    { lang: 'php', file_label: '…', code: `…`, caption: '…' },
  ],
  s5_results: [
    { value: '…', label: '…', context: '…' },
  ],
  s5_results_text: `<p>…</p>`,
  s6_reusable: `<p>…</p>`,
  seo_title: '…',
  seo_description: '…',
  keywords: ['…', '…'],
},
````

Se algo ficou em aberto, adicione **uma** linha de texto antes do bloco com a pergunta exata pro humano. Sem preâmbulo, sem checklist, sem resumo. Só a pergunta + o bloco.

## Referência rápida

- Arquivo-destino no portfólio: `portfolio-next/content/cases.ts`
- Tipo: `portfolio-next/content/types.ts` → `Case`
- Exemplos prontos: os 7 cases já em `cases.ts` — imite o tom deles, não tente ser diferente.
- Imagens: colocar em `portfolio-next/public/images/cases/` e referenciar como `/images/cases/<arquivo>`.
