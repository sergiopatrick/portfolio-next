import type { CodeSnippet } from '@/content/types';
import { langClass, langLabel, normalizeCode } from '@/lib/lang-class';

type Props = { snippet: CodeSnippet };

export function CaseCode({ snippet }: Props) {
  const { lang = 'none', file_label, code, caption } = snippet;
  if (!code) return null;
  const cls = langClass(lang);
  const normalized = normalizeCode(code);
  const label = langLabel(cls);
  const tabText = file_label || label || 'code';

  return (
    <div className="code-block code-block--editor" data-lang={cls}>
      <div className="code-block__header">
        <span className="code-block__tab">
          <span className="code-block__icon" aria-hidden="true">
            <svg viewBox="0 0 16 16" width="14" height="14">
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                d="M3 2h7l3 3v9H3z M10 2v3h3"
              />
            </svg>
          </span>
          <span
            className={
              file_label ? 'code-block__file' : 'code-block__file code-block__file--lang'
            }
          >
            {tabText}
          </span>
        </span>
        {file_label && label && (
          <span className="code-block__lang">{label}</span>
        )}
        <button
          type="button"
          className="code-block__copy"
          aria-label="Copiar código"
        >
          Copy
        </button>
      </div>
      <pre>
        <code className={cls}>{normalized}</code>
      </pre>
      {caption && <div className="code-block__caption">{caption}</div>}
    </div>
  );
}
