import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  caseCategories,
  categorySlug,
  casesByCategorySlug,
} from '@/content/cases';
import { CardCase } from '@/components/ui/CardCase';
import { JsonLd } from '@/components/ui/JsonLd';
import { buildMetadata, breadcrumbSchema } from '@/lib/seo';
import { absoluteUrl } from '@/lib/site';

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return caseCategories.map((name) => ({ slug: categorySlug(name) }));
}

function categoryNameFromSlug(slug: string): string | null {
  const found = caseCategories.find((c) => categorySlug(c) === slug);
  return found ?? null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const name = categoryNameFromSlug(slug);
  if (!name) return buildMetadata({ title: 'Categoria', description: '', path: '/projetos/' });
  return buildMetadata({
    title: `Projetos em ${name}`,
    description: `Projetos categorizados como ${name}. Problemas e soluções reais com código e métricas atribuíveis.`,
    path: `/projetos/categoria/${slug}/`,
  });
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const name = categoryNameFromSlug(slug);
  if (!name) notFound();

  const items = casesByCategorySlug(slug);

  const crumbs = [
    { label: 'Início', url: absoluteUrl('/') },
    { label: 'Projetos', url: absoluteUrl('/projetos/') },
    { label: name, url: absoluteUrl(`/projetos/categoria/${slug}/`) },
  ];

  return (
    <>
      <JsonLd schema={breadcrumbSchema(crumbs)} />

      <section className="archive-head">
        <div className="container">
          <nav className="case-hero__breadcrumbs" aria-label="Breadcrumbs">
            <Link href="/">Início</Link>
            <Link href="/projetos/">Projetos</Link>
            <span>{name}</span>
          </nav>
          <p className="section__kicker">Categoria</p>
          <h1 className="archive-head__title">Projetos em {name}</h1>
          <p className="archive-head__sub">
            Projetos categorizados como <strong>{name}</strong>, mesma disciplina
            técnica, problemas diferentes.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {items.length > 0 ? (
            <div className="selected-work__grid">
              {items.map(({ slug: cs, data }) => (
                <CardCase key={cs} slug={cs} data={data} as="h2" />
              ))}
            </div>
          ) : (
            <p className="text-muted">Nenhum projeto nesta categoria.</p>
          )}

          <div
            style={{
              marginTop: 'var(--s-9)',
              paddingTop: 'var(--s-7)',
              borderTop: '1px solid var(--color-border)',
            }}
          >
            <Link href="/projetos/" className="btn btn--link">
              Ver todos os projetos{' '}
              <span className="btn__arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
