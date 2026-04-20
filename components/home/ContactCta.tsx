import Link from 'next/link';
import { siteOptions } from '@/content/site';
import { whatsappUrl } from '@/lib/whatsapp';
import { SvgIcon } from '@/components/ui/SvgIcon';

export function ContactCta() {
  const wa = whatsappUrl('cta');
  return (
    <section className="contact-cta" id="contact">
      <div className="container">
        <p className="section__kicker">Vamos trabalhar juntos</p>
        <h2 className="contact-cta__title">
          Precisa de performance, SEO técnico e código de verdade?
        </h2>
        <p className="contact-cta__sub">
          Respondo todos os emails dentro de 48h. Sem formulário genérico. Chega uma
          descrição clara, volta um escopo claro.
        </p>

        <div className="contact-cta__actions">
          {wa && (
            <a href={wa} target="_blank" rel="noopener" className="btn btn--whatsapp">
              <SvgIcon name="whatsapp" width={18} height={18} />
              {' '}
              Chamar no WhatsApp
            </a>
          )}
          <a href={`mailto:${siteOptions.email}`} className="btn btn--secondary">
            {siteOptions.email}
            <span className="btn__arrow" aria-hidden="true">
              →
            </span>
          </a>
          <Link href="/contato/" className="btn btn--link">
            Ou pelo formulário
            <span className="btn__arrow" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
