
# Installation und Aktualisierung

[English version](INSTALL.en.md)

## Voraussetzungen

- Android 8.0 / API 26 oder neuer
- Paket-ID: `com.k2040.escaagnellis`

## APK beziehen

Derzeit ist das offizielle GitHub-Release der maßgebliche Downloadkanal:
https://github.com/Kamui2040/K2040-Android-Releases/releases/tag/esca-agnellis-v0.16.0

Datei: `Esca-Agnellis-v0.16.0-vc40-release.apk`

Weitere Stores gelten erst dann als offizieller Downloadkanal, wenn sie auf der K2040-Android-Projektseite ausdrücklich aufgeführt sind.

## Prüfsumme

Erwartete SHA-256-Prüfsumme: `4906088F6EF2FF87874D064226C807D54CDFADD8E17B0EBE9DD2B638AC34AB49`

PowerShell: `(Get-FileHash -LiteralPath ".\Esca-Agnellis-v0.16.0-vc40-release.apk" -Algorithm SHA256).Hash`

Linux: `sha256sum ./Esca-Agnellis-v0.16.0-vc40-release.apk`

## Signatur und Aktualisierung

Die offizielle Entwickler-APK verwendet weiterhin die dauerhafte K2040-Signatur: `03CB5E9325BEA5AED36E8FFE1711C28300FC4421C4AED95E6740DA8A893821E6`.

Kompatible Entwickler-signierte Versionen können direkt übereinander aktualisiert werden, wenn Paket-ID, Signaturidentität und Android-Versionsregeln dies erlauben. Wenn künftig mehrere freigegebene Stores dieselbe Entwickler-APK anbieten, kann Android deshalb auch ein Update aus einem anderen kompatiblen offiziellen Store akzeptieren.

Unabhängig signierte Varianten wie reguläre F-Droid-Builds besitzen eine andere Signaturidentität und können nicht direkt über die Entwickler-APK aktualisieren.
