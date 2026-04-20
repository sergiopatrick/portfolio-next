import { allCasesSortedByFeature } from '@/content/cases';
import { CardCase } from '@/components/ui/CardCase';

type Props = { currentSlug: string };

export function CaseRelated({ currentSlug }: Props) {
  const all = allCasesSortedByFeature();
  const current = all.find((c) => c.slug === currentSlug);
  if (!current) return null;

  const sameCategory = all.filter(
    (c) => c.slug !== currentSlug && c.data.category === current.data.category,
  );

  let related = sameCategory.slice(0, 2);
  if (related.length < 2) {
    const fillers = all
      .filter(
        (c) => c.slug !== currentSlug && !related.some((r) => r.slug === c.slug),
      )
      .slice(0, 2 - related.length);
    related = [...related, ...fillers];
  }

  if (!related.length) return null;

  return (
    <section className="case-related" aria-labelledby="case-related-title">
      <div className="container">
        <p className="section__kicker">Projetos relacionados</p>
        <h2 id="case-related-title" className="section__title">
          Mais projetos na mesma área
        </h2>

        <div className="selected-work__grid">
          {related.map(({ slug, data }) => (
            <CardCase key={slug} slug={slug} data={data} as="h3" />
          ))}
        </div>
      </div>
    </section>
  );
}
