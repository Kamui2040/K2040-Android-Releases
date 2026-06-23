# Changelog

[Deutsche Version](CHANGELOG.md)

## 0.15.0

First stable public release.

- app-language selection for German, English, Spanish, French, and Portuguese (Portugal);
- German remains the fallback language;
- locally stored language choice outside `schemaVersion: 2` backups;
- redesigned Settings with compact Language and Theme selectors;
- themes: System default, Standard Light, Standard Dark, Cozy Pastel Light, and Cozy Pastel Dark;
- corrected wrapping of long translations and portion descriptions on narrow screens;
- existing app data and settings are preserved when updating from compatible public releases;
- unchanged offline and privacy characteristics.

## 0.14.1 Beta 2

Small maintenance update.

- updated the Ko-fi support link to the new K2040 address;
- increased the app version to `0.14.1` with versionCode `38`;
- updated the in-app changelog for the maintenance release.

## 0.14.0 Beta 1

First planned public beta release.

- independent public compatibility baseline;
- 22 default blocks across eight logical groups;
- combined fruit and vegetable group;
- independent subtype extras in mixed rows;
- intentional numeric badge on the last visible tile for the corresponding subtype;
- exact date navigation between overview and today;
- revised portion reference using hand and household measures;
- local backup contract `schemaVersion: 2`;
- no support for older private Esca data or older backup formats;
- no Internet permission, telemetry, advertising, accounts, or cloud synchronization;
- release hardening with R8 and resource shrinking.
