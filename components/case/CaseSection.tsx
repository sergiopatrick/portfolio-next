import type { CodeSnippet, ResultMetric } from '@/content/types';
import { Prose } from '@/components/ui/Prose';
import { CaseCode } from '@/components/case/CaseCode';
import { CaseMetrics } from '@/components/case/CaseMetrics';

type Props = {
  num: string;
  title: string;
  body: string;
  baseline?: string;
  snippets?: CodeSnippet[];
  metrics?: ResultMetric[];
};

export function CaseSection({
  num,
  title,
  body,
  baseline,
  snippets,
  metrics,
}: Props) {
  const hasMetrics = Array.isArray(metrics) && metrics.length > 0;
  const hasSnippets = Array.isArray(snippets) && snippets.length > 0;

  if (!body && !baseline && !hasMetrics && !hasSnippets) return null;

  return (
    <section className="case-section reveal">
      <div className="container">
        <div className="case-section__num">S{num}</div>
        <h2 className="case-section__title">{title}</h2>

        {body && <Prose html={body} />}

        {baseline && (
          <div className="case-baseline">
            <strong>Baseline</strong> {baseline}
          </div>
        )}

        {hasMetrics && <CaseMetrics metrics={metrics!} />}

        {hasSnippets &&
          snippets!.map((snip, i) => <CaseCode snippet={snip} key={i} />)}
      </div>
    </section>
  );
}
