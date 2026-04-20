import Link from 'next/link';
import type { Post } from '@/content/types';

type Props = {
  slug: string;
  data: Post;
  as?: 'h2' | 'h3';
};

function formatDate(iso: string): string {
  const d = new Date(iso + 'T00:00:00');
  return d.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

export function CardPost({ slug, data, as = 'h3' }: Props) {
  const Heading = as;
  return (
    <article
      className="card-case reveal"
      itemScope
      itemType="https://schema.org/BlogPosting"
    >
      <Link href={`/blog/${slug}/`} className="card-case__link" itemProp="url">
        <div className="card-case__meta">
          <span className="tag" itemProp="articleSection">
            {data.tag}
          </span>
          <span className="tag">{data.read_time_min} min de leitura</span>
        </div>
        <Heading className="card-case__title" itemProp="headline">
          {data.title}
        </Heading>
        <p className="card-case__excerpt" itemProp="abstract">
          {data.excerpt}
        </p>
        <div className="card-case__foot">
          <time dateTime={data.published_at} itemProp="datePublished">
            {formatDate(data.published_at)}
          </time>
          <span className="card-case__arrow">
            Ler post <span aria-hidden="true">→</span>
          </span>
        </div>
      </Link>
    </article>
  );
}
