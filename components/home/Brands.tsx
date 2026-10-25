import { siteOptions } from '@/content/site';

// Continuous marquee. The list is rendered twice so the loop has no seam;
// the copy is aria-hidden so screen readers read each brand once.
export function Brands() {
  if (!siteOptions.brands.length) return null;
  const items = siteOptions.brands.map((b) => b.name);
  return (
    <section className="brands brands--marquee" aria-labelledby="brands-title">
      <div className="container">
        <h2 id="brands-title" className="brands__label">
          Marcas e times com quem já trabalhei
        </h2>
      </div>
      <div className="marquee">
        <ul className="marquee__track" role="list">
          {items.map((name) => (
            <li className="marquee__item" key={name}>
              {name}
            </li>
          ))}
        </ul>
        <ul className="marquee__track" aria-hidden="true">
          {items.map((name) => (
            <li className="marquee__item" key={name}>
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
