const root = new URL("../../", import.meta.url);
const asset = (path) => new URL(path, root).href;

export function renderLayout() {
  const header = document.querySelector("#site-header");
  const footer = document.querySelector("#site-footer");
  const page = document.body.dataset.page || "inicio";
  const links = [
    ["inicio", "Inicio", new URL("../index.html", root).href],
    ["servicios", "Servicios", new URL("../pages/servicios.html", root).href],
    ["barberos", "Barberos", new URL("../pages/barberos.html", root).href],
    ["locales", "Locales", new URL("../pages/locales.html", root).href],
    ["nosotros", "Nosotros", new URL("../pages/nosotros.html", root).href],
  ];
  if (header) {
    header.innerHTML = `
      <div class="topline">
      <div class="container topline__inner">
      <span>O&T · ORGANIZACIÓN Y TIEMPO</span>
      <span>Tu estilo. Tu momento.</span>
      </div>
      </div>
      <header class="site-header">
      <div class="container nav-wrap">
        <a class="brand" href="${new URL("../index.html", root).href}" aria-label="O&T inicio">
          <span class="brand__mark">O<span>&</span>T</span><span 
          class="brand__name">BARBER<br><small>STUDIO</small></span>
        </a>
        <button class="nav-toggle" aria-label="Abrir menú" aria-expanded="false"><span></span><span></span><span></span></button>
        <nav class="main-nav" aria-label="Navegación principal"><ul>${links.map(([id, label, href]) => `<li><a class="${page === id ? 'is-active' : ''}" href="${href}">${label}</a></li>`).join("")}</ul></nav>
        <a class="btn btn--gold nav-cta" href="${new URL("../pages/reservar.html", root).href}">Reservar <span>↗</span></a>
      </div></header>`;
  }
  if (footer) {
    footer.innerHTML = `
      <footer class="site-footer"><div class="container footer-grid">
        <div class="footer-brand"><a class="brand brand--footer" href="${new URL("../index.html", root).href}"><span class="brand__mark">O<span>&</span>T</span><span class="brand__name">BARBER<br><small>STUDIO</small></span></a><p>Organización, estilo y una mejor manera de vivir tu próxima cita.</p></div>
        <div><h3>Explora</h3><a href="${new URL("../pages/servicios.html", root).href}">Servicios</a><a href="${new URL("../pages/barberos.html", root).href}">Barberos</a><a href="${new URL("../pages/locales.html", root).href}">Locales</a></div>
        <div><h3>O&T</h3><a href="${new URL("../pages/nosotros.html", root).href}">Quiénes somos</a><a href="${new URL("../pages/acceso.html", root).href}">Iniciar sesión</a><a href="${new URL("../pages/reservar.html", root).href}">Reservar cita</a></div>
        <div class="footer-note"><span class="eyebrow">TU ESTILO, TU TIEMPO</span><p>Una experiencia pensada para ti.</p></div>
      </div><div class="container footer-bottom"><span>© <span data-year></span> O&T Barbería</span><span>Versión estática modular · Proyecto de demostración</span></div></footer>`;
  }
}
