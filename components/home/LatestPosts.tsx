import Link from 'next/link';
import { allPostsSortedByDate } from '@/content/posts';
import { CardPost } from '@/components/ui/CardPost';

// Links the newest guides from the home so crawlers find them on the first hop.
export function LatestPosts() {
  const latest = allPostsSortedByDate().slice(0, 4);
  if (!latest.length) return null;
  return (
    <section className="section section--divider" id="blog">
      <div className="container">
        <div className="selected-work__header">
          <div>
            <p className="section__kicker">Do blog</p>
            <h2 className="section__title">Guias de SEO técnico e GEO.</h2>
          </div>
          <Link href="/blog/" className="btn btn--link">
            Ver todos os guias
            <span className="btn__arrow" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
        <div className="selected-work__grid">
          {latest.map(({ slug, data }) => (
            <CardPost key={slug} slug={slug} data={data} as="h3" />
          ))}
        </div>
      </div>
    </section>
  );
}
