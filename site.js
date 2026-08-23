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
  const root = document.documentElement;
  const darkPreference = window.matchMedia("(prefers-color-scheme: dark)");

  const readStorage = (key) => {
    try {
      return window.localStorage.getItem(key);
    } catch {
      return null;
    }
  };

  const writeStorage = (key, value) => {
    try {
      window.localStorage.setItem(key, value);
    } catch {
      // Persistent storage is optional; the current page still works without it.
    }
  };

  const storedTheme = readStorage(themeStorageKey);
  if (storedTheme === "light" || storedTheme === "dark") {
    root.dataset.theme = storedTheme;
  }

  const normalizeLanguage = (languageTag) => {
    if (typeof languageTag !== "string") {
      return null;
    }

    const normalized = languageTag.trim().toLowerCase();
    if (normalized === "en" || normalized.startsWith("en-")) {
      return "en";
    }
    if (normalized === "de" || normalized.startsWith("de-")) {
      return "de";
    }
    if (normalized === "pt" || normalized.startsWith("pt-")) {
      return "pt-PT";
    }
    if (normalized === "es" || normalized.startsWith("es-")) {
      return "es";
    }
    if (normalized === "fr" || normalized.startsWith("fr-")) {
      return "fr";
    }

    return null;
  };

  const detectLanguage = () => {
    const hashLanguage = normalizeLanguage(window.location.hash.slice(1));
    if (hashLanguage) {
      return hashLanguage;
    }

    const storedLanguage = readStorage(languageStorageKey);
    if (supportedLanguages.includes(storedLanguage)) {
      return storedLanguage;
    }

    const browserLanguages = Array.isArray(navigator.languages) && navigator.languages.length > 0
      ? navigator.languages
      : [navigator.language];

    for (const browserLanguage of browserLanguages) {
      const supportedLanguage = normalizeLanguage(browserLanguage);
      if (supportedLanguage) {
        return supportedLanguage;
      }
    }

    return "en";
  };

  let currentLanguage = detectLanguage();

  const effectiveTheme = () => {
    const explicitTheme = root.dataset.theme;
    if (explicitTheme === "light" || explicitTheme === "dark") {
      return explicitTheme;
    }

    return darkPreference.matches ? "dark" : "light";
  };

  const getTranslations = () => {
    const translations = window.K2040_TRANSLATIONS || {};
    return translations[currentLanguage] || translations.en || {};
  };

  const getTranslation = (key) => {
    if (!key) {
      return null;
    }

    const segments = key.split(".");
    let value = getTranslations();

    for (const segment of segments) {
      if (!value || typeof value !== "object" || !Object.prototype.hasOwnProperty.call(value, segment)) {
        return null;
      }
      value = value[segment];
    }

    return typeof value === "string" ? value : null;
  };

  const getLocalStrings = (entry) => {
    if (!entry || typeof entry !== "object") {
      return {};
    }

    return entry.strings?.[currentLanguage] || entry.strings?.en || {};
  };

  const getLocalizedUpdateImage = (entry) => {
    if (entry?.images && typeof entry.images === "object") {
      return entry.images[currentLanguage] || entry.images.en || null;
    }
    return entry?.image || null;
  };

  const updateThemeToggle = (button) => {
    if (!button) {
      return;
    }

    const currentTheme = effectiveTheme();
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    const icon = button.querySelector(".theme-toggle-icon");
    const label = button.querySelector("[data-theme-label]");
    const labelKey = nextTheme === "dark" ? "controls.dark" : "controls.light";
    const ariaKey = nextTheme === "dark" ? "controls.switchToDark" : "controls.switchToLight";

    button.setAttribute("aria-pressed", String(currentTheme === "dark"));
    button.setAttribute("aria-label", getTranslation(ariaKey) || ariaKey);

    if (icon) {
      icon.textContent = nextTheme === "dark" ? "☾" : "☀";
    }

    if (label) {
      label.textContent = getTranslation(labelKey) || labelKey;
    }
  };

  const updateLanguageControl = () => {
    const presentation = languagePresentation[currentLanguage] || languagePresentation.en;

    document.querySelectorAll("[data-language-current-flag]").forEach((element) => {
      element.textContent = presentation.flag;
    });

    document.querySelectorAll("[data-language-current-label]").forEach((element) => {
      element.textContent = presentation.label;
    });

    document.querySelectorAll("[data-language-option]").forEach((button) => {
      const selected = button.dataset.languageOption === currentLanguage;
      button.setAttribute("aria-current", selected ? "true" : "false");
    });
  };

  const updateLocalizedScreenshots = () => {
    const locale = languagePresentation[currentLanguage]?.locale || "en-US";

    document.querySelectorAll("[data-esca-screenshot]").forEach((image) => {
      const filename = image.dataset.escaScreenshot;
      if (!filename) {
        return;
      }
      image.src = `https://raw.githubusercontent.com/Kamui2040/Esca-Agnellis-Android/d06d78cc5ec3fa6bca1e329a8a774133101c9ccf/fastlane/metadata/android/${locale}/images/phoneScreenshots/${filename}`;
    });
  };

  const updateTimeValue = (update) => {
    const value = Date.parse(`${update?.date || ""}T00:00:00Z`);
    return Number.isNaN(value) ? null : value;
  };

  const sortedUpdates = () => {
    return [...(window.K2040_CONTENT?.updates || [])]
      .map((update, sourceIndex) => ({ update, sourceIndex, time: updateTimeValue(update) }))
      .sort((left, right) => {
        if (left.time === null && right.time === null) {
          return left.sourceIndex - right.sourceIndex;
        }
        if (left.time === null) {
          return 1;
        }
        if (right.time === null) {
          return -1;
        }
        if (left.time !== right.time) {
          return right.time - left.time;
        }
        return left.sourceIndex - right.sourceIndex;
      })
      .map(({ update }) => update);
  };

  const renderUpdates = () => {
    document.querySelectorAll("[data-update-list]").forEach((list) => {
      const template = document.querySelector("#update-card-template");
      if (!template) {
        return;
      }

      const requestedLimit = Number.parseInt(list.dataset.updateLimit || "", 10);
      const updates = Number.isFinite(requestedLimit) && requestedLimit > 0
        ? sortedUpdates().slice(0, requestedLimit)
        : sortedUpdates();

      list.replaceChildren();

      updates.forEach((update, index) => {
        const strings = getLocalStrings(update);
        const fragment = template.content.cloneNode(true);
        const card = fragment.querySelector("[data-update-card]");
        const media = fragment.querySelector("[data-update-media]");
        const image = fragment.querySelector("[data-update-image]");
        const time = fragment.querySelector("[data-update-date]");
        const category = fragment.querySelector("[data-update-category]");
        const title = fragment.querySelector("[data-update-title]");
        const summary = fragment.querySelector("[data-update-summary]");
        const action = fragment.querySelector("[data-update-action]");
        const localizedImage = getLocalizedUpdateImage(update);

        if (card) {
          if (update.href) {
            card.href = update.href;
          } else {
            card.removeAttribute("href");
            card.setAttribute("aria-disabled", "true");
          }
          if (index === 0) {
            card.classList.add("update-card--featured");
          }
        }

        if (media && image && localizedImage) {
          image.src = localizedImage;
          image.alt = strings.imageAlt || "";
          image.loading = index === 0 ? "eager" : "lazy";
          image.decoding = "async";
          card?.classList.add("update-card--with-media");
        } else {
          media?.remove();
          card?.classList.add("update-card--no-media");
        }

        if (time) {
          time.dateTime = update.date;
          time.textContent = new Intl.DateTimeFormat(currentLanguage, {
            year: "numeric",
            month: "short",
            day: "numeric",
            timeZone: "UTC"
          }).format(new Date(`${update.date}T00:00:00Z`));
        }

        if (category) {
          category.textContent = strings.category || "";
        }
        if (title) {
          title.textContent = strings.title || "";
        }
        if (summary) {
          summary.textContent = strings.summary || "";
        }
        if (action) {
          action.textContent = `${getTranslation("actions.readMore") || "Read more"} →`;
        }

        list.append(fragment);
      });
    });
  };

  const applyTranslations = () => {
    root.lang = currentLanguage;
    root.dataset.language = currentLanguage;

    const pageTitleKey = document.body?.dataset.pageTitleKey || "meta.title";
    const pageDescriptionKey = document.body?.dataset.pageDescriptionKey || "meta.description";
    const pageTitle = getTranslation(pageTitleKey);
    const metaDescription = getTranslation(pageDescriptionKey);
    const descriptionElement = document.querySelector('meta[name="description"]');

    if (pageTitle) {
      document.title = pageTitle;
    }
    if (descriptionElement && metaDescription) {
      descriptionElement.setAttribute("content", metaDescription);
    }

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const translatedText = getTranslation(element.dataset.i18n);
      if (translatedText) {
        element.textContent = translatedText;
      }
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
      const translatedText = getTranslation(element.dataset.i18nAriaLabel);
      if (translatedText) {
        element.setAttribute("aria-label", translatedText);
      }
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
      const translatedText = getTranslation(element.dataset.i18nAlt);
      if (translatedText) {
        element.setAttribute("alt", translatedText);
      }
    });

    updateLanguageControl();
    updateLocalizedScreenshots();
    renderUpdates();
    updateThemeToggle(document.querySelector("[data-theme-toggle]"));
  };

  const closeSiblingMenus = (activeDetails) => {
    document.querySelectorAll("details.menu").forEach((details) => {
      if (details !== activeDetails) {
        details.open = false;
      }
    });
  };

  const positionAppMenu = () => {
    const menu = document.querySelector("details.app-menu");
    const panel = menu?.querySelector(".app-menu-panel");
    const summary = menu?.querySelector("summary");
    if (!menu || !panel || !summary) {
      return;
    }

    if (window.innerWidth <= 760) {
      panel.style.removeProperty("left");
      panel.style.removeProperty("right");
      return;
    }

    panel.style.left = "0";
    panel.style.right = "auto";

    if (!menu.open) {
      return;
    }

    requestAnimationFrame(() => {
      const trigger = summary.getBoundingClientRect();
      const panelWidth = panel.offsetWidth || 360;
      const margin = 16;
      const fitsRight = trigger.left + panelWidth <= window.innerWidth - margin;
      const fitsLeft = trigger.right - panelWidth >= margin;

      if (!fitsRight && fitsLeft) {
        panel.style.left = "auto";
        panel.style.right = "0";
      }
    });
  };

  const initializePage = () => {
    const themeToggle = document.querySelector("[data-theme-toggle]");

    applyTranslations();
    positionAppMenu();

    if (themeToggle) {
      themeToggle.addEventListener("click", () => {
        const nextTheme = effectiveTheme() === "dark" ? "light" : "dark";
        root.dataset.theme = nextTheme;
        writeStorage(themeStorageKey, nextTheme);
        updateThemeToggle(themeToggle);
      });
    }

    document.querySelectorAll("[data-language-option]").forEach((button) => {
      button.addEventListener("click", () => {
        const selectedLanguage = button.dataset.languageOption;
        if (!supportedLanguages.includes(selectedLanguage)) {
          return;
        }

        currentLanguage = selectedLanguage;
        writeStorage(languageStorageKey, selectedLanguage);
        applyTranslations();

        const menu = button.closest("details");
        if (menu) {
          menu.open = false;
        }
      });
    });

    document.querySelectorAll("details.menu").forEach((details) => {
      details.addEventListener("toggle", () => {
        if (details.open) {
          closeSiblingMenus(details);
          if (details.classList.contains("app-menu")) {
            positionAppMenu();
          }
        }
      });
    });

    document.addEventListener("click", (event) => {
      if (!event.target.closest("details.menu")) {
        document.querySelectorAll("details.menu[open]").forEach((details) => {
          details.open = false;
        });
      }
    });

    window.addEventListener("resize", positionAppMenu, { passive: true });

    const updateForSystemPreference = () => {
      if (!root.dataset.theme) {
        updateThemeToggle(themeToggle);
      }
    };

    if (typeof darkPreference.addEventListener === "function") {
      darkPreference.addEventListener("change", updateForSystemPreference);
    } else if (typeof darkPreference.addListener === "function") {
      darkPreference.addListener(updateForSystemPreference);
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializePage, { once: true });
  } else {
    initializePage();
  }
})();
