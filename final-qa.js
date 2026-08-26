(() => {
  "use strict";

  const labels = {
    en: { home: "Home", android: "Android Projects", gaming: "Gaming Mods", about: "About", eyebrow: "K2040 Projects" },
    de: { home: "Home", android: "Android-Projekte", gaming: "Gaming Mods", about: "Info", eyebrow: "K2040 Projects" },
    "pt-PT": { home: "Início", android: "Projetos Android", gaming: "Gaming Mods", about: "Sobre", eyebrow: "K2040 Projects" },
    es: { home: "Inicio", android: "Proyectos Android", gaming: "Gaming Mods", about: "Acerca de", eyebrow: "K2040 Projects" },
    fr: { home: "Accueil", android: "Projets Android", gaming: "Gaming Mods", about: "À propos", eyebrow: "K2040 Projects" }
  };

  const normalizeLanguage = (value) => {
    const language = (value || "").toLowerCase();
    if (language.startsWith("de")) return "de";
    if (language.startsWith("pt")) return "pt-PT";
    if (language.startsWith("es")) return "es";
    if (language.startsWith("fr")) return "fr";
    return "en";
  };

  const language = () => normalizeLanguage(document.documentElement.lang || navigator.language);
  const copy = () => labels[language()] || labels.en;

  const pageDescription = () => {
    if (document.body.classList.contains("updates-page")) {
      return document.querySelector(".page-intro .lead")?.textContent?.trim() || "Published Android project updates.";
    }
    const appDescription = document.querySelector(".app-detail-summary .lead")?.textContent?.trim();
    if (appDescription) return appDescription;
    return document.querySelector(".android-hero .lead, .hero-copy .lead, .hero-copy > p:not(.eyebrow)")?.textContent?.trim()
      || document.querySelector('meta[name="description"]')?.content?.trim()
      || "K2040 Android projects.";
  };

  const ensureAbout = () => {
    const main = document.querySelector("main");
    if (!main) return;

    let section = main.querySelector(":scope > .about-section");
    if (!section) {
      section = document.createElement("section");
      section.className = "content-section about-section";
      section.id = "about";
      const heading = document.createElement("div");
      heading.className = "section-heading";
      const eyebrow = document.createElement("p");
      eyebrow.className = "eyebrow";
      const title = document.createElement("h2");
      const description = document.createElement("p");
      description.dataset.siteAboutDescription = "true";
      heading.append(eyebrow, title, description);
      section.append(heading);
      main.append(section);
    }

    section.querySelector(".about-links")?.remove();
    const heading = section.querySelector(".section-heading") || section;
    const eyebrow = heading.querySelector(".eyebrow");
    const title = heading.querySelector("h2");
    let description = heading.querySelector("[data-site-about-description]");
    if (!description) {
      description = [...heading.querySelectorAll(":scope > p")].find((paragraph) => !paragraph.classList.contains("eyebrow"));
      if (!description) {
        description = document.createElement("p");
        heading.append(description);
      }
      description.dataset.siteAboutDescription = "true";
    }

    if (eyebrow) {
      eyebrow.removeAttribute("data-i18n");
      eyebrow.textContent = copy().eyebrow;
    }
    if (title) {
      title.removeAttribute("data-i18n");
      title.textContent = copy().about;
    }
    description.removeAttribute("data-i18n");
    description.textContent = pageDescription();
  };

  const footerDestinations = () => [
    { href: "https://kamui2040.github.io/", label: copy().home },
    { href: "https://kamui2040.github.io/K2040-Android-Releases/", label: copy().android },
    { href: "https://kamui2040.github.io/K2040-Gaming-Mods/", label: copy().gaming },
    { href: "https://github.com/Kamui2040", label: "GitHub" },
    { href: "https://next.nexusmods.com/profile/kamui2040", label: "Nexus Mods" },
    { href: "https://ko-fi.com/k2040", label: "Ko-fi" },
    { href: "https://www.instagram.com/k2040.projects/", label: "Instagram" }
  ];

  const ensureFooter = () => {
    const shell = document.querySelector(".page-shell");
    const main = shell?.querySelector("main");
    if (!shell || !main) return;

    let footer = shell.querySelector(":scope > .site-footer");
    if (!footer) {
      footer = document.createElement("footer");
      footer.className = "site-footer";
      main.after(footer);
    }

    const nav = document.createElement("nav");
    nav.className = "footer-links";
    nav.setAttribute("aria-label", "K2040 links");
    footerDestinations().forEach(({ href, label }) => {
      const link = document.createElement("a");
      link.className = "text-link";
      link.href = href;
      link.textContent = label;
      nav.append(link);
    });
    footer.replaceChildren(nav);
  };

  const refresh = () => {
    ensureAbout();
    ensureFooter();
  };

  const init = () => {
    requestAnimationFrame(refresh);
    document.querySelectorAll("[data-language-select]").forEach((select) => {
      select.addEventListener("change", () => requestAnimationFrame(() => requestAnimationFrame(refresh)));
    });
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
})();
