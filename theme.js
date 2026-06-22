(() => {
  "use strict";

  const storageKey = "k2040-theme";
  const root = document.documentElement;
  const darkPreference = window.matchMedia("(prefers-color-scheme: dark)");

  const readStoredTheme = () => {
    try {
      const storedTheme = window.localStorage.getItem(storageKey);
      return storedTheme === "light" || storedTheme === "dark" ? storedTheme : null;
    } catch {
      return null;
    }
  };

  const writeStoredTheme = (theme) => {
    try {
      window.localStorage.setItem(storageKey, theme);
    } catch {
      // The selected theme still applies for the current page when storage is unavailable.
    }
  };

  const storedTheme = readStoredTheme();
  if (storedTheme) {
    root.dataset.theme = storedTheme;
  }

  const effectiveTheme = () => {
    const explicitTheme = root.dataset.theme;
    if (explicitTheme === "light" || explicitTheme === "dark") {
      return explicitTheme;
    }

    return darkPreference.matches ? "dark" : "light";
  };

  const updateToggle = (button) => {
    const currentTheme = effectiveTheme();
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    const icon = button.querySelector(".theme-toggle-icon");
    const label = button.querySelector("[data-theme-label]");

    button.setAttribute("aria-pressed", String(currentTheme === "dark"));
    button.setAttribute(
      "aria-label",
      nextTheme === "dark"
        ? "Dunkles Design aktivieren / Switch to dark theme"
        : "Helles Design aktivieren / Switch to light theme"
    );

    if (icon) {
      icon.textContent = nextTheme === "dark" ? "☾" : "☀";
    }

    if (label) {
      label.textContent = nextTheme === "dark" ? "Dunkel / Dark" : "Hell / Light";
    }
  };

  const initializeToggle = () => {
    const button = document.querySelector("[data-theme-toggle]");
    if (!button) {
      return;
    }

    updateToggle(button);

    button.addEventListener("click", () => {
      const nextTheme = effectiveTheme() === "dark" ? "light" : "dark";
      root.dataset.theme = nextTheme;
      writeStoredTheme(nextTheme);
      updateToggle(button);
    });

    const updateForSystemPreference = () => {
      if (!root.dataset.theme) {
        updateToggle(button);
      }
    };

    if (typeof darkPreference.addEventListener === "function") {
      darkPreference.addEventListener("change", updateForSystemPreference);
    } else if (typeof darkPreference.addListener === "function") {
      darkPreference.addListener(updateForSystemPreference);
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeToggle, { once: true });
  } else {
    initializeToggle();
  }
})();
