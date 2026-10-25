'use client';

import { useCallback, useEffect, useRef } from 'react';
import Link from 'next/link';

export type CarouselCase = {
  slug: string;
  title: string;
  sector: string;
  role: string;
  metric: string;
  metricLabel: string;
};

// Coverflow on top of a plain horizontal scroll-snap list. Scrolling, dragging,
// the arrow buttons and the keyboard all move the same native scroller, and
// each card reads its distance from the center as --offset for the 3D tilt.
export function CasesCarousel({ items }: { items: CarouselCase[] }) {
  const track = useRef<HTMLUListElement>(null);

  const update = useCallback(() => {
    const el = track.current;
    if (!el) return;
    const center = el.scrollLeft + el.clientWidth / 2;
    el.querySelectorAll<HTMLElement>('.carousel__card').forEach((card) => {
      const mid = card.offsetLeft + card.offsetWidth / 2;
      const offset = Math.max(-1.5, Math.min(1.5, (mid - center) / card.offsetWidth));
      card.style.setProperty('--offset', offset.toFixed(3));
      card.style.setProperty('--abs', Math.abs(offset).toFixed(3));
    });
  }, []);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    el.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [update]);

  const step = (dir: 1 | -1) => {
    const el = track.current;
    const card = el?.querySelector<HTMLElement>('.carousel__card');
    if (!el || !card) return;
    el.scrollBy({ left: dir * (card.offsetWidth + 24), behavior: 'smooth' });
  };

  return (
    <div className="carousel">
      <ul className="carousel__track" ref={track} aria-label="Cases" tabIndex={0}>
        {items.map((c) => (
          <li className="carousel__card" key={c.slug}>
            <Link href={`/projetos/${c.slug}/`} className="carousel__link">
              <span className="carousel__sector">{c.sector}</span>
              {c.metric && (
                <span className="carousel__metric">
                  {c.metric}
                  <span className="carousel__metric-label">{c.metricLabel}</span>
                </span>
              )}
              <span className="carousel__title">{c.title}</span>
              <span className="carousel__role">
                {c.role} <span aria-hidden="true">→</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="container carousel__controls">
        <button type="button" className="carousel__btn" onClick={() => step(-1)} aria-label="Case anterior">
          ←
        </button>
        <button type="button" className="carousel__btn" onClick={() => step(1)} aria-label="Próximo case">
          →
        </button>
      </div>
    </div>
  );
}
