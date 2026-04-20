// Canonical domain is .com.br. If NEXT_PUBLIC_SITE_URL is unset, fall back
// here so canonicals, OG URLs and sitemap all agree with the served domain.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://sergiopatrick.com.br'
).replace(/\/$/, '');

export const SITE_NAME = 'Sérgio Patrick';
export const SITE_LOCALE = 'pt_BR';
export const SITE_LANGUAGE = 'pt-BR';

export function absoluteUrl(path: string = '/'): string {
  if (path.startsWith('http')) return path;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}
