import type { CodeSnippet } from '@/content/types';
import { langClass, normalizeCode } from '@/lib/lang-class';

type Props = { snippet: CodeSnippet };

export function CaseCode({ snippet }: Props) {
  const { lang = 'none', file_label, code, caption } = snippet;
  if (!code) return null;
  const cls = langClass(lang);
  const normalized = normalizeCode(code);
  return (
    <div className="code-block" data-lang={lang}>
      <div className="code-block__header">
        <span className="code-block__lang">{lang}</span>
        {file_label && <span className="code-block__file">{file_label}</span>}
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
