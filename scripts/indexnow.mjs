// Pings IndexNow (Bing, Yandex, Seznam...) with every URL in the live sitemap.
// Run after a production deploy:  node scripts/indexnow.mjs
// The key file lives at public/fd5971b10b58145980ca764aa7036d7a.txt and must stay published.
const KEY = 'fd5971b10b58145980ca764aa7036d7a';
const HOST = 'sergiopatrick.com.br';

const xml = await (await fetch(`https://${HOST}/sitemap.xml`)).text();
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
});
console.log(res.status, res.statusText, `${urlList.length} URLs`);
