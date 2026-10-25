import { siteOptions } from '@/content/site';

// "+105%" -> prefix "+", value 105, suffix "%". Counters animate from 0 in
// HomeEffects; the server HTML already carries the final number.
function splitMetric(metric: string) {
  const m = metric.match(/^([^\d]*)([\d.,]+)(.*)$/);
  if (!m) return null;
  return { prefix: m[1], value: m[2], suffix: m[3] };
}

export function ResultsStrip() {
  return (
    <section className="results-strip" aria-label="Resultados de SEO">
      <div className="container">
        <div className="results-strip__grid">
          {siteOptions.results_strip.map((item, i) => {
            const parts = splitMetric(item.metric);
            return (
              <div className="results-strip__item" key={i}>
                <div className="results-strip__client">{item.client_name}</div>
                <div className="results-strip__metric">
                  {parts ? (
                    <>
                      {parts.prefix}
                      <span data-count={parts.value}>{parts.value}</span>
                      {parts.suffix}
                    </>
                  ) : (
                    item.metric
                  )}
                </div>
                <div className="results-strip__label">{item.metric_label}</div>
              </div>
            );
          })}
        </div>
        {siteOptions.results_footnote && (
          <p className="results-strip__foot">{siteOptions.results_footnote}</p>
        )}
      </div>
    </section>
  );
}
