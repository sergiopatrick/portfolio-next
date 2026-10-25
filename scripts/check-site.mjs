// Pre-deploy check against a running build (next start).
//   node scripts/check-site.mjs http://localhost:3011
// For every URL in the sitemap: status 200, exactly one H1, title and meta
// description length, canonical pointing to itself, JSON-LD that parses, and
// every internal link resolving. Also checks the old-URL 301s, robots.txt and
// llms.txt. Exits 1 on any failure.
const BASE = (process.argv[2] || 'http://localhost:3011').replace(/\/$/, '');
const PROD = 'https://sergiopatrick.com.br';
const fails = [];
const warns = [];
const fail = (m) => fails.push(m);
const warn = (m) => warns.push(m);

const local = (u) => u.replace(PROD, BASE);
const get = (u, opts = {}) => fetch(u, { redirect: 'manual', ...opts });

const sitemap = await (await get(`${BASE}/sitemap.xml`)).text();
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (urls.length < 20) fail(`sitemap has only ${urls.length} URLs`);

const linkStatus = new Map();
const titles = new Map();

for (const url of urls) {
  const res = await get(local(url));
  if (res.status !== 200) {
    fail(`${url} -> ${res.status}`);
    continue;
  }
  const html = await res.text();
  const path = new URL(url).pathname;

  const h1 = html.match(/<h1[\s>]/g) || [];
  if (h1.length !== 1) fail(`${path} has ${h1.length} H1`);

  const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || '';
  if (!title) fail(`${path} without <title>`);
  if (title.length > 70) warn(`${path} title ${title.length} chars: ${title}`);
  if (titles.has(title)) fail(`${path} duplicates title of ${titles.get(title)}`);
  titles.set(title, path);

  const desc = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '';
  if (!desc) fail(`${path} without meta description`);
  else if (desc.length > 170) warn(`${path} description ${desc.length} chars`);

  const canonical = (html.match(/<link rel="canonical" href="([^"]*)"/) || [])[1] || '';
  if (canonical !== url) fail(`${path} canonical ${canonical || 'missing'}`);

  for (const m of html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    try {
      const data = JSON.parse(m[1]);
      const flat = JSON.stringify(data);
      if (/Gupy/.test(flat) && /worksFor/.test(flat)) fail(`${path} schema still says worksFor Gupy`);
      if (/SearchAction/.test(flat)) fail(`${path} schema has SearchAction`);
    } catch {
      fail(`${path} has invalid JSON-LD`);
    }
  }
  const faqBlocks = (html.match(/"@type":"FAQPage"/g) || []).length;
  if (faqBlocks > 1) fail(`${path} has ${faqBlocks} FAQPage blocks`);

  for (const m of html.matchAll(/href="(\/[^"#?]*)/g)) {
    const href = m[1];
    if (href.startsWith('/_next/') || /\.(png|jpg|svg|ico|txt|xml|webmanifest)$/.test(href)) continue;
    if (!linkStatus.has(href)) linkStatus.set(href, { from: path, status: null });
  }
}

for (const [href, info] of linkStatus) {
  const res = await get(`${BASE}${href}`);
  info.status = res.status;
  if (res.status >= 400) fail(`broken link ${href} (from ${info.from}) -> ${res.status}`);
  else if (res.status >= 300) warn(`link ${href} (from ${info.from}) redirects ${res.status}`);
}

const REDIRECTS = {
  '/servicos/seo/': '/seo-tecnico/',
  '/servicos/front-end/': '/desenvolvedor-wordpress/',
  '/servicos/automation/': '/automacao-com-ia/',
};
for (const [from, to] of Object.entries(REDIRECTS)) {
  const res = await get(`${BASE}${from}`);
  const loc = res.headers.get('location') || '';
  if (![301, 308].includes(res.status) || !loc.endsWith(to)) fail(`${from} -> ${res.status} ${loc}, expected 301/308 to ${to}`);
}

const robots = await (await get(`${BASE}/robots.txt`)).text();
for (const bot of ['GPTBot', 'ClaudeBot', 'PerplexityBot', 'Google-Extended']) {
  if (!robots.includes(bot)) fail(`robots.txt does not mention ${bot}`);
}
const llms = await get(`${BASE}/llms.txt`);
if (llms.status !== 200) fail(`/llms.txt -> ${llms.status}`);

const og = await get(`${BASE}/og-default.png`);
if (og.status !== 200 || !(og.headers.get('content-type') || '').includes('image/png')) fail(`/og-default.png -> ${og.status}`);

console.log(`${urls.length} URLs, ${linkStatus.size} internal links checked`);
warns.forEach((w) => console.log('WARN', w));
fails.forEach((f) => console.log('FAIL', f));
console.log(fails.length ? `${fails.length} failures` : 'all checks passed');
process.exit(fails.length ? 1 : 0);
