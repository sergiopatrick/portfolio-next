import type { MetadataRoute } from 'next';
import { caseSlugs } from '@/content/cases';
import { services } from '@/content/site';
import { caseCategories, categorySlug } from '@/content/cases';
import { absoluteUrl } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes: MetadataRoute.Sitemap = [
    { url: absoluteUrl('/'), lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: absoluteUrl('/sobre/'), lastModified: now, changeFrequency: 'monthly' },
    { url: absoluteUrl('/servicos/'), lastModified: now, changeFrequency: 'monthly' },
    { url: absoluteUrl('/contato/'), lastModified: now, changeFrequency: 'monthly' },
    { url: absoluteUrl('/projetos/'), lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
  ];

  for (const slug of Object.keys(services)) {
    routes.push({
      url: absoluteUrl(`/servicos/${slug}/`),
      lastModified: now,
      changeFrequency: 'monthly',
    });
  }

  for (const slug of caseSlugs()) {
    routes.push({
      url: absoluteUrl(`/projetos/${slug}/`),
      lastModified: now,
      changeFrequency: 'monthly',
    });
  }

  for (const name of caseCategories) {
    routes.push({
      url: absoluteUrl(`/projetos/categoria/${categorySlug(name)}/`),
      lastModified: now,
      changeFrequency: 'monthly',
    });
  }

  return routes;
}
