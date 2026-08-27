(() => {
  "use strict";

  const apps = [
    {
      selector: ".app-promo-card--esca",
      name: "Esca Agnellis",
      links: [
        ["GitHub", "https://github.com/Kamui2040/Esca-Agnellis-Android/releases/tag/v0.16.0"],
        ["F-Droid", "https://f-droid.org/packages/com.k2040.escaagnellis/"],
        ["APKPure", "https://apkpure.com/p/com.k2040.escaagnellis"],
        ["Uptodown", "https://esca-agnellis.en.uptodown.com/android"]
      ]
    },
    {
      selector: ".app-promo-card--geo",
      name: "GeoJoystick",
      links: [
        ["GitHub", "https://github.com/Kamui2040/K2040-GeoJoystick/releases/tag/v0.1.4"],
        ["F-Droid", "https://f-droid.org/packages/com.k2040.geojoystick/"],
        ["APKPure", "https://apkpure.com/p/com.k2040.geojoystick"],
        ["Uptodown", "https://geojoystick.en.uptodown.com/android"],
        ["ONE store", "https://m.onestore.net/en-us/apps/appsDetail?prodId=0001008367"],
        ["OpenAPK", "https://www.openapk.net/de/geojoystick/com.k2040.geojoystick/"]
      ]
    }
  ];

  const addDownloads = ({ selector, name, links }) => {
    const card = document.querySelector(selector);
    const copy = card?.querySelector(".app-promo-copy");
    const viewApp = copy?.querySelector(":scope > .text-link");
    if (!card || !copy || !viewApp || copy.querySelector(".app-card-actions")) return;

    const actions = document.createElement("div");
    actions.className = "app-card-actions";

    const downloads = document.createElement("nav");
    downloads.className = "app-card-downloads";
    downloads.setAttribute("aria-label", `${name} downloads`);

    links.forEach(([platform, href]) => {
      const link = document.createElement("a");
      link.className = "text-link app-card-download-link";
      link.href = href;
      link.textContent = platform;
      link.title = platform;
      link.setAttribute("aria-label", `Download ${name} from ${platform}`);
      downloads.append(link);
    });

    actions.append(viewApp, downloads);
    copy.append(actions);
    card.classList.add("app-promo-card--downloads");
  };

  const init = () => apps.forEach(addDownloads);

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
})();
