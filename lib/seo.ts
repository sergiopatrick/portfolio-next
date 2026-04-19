import type { Metadata } from 'next';
import { siteOptions, services } from '@/content/site';
import { cases, allCasesSortedByFeature } from '@/content/cases';
import { whatsappE164 } from '@/lib/whatsapp';
import {
  SITE_URL,
  SITE_NAME,
  SITE_LOCALE,
  SITE_LANGUAGE,
  absoluteUrl,
} from '@/lib/site';

const OG_DEFAULT = '/images/og-default.jpg';

type BuildArgs = {
  title: string;
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
      title,
      description,
      siteName: SITE_NAME,
      locale: SITE_LOCALE,
      images: [{ url: image }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
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
    url: absoluteUrl('/'),
    name: SITE_NAME,
    inLanguage: SITE_LANGUAGE,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/?s={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
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
    jobTitle: 'Tech and SEO Specialist',
    worksFor: { '@type': 'Organization', name: 'Gupy' },
    url: absoluteUrl('/'),
    email: `mailto:${siteOptions.email}`,
    telephone: tel,
    sameAs: [
      siteOptions.linkedin,
      siteOptions.github,
      wa ? `https://wa.me/${wa}` : '',
    ].filter(Boolean),
    knowsAbout: [
      'Front-end Development',
      'Technical SEO',
      'WordPress Development',
      'Core Web Vitals',
      'Martech',
      'Automation with LLM',
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
    name: 'Sérgio Patrick — Front-end, SEO técnico e automação com LLM',
    url: absoluteUrl('/'),
    areaServed: { '@type': 'Country', name: 'Brasil' },
    serviceType: [
      'Front-end development',
      'WordPress custom themes and plugins',
      'Technical SEO',
      'AEO (AI Engine Optimization)',
      'Martech architecture',
      'LLM automation',
    ],
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
  const permalink = absoluteUrl(`/work/${slug}/`);

  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: c.title,
    description: c.excerpt,
    datePublished: new Date().toISOString(),
    dateModified: new Date().toISOString(),
    inLanguage: SITE_LANGUAGE,
    wordCount,
    author: { '@type': 'Person', name: 'Sérgio Patrick', url: absoluteUrl('/') },
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
    url: absoluteUrl('/work/'),
    name: 'Cases',
    description:
      'Cases de front-end, SEO técnico e automação com LLM.',
  };
}

export function workItemListSchema(): object {
  const items = allCasesSortedByFeature().map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    url: absoluteUrl(`/work/${c.slug}/`),
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
    '@id': absoluteUrl(`/services/${slug}/#service`),
    name: s.title,
    description: s.excerpt,
    url: absoluteUrl(`/services/${slug}/`),
    serviceType: s.short_title,
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
    url: absoluteUrl(`/services/${slug}/`),
    name: s.title,
  }));
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items,
  };
}

export function contactPageSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    url: absoluteUrl('/contact/'),
    name: 'Contato',
    mainEntity: { '@id': absoluteUrl('/#person') },
  };
}

export function aboutPageSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    url: absoluteUrl('/about/'),
    name: 'Sobre',
    mainEntity: { '@id': absoluteUrl('/#person') },
  };
}
