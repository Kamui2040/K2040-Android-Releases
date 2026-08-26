(() => {
  "use strict";

  const loaderScript = document.currentScript;
  if (loaderScript?.src) {
    const base = new URL(".", loaderScript.src);
    if (!document.querySelector('link[data-final-qa-style]')) {
      const styles = document.createElement("link");
      styles.rel = "stylesheet";
      styles.href = new URL("final-qa.css?v=20260826b", base).href;
      styles.dataset.finalQaStyle = "true";
      document.head.append(styles);
    }
    if (!document.querySelector('script[data-final-qa-script]')) {
      const script = document.createElement("script");
      script.src = new URL("final-qa.js?v=20260826a", base).href;
      script.dataset.finalQaScript = "true";
      document.head.append(script);
    }
  }

  const storeFor = (link) => {
    let url;
    try { url = new URL(link.href, location.href); } catch { return null; }
    const host = url.hostname.toLowerCase();
    if (host === "onestore.net" || host.endsWith(".onestore.net") || host === "onestore.co.kr" || host.endsWith(".onestore.co.kr")) {
      return { key: "onestore", label: "ONE store", symbol: "1" };
    }
    if (host === "openapk.net" || host.endsWith(".openapk.net")) {
      return { key: "openapk", label: "OpenAPK", symbol: "" };
    }
    return null;
  };

  const cleanLabel = (value) => value.replace(/\s*(?:↗|→|↓)\s*$/u, "").trim();

  const decorate = (link) => {
    if (!(link instanceof HTMLAnchorElement) || link.querySelector(":scope > .external-platform-icon")) return;
    const store = storeFor(link);
    if (!store) return;

    const labelText = cleanLabel(link.textContent || store.label) || store.label;
    link.textContent = "";

    const icon = document.createElement("span");
    icon.className = `external-platform-icon external-platform-icon--${store.key} external-platform-icon--monogram`;
    icon.setAttribute("aria-hidden", "true");
    icon.textContent = store.symbol;

    const label = document.createElement("span");
    label.className = "external-platform-label";
    label.textContent = labelText;

    link.dataset.externalPlatform = store.key;
    link.dataset.platformOnlyLabel = String(labelText.toLowerCase() === store.label.toLowerCase());
    link.classList.add("external-platform-link");
    link.append(icon, label);
  };

  const apply = (root = document) => root.querySelectorAll?.("a[href]").forEach(decorate);

  const init = () => {
    apply();
    new MutationObserver((records) => {
      records.forEach((record) => record.addedNodes.forEach((node) => {
        if (node.nodeType !== Node.ELEMENT_NODE) return;
        if (node.matches?.("a[href]")) decorate(node);
        apply(node);
      }));
    }).observe(document.body, { childList: true, subtree: true });
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
})();
