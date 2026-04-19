import { readFileSync } from 'node:fs';
import { join } from 'node:path';

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

export function renderProse(html: string): string {
  return html.replace(/\{\{DIAGRAM:([a-z0-9-]+)\}\}/g, (_, slug: string) => {
    const svg = diagramSvg(slug);
    if (!svg) return '';
    return `<figure class="diagram-wrap">${svg}</figure>`;
  });
}
