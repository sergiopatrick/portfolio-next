import { siteOptions } from '@/content/site';

export function Stack() {
  return (
    <section className="section" id="stack">
      <div className="container">
        <p className="section__kicker">Stack</p>
        <h2 className="section__title">Ferramentas que uso no dia a dia.</h2>

        <div className="stack__grid">
          {siteOptions.stack_groups.map((g, i) => (
            <div className="stack-group" key={i}>
              <div className="stack-group__name">{g.group_name}</div>
              <div className="stack-group__items">
                {g.items.map((it, j) => (
                  <span key={j}>{it.name}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
