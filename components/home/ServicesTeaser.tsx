import Link from 'next/link';
import { services } from '@/content/site';

export function ServicesTeaser() {
  const entries = Object.entries(services);
  if (!entries.length) return null;
  return (
    <section className="section section--divider" id="services">
      <div className="container">
        <div className="selected-work__header">
          <div>
            <p className="section__kicker">Serviços</p>
            <h2 className="section__title">
              Três eixos de trabalho, todos com código no centro.
            </h2>
          </div>
          <Link href="/services/" className="btn btn--link">
            Ver os 3 eixos em detalhe{' '}
            <span className="btn__arrow" aria-hidden="true">
              →
            </span>
          </Link>
        </div>

        <div className="services__grid">
          {entries.map(([slug, svc]) => {
            const url = `/services/${slug}/`;
            const deliverablesSample = svc.deliverables.slice(0, 4).join(', ');
            return (
              <article className="service reveal" key={slug}>
                <div className="service__num">{svc.number}</div>
                <h3 className="service__name">
                  <Link href={url}>{svc.title}</Link>
                </h3>
                <p className="service__description">{svc.excerpt}</p>
                {svc.deliverables.length > 0 && (
                  <div className="service__deliverables">
                    <strong>Entregáveis</strong> {deliverablesSample}.
                  </div>
                )}
                <Link href={url} className="service__cta">
                  Saber mais{' '}
                  <span aria-hidden="true">→</span>
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
