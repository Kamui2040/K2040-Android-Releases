# Privacy

## Summary

Esca Agnellis works locally on the Android device. The app requests no Internet permission and uses no accounts, advertising, telemetry, analytics, cloud synchronization, automatic crash reporting, or background data collection.

## Locally stored data

The app stores locally:

- selected daily portions and extra portions;
- display, language, and theme settings;
- optional companion state, when the companion has been enabled.

The companion is disabled by default. Its state and backup remain separate from core tracking and its backup.

## Backups and PDF reports

Backups, restores, and PDF reports use Android's document picker. The app writes only to a location selected by the user and reads only a file selected by the user. There is no automatic upload and no required synchronization.

## External links

Information or voluntary support links are passed to the selected browser only after an explicit user action. The app does not load these destinations in the background.

## Permissions

The published manifest must not contain the Internet permission. Features that open Android's document picker use the access rights provided by the system for the selected document.

## Deletion and switching signing variants

Local app data is managed by Android. Manually uninstalling the app or clearing its app data removes it. K2040 developer APKs and independently signed F-Droid APKs cannot be installed directly over one another. Before switching, export the supported primary backup and, when the companion is enabled, the separate companion backup.

No project tool may automatically uninstall the app or clear app data.

## No health-data transmission

The app transmits no nutrition or usage data. It is not a medical product and does not provide diagnosis, treatment, or individualized nutritional advice.
