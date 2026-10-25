import type { Metadata } from 'next';
import { siteOptions } from '@/content/site';
import { services } from '@/content/services';
import { cases, allCasesSortedByFeature } from '@/content/cases';
import { posts, allPostsSortedByDate } from '@/content/posts';
import { whatsappE164 } from '@/lib/whatsapp';
import {
  SITE_URL,
  SITE_NAME,
  SITE_LOCALE,
  SITE_LANGUAGE,
  absoluteUrl,
} from '@/lib/site';

const OG_DEFAULT = '/og-default.png';

// Cases have no per-item date. These are the real publish and last-edit days
// of the case set, never the build time.
export const CASES_PUBLISHED = '2026-04-20';
export const CASES_UPDATED = '2026-10-25';

type BuildArgs = {
  // Pass a string to get ", Sérgio Patrick" appended via the layout template.
  // Pass { absolute } for pages (like the home) where the brand is already in
  // the title and the template would duplicate it.
  title: string | { absolute: string };
  description: string;
  path: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  noindex?: boolean;
  keywords?: string[];
};

export function buildMetadata({
  title,
  description,
  path,
  ogImage,
  ogType = 'website',
  noindex = false,
  keywords,
}: BuildArgs): Metadata {
  const url = absoluteUrl(path);
  const image = ogImage ? absoluteUrl(ogImage) : absoluteUrl(OG_DEFAULT);
  const ogTitle = typeof title === 'string' ? title : title.absolute;

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    keywords: keywords?.length ? keywords : undefined,
    authors: [{ name: SITE_NAME }],
    alternates: { canonical: url },
    robots: noindex
      ? { index: false, follow: true }
      : { index: true, follow: true, 'max-image-preview': 'large' },
    openGraph: {
      type: ogType,
      url,
      title: ogTitle,
      description,
      siteName: SITE_NAME,
      locale: SITE_LOCALE,
      images: [{ url: image }],
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description,
      images: [image],
    },
  };
}

// ------------------ JSON-LD builders -----------------------

export function websiteSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': absoluteUrl('/#website'),
    url: absoluteUrl('/'),
    name: SITE_NAME,
    inLanguage: SITE_LANGUAGE,
    publisher: { '@id': absoluteUrl('/#person') },
  };
}

export function personSchema(): object {
  const wa = whatsappE164();
  const tel = wa ? `+${wa}` : '';
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': absoluteUrl('/#person'),
    name: 'Sérgio Patrick',
    alternateName: 'Patrick',
    jobTitle: 'Consultor de SEO técnico e GEO',
    description:
      'Consultor independente de SEO técnico e GEO que também desenvolve em WordPress, Next.js e Shopify.',
    hasOccupation: [
      {
        '@type': 'Occupation',
        name: 'Consultor de SEO',
        occupationLocation: { '@type': 'Country', name: 'Brasil' },
        skills: 'SEO técnico, GEO, auditoria de SEO, dados estruturados, Core Web Vitals',
      },
      {
        '@type': 'Occupation',
        name: 'Desenvolvedor web',
        occupationLocation: { '@type': 'Country', name: 'Brasil' },
        skills: 'WordPress, plugins PHP, Next.js, JavaScript, performance web',
      },
    ],
    url: absoluteUrl('/'),
    image: absoluteUrl('/og-default.png'),
    email: `mailto:${siteOptions.email}`,
    telephone: tel,
    sameAs: [
      siteOptions.linkedin,
      siteOptions.github,
      'https://github.com/sergiopatrick/trilha-seo-dados-ia',
    ].filter(Boolean),
    knowsAbout: [
      'SEO técnico',
      'Generative Engine Optimization (GEO)',
      'Answer Engine Optimization (AEO)',
      'Auditoria de SEO',
      'Dados estruturados',
      'Core Web Vitals',
      'Desenvolvimento WordPress',
      'Front-end',
      'Automação com IA',
      'Martech',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Salvador',
      addressRegion: 'BA',
      addressCountry: 'BR',
    },
  };
}

export function professionalServiceSchema(): object {
  const wa = whatsappE164();
  const tel = wa ? `+${wa}` : '';
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': absoluteUrl('/#service'),
    name: 'Sérgio Patrick, consultoria de SEO técnico e GEO',
    url: absoluteUrl('/'),
    areaServed: { '@type': 'Country', name: 'Brasil' },
    serviceType: Object.values(services).map((svc) => svc.short_title),
    provider: { '@id': absoluteUrl('/#person') },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Salvador',
      addressRegion: 'BA',
      addressCountry: 'BR',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'Sales',
        email: siteOptions.email,
        telephone: tel,
        contactOption: 'TollFree',
        availableLanguage: ['Portuguese', 'English'],
        areaServed: ['BR', 'US', 'PT', 'UK'],
      },
      ...(tel
        ? [
            {
              '@type': 'ContactPoint',
              contactType: 'Customer Service',
              telephone: tel,
              contactOption: 'WhatsApp',
              availableLanguage: ['Portuguese', 'English'],
              areaServed: ['BR', 'US', 'PT', 'UK'],
            },
          ]
        : []),
    ],
  };
}

