# Installation und Aktualisierung

[English version](INSTALL.en.md)

## Voraussetzungen

- Android 8.0 / API 26 oder neuer
- Paket-ID: `com.k2040.escaagnellis`

## APK beziehen

Lade `Esca-Agnellis-v0.15.0-vc39-release.apk` ausschließlich aus dem offiziellen GitHub-Release `esca-agnellis-v0.15.0` oder aus einem ausdrücklich als offiziell benannten Store-Eintrag herunter.

Verwende keine Spiegel, Re-Uploads oder anderswo angebotene APK-Dateien.

## Prüfsumme kontrollieren

Erwartete SHA-256-Prüfsumme:

```text
12A9E0F93F581639A4DB43097B23A071831CEA62F42F4A614F51CE05AAFC1E6A
```

PowerShell:

```powershell
(Get-FileHash -LiteralPath ".\Esca-Agnellis-v0.15.0-vc39-release.apk" -Algorithm SHA256).Hash
```

Das Ergebnis muss exakt mit der veröffentlichten Prüfsumme übereinstimmen.

## Installation

Öffne die heruntergeladene APK auf dem Android-Gerät. Android kann je nach Gerät und Browser eine einmalige Freigabe für Installationen aus dieser Quelle verlangen.

Prüfe vor der Bestätigung:

- App-Name: Esca Agnellis
- Paket-ID bei einer technischen Prüfung: `com.k2040.escaagnellis`
- keine unerwarteten Berechtigungen, insbesondere keine Internetberechtigung

## Aktualisierung

Eine offizielle neuere Esca-APK kann über die bestehende Installation installiert werden, wenn Paket-ID und Signaturidentität unverändert sind und der versionCode höher ist.

Erstelle vor Tests oder größeren Aktualisierungen eine aktuelle Sicherung über `Datensicherung`.

## Kompatibilitätsgrenze

Version `0.14.0` bleibt die eigenständige öffentliche Kompatibilitätsbasis. Aktualisierungen auf `0.15.0` aus kompatiblen öffentlichen Versionen bewahren vorhandene App-Daten und Einstellungen. Ältere private Esca-Daten, ältere private Installationen und ältere Sicherungsformate werden nicht unterstützt. Importversuche mit nicht unterstützten Sicherungen werden vor Änderungen abgelehnt.
