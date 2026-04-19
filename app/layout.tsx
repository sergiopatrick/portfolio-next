import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { ClientBehaviors } from '@/components/layout/ClientBehaviors';
import { ThemeBootstrapScript } from '@/components/layout/ThemeBootstrapScript';
import { JsonLd } from '@/components/ui/JsonLd';
import { websiteSchema } from '@/lib/seo';
import { SITE_URL, SITE_NAME, SITE_LANGUAGE } from '@/lib/site';
import { siteOptions } from '@/content/site';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: siteOptions.home_seo_title,
    template: `%s — ${SITE_NAME}`,
  },
  description: siteOptions.home_seo_description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={SITE_LANGUAGE} suppressHydrationWarning>
      <head>
        <ThemeBootstrapScript />
        <JsonLd schema={websiteSchema()} />
      </head>
      <body>
        <Link href="#main" className="skip-link">
          Pular para o conteúdo
        </Link>
        <SiteHeader />
        <main id="main" role="main">
          {children}
        </main>
        <SiteFooter />
        <ClientBehaviors />
      </body>
    </html>
  );
}
