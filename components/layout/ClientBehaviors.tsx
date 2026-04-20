'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const STORAGE_KEY = 'sp-theme';
const COPY_LABEL = 'Copy';
const COPIED_LABEL = 'Copied';
const ERROR_LABEL = 'Error';

export function ClientBehaviors() {
  const pathname = usePathname();
  useEffect(() => {
    // Theme toggle
    const themeToggle = document.querySelector<HTMLButtonElement>('[data-theme-toggle]');
    const onThemeClick = () => {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {}
      themeToggle?.setAttribute('aria-pressed', next === 'dark' ? 'true' : 'false');
    };
    themeToggle?.addEventListener('click', onThemeClick);

    // Mobile menu
    const menuToggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
    const siteNav = document.querySelector<HTMLElement>('[data-site-nav]');
    const onMenuClick = () => {
      if (!siteNav) return;
      const open = siteNav.getAttribute('aria-expanded') === 'true';
      siteNav.setAttribute('aria-expanded', open ? 'false' : 'true');
      menuToggle?.setAttribute('aria-expanded', open ? 'false' : 'true');
    };
    menuToggle?.addEventListener('click', onMenuClick);

    // Copy buttons
    const copyHandlers: Array<{ btn: HTMLButtonElement; handler: () => void }> = [];
    document.querySelectorAll<HTMLElement>('.code-block').forEach((block) => {
      const btn = block.querySelector<HTMLButtonElement>('.code-block__copy');
      const code = block.querySelector<HTMLElement>('pre code');
      if (!btn || !code) return;
      const handler = async () => {
        try {
          await navigator.clipboard.writeText(code.innerText);
          btn.textContent = COPIED_LABEL;
          btn.setAttribute('data-state', 'copied');
          setTimeout(() => {
            btn.textContent = COPY_LABEL;
            btn.removeAttribute('data-state');
          }, 1800);
        } catch {
          btn.textContent = ERROR_LABEL;
          setTimeout(() => {
            btn.textContent = COPY_LABEL;
          }, 1800);
        }
      };
      btn.addEventListener('click', handler);
      copyHandlers.push({ btn, handler });
    });

    // Reveal on scroll
    let io: IntersectionObserver | null = null;
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              io?.unobserve(entry.target);
            }
          });
        },
        { rootMargin: '0px 0px -10% 0px', threshold: 0.05 },
      );
      document.querySelectorAll('.reveal').forEach((el) => io?.observe(el));
    } else {
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
    }

    // Smooth anchor scroll with header offset
    const anchorHandlers: Array<{ a: HTMLAnchorElement; handler: (e: Event) => void }> = [];
    document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
      const handler = (e: Event) => {
        const id = a.getAttribute('href');
        if (!id || id === '#') return;
        const target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        const top = (target as HTMLElement).getBoundingClientRect().top + window.scrollY - 72;
        window.scrollTo({ top, behavior: 'smooth' });
      };
      a.addEventListener('click', handler);
      anchorHandlers.push({ a, handler });
    });

    // Contact form feedback via ?sp_sent
    const params = new URLSearchParams(window.location.search);
    if (params.has('sp_sent')) {
      const status = params.get('sp_sent');
      const fb = document.querySelector<HTMLElement>('[data-contact-feedback]');
      if (fb) {
        fb.hidden = false;
        if (status === '1') {
          fb.textContent = 'Mensagem enviada. Vou responder em breve.';
          fb.className = 'contact-form__feedback contact-form__feedback--ok';
        } else if (status === 'invalid') {
          fb.textContent = 'Verifique os campos e tente novamente.';
          fb.className = 'contact-form__feedback contact-form__feedback--err';
        } else {
          fb.textContent = 'Não foi possível enviar. Tente pelo email direto.';
          fb.className = 'contact-form__feedback contact-form__feedback--err';
        }
      }
    }

    return () => {
      themeToggle?.removeEventListener('click', onThemeClick);
      menuToggle?.removeEventListener('click', onMenuClick);
      copyHandlers.forEach(({ btn, handler }) => btn.removeEventListener('click', handler));
      anchorHandlers.forEach(({ a, handler }) => a.removeEventListener('click', handler));
      io?.disconnect();
    };
  }, [pathname]);

  return null;
}
