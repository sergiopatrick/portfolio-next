import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { langLabel } from './lang-class';

const PUBLIC_DIR = join(process.cwd(), 'public');

const cache = new Map<string, string>();

export function readSvg(relativePath: string): string {
  const cached = cache.get(relativePath);
  if (cached !== undefined) return cached;
  try {
    const raw = readFileSync(join(PUBLIC_DIR, relativePath), 'utf8');
    cache.set(relativePath, raw);
    return raw;
  } catch {
    cache.set(relativePath, '');
    return '';
  }
}

export function iconSvg(
  name: string,
  attrs: Record<string, string | number> = {},
): string {
  const svg = readSvg(`svg/icons/${name}.svg`);
  if (!svg) return '';
  const attrString = Object.entries(attrs)
    .map(([k, v]) => ` ${k}="${String(v).replace(/"/g, '&quot;')}"`)
    .join('');
  return svg.replace(/<svg\b/, `<svg${attrString}`);
}

export function diagramSvg(slug: string): string {
  return readSvg(`svg/diagrams/${slug}.svg`);
}

const FILE_ICON_BY_LANG: Record<string, string> = {
  'language-php': '<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path fill="currentColor" d="M4.5 4h7a3 3 0 0 1 0 6h-2v2h-1.5v-2h-3.5zm1.5 1.5v3h3.5a1.5 1.5 0 0 0 0-3z"/></svg>',
  'language-javascript': '<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path fill="currentColor" d="M2 2h12v12H2zm6.7 9.3c.3.5.7.8 1.4.8.6 0 .9-.3.9-.7 0-.5-.4-.7-1.1-1l-.4-.2c-1.1-.5-1.8-1-1.8-2.2 0-1.1.9-1.9 2.2-1.9.9 0 1.6.3 2.1 1.2l-1.2.7c-.2-.4-.5-.6-1-.6s-.7.3-.7.6c0 .4.3.6.9.9l.4.2c1.3.6 2 1.1 2 2.3 0 1.3-1.1 2-2.5 2-1.4 0-2.3-.7-2.7-1.5zM5 11.4c.2.4.4.7.9.7s.8-.2.8-.9V6.3h1.4v4.9c0 1.5-.9 2.1-2.1 2.1-1.2 0-1.8-.6-2.1-1.3z"/></svg>',
  'language-typescript': '<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path fill="currentColor" d="M2 2h12v12H2zm5.5 5.5h-2v-1H11v1H9v5H7.5zm3.4 4.6c.3.4.6.7 1.2.7.5 0 .8-.2.8-.6 0-.4-.3-.6-.9-.8l-.3-.2c-.9-.4-1.5-.9-1.5-1.9 0-.9.7-1.6 1.8-1.6.8 0 1.4.3 1.8 1l-1 .6c-.2-.3-.4-.5-.8-.5s-.6.2-.6.5.2.5.7.7l.3.2c1.1.5 1.7.9 1.7 1.9 0 1.1-.9 1.7-2.1 1.7-1.2 0-1.9-.6-2.3-1.3z"/></svg>',
  'language-css': '<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path fill="currentColor" d="M2.5 2h11l-1 11.4L8 15l-4.5-1.6zm9.4 2.7H8.1v1.6h3.6L11.5 8H8.1v1.6h3.2l-.2 2.1L8 12.5l-2.7-.8-.1-1.4H7l.1.8 1 .3 1-.3.1-1.2H4.6l-.4-4.6h7.8z"/></svg>',
  'language-html': '<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path fill="currentColor" d="M2.5 2h11l-1 11.4L8 15l-4.5-1.6zm8.7 4.4h-5l.1 1.4h4.8l-.4 4.1L8 12.5l-2.6-.6-.2-2h1.4l.1 1 1.3.3 1.3-.4.2-1.5H5l-.4-4.1h6.7z"/></svg>',
  'language-json': '<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path fill="currentColor" d="M5 2H3v12h2v-1H4V3h1zm6 0h2v12h-2v-1h1V3h-1zM6.5 5.5l1 .3-.7 4.4-1-.3zm3 0l-1 .3.7 4.4 1-.3z"/></svg>',
  'language-bash': '<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" d="M3 5l3 3-3 3M8 11h5"/></svg>',
  'language-sql': '<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><ellipse cx="8" cy="3.5" rx="5" ry="1.5" fill="none" stroke="currentColor" stroke-width="1.2"/><path fill="none" stroke="currentColor" stroke-width="1.2" d="M3 3.5v9c0 .8 2.2 1.5 5 1.5s5-.7 5-1.5v-9M3 7c0 .8 2.2 1.5 5 1.5s5-.7 5-1.5M3 10c0 .8 2.2 1.5 5 1.5s5-.7 5-1.5"/></svg>',
  'language-python': '<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path fill="currentColor" d="M8 1.5c-2 0-3 1-3 2.5v1.5h3v.5H4c-1.5 0-2.5 1-2.5 3s1 3 2.5 3h1V10c0-1.5 1-2.5 2.5-2.5h3c1.3 0 2.5-1 2.5-2.5V4c0-1.5-1-2.5-3-2.5zm-1 1.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zM12 7.5v1.5H9v.5h3c1.5 0 2.5 1 2.5 3s-1 3-2.5 3h-1V13c0-1.5-1-2.5-2.5-2.5h-3c-1.3 0-2.5-1-2.5-2.5h2c2 0 3-1 3-2.5h3zm-3 4.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z"/></svg>',
  'language-xml': '<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" d="M5 4L2 8l3 4M11 4l3 4-3 4M9.5 3l-3 10"/></svg>',
  'language-yaml': '<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" d="M3 4l3 4-3 4M8 12h6M3 4h11"/></svg>',
  'language-markdown': '<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><rect x="1.5" y="3.5" width="13" height="9" rx="1" fill="none" stroke="currentColor" stroke-width="1.2"/><path fill="currentColor" d="M3.5 10V6.5l1.4 1.8 1.4-1.8V10h-1V8.2l-.4.5-.4-.5V10zM10 6.5h1V9h1.2L10.5 11 9 9h1z"/></svg>',
  'language-text': '<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" d="M4 5h8M4 8h8M4 11h5"/></svg>',
  'language-none': '<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.2" d="M3 2h7l3 3v9H3z M10 2v3h3"/></svg>',
};

