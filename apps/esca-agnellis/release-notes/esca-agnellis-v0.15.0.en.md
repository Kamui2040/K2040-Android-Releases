# Esca Agnellis v0.15.0

[Deutsche Version](esca-agnellis-v0.15.0.md)

Esca Agnellis v0.15.0 is the first stable public release after the two public beta releases.

## Release identity

- Version: `0.15.0`
- versionCode: `39`
- Package ID: `com.k2040.escaagnellis`
- Minimum version: Android 8.0 / API 26
- Target version: Android 15 / API 35
- APK: `Esca-Agnellis-v0.15.0-vc39-release.apk`
- APK size: `6423568` bytes
- SHA-256: `12A9E0F93F581639A4DB43097B23A071831CEA62F42F4A614F51CE05AAFC1E6A`
- Certificate SHA-256: `03CB5E9325BEA5AED36E8FFE1711C28300FC4421C4AED95E6740DA8A893821E6`

## Changes

- app-language selection for System, German, English, Spanish, French, and Portuguese (Portugal);
- German remains the fallback language;
- the language choice is stored locally and is not included in `schemaVersion: 2` backups;
- redesigned Settings with compact Language and Theme selectors;
- themes: System default, Standard Light, Standard Dark, Cozy Pastel Light, and Cozy Pastel Dark;
- System default preserves the active Standard or Cozy Pastel family while following the device light or dark appearance;
- corrected Settings spacing, scrolling bounds, clipping, accidental-tap protection, and touch-through prevention;
- long translated labels and portion descriptions now wrap correctly on narrow screens.

## Updating and compatibility

Updates from compatible public releases preserve existing app data and settings. The public compatibility baseline remains version `0.14.0` with backup format `schemaVersion: 2`.

Older private Esca installations, older private data, and older backup formats remain unsupported.

## Privacy

The app has no Internet permission and uses no telemetry, analytics, advertising, accounts, cloud synchronization, or automatic crash reporting. Application data remains stored locally on the device.

## Known issues

No confirmed public issues are currently known. The numeric extra badge in mixed rows remains intentional behavior.

## Release status

This version is a stable public release and is not marked as a prerelease.
