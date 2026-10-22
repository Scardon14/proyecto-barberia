export function initNavigation() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("is-open", !open);
    document.body.classList.toggle("menu-open", !open);
  });
  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    toggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  }));
}

export function initBookingForm() {
  const form = document.querySelector("#booking-form");
  if (!form) return;
  const date = form.querySelector("#fecha");
  if (date) date.min = new Date().toISOString().slice(0, 10);
  const params = new URLSearchParams(location.search);
  const serviceMap = { corte: "Corte clásico", completo: "Corte + barba", barba: "Arreglo de barba", diseno: "Diseño y estilo" };
  const serviceParam = params.get("servicio");
  if (serviceMap[serviceParam]) form.querySelector("#servicio").value = serviceMap[serviceParam];
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    const requests = JSON.parse(localStorage.getItem("ot-demo-bookings") || "[]");
    requests.push({ ...data, createdAt: new Date().toISOString() });
    localStorage.setItem("ot-demo-bookings", JSON.stringify(requests));
    const message = document.querySelector("#form-message");
    message.textContent = `Solicitud de demostración guardada en este navegador para ${data.nombre}. No es una reserva real.`;
    message.classList.add("is-visible");
    form.reset();
    if (date) date.min = new Date().toISOString().slice(0, 10);
  });
}

export function initAccessForm() {
  const form = document.querySelector("#access-form");
  if (!form) return;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = document.querySelector("#access-message");
    message.textContent = "Esta versión estática no autentica usuarios. Para habilitar el acceso se necesita un backend y una base de datos.";
    message.classList.add("is-visible");
  });
}

export function initCommon() {
  const year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();
}
