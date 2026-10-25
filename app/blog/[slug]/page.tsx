import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { posts, postSlugs, allPostsSortedByDate } from '@/content/posts';
import { Prose } from '@/components/ui/Prose';
import { CardPost } from '@/components/ui/CardPost';
import { JsonLd } from '@/components/ui/JsonLd';
import {
  buildMetadata,
  blogPostSchema,
  breadcrumbSchema,
} from '@/lib/seo';
import { absoluteUrl } from '@/lib/site';

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return postSlugs().map((slug) => ({ slug }));
}

function formatDate(iso: string): string {
  const d = new Date(iso + 'T00:00:00');
  return d.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = posts[slug];
  if (!p) return buildMetadata({ title: 'Post', description: '', path: '/blog/' });
  return buildMetadata({
    title: p.seo_title || p.title,
    description: p.seo_description || p.excerpt,
    keywords: p.keywords,
    path: `/blog/${slug}/`,
    ogType: 'article',
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const data = posts[slug];
  if (!data) notFound();

  const crumbs = [
    { label: 'Início', url: absoluteUrl('/') },
    { label: 'Blog', url: absoluteUrl('/blog/') },
    { label: data.title, url: absoluteUrl(`/blog/${slug}/`) },
  ];

  // Same topic first, then the newest. Every post links to three others so
  // the crawler reaches the whole blog from any entry point.
  const others = allPostsSortedByDate().filter((p) => p.slug !== slug);
  const related = [
    ...others.filter((p) => p.data.tag === data.tag),
    ...others.filter((p) => p.data.tag !== data.tag),
  ].slice(0, 3);
  const updated = data.updated_at && data.updated_at !== data.published_at ? data.updated_at : '';

  return (
    <>
      <JsonLd schema={[blogPostSchema(slug), breadcrumbSchema(crumbs)]} />

      <article className="case-article">

        <section className="page-hero">
          <div className="container container--prose">
            <nav className="case-hero__breadcrumbs" aria-label="Breadcrumbs">
              <Link href="/">Início</Link>
              <Link href="/blog/">Blog</Link>
              <span>{data.tag}</span>
            </nav>
            <p className="section__kicker">{data.tag}</p>
            <h1 className="page-hero__title">{data.title}</h1>
            <p className="page-hero__sub">{data.excerpt}</p>
            <p className="post-byline">
              Por <Link href="/sobre/">Sérgio Patrick</Link>, consultor de SEO técnico e GEO
            </p>
            <p className="post-dates">
              Publicado em{' '}
              <time dateTime={data.published_at}>{formatDate(data.published_at)}</time>
              {updated && (
                <>
                  {' · '}Atualizado em <time dateTime={updated}>{formatDate(updated)}</time>
                </>
              )}
              {' · '}
              {data.read_time_min} min de leitura
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container container--prose">
            <Prose html={data.body} />
            <aside className="author-box">
              <p className="author-box__name">Sérgio Patrick</p>
              <p className="author-box__bio">
                Consultor de SEO técnico e GEO que também escreve o código. Foi SEO Lead no
                QConcursos e na VTEX e hoje atende Insider Store, Sanar, Hapvida NotreDame e
                Fluency.
              </p>
              <p className="author-box__links">
                <Link href="/consultoria-seo/">Consultoria SEO</Link>
                <Link href="/sobre/">Trajetória completa</Link>
              </p>
            </aside>
          </div>
        </section>
      </article>

      {related.length > 0 && (
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <p className="section__kicker">Continuar lendo</p>
            <div
              className="selected-work__grid"
              style={{ marginTop: 'var(--s-6)' }}
            >
              {related.map(({ slug: rs, data: rd }) => (
                <CardPost key={rs} slug={rs} data={rd} as="h3" />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
