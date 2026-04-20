import Link from 'next/link';
import { siteOptions } from '@/content/site';

export function AboutPreview() {
  return (
    <section className="about-preview">
      <div className="container about-preview__grid">
        <div>
          <p className="section__kicker">Sobre</p>
          <h2 className="about-preview__title">Trajetória</h2>
        </div>
        <div>
          <p className="about-preview__text">{siteOptions.about_preview}</p>
          <Link href="/sobre/" className="btn btn--link">
            Ver perfil completo e trajetória{' '}
            <span className="btn__arrow" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
