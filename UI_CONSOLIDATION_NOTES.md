# Shared UI consolidation notes

The K2040 website family now uses the Gaming site as the visual reference for shared controls.

## Shared across the three sites

- K2040 cascade menu appearance and interaction
- Header control shape, spacing, and hover/focus treatment
- Action-button appearance
- Current-page controls remain neutral until hover or keyboard focus
- Mobile cascade expansion behavior

The canonical shared files are `shared-ui.css` and `shared-navigation.js`. Their contents are intentionally kept identical across the Gaming, main, and Android repositories.

## Android-specific cleanup

The Android site keeps only Android page layout in `android-redesign.css`. Old parity and duplicated navigation layers were removed. App cards, release information, screenshots, and download destinations remain site-specific and unchanged.

The About block now uses the same page-section structure on the Android landing page, app pages, and Updates page.

## Validation scope

Before merge, compare the three shared-file hashes, inspect all changed HTML references, confirm no removed stylesheet or script is still referenced, and verify the complete pull-request diff. Browser QA should cover desktop and mobile navigation, light and dark themes, resting and hover/focus states, download/action buttons, and About blocks.
