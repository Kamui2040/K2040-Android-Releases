(() => {
  "use strict";

  const loaderScript = document.currentScript;
  if (loaderScript?.src) {
    const base = new URL(".", loaderScript.src);
    if (!document.querySelector('link[data-external-platform-icons]')) {
      const styles = document.createElement("link");
      styles.rel = "stylesheet";
      styles.href = new URL("external-link-icons.css?v=20260826stores3", base).href;
      styles.dataset.externalPlatformIcons = "true";
      document.head.append(styles);
    }
    if (!document.querySelector('script[data-external-platform-icons]')) {
      const script = document.createElement("script");
      script.src = new URL("external-link-icons.js?v=20260825icons2", base).href;
      script.dataset.externalPlatformIcons = "true";
      document.head.append(script);
    }
    if (!document.querySelector('script[data-onestore-link-icon]')) {
      const script = document.createElement("script");
      script.src = new URL("onestore-link-icon.js?v=20260826stores2", base).href;
      script.dataset.onestoreLinkIcon = "true";
      document.head.append(script);
    }
    if (!document.querySelector('link[data-site-family-icons]')) {
      const styles = document.createElement("link");
      styles.rel = "stylesheet";
      styles.href = "https://kamui2040.github.io/site-family-icons.css?v=20260826family3";
      styles.dataset.siteFamilyIcons = "true";
      document.head.append(styles);
    }
    if (!document.querySelector('script[data-site-family-icons]')) {
      const script = document.createElement("script");
      script.src = "https://kamui2040.github.io/site-family-icons.js?v=20260825family1";
      script.dataset.siteFamilyIcons = "true";
      document.head.append(script);
    }
  }

  const globalLabels = {
    en: { menu: "K2040 navigation", home: "Home", android: "Android Projects", gaming: "Gaming Mods", projectAreas: "Project Areas", news: "News", about: "About", androidHome: "Android Home", apps: "Apps", mods: "Mods", downloads: "Downloads", updates: "Updates", modsHome: "Mods Home", modProjects: "Mod Projects" },
    de: { menu: "K2040-Navigation", home: "Home", android: "Android-Projekte", gaming: "Gaming Mods", projectAreas: "Projektbereiche", news: "News", about: "Info", androidHome: "Android-Startseite", apps: "Apps", mods: "Mods", downloads: "Downloads", updates: "Updates", modsHome: "Mods-Startseite", modProjects: "Mod-Projekte" },
    "pt-PT": { menu: "Navegação K2040", home: "Início", android: "Projetos Android", gaming: "Gaming Mods", projectAreas: "Áreas de projetos", news: "Notícias", about: "Sobre", androidHome: "Início Android", apps: "Apps", mods: "Mods", downloads: "Downloads", updates: "Atualizações", modsHome: "Início dos Mods", modProjects: "Projetos de Mods" },
    es: { menu: "Navegación K2040", home: "Inicio", android: "Proyectos Android", gaming: "Gaming Mods", projectAreas: "Áreas de proyectos", news: "Noticias", about: "Acerca de", androidHome: "Inicio Android", apps: "Apps", mods: "Mods", downloads: "Descargas", updates: "Actualizaciones", modsHome: "Inicio de Mods", modProjects: "Proyectos de Mods" },
    fr: { menu: "Navigation K2040", home: "Accueil", android: "Projets Android", gaming: "Gaming Mods", projectAreas: "Domaines de projets", news: "Actualités", about: "À propos", androidHome: "Accueil Android", apps: "Apps", mods: "Mods", downloads: "Téléchargements", updates: "Mises à jour", modsHome: "Accueil des Mods", modProjects: "Projets de Mods" }
  };

  const normalizeLanguage = (value) => {
    const normalized = (value || "").toLowerCase();
    if (normalized.startsWith("de")) return "de";
    if (normalized.startsWith("pt")) return "pt-PT";
    if (normalized.startsWith("es")) return "es";
    if (normalized.startsWith("fr")) return "fr";
    return "en";
  };

  const storedLanguage = () => {
    try {
      const value = localStorage.getItem("k2040-language");
      if (value && globalLabels[value]) return value;
    } catch {}
    return normalizeLanguage(document.documentElement.lang || navigator.language);
  };

  const applyGlobalLabels = (language = storedLanguage()) => {
    const copy = globalLabels[language] || globalLabels.en;
    document.querySelectorAll("[data-global-i18n]").forEach((element) => {
      const value = copy[element.dataset.globalI18n];
      if (value) element.textContent = value;
    });
    document.querySelectorAll("[data-global-aria]").forEach((element) => {
      const value = copy[element.dataset.globalAria];
      if (value) element.setAttribute("aria-label", value);
    });
  };

  const loadStylesheet = (href, marker) => {
    if (document.querySelector(`link[${marker}]`)) return;
    const styles = document.createElement("link");
    styles.rel = "stylesheet";
    styles.href = href;
    styles.setAttribute(marker, "true");
    document.head.append(styles);
  };

  const loadUnifiedNavigationStyles = () => {
    loadStylesheet(`${location.origin}/K2040-Gaming-Mods/mobile-navigation.css?v=20260825nav2`, "data-unified-site-navigation");
  };

  const loadAndroidCardDownloads = () => {
    if (!document.querySelector(".app-promo-list")) return;
    loadStylesheet(`${location.origin}/K2040-Android-Releases/app-card-downloads.css?v=20260825nav1`, "data-app-card-downloads");
    if (document.querySelector('script[data-app-card-downloads]')) return;
    const script = document.createElement("script");
    script.src = `${location.origin}/K2040-Android-Releases/app-card-downloads.js?v=20260826stores1`;
    script.dataset.appCardDownloads = "true";
    document.head.append(script);
  };

  const configureNavLink = (link, className, href, labelKey) => {
    link.className = `nav-link ${className}`;
    link.href = href;
    link.removeAttribute("data-i18n");
    link.setAttribute("data-global-i18n", labelKey);
    link.textContent = globalLabels.en[labelKey];
    return link;
  };

  const normalizeSiteNavigation = () => {
    const path = location.pathname;
    const isGaming = path.includes("/K2040-Gaming-Mods/") || document.body.classList.contains("gaming-mods-page") || document.body.classList.contains("project-detail-page");
    const isAndroid = path.includes("/K2040-Android-Releases/") || document.body.classList.contains("android-page");
    if (!isGaming && !isAndroid) return;

    const header = document.querySelector(".site-header");
    const nav = header?.querySelector(".site-nav");
    const home = header?.querySelector(".site-brand-section");
    const menu = nav?.querySelector(".project-menu,.app-menu");
    const language = nav?.querySelector(".nav-language-control");
    const theme = nav?.querySelector(".theme-toggle");
    if (!header || !nav || !home || !menu || !language || !theme) return;

    const root = isAndroid ? "/K2040-Android-Releases/" : "/K2040-Gaming-Mods/";
    const downloadsTarget = isAndroid ? `${root}#apps` : `${root}#projects`;
    const updatesTarget = `${root}#updates`;

    home.classList.add("nav-home");
    home.href = root;
    home.removeAttribute("aria-current");
    const homeLabel = home.querySelector("span") || home;
    homeLabel.removeAttribute("data-i18n");
    homeLabel.setAttribute("data-global-i18n", "home");
    homeLabel.textContent = globalLabels.en.home;

    const menuLabel = menu.querySelector("summary span:not(.menu-caret)");
    if (menuLabel) {
      menuLabel.removeAttribute("data-i18n");
      menuLabel.setAttribute("data-global-i18n", isAndroid ? "apps" : "mods");
      menuLabel.textContent = isAndroid ? globalLabels.en.apps : globalLabels.en.mods;
    }

    let downloads = nav.querySelector(".nav-downloads");
    if (!downloads) downloads = document.createElement("a");
    configureNavLink(downloads, "nav-downloads", downloadsTarget, "downloads");
    downloads.removeAttribute("data-project-downloads-nav");

    let updates = nav.querySelector(".nav-updates");
    if (!updates) updates = document.createElement("a");
    configureNavLink(updates, "nav-updates", updatesTarget, "updates");

    [...nav.querySelectorAll(":scope > .nav-link")].forEach((link) => {
      if (link !== downloads && link !== updates) link.remove();
    });

    nav.append(menu, downloads, updates, language, theme);

    const themeIcon = theme.querySelector(".theme-toggle-icon");
    if (themeIcon && !themeIcon.textContent.trim()) themeIcon.textContent = "☾";
  };

  const initMenu = (menu) => {
    const items = [...menu.querySelectorAll("[data-global-menu-item]")];

    const reposition = (item) => {
      item.classList.remove("global-menu-item--flip");
      if (!item.open || window.innerWidth <= 760) return;
      requestAnimationFrame(() => {
        const panel = menu.querySelector(".global-menu-panel");
        const submenu = item.querySelector(".global-menu-submenu");
        if (!panel || !submenu) return;
        const panelRect = panel.getBoundingClientRect();
        const submenuWidth = submenu.offsetWidth || 245;
        const gap = 9;
        const margin = 16;
        const fitsRight = panelRect.right + gap + submenuWidth <= window.innerWidth - margin;
        const fitsLeft = panelRect.left - gap - submenuWidth >= margin;
        item.classList.toggle("global-menu-item--flip", !fitsRight && fitsLeft);
      });
    };

    items.forEach((item) => {
      item.addEventListener("toggle", () => {
        if (!item.open) return;
        items.forEach((other) => {
          if (other !== item) other.open = false;
        });
        reposition(item);
      });
    });

    menu.addEventListener("toggle", () => {
      if (!menu.open) items.forEach((item) => { item.open = false; });
    });

    window.addEventListener("resize", () => {
      items.forEach(reposition);
    }, { passive: true });
  };

  const init = () => {
    loadUnifiedNavigationStyles();
    loadAndroidCardDownloads();
    normalizeSiteNavigation();
    document.querySelectorAll("[data-global-menu]").forEach(initMenu);
    applyGlobalLabels();

    document.querySelectorAll("[data-language-option]").forEach((button) => {
      button.addEventListener("click", () => {
        if (globalLabels[button.dataset.languageOption]) applyGlobalLabels(button.dataset.languageOption);
      });
    });

    document.querySelectorAll("[data-language-select]").forEach((select) => {
      select.addEventListener("change", () => {
        const language = globalLabels[select.value] ? select.value : normalizeLanguage(select.value);
        requestAnimationFrame(() => applyGlobalLabels(language));
      });
    });

    document.addEventListener("click", (event) => {
      document.querySelectorAll("[data-global-menu][open]").forEach((menu) => {
        if (!menu.contains(event.target)) menu.open = false;
      });
    });

    window.addEventListener("storage", (event) => {
      if (event.key === "k2040-language") applyGlobalLabels(event.newValue || "en");
    });
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
})();
