(() => {
  "use strict";

  const APP_MEDIA = {
    "esca-agnellis": "/K2040-Android-Releases/assets/esca-agnellis-app-card.webp",
    geojoystick: "/K2040-Android-Releases/assets/geojoystick-app-card.webp"
  };

  const updateTime = (update) => {
    const value = Date.parse(`${update?.date || ""}T00:00:00Z`);
    return Number.isNaN(value) ? null : value;
  };

  const sortedUpdates = () => [...(window.K2040_CONTENT?.updates || [])]
    .map((update, index) => ({ update, index, time: updateTime(update) }))
    .sort((left, right) => {
      if (left.time === null && right.time === null) return left.index - right.index;
      if (left.time === null) return 1;
      if (right.time === null) return -1;
      if (left.time !== right.time) return right.time - left.time;
      return left.index - right.index;
    })
    .map(({ update }) => update);

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

  const setActionLabel = (link, label) => {
    if (!link || !label) return;
    const wrapped = link.querySelector(":scope > .external-platform-label");
    if (wrapped) wrapped.textContent = label;
    else link.textContent = label;
    link.title = label;
  };

  const decorateCard = (card, update) => {
    if (!card || !update) return;
    card.classList.remove("update-card--featured", "update-card--no-media");
    card.dataset.updateArchiveDecorated = "true";

    const copy = card.querySelector(".update-copy");
    let media = card.querySelector(".update-media");
    const src = APP_MEDIA[update.projectId];

    if (src && copy) {
      if (!media) {
        media = document.createElement("div");
        media.className = "update-media";
        card.insertBefore(media, copy);
      }
      media.replaceChildren();
      const image = document.createElement("img");
      image.className = "update-image";
      image.src = src;
      image.alt = "";
      image.loading = "lazy";
      image.decoding = "async";
      media.append(image);
      card.classList.add("update-card--with-media");
    } else {
      media?.remove();
      card.classList.add("update-card--no-media");
    }

    const action = card.querySelector("[data-update-action]");
    if (action && update.href) setActionLabel(action, destinationLabel(update.href));
  };

  const init = () => {
    const list = document.querySelector(".updates-page [data-update-list]");
    if (!list) return;
    const decorateAll = () => {
      const updates = sortedUpdates();
      [...list.querySelectorAll(":scope > .update-card")].forEach((card, index) => decorateCard(card, updates[index]));
    };
    decorateAll();
    new MutationObserver(decorateAll).observe(list, { childList: true });
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
})();
