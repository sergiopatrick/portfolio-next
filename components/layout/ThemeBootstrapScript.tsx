export function ThemeBootstrapScript() {
  // Runs before first paint: (1) sets theme so we don't flash wrong colors,
  // (2) marks the root with data-sp-js so CSS can gate the reveal-on-scroll
  // animation behind JS, without JS, .reveal stays fully visible.
  const src = `(function(){try{var d=document.documentElement;d.setAttribute('data-sp-js','1');var k='sp-theme',s=localStorage.getItem(k),m=window.matchMedia('(prefers-color-scheme: dark)').matches;var t=s||(m?'dark':'light');d.setAttribute('data-theme',t);}catch(e){}}());`;
  return <script dangerouslySetInnerHTML={{ __html: src }} />;
}
