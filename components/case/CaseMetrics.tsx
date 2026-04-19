import type { ResultMetric } from '@/content/types';

type Props = { metrics: ResultMetric[] };

export function CaseMetrics({ metrics }: Props) {
  if (!metrics.length) return null;
  return (
    <div className="metrics">
      {metrics.map((m, i) => {
        if (!m.value && !m.label) return null;
        return (
          <article className="metric" key={i}>
            <div className="metric__value">{m.value}</div>
            <div className="metric__label">{m.label}</div>
            {m.context && <div className="metric__context">{m.context}</div>}
          </article>
        );
      })}
    </div>
  );
}
