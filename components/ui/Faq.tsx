import type { Faq } from '@/content/types';

type Props = {
  faqs: Faq[];
  kicker?: string;
  title?: string;
};

export function FaqSection({ faqs, kicker = 'FAQ', title = 'Perguntas frequentes' }: Props) {
  if (!faqs.length) return null;
  return (
    <section className="contact-faq">
      <div className="container container--prose">
        <p className="section__kicker">{kicker}</p>
        <h2 className="about-block__title">{title}</h2>

        <div className="faq" itemScope itemType="https://schema.org/FAQPage">
          {faqs.map((f, i) => (
            <details
              key={i}
              className="faq__item"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <summary className="faq__q" itemProp="name">
                {f.q}
              </summary>
              <div
                className="faq__a"
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <p itemProp="text">{f.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
