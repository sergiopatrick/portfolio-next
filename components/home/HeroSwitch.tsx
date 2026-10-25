'use client';

import { useState } from 'react';
import Link from 'next/link';

// The same real fix shown twice, as the consultant writes it and as the
// developer ships it. Source: case fix-pixel-x-google-ads-shopify.
const CODE = `// trecho, versão completa no case
(function attributionGuard() {
  const CRITICAL = ['utm_source', 'utm_medium',
    'utm_campaign', 'gclid', 'fbclid'];
  const params = new URLSearchParams(location.search);
  const saved = {};
  CRITICAL.forEach((k) => {
    if (params.has(k)) saved[k] = params.get(k);
  });

  // Outro pixel reescreveu a URL? O guard devolve os parâmetros.
  const original = history.replaceState;
  history.replaceState = function (...args) {
    original.apply(this, args);
    restore();
  };
})();`;

type View = 'estrategia' | 'codigo';

export function HeroSwitch() {
  const [view, setView] = useState<View>('estrategia');
  return (
    <div className="hero-switch" aria-label="O mesmo problema visto como recomendação e como código">
      <div className="hero-switch__tabs" role="tablist" aria-label="Escolha a visão">
        <button
          type="button"
          role="tab"
          id="tab-estrategia"
          aria-controls="painel-estrategia"
          aria-selected={view === 'estrategia'}
          className="hero-switch__tab"
          onClick={() => setView('estrategia')}
        >
          Estratégia
        </button>
        <button
          type="button"
          role="tab"
          id="tab-codigo"
          aria-controls="painel-codigo"
          aria-selected={view === 'codigo'}
          className="hero-switch__tab"
          onClick={() => setView('codigo')}
        >
          Código
        </button>
        <span className="hero-switch__thumb" data-view={view} aria-hidden="true" />
      </div>

      <div
        role="tabpanel"
        id="painel-estrategia"
        aria-labelledby="tab-estrategia"
        hidden={view !== 'estrategia'}
        className="hero-switch__panel"
      >
        <p className="hero-switch__label">Diagnóstico</p>
        <p className="hero-switch__problem">
          O Google Ads perdia a origem das vendas numa loja Shopify.
        </p>
        <ul className="hero-switch__list">
          <li>O pixel do X reescrevia a URL e apagava UTM e gclid.</li>
          <li>Recomendação, guardar os parâmetros antes de qualquer pixel carregar.</li>
          <li>Medida de sucesso, atribuição de volta no relatório do Ads.</li>
        </ul>
        <p className="hero-switch__result">
          <strong>100%</strong> da atribuição recuperada
        </p>
      </div>

      <div
        role="tabpanel"
        id="painel-codigo"
        aria-labelledby="tab-codigo"
        hidden={view !== 'codigo'}
        className="hero-switch__panel hero-switch__panel--code"
      >
        <p className="hero-switch__label">snippets/attribution-guard.js</p>
        <pre className="hero-switch__code">
          <code>{CODE}</code>
        </pre>
      </div>

      <Link href="/projetos/fix-pixel-x-google-ads-shopify/" className="hero-switch__more">
        Ler o case completo <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}
