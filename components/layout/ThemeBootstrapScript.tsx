export function ThemeBootstrapScript() {
  const src = `(function(){try{var k='sp-theme',s=localStorage.getItem(k),m=window.matchMedia('(prefers-color-scheme: dark)').matches;var t=s||(m?'dark':'light');document.documentElement.setAttribute('data-theme',t);}catch(e){}}());`;
  return <script dangerouslySetInnerHTML={{ __html: src }} />;
}
