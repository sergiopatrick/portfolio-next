import Link from 'next/link';
import { allCasesSortedByFeature } from '@/content/cases';
import { CasesCarousel, type CarouselCase } from '@/components/home/CasesCarousel';

export function SelectedWork() {
  const items: CarouselCase[] = allCasesSortedByFeature().map(({ slug, data }) => ({
    slug,
    title: data.title,
    sector: data.sector,
    role: data.role,
    metric: data.s5_results[0]?.value ?? '',
    metricLabel: data.s5_results[0]?.label ?? '',
  }));

  return (
    <section className="section section--divider cases-3d" id="projetos">
      <div className="container">
        <div className="selected-work__header">
          <div>
            <p className="section__kicker">Cases</p>
            <h2 className="section__title">Projetos com número, código e contexto.</h2>
          </div>
          <Link href="/projetos/" className="btn btn--link">
            Ver todos os projetos
            <span className="btn__arrow" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>
      <CasesCarousel items={items} />
    </section>
  );
}
