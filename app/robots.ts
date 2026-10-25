import type { MetadataRoute } from 'next';
import { absoluteUrl } from '@/lib/site';

// AI crawlers are named on purpose. GEO only works if the answer engines can
// read the site, so the rule says so explicitly instead of relying on "*".
const AI_BOTS = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/api/'] },
      { userAgent: AI_BOTS, allow: '/' },
    ],
    sitemap: absoluteUrl('/sitemap.xml'),
  };
}
