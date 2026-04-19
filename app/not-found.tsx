import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="error-404">
      <div className="container">
        <p className="error-404__code">404 — página não encontrada</p>
        <h1 className="error-404__title">
          Rota inexistente, mas o portfolio continua no ar.
        </h1>
        <p className="error-404__sub">
          O link que você seguiu não existe ou foi renomeado. Tente abrir um case ou
          voltar ao início.
        </p>

        <div className="contact-cta__actions">
          <Link href="/" className="btn btn--primary">
            Voltar para home
            <span className="btn__arrow" aria-hidden="true">
              →
            </span>
          </Link>
          <Link href="/work/" className="btn btn--secondary">
            Ver cases
            <span className="btn__arrow" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
