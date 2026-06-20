# Installation and Updates

[Deutsche Version](INSTALL.md)

## Requirements

- Android 8.0 / API 26 or newer
- Package ID: `com.k2040.escaagnellis`

## Obtain the APK

Download `Esca-Agnellis-v0.14.0-vc37-release.apk` only from the official GitHub release `esca-agnellis-v0.14.0-beta.1` or from a store listing later designated explicitly as official.

Do not use mirrors, re-uploads, or APK files offered elsewhere.

## Verify the checksum

Expected SHA-256:

```text
FB6F7BA32415C96AB0B67E5441F56FFEBF8B3DB751C9DB681C42DEFF6B596B90
```

PowerShell:

```powershell
(Get-FileHash -LiteralPath ".\Esca-Agnellis-v0.14.0-vc37-release.apk" -Algorithm SHA256).Hash
```

The result must match the published checksum exactly.

## Installation

Open the downloaded APK on the Android device. Depending on the device and browser, Android may request one-time permission to install from that source.

Before confirming, check:

- application name: Esca Agnellis
- package ID when technically inspected: `com.k2040.escaagnellis`
- no unexpected permissions, especially no Internet permission

## Updating

A newer official Esca APK may update the existing installation when the package ID and signing identity remain unchanged and the versionCode is higher.

Create a current backup through `Datensicherung` before tests or major updates.

## Compatibility boundary

Version `0.14.0` is an independent public baseline. Older private Esca data, older private installations, and older backup formats are unsupported. Unsupported backups are rejected before any data is changed.
