import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { siteOptions } from '@/content/site';
import { services, serviceSlugs } from '@/content/services';
import { cases } from '@/content/cases';
import { posts } from '@/content/posts';
import { whatsappUrl } from '@/lib/whatsapp';
import { JsonLd } from '@/components/ui/JsonLd';
import { SvgIcon } from '@/components/ui/SvgIcon';
import { CardCase } from '@/components/ui/CardCase';
import { CardPost } from '@/components/ui/CardPost';
import { Prose } from '@/components/ui/Prose';
import { FaqSection } from '@/components/ui/Faq';
import { CaseCode } from '@/components/case/CaseCode';
import {
  buildMetadata,
  serviceSchema,
  faqPageSchema,
  breadcrumbSchema,
} from '@/lib/seo';
import { absoluteUrl } from '@/lib/site';

type Params = { servico: string };

// Service pages live at the root (/consultoria-seo/, /seo-tecnico/...).
// Only the slugs in content/services.ts render, anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return serviceSlugs().map((servico) => ({ servico }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { servico } = await params;
  const s = services[servico];
  if (!s) return {};
  return buildMetadata({
    title: s.seo_title,
    description: s.seo_description,
    keywords: s.keywords,
    path: `/${servico}/`,
  });
}

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { servico } = await params;
  const service = services[servico];
  if (!service) notFound();

  const wa = whatsappUrl('cta');
  const breadcrumbs = [
    { label: 'Início', url: absoluteUrl('/') },
    { label: 'Serviços', url: absoluteUrl('/servicos/') },
    { label: service.short_title, url: absoluteUrl(`/${servico}/`) },
  ];

  const relatedCases = service.related_case_slugs
    .filter((cs) => cases[cs])
    .map((cs) => ({ slug: cs, data: cases[cs] }));
  const relatedPosts = service.related_post_slugs
    .filter((ps) => posts[ps])
    .map((ps) => ({ slug: ps, data: posts[ps] }));

  return (
    <>
      <JsonLd
        schema={[
          serviceSchema(servico),
          breadcrumbSchema(breadcrumbs),
          ...(service.faqs.length ? [faqPageSchema(service.faqs)] : []),
        ]}
      />

      <section className="service-hero">
        <div className="container">
          <nav className="case-hero__breadcrumbs" aria-label="Breadcrumbs">
            <Link href="/">Início</Link>
            <Link href="/servicos/">Serviços</Link>
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
                Conversar no WhatsApp
              </a>
            )}
            <a href="#como-funciona" className="btn btn--secondary">
              Como funciona
              <span className="btn__arrow" aria-hidden="true">
                ↓
              </span>
            </a>
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
          <h2 className="section__title">Quando faz sentido me chamar</h2>

          <div className="problems-grid">
            {service.problems_standalone.map((p, i) => (
              <article className="problem reveal" key={i}>
                <h3 className="problem__title">{p.title}</h3>
                <p className="problem__body">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="service-implement">
        <div className="container service-implement__grid">
          <div>
            <p className="section__kicker">Eu implemento</p>
            <h2 className="section__title">{service.implementation.title}</h2>
            <p className="service-implement__body">{service.implementation.body}</p>
            {servico !== 'desenvolvedor-wordpress' && (
              <Link href="/desenvolvedor-wordpress/" className="btn btn--link">
                Ver o trabalho de desenvolvimento
                <span className="btn__arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            )}
          </div>
          {service.implementation.snippet && (
            <div className="service-implement__code reveal">
              <CaseCode snippet={service.implementation.snippet} />
            </div>
          )}
        </div>
      </section>

      <section className="service-steps" id="como-funciona">
        <div className="container">
          <p className="section__kicker">Como funciona</p>
          <h2 className="section__title">Do diagnóstico ao resultado medido</h2>
          <ol className="steps">
            {service.steps.map((step, i) => (
              <li className="steps__item reveal" key={i}>
                <span className="steps__num" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="steps__title">{step.title}</h3>
                <p className="steps__body">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="service-deliverables">
        <div className="container">
          <div className="service-deliverables__grid">
            <div>
              <p className="section__kicker">Entregáveis</p>
              <h2 className="section__title">O que chega na sua mão</h2>
            </div>
            <ul className="deliverables-list">
              {service.deliverables.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </div>

          {service.stack.length > 0 && (
            <div className="service-stack">
              <div className="service-stack__label">Ferramentas</div>
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

      <section className="service-combined">
        <div className="container">
          <p className="section__kicker">Combina com</p>
          <h2 className="section__title">Serviços que andam junto</h2>
          <div className="combined-grid">
            {service.problems_combined.map((c, i) => (
              <article className="combined" key={i}>
                <h3 className="combined__axis">
                  {services[c.axis_slug] ? (
                    <Link href={`/${c.axis_slug}/`}>
                      {c.axis} <span aria-hidden="true">→</span>
                    </Link>
                  ) : (
                    c.axis
                  )}
                </h3>
                <p className="combined__body">{c.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {relatedCases.length > 0 && (
        <section className="service-cases">
          <div className="container">
            <p className="section__kicker">Cases</p>
            <h2 className="section__title">Projetos reais deste serviço</h2>
            <div className="selected-work__grid">
              {relatedCases.map(({ slug, data }) => (
                <CardCase key={slug} slug={slug} data={data} as="h3" />
              ))}
            </div>
          </div>
        </section>
      )}

      {relatedPosts.length > 0 && (
        <section className="service-posts">
          <div className="container">
            <p className="section__kicker">Para ler antes</p>
            <h2 className="section__title">Guias sobre o tema</h2>
            <div className="selected-work__grid">
              {relatedPosts.map(({ slug, data }) => (
                <CardPost key={slug} slug={slug} data={data} as="h3" />
              ))}
            </div>
          </div>
        </section>
      )}

      {service.faqs.length > 0 && <FaqSection faqs={service.faqs} />}

      <section className="contact-cta">
        <div className="container">
          <p className="section__kicker">Próximo passo</p>
          <h2 className="contact-cta__title">Conta o contexto em três linhas.</h2>
          <p className="contact-cta__sub">
            Respondo em até 48 horas úteis com um caminho claro, ou digo com franqueza
            que não sou a pessoa certa para o seu caso.
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
          </div>
        </div>
      </section>
    </>
  );
}
