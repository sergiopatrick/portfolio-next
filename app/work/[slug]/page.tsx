import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { cases, caseSlugs } from '@/content/cases';
import { CaseHero } from '@/components/case/CaseHero';
import { CaseMeta } from '@/components/case/CaseMeta';
import { CaseSection } from '@/components/case/CaseSection';
import { CaseNext } from '@/components/case/CaseNext';
import { CaseRelated } from '@/components/case/CaseRelated';
import { JsonLd } from '@/components/ui/JsonLd';
import {
  buildMetadata,
  articleSchema,
  breadcrumbSchema,
} from '@/lib/seo';
import { absoluteUrl } from '@/lib/site';

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return caseSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = cases[slug];
  if (!c) return buildMetadata({ title: 'Case', description: '', path: '/work/' });
  return buildMetadata({
    title: c.seo_title || c.title,
    description: c.seo_description || c.excerpt,
    keywords: c.keywords,
    path: `/work/${slug}/`,
    ogType: 'article',
  });
}

export default async function CasePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const data = cases[slug];
  if (!data) notFound();

  const crumbs = [
    { label: 'Home', url: absoluteUrl('/') },
    { label: 'Work', url: absoluteUrl('/work/') },
    { label: data.title, url: absoluteUrl(`/work/${slug}/`) },
  ];

  const sections = [
    { num: '01', title: 'Contexto', body: data.s1_context },
    {
      num: '02',
      title: 'Problema',
      body: data.s2_problem,
      baseline: data.s2_baseline,
    },
    { num: '03', title: 'Abordagem', body: data.s3_approach },
    {
      num: '04',
      title: 'Execução',
      body: data.s4_execution,
      snippets: data.s4_snippets,
    },
    {
      num: '05',
      title: 'Resultados',
      body: data.s5_results_text,
      metrics: data.s5_results,
    },
    { num: '06', title: 'Output reutilizável', body: data.s6_reusable },
  ];

  return (
    <>
      <JsonLd schema={[articleSchema(slug), breadcrumbSchema(crumbs)]} />

      <article
        className="case-article"
        itemScope
        itemType="https://schema.org/Article"
      >
        <meta itemProp="headline" content={data.title} />
        <meta itemProp="author" content="Sérgio Patrick" />
        <meta itemProp="inLanguage" content="pt-BR" />

        <CaseHero data={data} />
        <CaseMeta data={data} />

        {sections.map((s) => (
          <CaseSection
            key={s.num}
            num={s.num}
            title={s.title}
            body={s.body}
            baseline={s.baseline}
            snippets={s.snippets}
            metrics={s.metrics}
          />
        ))}
      </article>

      <CaseRelated currentSlug={slug} />
      <CaseNext currentSlug={slug} />
    </>
  );
}
