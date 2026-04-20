import Link from 'next/link';
import type { Case } from '@/content/types';
import { categorySlug } from '@/content/cases';

type Props = { data: Case };

export function CaseMeta({ data }: Props) {
  if (!data.client_anon && !data.sector && !data.role && !data.duration) return null;

  const catSlug = categorySlug(data.category);

  return (
    <section className="case-meta">
      <div className="container">
        <div className="case-meta__grid">
          {data.client_anon && (
            <div>
              <div className="case-meta__label">Cliente</div>
              <div className="case-meta__value">{data.client_anon}</div>
            </div>
          )}
          {data.sector && (
            <div>
              <div className="case-meta__label">Setor</div>
              <div className="case-meta__value">{data.sector}</div>
            </div>
          )}
          {data.category && (
            <div>
              <div className="case-meta__label">Categoria</div>
              <div className="case-meta__value">
                <Link href={`/projetos/categoria/${catSlug}/`} className="case-meta__link">
                  {data.category}
                </Link>
              </div>
            </div>
          )}
          {data.role && (
            <div>
              <div className="case-meta__label">Papel</div>
              <div className="case-meta__value">{data.role}</div>
            </div>
          )}
          {data.duration && (
            <div>
              <div className="case-meta__label">Duração</div>
              <div className="case-meta__value">{data.duration}</div>
            </div>
          )}
        </div>

        {data.stack.length > 0 && (
          <div style={{ marginTop: 'var(--s-5)' }}>
            <div className="case-meta__label" style={{ marginBottom: 'var(--s-3)' }}>
              Stack
            </div>
            <div className="card-case__meta">
              {data.stack.map((s, i) => (
                <span className="tag" key={i}>
                  {s.item}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
