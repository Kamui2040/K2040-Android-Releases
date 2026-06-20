# Installation und Aktualisierung

[English version](INSTALL.en.md)

## Voraussetzungen

- Android 8.0 / API 26 oder neuer
- Paket-ID: `com.k2040.escaagnellis`

## APK beziehen

Lade `Esca-Agnellis-v0.14.0-vc37-release.apk` ausschließlich aus dem offiziellen GitHub-Release `esca-agnellis-v0.14.0-beta.1` oder aus einem später ausdrücklich als offiziell benannten Store-Eintrag herunter.

Verwende keine Spiegel, Re-Uploads oder anderswo angebotene APK-Dateien.

## Prüfsumme kontrollieren

Erwartete SHA-256-Prüfsumme:

```text
FB6F7BA32415C96AB0B67E5441F56FFEBF8B3DB751C9DB681C42DEFF6B596B90
```

PowerShell:

```powershell
(Get-FileHash -LiteralPath ".\Esca-Agnellis-v0.14.0-vc37-release.apk" -Algorithm SHA256).Hash
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

Version `0.14.0` ist eine eigenständige öffentliche Basis. Ältere private Esca-Daten, ältere private Installationen und ältere Sicherungsformate werden nicht unterstützt. Importversuche mit nicht unterstützten Sicherungen werden vor Änderungen abgelehnt.
