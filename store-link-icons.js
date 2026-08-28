(() => {
  "use strict";

  // Official HUAWEI AppGallery distribution badges generated in AppGallery Connect
  // for Esca Agnellis. The artwork is embedded at its intended 160x48 display size.
  const appGallery = {
    html5Link: "https://url.cloud.huawei.com/BQUCHKwmUo?shareTo=qrcode",
    lightBadge: "data:image/png;base64,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",
    darkBadge: "data:image/png;base64,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"
  };

  const storeFor = (link) => {
    let url;
    try { url = new URL(link.href, location.href); } catch { return null; }
    const host = url.hostname.toLowerCase();
    if (host === "appgallery.huawei.com" || host.endsWith(".appgallery.huawei.com")) {
      return { key: "appgallery", label: "HUAWEI AppGallery", badge: true };
    }
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
    if (!(link instanceof HTMLAnchorElement) || link.dataset.externalPlatform) return;
    const store = storeFor(link);
    if (!store) return;

    link.dataset.externalPlatform = store.key;

    if (store.badge) {
      link.href = appGallery.html5Link;
      link.classList.remove("text-link", "external-platform-link", "external-platform-link--icon-only-mobile");
      link.classList.add("appgallery-badge-link");
      link.setAttribute("aria-label", "Explore Esca Agnellis on HUAWEI AppGallery");
      link.textContent = "";

      const light = document.createElement("img");
      light.className = "appgallery-badge appgallery-badge--light";
      light.src = appGallery.lightBadge;
      light.width = 160;
      light.height = 48;
      light.alt = "Explore it on HUAWEI AppGallery";
      light.decoding = "async";

      const dark = document.createElement("img");
      dark.className = "appgallery-badge appgallery-badge--dark";
      dark.src = appGallery.darkBadge;
      dark.width = 160;
      dark.height = 48;
      dark.alt = "Explore it on HUAWEI AppGallery";
      dark.decoding = "async";

      link.append(light, dark);
      return;
    }

    const labelText = cleanLabel(link.textContent || store.label) || store.label;
    link.textContent = "";

    const icon = document.createElement("span");
    icon.className = `external-platform-icon external-platform-icon--${store.key} external-platform-icon--monogram`;
    icon.setAttribute("aria-hidden", "true");
    icon.textContent = store.symbol;

    const label = document.createElement("span");
    label.className = "external-platform-label";
    label.textContent = labelText;

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
