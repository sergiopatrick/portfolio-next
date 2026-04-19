import type { Metadata } from 'next';
import Link from 'next/link';
import { services, siteOptions } from '@/content/site';
import { whatsappUrl } from '@/lib/whatsapp';
import { JsonLd } from '@/components/ui/JsonLd';
import { buildMetadata, servicesHubItemList } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Serviços — 3 eixos de trabalho com código no centro — Sérgio Patrick',
  description:
    'Três eixos de trabalho — Front-end e performance, SEO técnico e AEO, Automação com LLM. Problemas que resolvo sozinho e combinando os eixos. Para devs, SEOs e PMs que precisam de execução real.',
  path: '/services/',
});

export default function ServicesHubPage() {
  const wa = whatsappUrl('contact');
  return (
    <>
      <JsonLd schema={servicesHubItemList()} />

      <section className="page-hero">
        <div className="container">
          <nav className="case-hero__breadcrumbs" aria-label="Breadcrumbs">
            <Link href="/">Home</Link>
            <span>Services</span>
          </nav>
          <p className="section__kicker">Services</p>
          <h1 className="page-hero__title">
            Três eixos de trabalho, todos com código no centro.
          </h1>
          <p className="page-hero__sub">
            Front-end performático, SEO técnico de quem programa, e automação com
            LLM feita como engenharia. Em quase todo projeto, pelo menos dois desses
            eixos precisam andar juntos — por isso opero nos três.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services__grid services__grid--hub">
            {Object.entries(services).map(([slug, svc]) => {
              const url = `/services/${slug}/`;
              return (
                <article className="service service--hub" key={slug}>
                  <div className="service__num">{svc.number}</div>
                  <h2 className="service__name">
                    <Link href={url}>{svc.title}</Link>
                  </h2>
                  <p className="service__description">{svc.excerpt}</p>
                  <Link href={url} className="btn btn--link service__link">
                    Ver este eixo{' '}
                    <span className="btn__arrow" aria-hidden="true">
                      →
                    </span>
                  </Link>
                </article>
              );
            })}
          </div>

          <div className="services-note">
            <p>Não sei qual eixo encaixa no meu problema.</p>
            <p className="text-muted">
              Manda mensagem direto:{' '}
              {wa && (
                <a href={wa} target="_blank" rel="noopener">
                  WhatsApp
                </a>
              )}{' '}
              ou <a href={`mailto:${siteOptions.email}`}>email</a>. Em 48h te digo
              qual eixo (ou combinação) faz sentido — ou te aponto pra alguém mais
              adequado.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
