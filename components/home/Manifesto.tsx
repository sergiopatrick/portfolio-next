const TEXT =
  'Recomendação que fica no slide não muda o tráfego. Eu abro o código, corrijo, publico e mostro o resultado no Search Console. É assim que SEO técnico e GEO viram número.';

// Words light up one by one as the block scrolls through the viewport.
// Progress is set by HomeEffects; without JS every word is fully visible.
export function Manifesto() {
  const words = TEXT.split(' ');
  return (
    <section className="manifesto" aria-label="Como eu trabalho">
      <div className="container">
        <p className="section__kicker">Como eu trabalho</p>
        <p className="manifesto__text" data-manifesto>
          {words.map((w, i) => (
            <span className="manifesto__word" key={i}>
              {w}{' '}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
