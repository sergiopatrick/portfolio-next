import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { services, siteOptions } from '@/content/site';
import { cases } from '@/content/cases';
import { whatsappUrl } from '@/lib/whatsapp';
import { JsonLd } from '@/components/ui/JsonLd';
import { SvgIcon } from '@/components/ui/SvgIcon';
import { CardCase } from '@/components/ui/CardCase';
import { Prose } from '@/components/ui/Prose';
import { FaqSection } from '@/components/ui/Faq';
import {
  buildMetadata,
  serviceSchema,
  faqPageSchema,
  breadcrumbSchema,
} from '@/lib/seo';
import { absoluteUrl } from '@/lib/site';

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return Object.keys(services).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = services[slug];
  if (!s) return buildMetadata({ title: 'Serviço', description: '', path: '/' });
  return buildMetadata({
    title: s.seo_title,
    description: s.seo_description,
    keywords: s.keywords,
    path: `/services/${slug}/`,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = services[slug];
  if (!service) notFound();

  const wa = whatsappUrl('cta');
  const breadcrumbs = [
    { label: 'Home', url: absoluteUrl('/') },
    { label: 'Services', url: absoluteUrl('/services/') },
    { label: service.short_title, url: absoluteUrl(`/services/${slug}/`) },
  ];

  const relatedPosts = service.related_case_slugs
    .filter((cs) => cases[cs])
    .map((cs) => ({ slug: cs, data: cases[cs] }));

  return (
    <>
      <JsonLd
        schema={[
          serviceSchema(slug),
          breadcrumbSchema(breadcrumbs),
          ...(service.faqs.length ? [faqPageSchema(service.faqs)] : []),
        ]}
      />

      <section className="service-hero">
        <div className="container">
          <nav className="case-hero__breadcrumbs" aria-label="Breadcrumbs">
            <Link href="/">Home</Link>
            <Link href="/services/">Services</Link>
            <span>{service.short_title}</span>
          </nav>

          <p className="section__kicker">{service.kicker}</p>
          <h1 className="service-hero__title">{service.title}</h1>
          <p className="service-hero__lead">{service.direct_answer}</p>

          <div className="service-hero__actions">
            {wa && (
              <a href={wa} target="_blank" rel="noopener" className="btn btn--whatsapp">
                <SvgIcon name="whatsapp" width={18} height={18} />
                {' '}
                Chamar no WhatsApp sobre isso
              </a>
            )}
            <Link href="/work/" className="btn btn--secondary">
              Ver cases relacionados
              <span className="btn__arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="service-lead">
        <div className="container container--prose">
          <Prose html={service.body_lead} />
        </div>
      </section>

      <section className="service-problems">
        <div className="container">
          <p className="section__kicker">Problemas que resolvo</p>
          <h2 className="section__title">Tipicamente, este eixo sozinho</h2>

          <div className="problems-grid">
            {service.problems_standalone.map((p, i) => (
              <article className="problem" key={i}>
                <h3 className="problem__title">{p.title}</h3>
                <p className="problem__body">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="service-combined">
        <div className="container">
          <p className="section__kicker">Combinando eixos</p>
          <h2 className="section__title">Quando este eixo cruza com os outros</h2>
          <p className="service-combined__lead">
            Problema real raramente mora num eixo só. A maioria dos clientes que me
            procuram precisa de pelo menos dois — e o ganho é composto, não aditivo.
          </p>

          <div className="combined-grid">
            {service.problems_combined.map((c, i) => {
              const targetUrl = c.axis_slug ? `/services/${c.axis_slug}/` : '';
              return (
                <article className="combined" key={i}>
                  <div className="combined__tag">Junto com</div>
                  <h3 className="combined__axis">
                    {targetUrl ? (
                      <Link href={targetUrl}>
                        {c.axis} <span aria-hidden="true">→</span>
                      </Link>
                    ) : (
                      c.axis
                    )}
                  </h3>
                  <p className="combined__body">{c.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="service-deliverables">
        <div className="container">
          <div className="service-deliverables__grid">
            <div>
              <p className="section__kicker">Entregáveis</p>
              <h2 className="section__title" style={{ fontSize: 'var(--fs-xl)' }}>
                O que chega na sua mão
              </h2>
            </div>
            <ul className="deliverables-list">
              {service.deliverables.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </div>

          {service.stack.length > 0 && (
            <div className="service-stack">
              <div className="service-stack__label">Stack deste eixo</div>
              <div className="service-stack__items">
                {service.stack.map((tech, i) => (
                  <span className="tag" key={i}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {relatedPosts.length > 0 && (
        <section className="service-cases">
          <div className="container">
            <p className="section__kicker">Cases deste eixo</p>
            <h2 className="section__title">
              Exemplos reais que passaram pelo meu teclado
            </h2>
            <div className="selected-work__grid">
              {relatedPosts.map(({ slug: cs, data }) => (
                <CardCase key={cs} slug={cs} data={data} as="h3" />
              ))}
            </div>
          </div>
        </section>
      )}

      {service.faqs.length > 0 && <FaqSection faqs={service.faqs} />}

      <section className="contact-cta">
        <div className="container">
          <p className="section__kicker">Vamos trabalhar juntos</p>
          <h2 className="contact-cta__title">
            Precisa de {service.short_title.toLowerCase()}?
          </h2>
          <p className="contact-cta__sub">
            Conta o contexto em 3 linhas. Respondo em 48h com proposta ou com
            &quot;não sou eu que você precisa&quot; — o que for verdade.
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
          </div>
        </div>
      </section>
    </>
  );
}
