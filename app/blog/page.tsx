import type { Metadata } from 'next';
import Link from 'next/link';
import { allPostsSortedByDate } from '@/content/posts';
import { CardPost } from '@/components/ui/CardPost';
import { JsonLd } from '@/components/ui/JsonLd';
import { buildMetadata, blogCollectionSchema } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Blog, notas técnicas sobre front-end, SEO e automação com LLM',
  description:
    'Notas técnicas curtas sobre front-end e performance, SEO técnico e AEO, automação com LLM e martech. Leitura rápida, cada post nasce de um problema real.',
  path: '/blog/',
});

export default function BlogIndexPage() {
  const items = allPostsSortedByDate();
  return (
    <>
      <JsonLd schema={blogCollectionSchema()} />

      <section className="archive-head">
        <div className="container">
          <nav className="case-hero__breadcrumbs" aria-label="Breadcrumbs">
            <Link href="/">Início</Link>
            <span>Blog</span>
          </nav>
          <p className="section__kicker">Blog</p>
          <h1 className="archive-head__title">
            Notas técnicas sobre o que faço na prática.
          </h1>
          <p className="archive-head__sub">
            Cada post nasce de um problema real de cliente. Front-end,
            performance, SEO técnico, AEO, automação com LLM e martech, sempre
            com número ou nada.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {items.length > 0 ? (
            <div className="selected-work__grid">
              {items.map(({ slug, data }) => (
                <CardPost key={slug} slug={slug} data={data} as="h2" />
              ))}
            </div>
          ) : (
            <p className="text-muted">Nenhum post publicado ainda.</p>
          )}
        </div>
      </section>
    </>
  );
}
