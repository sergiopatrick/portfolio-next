export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://sergiopatrick.com'
).replace(/\/$/, '');

export const SITE_NAME = 'Sérgio Patrick';
export const SITE_LOCALE = 'pt_BR';
export const SITE_LANGUAGE = 'pt-BR';

export function absoluteUrl(path: string = '/'): string {
  if (path.startsWith('http')) return path;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}
