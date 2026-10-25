'use client';

import { useEffect, useRef } from 'react';

// Animated relief drawn with braille-like characters, densest char = highest
// point. Canvas only, no images. It starts after first paint, pauses off
// screen, and renders one still frame for prefers-reduced-motion.
const RAMP = ' ⠁⠃⠇⠏⠟⠿⡿⣿';
const CELL_W = 11;
const CELL_H = 15;

export function DotField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let width = 0;
    let height = 0;
    let cols = 0;
    let rows = 0;
    let raf = 0;
    let running = false;
    let last = 0;
    const mouse = { x: -9999, y: -9999 };

    // Each glyph is rasterised once per resize and stamped with drawImage,
    // which is several times cheaper than fillText on every cell.
    let atlas: HTMLCanvasElement[] = [];
    const buildAtlas = (color: string, dpr: number) => {
      atlas = Array.from(RAMP).map((ch) => {
        const c = document.createElement('canvas');
        c.width = Math.ceil(CELL_W * dpr);
        c.height = Math.ceil(CELL_H * dpr);
        const g = c.getContext('2d');
        if (g && ch !== ' ') {
          g.scale(dpr, dpr);
          g.font = `${CELL_H - 2}px ui-monospace, Menlo, monospace`;
          g.textBaseline = 'top';
          g.fillStyle = color;
          g.fillText(ch, 0, 0);
        }
        return c;
      });
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(width / CELL_W);
      rows = Math.ceil(height / CELL_H);
      buildAtlas(getComputedStyle(canvas).color, dpr);
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, width, height);
      const time = t / 1000;
      for (let r = 0; r < rows; r++) {
        // Fade the field in from the top edge of the band.
        const fade = Math.min(1, r / (rows * 0.45));
        for (let c = 0; c < cols; c++) {
          const x = c * CELL_W;
          const y = r * CELL_H;
          let h =
            Math.sin(c * 0.09 + time * 0.6) * 0.5 +
            Math.sin(r * 0.21 - time * 0.4 + c * 0.03) * 0.35 +
            Math.sin((c + r) * 0.05 + time * 0.25) * 0.4;
          const dx = x - mouse.x;
          const dy = y - mouse.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 22000) h += (1 - d2 / 22000) * 1.4;
          const v = Math.max(0, Math.min(1, (h + 1.2) / 2.6)) * fade;
          const idx = Math.round(v * (RAMP.length - 1));
          if (idx > 0) ctx.drawImage(atlas[idx], x, y, CELL_W, CELL_H);
        }
      }
    };

    const loop = (t: number) => {
      if (!running) return;
      // ~30 fps is plenty for a background texture and halves the main-thread cost.
      if (t - last > 33) {
        draw(t);
        last = t;
      }
      raf = requestAnimationFrame(loop);
    };

    // Motion waits for the first interaction or a quiet moment after load,
    // so it never competes with the first paint and the page becoming usable.
    let armed = false;
    const start = () => {
      if (running || reduced || !armed || !visible) return;
      running = true;
      raf = requestAnimationFrame(loop);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const onMove = (e: PointerEvent) => {
      arm();
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    let visible = false;
    const arm = () => {
      if (armed) return;
      armed = true;
      start();
    };
    const armLater = () => {
      const idle = (window as Window & { requestIdleCallback?: (cb: () => void) => number }).requestIdleCallback;
      setTimeout(() => (idle ? idle(arm) : arm()), 4000);
    };
    if (document.readyState === 'complete') armLater();
    else window.addEventListener('load', armLater, { once: true });

    resize();
    draw(0);
    const ro = new ResizeObserver(() => {
      resize();
      draw(performance.now());
    });
    ro.observe(canvas);
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
      else stop();
    });
    io.observe(canvas);
    const section = canvas.parentElement;
    section?.addEventListener('pointermove', onMove);
    section?.addEventListener('pointerleave', onLeave);

    return () => {
      stop();
      ro.disconnect();
      window.removeEventListener('load', armLater);
      io.disconnect();
      section?.removeEventListener('pointermove', onMove);
      section?.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return <canvas ref={ref} className="dot-field" aria-hidden="true" />;
}
