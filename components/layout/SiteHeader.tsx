import Link from 'next/link';
import { SvgIcon } from '@/components/ui/SvgIcon';

const NAV_ITEMS = [
  { label: 'Projetos', href: '/projetos/' },
  { label: 'Serviços', href: '/servicos/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Sobre', href: '/sobre/' },
  { label: 'Contato', href: '/contato/' },
];

export function SiteHeader() {
  return (
    <header className="site-header" role="banner">
      <div className="container site-header__inner">
        <Link href="/" className="site-logo" rel="home">
          <span>Sérgio Patrick</span>
          <span className="site-logo__dot">.</span>
        </Link>

        <nav className="site-nav" data-site-nav aria-label="Principal" aria-expanded="false">
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-tools">
          <button
            type="button"
            className="theme-toggle"
            data-theme-toggle
            aria-label="Alternar tema claro/escuro"
            aria-pressed="false"
          >
            <span className="theme-toggle__sun">
              <SvgIcon name="sun" />
            </span>
            <span className="theme-toggle__moon">
              <SvgIcon name="moon" />
            </span>
          </button>
          <button
            type="button"
            className="menu-toggle"
            data-menu-toggle
            aria-controls="site-nav"
            aria-expanded="false"
            aria-label="Abrir menu"
          >
            <SvgIcon name="menu" />
          </button>
        </div>
      </div>
    </header>
  );
}
