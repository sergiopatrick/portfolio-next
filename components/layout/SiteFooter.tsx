import Link from 'next/link';
import { siteOptions } from '@/content/site';
import { whatsappUrl, whatsappDisplay } from '@/lib/whatsapp';
import { SvgIcon } from '@/components/ui/SvgIcon';

export function SiteFooter() {
  const wa = whatsappUrl('default');
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="site-footer__grid">
          <div>
            <Link href="/" className="site-logo" rel="home">
              <span>Sérgio Patrick</span>
              <span className="site-logo__dot">.</span>
            </Link>
            <p className="site-footer__tag">
              Front-end developer com profundidade em SEO técnico, performance web e
              automação com LLM.
            </p>
          </div>

          <div className="site-footer__col">
            <h3>Navegar</h3>
            <ul>
              <li>
                <Link href="/work/">Work</Link>
              </li>
              <li>
                <Link href="/about/">About</Link>
              </li>
              <li>
                <Link href="/contact/">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="site-footer__col">
            <h3>Conectar</h3>
            <ul>
              {wa && (
                <li>
                  <a
                    href={wa}
                    rel="noopener"
                    target="_blank"
                    className="site-footer__whatsapp"
                  >
                    <SvgIcon name="whatsapp" width={14} height={14} />
                    {' '}
                    WhatsApp · {whatsappDisplay()}
                  </a>
                </li>
              )}
              <li>
                <a href={`mailto:${siteOptions.email}`}>{siteOptions.email}</a>
              </li>
              <li>
                <a href={siteOptions.linkedin} rel="noopener" target="_blank">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={siteOptions.github} rel="noopener" target="_blank">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="site-footer__bar">
          <span>© {year} Sérgio Patrick</span>
          <span>Salvador, BA, Brasil</span>
        </div>
      </div>
    </footer>
  );
}
