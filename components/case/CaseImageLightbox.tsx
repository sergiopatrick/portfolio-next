'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

type OpenImage = { src: string; alt: string };

export function CaseImageLightbox() {
  const [open, setOpen] = useState<OpenImage | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  const close = useCallback(() => setOpen(null), []);

  useEffect(() => {
    const article = document.querySelector<HTMLElement>('.case-article');
    if (!article) return;

    const images = Array.from(
      article.querySelectorAll<HTMLImageElement>('.prose img, figure img'),
    );
    if (!images.length) return;

    const clickHandlers: Array<{ img: HTMLImageElement; handler: (e: MouseEvent) => void }> = [];
    const keyHandlers: Array<{ img: HTMLImageElement; handler: (e: KeyboardEvent) => void }> = [];

    images.forEach((img) => {
      img.classList.add('is-zoomable');
      img.setAttribute('role', 'button');
      img.setAttribute('tabindex', '0');
      img.setAttribute('aria-label', 'Abrir imagem em tela cheia');

      const onClick = (e: MouseEvent) => {
        e.preventDefault();
        previouslyFocused.current = document.activeElement as HTMLElement;
        setOpen({ src: img.currentSrc || img.src, alt: img.alt });
      };
      const onKey = (e: KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          previouslyFocused.current = document.activeElement as HTMLElement;
          setOpen({ src: img.currentSrc || img.src, alt: img.alt });
        }
      };
      img.addEventListener('click', onClick);
      img.addEventListener('keydown', onKey);
      clickHandlers.push({ img, handler: onClick });
      keyHandlers.push({ img, handler: onKey });
    });

    return () => {
      clickHandlers.forEach(({ img, handler }) => img.removeEventListener('click', handler));
      keyHandlers.forEach(({ img, handler }) => img.removeEventListener('keydown', handler));
      images.forEach((img) => {
        img.classList.remove('is-zoomable');
        img.removeAttribute('role');
        img.removeAttribute('tabindex');
        img.removeAttribute('aria-label');
      });
    };
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    closeBtnRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
      previouslyFocused.current?.focus?.();
    };
  }, [open, close]);

  if (!open) return null;

  return (
    <div
      className="case-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Visualização ampliada"
      onClick={close}
    >
      <button
        type="button"
        ref={closeBtnRef}
        className="case-lightbox__close"
        aria-label="Fechar"
        onClick={(e) => {
          e.stopPropagation();
          close();
        }}
      >
        ×
      </button>
      <img
        className="case-lightbox__img"
        src={open.src}
        alt={open.alt}
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}
