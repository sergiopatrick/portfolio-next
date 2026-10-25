import { siteOptions } from '@/content/site';
import { services, serviceSlugs } from '@/content/services';
import { allCasesSortedByFeature } from '@/content/cases';
import { allPostsSortedByDate } from '@/content/posts';
import { absoluteUrl } from '@/lib/site';

// /llms.txt, the plain-text map of the site for answer engines (llmstxt.org).
// Built from the same content sources as the pages, so it never drifts.
export const dynamic = 'force-static';

export function GET() {
  const lines: string[] = [
    '# Sérgio Patrick',
    '',
    `> ${siteOptions.hero_title} ${siteOptions.hero_title_tail} Consultor independente baseado em Salvador (BA), atende empresas de todo o Brasil.`,
    '',
    siteOptions.about_preview,
    '',
    'Resultados de SEO orgânico em empresas onde atuou como SEO Lead ou Technical SEO.',
    ...siteOptions.results_strip.map((r) => `- ${r.client_name}, ${r.metric} (${r.metric_label})`),
    '',
    '## Serviços',
    ...serviceSlugs().map((slug) => {
      const s = services[slug];
      return `- [${s.short_title}](${absoluteUrl(`/${slug}/`)}): ${s.excerpt}`;
    }),
    '',
    '## Cases',
    ...allCasesSortedByFeature().map(
      ({ slug, data }) => `- [${data.title}](${absoluteUrl(`/projetos/${slug}/`)}): ${data.excerpt}`,
    ),
    '',
    '## Guias',
    ...allPostsSortedByDate().map(
      ({ slug, data }) => `- [${data.title}](${absoluteUrl(`/blog/${slug}/`)}): ${data.excerpt}`,
    ),
    '',
    '## Contato',
    `- E-mail: ${siteOptions.email}`,
    `- LinkedIn: ${siteOptions.linkedin}`,
    `- GitHub: ${siteOptions.github}`,
    `- Página de contato: ${absoluteUrl('/contato/')}`,
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
