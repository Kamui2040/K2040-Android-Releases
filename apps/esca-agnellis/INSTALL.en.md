
# Installation and Updates

[Deutsche Version](INSTALL.md)

## Requirements

- Android 8.0 / API 26 or newer
- Package ID: `com.k2040.escaagnellis`

## Obtain the APK

The official GitHub Release is currently the canonical download channel:
https://github.com/Kamui2040/K2040-Android-Releases/releases/tag/esca-agnellis-v0.16.0

File: `Esca-Agnellis-v0.16.0-vc40-release.apk`

Additional stores become official download channels only when explicitly listed on the K2040 Android Projects page.

## Verify the checksum

Expected SHA-256: `4906088F6EF2FF87874D064226C807D54CDFADD8E17B0EBE9DD2B638AC34AB49`

PowerShell: `(Get-FileHash -LiteralPath ".\Esca-Agnellis-v0.16.0-vc40-release.apk" -Algorithm SHA256).Hash`

Linux: `sha256sum ./Esca-Agnellis-v0.16.0-vc40-release.apk`

## Signature and updating

The official developer APK retains the permanent K2040 signing identity: `03CB5E9325BEA5AED36E8FFE1711C28300FC4421C4AED95E6740DA8A893821E6`.

Compatible developer-signed releases can update one another when the package ID, signing identity, and Android version rules permit it. If multiple approved stores later carry the same developer APK, Android can therefore accept an update from another compatible official store.

Independently signed variants, including normal F-Droid builds, use a different signing identity and cannot update directly over the developer APK.
