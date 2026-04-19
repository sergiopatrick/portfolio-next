import Link from 'next/link';
import type { Case } from '@/content/types';

type Props = {
  slug: string;
  data: Case;
  as?: 'h2' | 'h3';
};

export function CardCase({ slug, data, as = 'h3' }: Props) {
  const Heading = as;
  return (
    <article
      className="card-case reveal"
      itemScope
      itemType="https://schema.org/Article"
    >
      <Link href={`/work/${slug}/`} className="card-case__link" itemProp="url">
        <div className="card-case__meta">
          {data.sector && (
            <span className="tag" itemProp="articleSection">
              {data.sector}
            </span>
          )}
          {data.role && <span className="tag">{data.role}</span>}
        </div>
        <Heading className="card-case__title" itemProp="headline">
          {data.title}
        </Heading>
        <p className="card-case__excerpt" itemProp="abstract">
          {data.excerpt}
        </p>
        <div className="card-case__foot">
          <span>{data.duration}</span>
          <span className="card-case__arrow">
            Ler case <span aria-hidden="true">→</span>
          </span>
        </div>
      </Link>
    </article>
  );
}
