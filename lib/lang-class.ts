const MAP: Record<string, string> = {
  php: 'language-php',
  javascript: 'language-javascript',
  js: 'language-javascript',
  typescript: 'language-typescript',
  ts: 'language-typescript',
  tsx: 'language-typescript',
  jsx: 'language-javascript',
  css: 'language-css',
  scss: 'language-css',
  html: 'language-html',
  bash: 'language-bash',
  sh: 'language-bash',
  shell: 'language-bash',
  sql: 'language-sql',
  json: 'language-json',
  python: 'language-python',
  py: 'language-python',
  xml: 'language-xml',
  yaml: 'language-yaml',
  yml: 'language-yaml',
  markdown: 'language-markdown',
  md: 'language-markdown',
  text: 'language-text',
  txt: 'language-text',
};

export function langClass(lang: string): string {
  return MAP[lang] ?? 'language-none';
}

const LABELS: Record<string, string> = {
  'language-php': 'PHP',
  'language-javascript': 'JavaScript',
  'language-typescript': 'TypeScript',
  'language-css': 'CSS',
  'language-html': 'HTML',
  'language-bash': 'Shell',
  'language-sql': 'SQL',
  'language-json': 'JSON',
  'language-python': 'Python',
  'language-xml': 'XML',
  'language-yaml': 'YAML',
  'language-markdown': 'Markdown',
  'language-text': 'Text',
  'language-none': '',
};

export function langLabel(cls: string): string {
  return LABELS[cls] ?? cls.replace(/^language-/, '').toUpperCase();
}

export function normalizeCode(raw: string): string {
  return raw.replace(/^\uFEFF/, '').replace(/\r\n?/g, '\n').trimEnd();
}