function fileIcon(langClass: string): string {
  return FILE_ICON_BY_LANG[langClass] ?? FILE_ICON_BY_LANG['language-none'];
}

export function wrapCodeBlocks(html: string): string {
  // Match <pre [attrs]><code class="language-X" [attrs]>BODY</code></pre>.
  // Tolerates extra attributes on either tag and arbitrary body content.
  const re =
    /<pre(\s[^>]*)?><code\s+class="(language-[a-zA-Z0-9-]+)"([^>]*)>([\s\S]*?)<\/code><\/pre>/g;

  return html.replace(re, (_match, preAttrs = '', langClass, codeAttrs = '', body) => {
    const fileMatch = String(preAttrs).match(/data-file="([^"]+)"/);
    const file = fileMatch ? fileMatch[1] : '';
    const label = langLabel(langClass);
    const icon = fileIcon(langClass);

    const tab = file
      ? `<span class="code-block__tab"><span class="code-block__icon" aria-hidden="true">${icon}</span><span class="code-block__file">${file}</span></span>`
      : `<span class="code-block__tab"><span class="code-block__icon" aria-hidden="true">${icon}</span><span class="code-block__file code-block__file--lang">${label || 'code'}</span></span>`;

    const langBadge = file && label
      ? `<span class="code-block__lang">${label}</span>`
      : '';

    return (
      `<div class="code-block code-block--editor" data-lang="${langClass}">` +
      `<div class="code-block__header">` +
      tab +
      langBadge +
      `<button type="button" class="code-block__copy" aria-label="Copiar código">Copy</button>` +
      `</div>` +
      `<pre><code class="${langClass}"${codeAttrs}>${body}</code></pre>` +
      `</div>`
    );
  });
}

export function renderProse(html: string): string {
  const withDiagrams = html.replace(/\{\{DIAGRAM:([a-z0-9-]+)\}\}/g, (_, slug: string) => {
    const svg = diagramSvg(slug);
    if (!svg) return '';
    return `<figure class="diagram-wrap">${svg}</figure>`;
  });
  return wrapCodeBlocks(withDiagrams);
}
