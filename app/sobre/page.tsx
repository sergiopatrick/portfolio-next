import type { Metadata } from 'next';
import Link from 'next/link';
import { timeline } from '@/content/site';
import { JsonLd } from '@/components/ui/JsonLd';
import { buildMetadata, aboutPageSchema } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Sobre, 9 anos em front-end e SEO técnico',
  description:
    "Front-end developer com 9 anos em empresas globais, VTEX, L'Oreal, Unilever, Inter, Cora, Gupy. Base em Salvador, PT-BR nativo e inglês fluente.",
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
            Front-end com SEO técnico e LLM no sangue.
          </h1>
          <p className="page-hero__sub">
            Base em Salvador, Bahia. 9 anos no jogo, hoje na Gupy. Português nativo,
            inglês full professional.
          </p>
        </div>
      </section>

      <section className="about-block">
        <div className="container container--prose">
          <h2 className="about-block__title">Como eu trabalho</h2>
          <div className="prose">
            <p>
              Código limpo, tipagem forte onde possível (PHP 8, TypeScript quando faz
              sentido), vanilla antes de framework, performance como default e não
              afterthought.
            </p>
            <p>
              Cada entrega vira sistema reutilizável, PRD, mega prompt, template,
              componente, e não um artefato solto. Isso é o que diferencia um
              projeto que escala de um projeto que morre na próxima sprint.
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
