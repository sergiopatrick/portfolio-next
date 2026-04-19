import { siteOptions } from '@/content/site';

export function Brands() {
  if (!siteOptions.brands.length) return null;
  return (
    <section className="brands section--sm" aria-labelledby="brands-title">
      <div className="container">
        <div className="brands__head">
          <p className="section__kicker">{siteOptions.brands_kicker}</p>
          <h2 id="brands-title" className="brands__title">
            {siteOptions.brands_title}
          </h2>
        </div>

        <ul className="brands__grid" role="list">
          {siteOptions.brands.map((b, i) => {
            const inner = (
              <span className="brand__wordmark">{b.name.toUpperCase()}</span>
            );
            return (
              <li className="brand" title={b.name} key={i}>
                {b.url ? (
                  <a
                    href={b.url}
                    target="_blank"
                    rel="noopener"
                    className="brand__link"
                    aria-label={b.name}
                  >
                    {inner}
                  </a>
                ) : (
                  <span className="brand__link" aria-label={b.name}>
                    {inner}
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
