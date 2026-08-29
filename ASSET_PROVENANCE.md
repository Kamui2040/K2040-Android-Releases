# Asset provenance

## K2040 site-family icons

- The Home, Android, Gaming, and Nexus destination images used by this site are shared K2040 website assets hosted by the public Main site at `https://kamui2040.github.io/assets/icons/`.
- The Home icon is derived from the project owner's K2040 brand artwork. The Android, Gaming, and Nexus destination images are original K2040 artwork approved for the shared website navigation and link system.
- This repository references those public assets rather than duplicating their binary files. Their detailed provenance is maintained in the Main site's `ASSET_PROVENANCE.md`.
- The Nexus destination image is an original visual cue and is not represented as the official Nexus Mods logo.

## GeoJoystick project hero

- Local file: `assets/geojoystick-hero.webp`.
- Source: original K2040 project artwork supplied by the project owner, built from first-party GeoJoystick screenshots and K2040-authored design elements.
- Use here: shared 3:1 artwork for the GeoJoystick project page. Localized descriptive copy is rendered by the website rather than embedded in separate language-specific images.
- Processing: converted from the approved PNG source to WebP for the public website without changing the artwork content.

## APKPure destination icon

- Source: Arcticons `icons/black/apkpure.svg`
- Upstream: https://github.com/Arcticons-Team/Arcticons
- Licence: CC BY-SA 4.0 for Arcticons icons
- Use here: adapted into the Android site's external-link icon styling so it inherits the site's current text colour.
- Changes: converted from a standalone stroked SVG into a CSS mask; the original geometry is otherwise preserved.
- APKPure name and trademark remain the property of their respective owner.

## Uptodown destination icon

- Source: official Uptodown App Store icon served by Uptodown at `https://img.utdstc.com/icon/f66/dd0/f66dd06c25088f96b64eb440bcc90a2994cc645680cb27840b30fbf996902804`.
- Brand resources: https://en.uptodown.com/about-us/brand-assets
- Use here: displayed unchanged as the destination icon for Uptodown links.
- Changes: none to the icon artwork; CSS only controls its displayed size and position.
- Uptodown's name, icon, logo, and trademarks remain the property of Uptodown.

## HUAWEI AppGallery destination symbol

- Local file: `assets/appgallery-cue.svg`.
- Source: original K2040 vector artwork.
- Use here: a small fan/blossom-shaped destination cue for AppGallery links, rendered through the same framed store-button system as the other Android download sources.
- The cue is intentionally not a copy of HUAWEI's official AppGallery or corporate logo.
- The AppGallery destination itself uses the HTML5 link generated in HUAWEI AppGallery Connect; see `assets/APPGALLERY-LINK-PROVENANCE.md`.
- HUAWEI and AppGallery names and trademarks remain the property of their respective owner.

## ONE store destination symbol

- Reference: ONE store developer guidance at `https://onestore-dev.gitbook.io/dev/eng/tools/icon-guide`.
- Use here: a small custom `1` destination symbol identifies ONE store links without redistributing or hot-linking ONE store artwork.
- The symbol is an original site cue and is not represented as an official ONE store logo or app icon.
- ONE store names and trademarks remain the property of One store Co., Ltd.

## OpenAPK destination icon

- Source: `public/openapk-blank.svg` from the official `mobilenetworkltd/openapk` repository.
- Upstream: https://github.com/mobilenetworkltd/openapk/blob/main/public/openapk-blank.svg
- Licence: CC0 1.0 Universal, as declared by the upstream repository.
- Local copy: `assets/openapk.svg`.
- Use here: displayed as the destination icon for links to OpenAPK listings.
- Changes: none to the SVG artwork; CSS only controls displayed size and position.
- OpenAPK names and trademarks remain the property of their respective owner.
