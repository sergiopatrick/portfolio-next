import type { Faq } from '@/content/types';

type Props = {
  faqs: Faq[];
  kicker?: string;
  title?: string;
};

// FAQ markup lives in JSON-LD (faqPageSchema) on each page. No microdata here,
// so the page never ships two FAQPage entities.
export function FaqSection({ faqs, kicker = 'FAQ', title = 'Perguntas frequentes' }: Props) {
  if (!faqs.length) return null;
  return (
    <section className="contact-faq">
      <div className="container container--prose">
        <p className="section__kicker">{kicker}</p>
        <h2 className="about-block__title">{title}</h2>

        <div className="faq">
          {faqs.map((f, i) => (
            <details
              key={i}
              className="faq__item"
            >
              <summary className="faq__q">
                {f.q}
              </summary>
              <div
                className="faq__a"
              >
                <p>{f.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
