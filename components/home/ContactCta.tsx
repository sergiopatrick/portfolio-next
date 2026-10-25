import Link from 'next/link';
import { siteOptions } from '@/content/site';
import { whatsappUrl } from '@/lib/whatsapp';
import { SvgIcon } from '@/components/ui/SvgIcon';

export function ContactCta() {
  const wa = whatsappUrl('cta');
  return (
    <section className="contact-cta" id="contact">
      <div className="container">
        <p className="section__kicker">Próximo passo</p>
        <h2 className="contact-cta__title">
          Quer ser achado no Google e citado pelas IAs?
        </h2>
        <p className="contact-cta__sub">
          Conta o contexto em três linhas. Respondo em até 48 horas úteis com um
          caminho claro e o que eu faria primeiro.
        </p>

        <div className="contact-cta__actions">
          {wa && (
            <a href={wa} target="_blank" rel="noopener" className="btn btn--whatsapp">
              <SvgIcon name="whatsapp" width={18} height={18} />
              {' '}
              Conversar no WhatsApp
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
