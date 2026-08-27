(() => {
  "use strict";

  const labels = {
    en: { menu: "K2040 navigation", home: "Home", android: "Android Projects", gaming: "Gaming Mods", projectAreas: "Project Areas", news: "News", about: "About", androidHome: "Android Home", apps: "Apps", downloads: "Downloads", updates: "Updates", modsHome: "Mods Home", modProjects: "Mod Projects" },
    de: { menu: "K2040-Navigation", home: "Home", android: "Android-Projekte", gaming: "Gaming Mods", projectAreas: "Projektbereiche", news: "News", about: "Info", androidHome: "Android-Startseite", apps: "Apps", downloads: "Downloads", updates: "Updates", modsHome: "Mods-Startseite", modProjects: "Mod-Projekte" },
    "pt-PT": { menu: "Navegação K2040", home: "Início", android: "Projetos Android", gaming: "Gaming Mods", projectAreas: "Áreas de projetos", news: "Notícias", about: "Sobre", androidHome: "Início Android", apps: "Apps", downloads: "Downloads", updates: "Atualizações", modsHome: "Início dos Mods", modProjects: "Projetos de Mods" },
    es: { menu: "Navegación K2040", home: "Inicio", android: "Proyectos Android", gaming: "Gaming Mods", projectAreas: "Áreas de proyectos", news: "Noticias", about: "Acerca de", androidHome: "Inicio Android", apps: "Apps", downloads: "Descargas", updates: "Actualizaciones", modsHome: "Inicio de Mods", modProjects: "Proyectos de Mods" },
    fr: { menu: "Navigation K2040", home: "Accueil", android: "Projets Android", gaming: "Gaming Mods", projectAreas: "Domaines de projets", news: "Actualités", about: "À propos", androidHome: "Accueil Android", apps: "Apps", downloads: "Téléchargements", updates: "Mises à jour", modsHome: "Accueil des Mods", modProjects: "Projets de Mods" }
  };

  const normalizeLanguage = (value) => {
    const language = (value || "").toLowerCase();
    if (language.startsWith("de")) return "de";
    if (language.startsWith("pt")) return "pt-PT";
    if (language.startsWith("es")) return "es";
    if (language.startsWith("fr")) return "fr";
    return "en";
  };

  const createAndroidIcon = () => {
    const icon = document.createElement("span");
    icon.className = "k2040-icon k2040-icon--android";
    icon.setAttribute("aria-hidden", "true");

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("focusable", "false");
    svg.setAttribute("fill", "none");
    svg.setAttribute("stroke", "currentColor");
    svg.setAttribute("stroke-width", "1.8");
    svg.setAttribute("stroke-linecap", "round");
    svg.setAttribute("stroke-linejoin", "round");

    const phone = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    phone.setAttribute("x", "6");
    phone.setAttribute("y", "2");
    phone.setAttribute("width", "12");
    phone.setAttribute("height", "20");
    phone.setAttribute("rx", "2.3");

    const details = document.createElementNS("http://www.w3.org/2000/svg", "path");
    details.setAttribute("d", "M9.5 5h5M10 19h4");

    svg.append(phone, details);
    icon.append(svg);
    return icon;
  };

  const ensureAndroidHomeIcon = () => {
    document.querySelectorAll("[data-k2040-site-home]").forEach((link) => {
      if (!link.querySelector(".k2040-icon--android")) link.prepend(createAndroidIcon());
    });
  };

  const apply = (language = normalizeLanguage(document.documentElement.lang || navigator.language)) => {
    const copy = labels[language] || labels.en;
    document.querySelectorAll("[data-global-i18n]").forEach((element) => {
      const value = copy[element.dataset.globalI18n];
      if (value) element.textContent = value;
    });
    document.querySelectorAll("[data-global-aria]").forEach((element) => {
      const value = copy[element.dataset.globalAria];
      if (value) element.setAttribute("aria-label", value);
    });
  };

  const init = () => {
    ensureAndroidHomeIcon();
    apply();
    document.querySelectorAll("[data-language-select]").forEach((select) => {
      select.addEventListener("change", () => requestAnimationFrame(() => apply(select.value)));
    });
    window.addEventListener("storage", (event) => {
      if (event.key === "k2040-language") apply(event.newValue || "en");
    });
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
})();
