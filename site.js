(() => {
  "use strict";

  const themeStorageKey = "k2040-theme";
  const languageStorageKey = "k2040-language";
  const supportedLanguages = ["en", "de", "pt-PT", "es", "fr"];
  const languagePresentation = {
    en: { flag: "🇬🇧", label: "English", locale: "en-US" },
    de: { flag: "🇩🇪", label: "Deutsch", locale: "de-DE" },
    "pt-PT": { flag: "🇵🇹", label: "Português", locale: "pt-PT" },
    es: { flag: "🇪🇸", label: "Español", locale: "es-ES" },
    fr: { flag: "🇫🇷", label: "Français", locale: "fr-FR" }
  };
  const archiveMedia = {
    "esca-agnellis": "/K2040-Android-Releases/assets/esca-agnellis-app-card.webp",
    geojoystick: "/K2040-Android-Releases/assets/geojoystick-app-card.webp"
  };
  const root = document.documentElement;
  const darkPreference = window.matchMedia("(prefers-color-scheme: dark)");

  const readStorage = (key) => {
    try { return localStorage.getItem(key); } catch { return null; }
  };
  const writeStorage = (key, value) => {
    try { localStorage.setItem(key, value); } catch {}
  };
  const normalizeLanguage = (value) => {
    const tag = typeof value === "string" ? value.trim().toLowerCase() : "";
    if (tag === "en" || tag.startsWith("en-")) return "en";
    if (tag === "de" || tag.startsWith("de-")) return "de";
    if (tag === "pt" || tag.startsWith("pt-")) return "pt-PT";
    if (tag === "es" || tag.startsWith("es-")) return "es";
    if (tag === "fr" || tag.startsWith("fr-")) return "fr";
    return null;
  };
  const detectLanguage = () => {
    const hashLanguage = normalizeLanguage(location.hash.slice(1));
    if (hashLanguage) return hashLanguage;
    const stored = readStorage(languageStorageKey);
    if (supportedLanguages.includes(stored)) return stored;
    const browserLanguages = navigator.languages?.length ? navigator.languages : [navigator.language];
    for (const value of browserLanguages) {
      const language = normalizeLanguage(value);
      if (language) return language;
    }
    return "en";
  };

  let currentLanguage = detectLanguage();
  const storedTheme = readStorage(themeStorageKey);
  if (storedTheme === "light" || storedTheme === "dark") root.dataset.theme = storedTheme;

  const effectiveTheme = () => root.dataset.theme || (darkPreference.matches ? "dark" : "light");
  const translations = () => window.K2040_TRANSLATIONS?.[currentLanguage] || window.K2040_TRANSLATIONS?.en || {};
  const translate = (key) => {
    let value = translations();
    for (const part of (key || "").split(".")) {
      if (!value || typeof value !== "object" || !(part in value)) return null;
      value = value[part];
    }
    return typeof value === "string" ? value : null;
  };
  const localStrings = (entry) => entry?.strings?.[currentLanguage] || entry?.strings?.en || {};
  const localizedUpdateImage = (entry) => entry?.images?.[currentLanguage] || entry?.images?.en || entry?.image || null;

  const destinationLabel = (href) => {
    let url;
    try { url = new URL(href, location.href); } catch { return null; }
    const host = url.hostname.toLowerCase();
    if (host === "github.com" || host.endsWith(".github.com")) return "GitHub";
    if (host === "f-droid.org" || host.endsWith(".f-droid.org")) return "F-Droid";
    if (host === "apkpure.com" || host.endsWith(".apkpure.com")) return "APKPure";
    if (host === "uptodown.com" || host.endsWith(".uptodown.com")) return "Uptodown";
    if (host === "onestore.net" || host.endsWith(".onestore.net") || host === "onestore.co.kr" || host.endsWith(".onestore.co.kr")) return "ONE store";
    if (host === "openapk.net" || host.endsWith(".openapk.net")) return "OpenAPK";
    return null;
  };

  const updateThemeToggle = (button) => {
    if (!button) return;
    const current = effectiveTheme();
    const next = current === "dark" ? "light" : "dark";
    button.setAttribute("aria-pressed", String(current === "dark"));
    button.setAttribute("aria-label", translate(next === "dark" ? "controls.switchToDark" : "controls.switchToLight") || "");
    const icon = button.querySelector(".theme-toggle-icon");
    const label = button.querySelector("[data-theme-label]");
    if (icon) icon.textContent = next === "dark" ? "☾" : "☀";
    if (label) label.textContent = translate(next === "dark" ? "controls.dark" : "controls.light") || "";
  };

  const updateLanguageControl = () => {
    const presentation = languagePresentation[currentLanguage] || languagePresentation.en;
    document.querySelectorAll("[data-language-select]").forEach((select) => { select.value = currentLanguage; });
    document.querySelectorAll("[data-language-current-flag]").forEach((element) => { element.textContent = presentation.flag; });
    document.querySelectorAll("[data-language-current-label]").forEach((element) => { element.textContent = presentation.label; });
    document.querySelectorAll("[data-language-option]").forEach((button) => {
      button.setAttribute("aria-current", button.dataset.languageOption === currentLanguage ? "true" : "false");
    });
  };

  const updateLocalizedScreenshots = () => {
    const locale = languagePresentation[currentLanguage]?.locale || "en-US";
    document.querySelectorAll("[data-esca-screenshot]").forEach((image) => {
      const filename = image.dataset.escaScreenshot;
      if (filename) image.src = `https://raw.githubusercontent.com/Kamui2040/Esca-Agnellis-Android/d06d78cc5ec3fa6bca1e329a8a774133101c9ccf/fastlane/metadata/android/${locale}/images/phoneScreenshots/${filename}`;
    });
  };

  const sortedUpdates = () => [...(window.K2040_CONTENT?.updates || [])]
    .map((update, sourceIndex) => ({ update, sourceIndex, time: Date.parse(`${update?.date || ""}T00:00:00Z`) }))
    .sort((a, b) => {
      const aValid = !Number.isNaN(a.time), bValid = !Number.isNaN(b.time);
      if (!aValid && !bValid) return a.sourceIndex - b.sourceIndex;
      if (!aValid) return 1;
      if (!bValid) return -1;
      return a.time === b.time ? a.sourceIndex - b.sourceIndex : b.time - a.time;
    })
    .map(({ update }) => update);

  const renderUpdates = () => {
    document.querySelectorAll("[data-update-list]").forEach((list) => {
      const template = document.querySelector("#update-card-template");
      if (!template) return;
      const requestedLimit = Number.parseInt(list.dataset.updateLimit || "", 10);
      const updates = Number.isFinite(requestedLimit) && requestedLimit > 0 ? sortedUpdates().slice(0, requestedLimit) : sortedUpdates();
      const archiveMode = document.body.classList.contains("updates-page") && Boolean(list.closest(".update-archive"));
      const textOnly = document.body.classList.contains("projects-home-page") && Boolean(list.closest("#updates"));
      list.replaceChildren();
      updates.forEach((update, index) => {
        const strings = localStrings(update);
        const fragment = template.content.cloneNode(true);
        const card = fragment.querySelector("[data-update-card]");
        const media = fragment.querySelector("[data-update-media]");
        const image = fragment.querySelector("[data-update-image]");
        const localizedImage = localizedUpdateImage(update) || (archiveMode ? archiveMedia[update.projectId] : null);
        if (card && index === 0 && !archiveMode && !textOnly) card.classList.add("update-card--featured");
        if (!textOnly && media && image && localizedImage) {
          image.src = localizedImage;
          image.alt = strings.imageAlt || "";
          image.loading = index === 0 ? "eager" : "lazy";
          image.decoding = "async";
          card?.classList.add("update-card--with-media");
        } else {
          media?.remove();
          card?.classList.add("update-card--no-media");
        }
        const time = fragment.querySelector("[data-update-date]");
        if (time) {
          time.dateTime = update.date;
          time.textContent = new Intl.DateTimeFormat(currentLanguage, { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" }).format(new Date(`${update.date}T00:00:00Z`));
        }
        const category = fragment.querySelector("[data-update-category]");
        const title = fragment.querySelector("[data-update-title]");
        const summary = fragment.querySelector("[data-update-summary]");
        const action = fragment.querySelector("[data-update-action]");
        if (category) category.textContent = strings.category || "";
        if (title) title.textContent = strings.title || "";
        if (summary) summary.textContent = strings.summary || "";
        if (action) {
          const label = archiveMode ? destinationLabel(update.href) : null;
          action.textContent = label || `${translate("actions.readMore") || "Read more"} →`;
          if (update.href) {
            action.href = update.href;
            if (label) action.title = label;
          } else action.remove();
        }
        list.append(fragment);
      });
    });
  };

  const applyTranslations = () => {
    root.lang = currentLanguage;
    root.dataset.language = currentLanguage;
    const pageTitle = translate(document.body?.dataset.pageTitleKey || "meta.title");
    const description = translate(document.body?.dataset.pageDescriptionKey || "meta.description");
    if (pageTitle) document.title = pageTitle;
    const meta = document.querySelector('meta[name="description"]');
    if (meta && description) meta.content = description;
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = translate(element.dataset.i18n);
      if (value) element.textContent = value;
    });
    document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
      const value = translate(element.dataset.i18nAriaLabel);
      if (value) element.setAttribute("aria-label", value);
    });
    document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
      const value = translate(element.dataset.i18nAlt);
      if (value) element.alt = value;
    });
    updateLanguageControl();
    updateLocalizedScreenshots();
    renderUpdates();
    updateThemeToggle(document.querySelector("[data-theme-toggle]"));
  };

  const closeSiblingMenus = (active) => {
    document.querySelectorAll("details.menu:not(.global-menu)").forEach((details) => {
      if (details !== active) details.open = false;
    });
  };

  const positionAppMenu = () => {
    const menu = document.querySelector("details.app-menu");
    const panel = menu?.querySelector(".app-menu-panel");
    const summary = menu?.querySelector(":scope > summary");
    if (!menu || !panel || !summary) return;
    if (innerWidth <= 760) {
      panel.style.removeProperty("left");
      panel.style.removeProperty("right");
      return;
    }
    panel.style.left = "0";
    panel.style.right = "auto";
    if (!menu.open) return;
    requestAnimationFrame(() => {
      const trigger = summary.getBoundingClientRect();
      const width = panel.offsetWidth || 360;
      const margin = 16;
      if (trigger.left + width > innerWidth - margin && trigger.right - width >= margin) {
        panel.style.left = "auto";
        panel.style.right = "0";
      }
    });
  };

  const setLanguage = (language) => {
    if (!supportedLanguages.includes(language)) return;
    currentLanguage = language;
    writeStorage(languageStorageKey, language);
    applyTranslations();
  };

  const initializePage = () => {
    const themeToggle = document.querySelector("[data-theme-toggle]");
    applyTranslations();
    positionAppMenu();

    themeToggle?.addEventListener("click", () => {
      const next = effectiveTheme() === "dark" ? "light" : "dark";
      root.dataset.theme = next;
      writeStorage(themeStorageKey, next);
      updateThemeToggle(themeToggle);
    });

    document.querySelectorAll("[data-language-select]").forEach((select) => {
      select.addEventListener("change", () => setLanguage(select.value));
    });

    document.querySelectorAll("[data-language-option]").forEach((button) => {
      button.addEventListener("click", () => {
        setLanguage(button.dataset.languageOption);
        button.closest("details")?.removeAttribute("open");
      });
    });

    document.querySelectorAll("details.menu:not(.global-menu)").forEach((details) => {
      details.addEventListener("toggle", () => {
        if (details.open) {
          closeSiblingMenus(details);
          if (details.classList.contains("app-menu")) positionAppMenu();
        }
      });
    });

    document.addEventListener("click", (event) => {
      if (!event.target.closest("details.menu:not(.global-menu)")) {
        document.querySelectorAll("details.menu:not(.global-menu)[open]").forEach((details) => { details.open = false; });
      }
    });

    addEventListener("resize", positionAppMenu, { passive: true });
    const updateSystemTheme = () => { if (!root.dataset.theme) updateThemeToggle(themeToggle); };
    darkPreference.addEventListener?.("change", updateSystemTheme);
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initializePage, { once: true });
  else initializePage();
})();
