'use client';

import { useEffect } from 'react';

// Home-only motion: number counters and the word-by-word manifesto.
// Both respect prefers-reduced-motion and leave the server HTML untouched
// when JS is off.
export function HomeEffects() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Counters, from 0 to the value already in the markup.
    const counters = Array.from(document.querySelectorAll<HTMLElement>('[data-count]'));
    const animate = (el: HTMLElement) => {
      const raw = el.dataset.count || '';
      const target = parseFloat(raw.replace(/\./g, '').replace(',', '.'));
      if (!isFinite(target)) return;
      const decimals = raw.includes(',') ? raw.split(',')[1].length : 0;
      const t0 = performance.now();
      const dur = 1200;
      const tick = (t: number) => {
        const p = Math.min(1, (t - t0) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = (target * eased).toLocaleString('pt-BR', {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        });
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = raw;
      };
      requestAnimationFrame(tick);
    };
    let io: IntersectionObserver | null = null;
    if (!reduced && 'IntersectionObserver' in window) {
      io = new IntersectionObserver(
        (entries) =>
          entries.forEach((e) => {
            if (e.isIntersecting) {
              animate(e.target as HTMLElement);
              io?.unobserve(e.target);
            }
          }),
        { threshold: 0.6 },
      );
      counters.forEach((el) => io?.observe(el));
    }

    // Manifesto, each word's opacity follows the block's scroll progress.
    const block = document.querySelector<HTMLElement>('[data-manifesto]');
    const words = block ? Array.from(block.querySelectorAll<HTMLElement>('.manifesto__word')) : [];
    let raf = 0;
    const paint = () => {
      if (!block) return;
      const rect = block.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when the block's top hits 85% of the viewport, 1 when its bottom hits 45%.
      const start = vh * 0.85;
      const end = vh * 0.45;
      const progress = Math.max(0, Math.min(1, (start - rect.top) / (start - end + rect.height)));
      const lit = progress * words.length;
      words.forEach((w, i) => w.classList.toggle('is-lit', i < lit));
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(paint);
    };
    if (block && !reduced) {
      block.classList.add('is-scrubbing');
      paint();
      window.addEventListener('scroll', onScroll, { passive: true });
    }

    return () => {
      io?.disconnect();
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return null;
}
