import type { MetadataRoute } from 'next';
import { allCasesSortedByFeature, caseCategories, categorySlug } from '@/content/cases';
import { allPostsSortedByDate } from '@/content/posts';
import { services } from '@/content/site';
import { absoluteUrl } from '@/lib/site';

// Every entry below maps 1:1 to a route that exists in /app and renders 200.
// Slugs are derived from the same content sources the route handlers consume,
// so adding/removing a service, case or category auto-syncs the sitemap.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: absoluteUrl('/'), lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: absoluteUrl('/projetos/'), lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: absoluteUrl('/servicos/'), lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: absoluteUrl('/blog/'), lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: absoluteUrl('/sobre/'), lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: absoluteUrl('/contato/'), lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
  ];

  const postRoutes: MetadataRoute.Sitemap = allPostsSortedByDate().map(
    ({ slug, data }) => ({
      url: absoluteUrl(`/blog/${slug}/`),
      lastModified: new Date(data.published_at + 'T00:00:00'),
      changeFrequency: 'monthly',
      priority: 0.7,
    }),
  );

  const serviceRoutes: MetadataRoute.Sitemap = Object.keys(services).map((slug) => ({
    url: absoluteUrl(`/servicos/${slug}/`),
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const caseRoutes: MetadataRoute.Sitemap = allCasesSortedByFeature().map(({ slug }) => ({
    url: absoluteUrl(`/projetos/${slug}/`),
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const categoryRoutes: MetadataRoute.Sitemap = caseCategories.map((name) => ({
    url: absoluteUrl(`/projetos/categoria/${categorySlug(name)}/`),
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.5,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...caseRoutes,
    ...categoryRoutes,
    ...postRoutes,
  ];
}
