import Link from 'next/link';
import { servicesByGroup, serviceGroupLabels } from '@/content/services';
import type { ServiceGroup } from '@/content/types';

const GROUPS: ServiceGroup[] = ['consultoria', 'desenvolvimento', 'nicho'];

export function ServicesTeaser() {
  return (
    <section className="section section--divider" id="servicos">
      <div className="container services-list__grid">
        <div className="services-list__head">
          <p className="section__kicker">Serviços</p>
          <h2 className="section__title">O que eu faço, do diagnóstico ao código.</h2>
          <Link href="/servicos/" className="btn btn--link">
            Ver todos os serviços
            <span className="btn__arrow" aria-hidden="true">
              →
            </span>
          </Link>
        </div>

        <div className="services-list">
          {GROUPS.map((group) => {
            const items = servicesByGroup(group);
            if (!items.length) return null;
            return (
              <div className="services-list__group" key={group}>
                <h3 className="services-list__group-title">{serviceGroupLabels[group]}</h3>
                {items.map(({ slug, data }) => (
                  <details className="services-list__item" key={slug}>
                    <summary className="services-list__summary">
                      <span className="services-list__name">{data.short_title}</span>
                      <span className="services-list__icon" aria-hidden="true" />
                    </summary>
                    <div className="services-list__body">
                      <p>{data.excerpt}</p>
                      <Link href={`/${slug}/`} className="btn btn--link">
                        Ver {data.short_title.toLowerCase()}
                        <span className="btn__arrow" aria-hidden="true">
                          →
                        </span>
                      </Link>
                    </div>
                  </details>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