export function breadcrumbSchema(
  crumbs: { label: string; url: string }[],
): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.label,
      item: c.url,
    })),
  };
}

export function articleSchema(slug: string): object {
  const c = cases[slug];
  const proseFields = [
    c.s1_context,
    c.s2_problem,
    c.s3_approach,
    c.s4_execution,
    c.s5_results_text,
    c.s6_reusable,
  ].join(' ');
  const wordCount = proseFields.replace(/<[^>]*>/g, ' ').trim().split(/\s+/).length;

  const stackNames = c.stack.map((s) => s.item).filter(Boolean);
  const permalink = absoluteUrl(`/projetos/${slug}/`);

  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: c.title,
    description: c.excerpt,
    datePublished: CASES_PUBLISHED,
    dateModified: CASES_UPDATED,
    inLanguage: SITE_LANGUAGE,
    wordCount,
    author: { '@id': absoluteUrl('/#person'), '@type': 'Person', name: 'Sérgio Patrick', url: absoluteUrl('/sobre/') },
    mainEntityOfPage: { '@type': 'WebPage', '@id': permalink },
    image: [],
    publisher: { '@type': 'Person', name: 'Sérgio Patrick', url: absoluteUrl('/') },
    articleSection: c.category,
  };

  if (c.keywords?.length) {
    schema.keywords = c.keywords.join(', ');
  }
  if (stackNames.length) {
    schema.about = stackNames.map((name) => ({ '@type': 'Thing', name }));
  }

  return schema;
}

export function collectionPageSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    url: absoluteUrl('/projetos/'),
    name: 'Projetos',
    description:
      'Cases de SEO técnico, GEO, desenvolvimento WordPress e automação com IA.',
  };
}

export function workItemListSchema(): object {
  const items = allCasesSortedByFeature().map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    url: absoluteUrl(`/projetos/${c.slug}/`),
    name: c.data.title,
  }));
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items,
  };
}

export function serviceSchema(slug: string): object {
  const s = services[slug];
  if (!s) return {};
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': absoluteUrl(`/${slug}/#service`),
    name: s.title,
    description: s.excerpt,
    url: absoluteUrl(`/${slug}/`),
    serviceType: s.focus_keyword,
    provider: { '@id': absoluteUrl('/#person') },
    areaServed: { '@type': 'Country', name: 'Brasil' },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Entregáveis',
      itemListElement: s.deliverables.map((d) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: d },
      })),
    },
  };
}

export function faqPageSchema(faqs: { q: string; a: string }[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function servicesHubItemList(): object {
  const items = Object.entries(services).map(([slug, s], i) => ({
    '@type': 'ListItem',
    position: i + 1,
    url: absoluteUrl(`/${slug}/`),
    name: s.title,
  }));
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items,
  };
}

export function blogPostSchema(slug: string): object {
  const p = posts[slug];
  if (!p) return {};
  const wordCount = p.body
    .replace(/<[^>]*>/g, ' ')
    .trim()
    .split(/\s+/).length;
  const permalink = absoluteUrl(`/blog/${slug}/`);
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: p.title,
    description: p.excerpt,
    datePublished: p.published_at,
    dateModified: p.updated_at || p.published_at,
    inLanguage: SITE_LANGUAGE,
    wordCount,
    author: { '@id': absoluteUrl('/#person'), '@type': 'Person', name: 'Sérgio Patrick', url: absoluteUrl('/sobre/') },
    mainEntityOfPage: { '@type': 'WebPage', '@id': permalink },
    publisher: { '@type': 'Person', name: 'Sérgio Patrick', url: absoluteUrl('/') },
    articleSection: p.tag,
  };
  if (p.keywords?.length) schema.keywords = p.keywords.join(', ');
  return schema;
}

export function blogCollectionSchema(): object {
  const items = allPostsSortedByDate().map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    url: absoluteUrl(`/blog/${p.slug}/`),
    name: p.data.title,
  }));
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    url: absoluteUrl('/blog/'),
    name: 'Blog',
    inLanguage: SITE_LANGUAGE,
    blogPost: items,
  };
}

export function contactPageSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    url: absoluteUrl('/contato/'),
    name: 'Contato',
    mainEntity: { '@id': absoluteUrl('/#person') },
  };
}

export function aboutPageSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    url: absoluteUrl('/sobre/'),
    name: 'Sobre',
    mainEntity: { '@id': absoluteUrl('/#person') },
  };
}
