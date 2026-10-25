import Link from 'next/link';
import { siteOptions } from '@/content/site';

const STATS = [
  { value: '9', suffix: ' anos', label: 'de SEO em empresa e agência' },
  { value: '1.113', suffix: '', label: 'artigos no sistema editorial do SanarMed' },
  { value: '88', suffix: ' de 100', label: 'URLs mais acessadas auditadas e ajustadas no SanarMed' },
];

export function AboutPreview() {
  return (
    <section className="about-preview">
      <div className="container about-preview__grid">
        <div>
          <p className="section__kicker">Quem faz</p>
          <h2 className="about-preview__title">Sérgio Patrick</h2>
        </div>
        <div>
          <p className="about-preview__text">{siteOptions.about_preview}</p>
          <dl className="stats">
            {STATS.map((s) => (
              <div className="stats__item" key={s.label}>
                <dt className="stats__label">{s.label}</dt>
                <dd className="stats__value">
                  <span data-count={s.value}>{s.value}</span>
                  {s.suffix}
                </dd>
              </div>
            ))}
          </dl>
          <Link href="/sobre/" className="btn btn--link">
            Ver trajetória completa
            <span className="btn__arrow" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
