const MAP: Record<string, string> = {
  php: 'language-php',
  javascript: 'language-javascript',
  js: 'language-javascript',
  css: 'language-css',
  bash: 'language-bash',
  sh: 'language-bash',
  sql: 'language-sql',
  json: 'language-json',
  python: 'language-python',
  py: 'language-python',
};

export function langClass(lang: string): string {
  return MAP[lang] ?? 'language-none';
}

export function normalizeCode(raw: string): string {
  return raw.replace(/^\uFEFF/, '').replace(/\r\n?/g, '\n').trimEnd();
}
