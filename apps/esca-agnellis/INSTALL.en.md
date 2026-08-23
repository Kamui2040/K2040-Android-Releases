# Installation and Updates

[Deutsche Version](INSTALL.md)

## Requirements

Esca Agnellis needs Android 8.0 or newer.

## Download

Use one of the official links on the [Esca Agnellis project page](https://kamui2040.github.io/K2040-Android-Releases/apps/esca-agnellis/).

The current GitHub release is:
<https://github.com/Kamui2040/K2040-Android-Releases/releases/tag/esca-agnellis-v0.16.0>

GitHub, APKPure, and Uptodown provide the K2040-published app. F-Droid builds and signs its own package from the public source.

## Updating

A newer K2040-published APK can normally update an older compatible K2040-published APK without removing your app data.

F-Droid uses its own signing key. Because Android treats that as a different package signature, you cannot normally install the F-Droid build directly over a K2040-published APK, or the other way around. Create a backup before switching between those download sources.

If you use the optional companion, create its separate backup as well.

## Optional download verification

If you want to confirm that the GitHub APK was downloaded correctly, compare its SHA-256 checksum with the published value:

`4906088F6EF2FF87874D064226C807D54CDFADD8E17B0EBE9DD2B638AC34AB49`

PowerShell:
`(Get-FileHash -LiteralPath ".\Esca-Agnellis-v0.16.0-vc40-release.apk" -Algorithm SHA256).Hash`

Linux:
`sha256sum ./Esca-Agnellis-v0.16.0-vc40-release.apk`

The checksum file is also available in [checksums](checksums/Esca-Agnellis-v0.16.0-vc40-release.apk.sha256).
