import type { Metadata } from 'next';
import Link from 'next/link';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Manrope } from 'next/font/google';
import './globals.css';
import './styles/redesign.css';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { ClientBehaviors } from '@/components/layout/ClientBehaviors';
import { ThemeBootstrapScript } from '@/components/layout/ThemeBootstrapScript';
import { JsonLd } from '@/components/ui/JsonLd';
import { websiteSchema } from '@/lib/seo';
import { SITE_URL, SITE_NAME, SITE_LANGUAGE } from '@/lib/site';
import { siteOptions } from '@/content/site';

// Self-hosted at build time by next/font, no request to Google at runtime.
const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: siteOptions.home_seo_title,
    template: `%s, ${SITE_NAME}`,
  },
  description: siteOptions.home_seo_description,
  verification: {
    google: 'CPzF8AK1IoH-NXnePOx3TjbkOdTZma4hChKo_FRdUGU',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={SITE_LANGUAGE} className={manrope.variable} suppressHydrationWarning>
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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
