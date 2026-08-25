(() => {
  "use strict";

  const isOneStore = (link) => {
    let url;
    try { url = new URL(link.href, location.href); } catch { return false; }
    const host = url.hostname.toLowerCase();
    return host === "onestore.net" || host.endsWith(".onestore.net") || host === "onestore.co.kr" || host.endsWith(".onestore.co.kr");
  };

  const cleanLabel = (value) => value.replace(/\s*(?:↗|→|↓)\s*$/u, "").trim();

  const decorate = (link) => {
    if (!(link instanceof HTMLAnchorElement) || !isOneStore(link) || link.querySelector(":scope > .external-platform-icon")) return;
    const labelText = cleanLabel(link.textContent || "ONE store") || "ONE store";
    link.textContent = "";

    const icon = document.createElement("span");
    icon.className = "external-platform-icon external-platform-icon--onestore external-platform-icon--monogram";
    icon.setAttribute("aria-hidden", "true");
    icon.textContent = "1";

    const label = document.createElement("span");
    label.className = "external-platform-label";
    label.textContent = labelText;

    link.dataset.externalPlatform = "onestore";
    link.dataset.platformOnlyLabel = String(labelText.toLowerCase() === "one store");
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
