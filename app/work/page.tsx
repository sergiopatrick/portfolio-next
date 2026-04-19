import type { Metadata } from 'next';
import Link from 'next/link';
import { allCasesSortedByFeature } from '@/content/cases';
import { CardCase } from '@/components/ui/CardCase';
import { JsonLd } from '@/components/ui/JsonLd';
import {
  buildMetadata,
  collectionPageSchema,
  workItemListSchema,
} from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Cases — Front-end, SEO técnico e automação com LLM — Sérgio Patrick',
  description:
    'Cases de front-end, SEO técnico e automação com LLM — com código real, snippets, métricas atribuíveis e links pros artefatos em produção.',
  path: '/work/',
});

export default function WorkArchivePage() {
  const items = allCasesSortedByFeature();
  return (
    <>
      <JsonLd schema={[collectionPageSchema(), workItemListSchema()]} />

      <section className="archive-head">
        <div className="container">
          <nav className="case-hero__breadcrumbs" aria-label="Breadcrumbs">
            <Link href="/">Home</Link>
            <span>Work</span>
          </nav>
          <p className="section__kicker">Work</p>
          <h1 className="archive-head__title">
            Cases com código real e métricas atribuíveis.
          </h1>
          <p className="archive-head__sub">
            Cada case aqui traz o que o time via, o que mudou no código, e o ganho
            medido em produção. Clientes anonimizados quando necessário.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {items.length > 0 ? (
            <div className="selected-work__grid">
              {items.map(({ slug, data }) => (
                <CardCase key={slug} slug={slug} data={data} as="h2" />
              ))}
            </div>
          ) : (
            <p className="text-muted">Nenhum case publicado ainda.</p>
          )}
        </div>
      </section>
    </>
  );
}
