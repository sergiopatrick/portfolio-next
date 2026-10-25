import type { Metadata } from 'next';
import Link from 'next/link';
import { timeline } from '@/content/site';
import { JsonLd } from '@/components/ui/JsonLd';
import { buildMetadata, aboutPageSchema } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Sobre o consultor de SEO técnico e GEO',
  description:
    "Sérgio Patrick, consultor de SEO técnico e GEO que também programa. SEO Lead no QConcursos e na VTEX, Unilever, L'Oreal, Inter e Cora. Base em Salvador.",
  path: '/sobre/',
});

export default function AboutPage() {
  return (
    <>
      <JsonLd schema={aboutPageSchema()} />

      <section className="page-hero">
        <div className="container">
          <p className="section__kicker">Sobre</p>
          <h1 className="page-hero__title">
            Consultor de SEO técnico e GEO, com o pé no código.
          </h1>
          <p className="page-hero__sub">
            Nove anos de SEO em empresas como QConcursos, VTEX, Inter, Unilever e
            Cora. Hoje sou consultor independente, com base em Salvador, e atendo o
            Brasil inteiro em português e inglês.
          </p>
        </div>
      </section>

      <section className="about-block">
        <div className="container container--prose">
          <h2 className="about-block__title">Como eu trabalho</h2>
          <div className="prose">
            <p>
              Comecei no front-end e fui para o SEO. Por isso eu não paro na
              recomendação. Quando o problema é técnico, eu abro o código, corrijo e
              meço o efeito no Search Console.
            </p>
            <p>
              Cada entrega vira algo que o time reaproveita, como um checklist, um
              plugin, um template ou um processo documentado. Assim o ganho continua
              depois que o projeto acaba.
            </p>
            <p>
              Hoje cuido do SEO e da visibilidade em IA de marcas como Insider Store,
              Sanar, Hapvida NotreDame e Fluency. Veja como funciona a{' '}
              <Link href="/consultoria-seo/">consultoria SEO</Link> e o trabalho de{' '}
              <Link href="/desenvolvedor-wordpress/">desenvolvimento WordPress</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="about-block">
        <div className="container">
          <h2 className="about-block__title">Trajetória</h2>
          <div className="timeline">
            {timeline.map((row, i) => (
              <div className="timeline__row" key={i}>
                <div className="timeline__year">{row.year}</div>
                <div>
                  <span className="timeline__company">{row.company}</span>
                  <span className="timeline__role">{row.role}</span>
                  {row.note && <span className="timeline__note">{row.note}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-block">
        <div className="container container--prose">
          <h2 className="about-block__title">Formação e certificações</h2>
          <div className="prose">
            <p>
              <strong>FGV</strong>, Análise e Desenvolvimento de Sistemas
              (2024-2027).
            </p>
            <p>
              <strong>Tera</strong>, UI/UX (2023), Product Analytics (2024).
            </p>
            <p>
              <strong>UFBA</strong>, Ciência &amp; Tecnologia (2020-2023).
            </p>
            <p>
              <strong>CXL</strong>, Growth Marketing Specialist (2022).
            </p>
            <p>
              Certificações: SEO Experiments, WordPress, Technical SEO, SEO Manager.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Link href="/contato/" className="btn btn--primary">
            Trabalhar juntos
            <span className="btn__arrow" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
