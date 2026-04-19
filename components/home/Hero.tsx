import { siteOptions } from '@/content/site';
import { whatsappUrl } from '@/lib/whatsapp';
import { SvgIcon } from '@/components/ui/SvgIcon';

export function Hero() {
  const wa = whatsappUrl('hero');
  return (
    <section className="hero">
      <div className="container">
        <p className="hero__kicker">Disponível para consultoria técnica</p>
        <h1 className="hero__title">{siteOptions.hero_title}</h1>
        <p className="hero__subtitle">{siteOptions.hero_subtitle}</p>
        <div className="hero__actions">
          <a href={siteOptions.hero_cta_url} className="btn btn--primary">
            {siteOptions.hero_cta_label}
            <span className="btn__arrow" aria-hidden="true">
              →
            </span>
          </a>
          {wa && (
            <a href={wa} target="_blank" rel="noopener" className="btn btn--whatsapp">
              <SvgIcon name="whatsapp" width={18} height={18} />
              {' '}
              Conversar no WhatsApp
            </a>
          )}
          <a
            href={siteOptions.linkedin}
            target="_blank"
            rel="noopener"
            className="btn btn--link hero__link-cta"
          >
            LinkedIn
            <span className="btn__arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
