import Link from 'next/link';
import { allCasesSortedByFeature } from '@/content/cases';
import { CardCase } from '@/components/ui/CardCase';

export function SelectedWork() {
  const featured = allCasesSortedByFeature().slice(0, 6);
  return (
    <section className="section" id="selected-work">
      <div className="container">
        <div className="selected-work__header">
          <div>
            <p className="section__kicker">Selected work</p>
            <h2 className="section__title">
              Código real. Impacto mensurável. Cases com snippets.
            </h2>
          </div>
          <Link href="/work/" className="btn btn--link">
            Ver todos os cases{' '}
            <span className="btn__arrow" aria-hidden="true">
              →
            </span>
          </Link>
        </div>

        {featured.length > 0 ? (
          <div className="selected-work__grid">
            {featured.map(({ slug, data }) => (
              <CardCase key={slug} slug={slug} data={data} as="h3" />
            ))}
          </div>
        ) : (
          <p className="text-muted">Nenhum case publicado ainda.</p>
        )}
      </div>
    </section>
  );
}
