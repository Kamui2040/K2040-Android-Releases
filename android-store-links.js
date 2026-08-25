(() => {
  "use strict";

  const stores = [
    { key: "onestore", host: "onestore.net", label: "ONE store" },
    { key: "openapk", host: "openapk.net", label: "OpenAPK" }
  ];

  const storeFor = (link) => {
    let url;
    try { url = new URL(link.href, location.href); } catch { return null; }
    const host = url.hostname.toLowerCase();
    return stores.find((store) => host === store.host || host.endsWith(`.${store.host}`)) || null;
  };

  const decorate = (link) => {
    const store = storeFor(link);
    if (!store) return;
    link.title = store.label;
    if (link.querySelector(":scope > .external-platform-icon")) {
      const label = link.querySelector(":scope > .external-platform-label");
      if (label) label.textContent = store.label;
      return;
    }
    const icon = document.createElement("span");
    icon.className = `external-platform-icon external-platform-icon--${store.key} external-platform-icon--monogram`;
    icon.setAttribute("aria-hidden", "true");
    icon.textContent = store.key === "onestore" ? "1" : "O";
    const label = document.createElement("span");
    label.className = "external-platform-label";
    label.textContent = store.label;
    link.replaceChildren(icon, label);
    link.classList.add("external-platform-link");
    link.dataset.externalPlatform = store.key;
  };

  const ensureGeoOpenApk = () => {
    if (!location.pathname.includes("/apps/geojoystick/")) return;
    const row = document.querySelector(".download-row");
    if (!row || row.querySelector('a[href*="openapk.net"]')) return;
    const link = document.createElement("a");
    link.className = "text-link download-source";
    link.href = "https://www.openapk.net/geojoystick/com.k2040.geojoystick/";
    link.textContent = "OpenAPK";
    row.append(link);
  };

  const refresh = () => {
    ensureGeoOpenApk();
    document.querySelectorAll('a[href*="onestore.net"],a[href*="openapk.net"]').forEach(decorate);
  };

  let queued = false;
  const schedule = () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => {
      queued = false;
      refresh();
    });
  };

  const init = () => {
    refresh();
    new MutationObserver(schedule).observe(document.body, { childList: true, subtree: true });
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
})();
