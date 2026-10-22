
const projectRoot = new URL("../../", import.meta.url);

const pageUrl = (path) => new URL(path, projectRoot).href;

export function renderLayout() {
  const header = document.querySelector("#site-header");
  const footer = document.querySelector("#site-footer");
  const page = document.body.dataset.page || "inicio";

  const links = [
    ["inicio", "Inicio", "index.html"],
    ["servicios", "Servicios", "pages/servicios.html"],
    ["barberos", "Barberos", "pages/barberos.html"],
    ["locales", "Locales", "pages/locales.html"],
    ["nosotros", "Nosotros", "pages/nosotros.html"],
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
          <a class="brand" href="${pageUrl("index.html")}" aria-label="O&T inicio">
            <span class="brand__mark">O<span>&</span>T</span>
            <span class="brand__name">BARBER<br><small>STUDIO</small></span>
          </a>

          <button class="nav-toggle" aria-label="Abrir menú" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>

          <nav class="main-nav" aria-label="Navegación principal">
            <ul>
              ${links.map(([id, label, path]) => `
                <li>
                  <a class="${page === id ? "is-active" : ""}"
                     href="${pageUrl(path)}">${label}</a>
                </li>
              `).join("")}
            </ul>
          </nav>

          <a class="btn btn--gold nav-cta" href="${pageUrl("pages/reservar.html")}">
            Reservar <span>↗</span>
          </a>
        </div>
      </header>
    `;
  }

  if (footer) {
    footer.innerHTML = `
      <footer class="site-footer">
        <div class="container footer-grid">
          <div class="footer-brand">
            <a class="brand brand--footer" href="${pageUrl("index.html")}">
              <span class="brand__mark">O<span>&</span>T</span>
              <span class="brand__name">BARBER<br><small>STUDIO</small></span>
            </a>
            <p>Organización, estilo y una mejor manera de vivir tu próxima cita.</p>
          </div>

          <div>
            <h3>Explora</h3>
            <a href="${pageUrl("pages/servicios.html")}">Servicios</a>
            <a href="${pageUrl("pages/barberos.html")}">Barberos</a>
            <a href="${pageUrl("pages/locales.html")}">Locales</a>
          </div>

          <div>
            <h3>O&T</h3>
            <a href="${pageUrl("pages/nosotros.html")}">Quiénes somos</a>
            <a href="${pageUrl("pages/acceso.html")}">Iniciar sesión</a>
            <a href="${pageUrl("pages/reservar.html")}">Reservar cita</a>
          </div>

          <div class="footer-note">
            <span class="eyebrow">TU ESTILO, TU TIEMPO</span>
            <p>Una experiencia pensada para ti.</p>
          </div>
        </div>

        <div class="container footer-bottom">
          <span>© <span data-year></span> O&T Barbería</span>
          <span>Versión estática modular · Proyecto de demostración</span>
        </div>
      </footer>
    `;
  }
}
