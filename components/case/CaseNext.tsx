import Link from 'next/link';
import { allCasesSortedByFeature } from '@/content/cases';

type Props = { currentSlug: string };

export function CaseNext({ currentSlug }: Props) {
  const all = allCasesSortedByFeature();
  const idx = all.findIndex((c) => c.slug === currentSlug);
  if (idx === -1) return null;
  const prev = idx > 0 ? all[idx - 1] : null;
  const next = idx < all.length - 1 ? all[idx + 1] : null;
  if (!prev && !next) return null;

  return (
    <nav className="container case-next" aria-label="Navegação entre cases">
      {prev ? (
        <Link href={`/work/${prev.slug}/`} className="case-next__link">
          <div className="case-next__label">← Case anterior</div>
          <div className="case-next__title">{prev.data.title}</div>
        </Link>
      ) : (
        <span />
      )}

      {next ? (
        <Link
          href={`/work/${next.slug}/`}
          className="case-next__link"
          style={{ textAlign: 'right' }}
        >
          <div className="case-next__label">Próximo case →</div>
          <div className="case-next__title">{next.data.title}</div>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
