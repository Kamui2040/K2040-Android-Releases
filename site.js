(() => {
  "use strict";

  const themeStorageKey = "k2040-theme";
  const languageStorageKey = "k2040-language";
  const supportedLanguages = ["en", "de", "pt-PT", "es", "fr"];
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
      // The current page still works when persistent storage is unavailable.
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
  root.lang = currentLanguage;
  root.dataset.language = currentLanguage;

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

  const applyTranslations = () => {
    root.lang = currentLanguage;
    root.dataset.language = currentLanguage;

    const pageTitle = getTranslation("meta.title");
    const metaDescription = getTranslation("meta.description");
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

    const languageSelect = document.querySelector("[data-language-select]");
    if (languageSelect) {
      languageSelect.value = currentLanguage;
    }

    updateThemeToggle(document.querySelector("[data-theme-toggle]"));
  };

  const initializePage = () => {
    const themeToggle = document.querySelector("[data-theme-toggle]");
    const languageSelect = document.querySelector("[data-language-select]");

    applyTranslations();

    if (themeToggle) {
      themeToggle.addEventListener("click", () => {
        const nextTheme = effectiveTheme() === "dark" ? "light" : "dark";
        root.dataset.theme = nextTheme;
        writeStorage(themeStorageKey, nextTheme);
        updateThemeToggle(themeToggle);
      });
    }

    if (languageSelect) {
      languageSelect.addEventListener("change", () => {
        const selectedLanguage = languageSelect.value;
        if (!supportedLanguages.includes(selectedLanguage)) {
          return;
        }

        currentLanguage = selectedLanguage;
        writeStorage(languageStorageKey, selectedLanguage);
        applyTranslations();
      });
    }

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
