const STEPS = [
  {
    title: 'Diagnóstico',
    body: 'Leio o Search Console, rastreio o site e olho o código. Em duas semanas você sabe o que trava o orgânico e quanto cada problema custa.',
  },
  {
    title: 'Plano',
    body: 'Cada ação ganha impacto, esforço e dono. O que dá mais resultado com menos trabalho vem primeiro.',
  },
  {
    title: 'Implementação',
    body: 'Eu mesmo escrevo a correção em WordPress, Next.js ou Shopify, ou entrego a especificação pronta para o seu time.',
  },
  {
    title: 'Medição',
    body: 'Acompanho indexação, posição, cliques e citações em IA. O que funcionou vira padrão, o que não funcionou sai do plano.',
  },
];

export function Process() {
  return (
    <section className="section section--divider" id="processo">
      <div className="container">
        <p className="section__kicker">Processo</p>
        <h2 className="section__title">Quatro etapas, cada uma com entrega.</h2>
        <ol className="steps">
          {STEPS.map((s, i) => (
            <li className="steps__item reveal" key={s.title}>
              <span className="steps__num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="steps__title">{s.title}</h3>
              <p className="steps__body">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
