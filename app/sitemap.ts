import type { MetadataRoute } from 'next';
import { allCasesSortedByFeature, caseCategories, categorySlug } from '@/content/cases';
import { allPostsSortedByDate } from '@/content/posts';
import { serviceSlugs } from '@/content/services';
import { absoluteUrl } from '@/lib/site';
import { CASES_UPDATED } from '@/lib/seo';

// Every entry below maps 1:1 to a route that exists in /app and renders 200.
// lastModified is the day the content really changed, never the build time.
// Bump SITE_UPDATED when the copy of the static pages or services changes.
const SITE_UPDATED = '2026-10-25';

function day(iso: string): Date {
  return new Date(iso + 'T00:00:00-03:00');
}

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = allPostsSortedByDate();
  const lastPost = posts.reduce(
    (max, { data }) => ((data.updated_at || data.published_at) > max ? data.updated_at || data.published_at : max),
    SITE_UPDATED,
  );

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: absoluteUrl('/'), lastModified: day(SITE_UPDATED), changeFrequency: 'weekly', priority: 1 },
    { url: absoluteUrl('/servicos/'), lastModified: day(SITE_UPDATED), changeFrequency: 'monthly', priority: 0.9 },
    { url: absoluteUrl('/projetos/'), lastModified: day(CASES_UPDATED), changeFrequency: 'monthly', priority: 0.8 },
    { url: absoluteUrl('/blog/'), lastModified: day(lastPost), changeFrequency: 'weekly', priority: 0.8 },
    { url: absoluteUrl('/sobre/'), lastModified: day(SITE_UPDATED), changeFrequency: 'monthly', priority: 0.6 },
    { url: absoluteUrl('/contato/'), lastModified: day(SITE_UPDATED), changeFrequency: 'yearly', priority: 0.5 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = serviceSlugs().map((slug) => ({
    url: absoluteUrl(`/${slug}/`),
    lastModified: day(SITE_UPDATED),
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  const postRoutes: MetadataRoute.Sitemap = posts.map(({ slug, data }) => ({
    url: absoluteUrl(`/blog/${slug}/`),
    lastModified: day(data.updated_at || data.published_at),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const caseRoutes: MetadataRoute.Sitemap = allCasesSortedByFeature().map(({ slug }) => ({
    url: absoluteUrl(`/projetos/${slug}/`),
    lastModified: day(CASES_UPDATED),
    changeFrequency: 'yearly',
    priority: 0.7,
  }));

  const categoryRoutes: MetadataRoute.Sitemap = caseCategories.map((name) => ({
    url: absoluteUrl(`/projetos/categoria/${categorySlug(name)}/`),
    lastModified: day(CASES_UPDATED),
    changeFrequency: 'yearly',
    priority: 0.4,
  }));

  return [...staticRoutes, ...serviceRoutes, ...caseRoutes, ...categoryRoutes, ...postRoutes];
}
