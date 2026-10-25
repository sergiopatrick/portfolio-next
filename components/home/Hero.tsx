import Link from 'next/link';
import { siteOptions } from '@/content/site';
import { whatsappUrl } from '@/lib/whatsapp';
import { SvgIcon } from '@/components/ui/SvgIcon';
import { HeroSwitch } from '@/components/home/HeroSwitch';
import { DotField } from '@/components/home/DotField';

export function Hero() {
  const wa = whatsappUrl('hero');
  return (
    <section className="hero hero--v2">
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="hero__kicker">Consultoria independente, atendo todo o Brasil</p>
          <h1 className="hero__title">
            {siteOptions.hero_title}{' '}
            <span className="hero__title-tail">{siteOptions.hero_title_tail}</span>
          </h1>
          <p className="hero__subtitle">{siteOptions.hero_subtitle}</p>
          <div className="hero__actions">
            <Link href={siteOptions.hero_cta_url} className="btn btn--primary">
              {siteOptions.hero_cta_label}
              <span className="btn__arrow" aria-hidden="true">
                →
              </span>
            </Link>
            {wa && (
              <a href={wa} target="_blank" rel="noopener" className="btn btn--whatsapp">
                <SvgIcon name="whatsapp" width={18} height={18} />
                {' '}
                Conversar no WhatsApp
              </a>
            )}
          </div>
        </div>
        <HeroSwitch />
      </div>
      <DotField />
    </section>
  );
}
