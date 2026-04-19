import Link from 'next/link';
import type { Case } from '@/content/types';

type Props = { data: Case };

export function CaseHero({ data }: Props) {
  return (
    <section className="case-hero">
      <div className="container">
        <nav className="case-hero__breadcrumbs" aria-label="Breadcrumbs">
          <Link href="/">Home</Link>
          <Link href="/work/">Work</Link>
          <span>{data.title}</span>
        </nav>

        <h1 className="case-hero__title">{data.title}</h1>
        {data.excerpt && <p className="case-hero__summary">{data.excerpt}</p>}
      </div>
    </section>
  );
}
