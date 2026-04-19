import { siteOptions } from '@/content/site';

export function ResultsStrip() {
  return (
    <section className="results-strip">
      <div className="container">
        <div className="results-strip__grid">
          {siteOptions.results_strip.map((item, i) => (
            <div className="results-strip__item" key={i}>
              <div className="results-strip__client">{item.client_name}</div>
              <div className="results-strip__metric">{item.metric}</div>
              <div className="results-strip__label">{item.metric_label}</div>
            </div>
          ))}
        </div>
        {siteOptions.results_footnote && (
          <p className="results-strip__foot">{siteOptions.results_footnote}</p>
        )}
      </div>
    </section>
  );
}
