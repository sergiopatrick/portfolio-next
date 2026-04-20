import type { Metadata } from 'next';
import { Hero } from '@/components/home/Hero';
import { ResultsStrip } from '@/components/home/ResultsStrip';
import { Brands } from '@/components/home/Brands';
import { SelectedWork } from '@/components/home/SelectedWork';
import { ServicesTeaser } from '@/components/home/ServicesTeaser';
import { Stack } from '@/components/home/Stack';
import { AboutPreview } from '@/components/home/AboutPreview';
import { ContactCta } from '@/components/home/ContactCta';
import { JsonLd } from '@/components/ui/JsonLd';
import { buildMetadata, personSchema, professionalServiceSchema } from '@/lib/seo';
import { siteOptions } from '@/content/site';

export const metadata: Metadata = buildMetadata({
  title: { absolute: siteOptions.home_seo_title },
  description: siteOptions.home_seo_description,
  path: '/',
  keywords: siteOptions.home_keywords,
});

export default function HomePage() {
  return (
    <>
      <JsonLd schema={[personSchema(), professionalServiceSchema()]} />
      <Hero />
      <ResultsStrip />
      <Brands />
      <SelectedWork />
      <ServicesTeaser />
      <Stack />
      <AboutPreview />
      <ContactCta />
    </>
  );
}
