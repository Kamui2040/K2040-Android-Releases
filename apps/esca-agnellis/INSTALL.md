# Installation und Aktualisierung

[English version](INSTALL.en.md)

## Voraussetzungen

Esca Agnellis benötigt Android 8.0 oder neuer.

## Download

Nutze einen der offiziellen Links auf der [Esca-Agnellis-Projektseite](https://kamui2040.github.io/K2040-Android-Releases/apps/esca-agnellis/).

Das aktuelle GitHub-Release findest du hier:
<https://github.com/Kamui2040/K2040-Android-Releases/releases/tag/esca-agnellis-v0.16.0>

GitHub, APKPure und Uptodown bieten die von K2040 veröffentlichte App an. F-Droid baut und signiert sein eigenes Paket aus dem öffentlichen Quellcode.

## Aktualisieren

Eine neuere von K2040 veröffentlichte APK kann normalerweise über eine ältere kompatible K2040-Version installiert werden, ohne die App-Daten zu entfernen.

F-Droid verwendet eine eigene Signatur. Android behandelt die F-Droid-Version deshalb anders als eine von K2040 veröffentlichte APK. Ein direkter Wechsel ist normalerweise nicht möglich. Erstelle vor dem Wechsel zwischen diesen Downloadquellen eine Sicherung.

Wenn du den optionalen Begleiter verwendest, sichere auch dessen Daten separat.

## Optionale Download-Prüfung

Wenn du prüfen möchtest, ob die GitHub-APK korrekt heruntergeladen wurde, vergleiche ihre SHA-256-Prüfsumme mit dem veröffentlichten Wert:

`4906088F6EF2FF87874D064226C807D54CDFADD8E17B0EBE9DD2B638AC34AB49`

PowerShell:
`(Get-FileHash -LiteralPath ".\Esca-Agnellis-v0.16.0-vc40-release.apk" -Algorithm SHA256).Hash`

Linux:
`sha256sum ./Esca-Agnellis-v0.16.0-vc40-release.apk`

Die Prüfsummendatei findest du ebenfalls im Ordner [checksums](checksums/Esca-Agnellis-v0.16.0-vc40-release.apk.sha256).
