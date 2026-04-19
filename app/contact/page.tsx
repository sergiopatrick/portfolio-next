import type { Metadata } from 'next';
import { siteOptions, contactFaqs } from '@/content/site';
import { whatsappUrl, whatsappDisplay } from '@/lib/whatsapp';
import { JsonLd } from '@/components/ui/JsonLd';
import { SvgIcon } from '@/components/ui/SvgIcon';
import { FaqSection } from '@/components/ui/Faq';
import {
  buildMetadata,
  contactPageSchema,
  faqPageSchema,
} from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Contato — Sérgio Patrick (WhatsApp, email, LinkedIn)',
  description:
    'Entre em contato por WhatsApp, email ou formulário. Resposta em 48h em dias úteis. Base em Salvador (BA), atendo remoto para BR e exterior.',
  path: '/contact/',
});

export default function ContactPage() {
  const wa = whatsappUrl('contact');

  return (
    <>
      <JsonLd schema={[contactPageSchema(), faqPageSchema(contactFaqs)]} />

      <section className="page-hero">
        <div className="container">
          <p className="section__kicker">Contato</p>
          <h1 className="page-hero__title">Vamos conversar.</h1>
          <p className="page-hero__sub">
            Respondo todos os emails dentro de 48h. Formulário, LinkedIn ou email
            direto — escolha o canal que preferir.
          </p>
        </div>
      </section>

      <section className="section">
        <div
          className="container"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'var(--s-8)',
          }}
        >
          <div>
            <h2 className="about-block__title">Formulário</h2>
            <p className="text-muted" style={{ fontSize: 'var(--fs-sm)' }}>
              Nome, email e uma descrição clara. Sem reCAPTCHA, sem chato.
            </p>

            <div data-contact-feedback hidden />

            <form className="contact-form" method="post" action="/api/contact">
              <div className="contact-form__honeypot" aria-hidden="true">
                <label>
                  Website
                  <input type="text" name="sp_website" tabIndex={-1} autoComplete="off" />
                </label>
              </div>

              <div>
                <label htmlFor="sp_name">Nome</label>
                <input id="sp_name" type="text" name="sp_name" required autoComplete="name" />
              </div>
              <div>
                <label htmlFor="sp_email">Email</label>
                <input id="sp_email" type="email" name="sp_email" required autoComplete="email" />
              </div>
              <div>
                <label htmlFor="sp_message">Mensagem</label>
                <textarea id="sp_message" name="sp_message" required />
              </div>
              <div>
                <button type="submit" className="btn btn--primary">
                  Enviar
                  <span className="btn__arrow" aria-hidden="true">
                    →
                  </span>
                </button>
              </div>
            </form>
          </div>

          <div>
            <h2 className="about-block__title">Canais</h2>
            <div className="contact-channels" style={{ gridTemplateColumns: '1fr' }}>
              {wa && (
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener"
                  className="contact-channel contact-channel--whatsapp"
                >
                  <div className="contact-channel__label">
                    <SvgIcon name="whatsapp" width={14} height={14} />
                    {' '}
                    WhatsApp
                  </div>
                  <div className="contact-channel__value">{whatsappDisplay()}</div>
                </a>
              )}
              <a href={`mailto:${siteOptions.email}`} className="contact-channel">
                <div className="contact-channel__label">Email</div>
                <div className="contact-channel__value">{siteOptions.email}</div>
              </a>
              <a
                href={siteOptions.linkedin}
                target="_blank"
                rel="noopener"
                className="contact-channel"
              >
                <div className="contact-channel__label">LinkedIn</div>
                <div className="contact-channel__value">/in/sergiopatrick1</div>
              </a>
              <a
                href={siteOptions.github}
                target="_blank"
                rel="noopener"
                className="contact-channel"
              >
                <div className="contact-channel__label">GitHub</div>
                <div className="contact-channel__value">{siteOptions.github_handle}</div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <FaqSection faqs={contactFaqs} />

      <style>{`
        @media (max-width: 768px) {
          .page-hero + .section > .container { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
