import type { Metadata } from 'next';
import Link from 'next/link';
import { siteOptions } from '@/content/site';
import { servicesByGroup, serviceGroupLabels } from '@/content/services';
import type { ServiceGroup } from '@/content/types';
import { whatsappUrl } from '@/lib/whatsapp';
import { JsonLd } from '@/components/ui/JsonLd';
import { buildMetadata, servicesHubItemList } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Serviços de SEO técnico, GEO e desenvolvimento',
  description:
    'Consultoria SEO, SEO técnico e auditoria, GEO e SEO para IA, desenvolvimento WordPress, automação com IA e SEO para saúde e e-commerce.',
  path: '/servicos/',
});

const GROUPS: ServiceGroup[] = ['consultoria', 'desenvolvimento', 'nicho'];

export default function ServicesHubPage() {
  const wa = whatsappUrl('contact');
  return (
    <>
      <JsonLd schema={servicesHubItemList()} />

      <section className="page-hero">
        <div className="container">
          <nav className="case-hero__breadcrumbs" aria-label="Breadcrumbs">
            <Link href="/">Início</Link>
            <span>Serviços</span>
          </nav>
          <p className="section__kicker">Serviços</p>
          <h1 className="page-hero__title">
            Serviços de SEO técnico e GEO, com o código incluído.
          </h1>
          <p className="page-hero__sub">
            Eu faço o diagnóstico, monto o plano e implemento. Você não precisa esperar
            a fila do time de desenvolvimento para ver a recomendação no ar.
          </p>
        </div>
      </section>

      {GROUPS.map((group) => {
        const items = servicesByGroup(group);
        if (!items.length) return null;
        return (
          <section className="section services-group" key={group}>
            <div className="container">
              <h2 className="services-group__title">{serviceGroupLabels[group]}</h2>
              <div className="services__grid services__grid--hub">
                {items.map(({ slug, data }) => (
                  <article className="service service--hub reveal" key={slug}>
                    <div className="service__num">{data.number}</div>
                    <h3 className="service__name">
                      <Link href={`/${slug}/`}>{data.short_title}</Link>
                    </h3>
                    <p className="service__description">{data.excerpt}</p>
                    <Link href={`/${slug}/`} className="btn btn--link service__link">
                      Ver serviço{' '}
                      <span className="btn__arrow" aria-hidden="true">
                        →
                      </span>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="section">
        <div className="container">
          <div className="services-note">
            <p>Não sabe qual serviço encaixa no seu caso?</p>
            <p className="text-muted">
              Mande uma mensagem pelo{' '}
              {wa && (
                <a href={wa} target="_blank" rel="noopener">
                  WhatsApp
                </a>
              )}{' '}
              ou por <a href={`mailto:${siteOptions.email}`}>e-mail</a>. Em até 48 horas
              eu digo qual caminho faz sentido, ou indico alguém mais adequado.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
