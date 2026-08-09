# K2040 Android Releases Repository Instructions

## Repository role

This public repository is a distribution/support channel for explicitly approved K2040 Android release artifacts and public release documentation. It is not a private development workspace or a storage location for maintainer operations.

## Public-only boundary

- Everything committed or uploaded here must be intentionally public.
- Never place credentials, signing keys, private certificates, passwords, tokens, recovery data, private QA archives, raw device identifiers, authentic user data/backups, machine-specific paths, private storage links/IDs, internal assistant/tool policy, or maintainer-only workflow in this repository.
- Do not use this repository as temporary staging, assistant transport, scratch storage, or a private build archive.

## Release artifacts

- Publish only release artifacts explicitly approved for the applicable application/version/channel.
- Verify package/application identity, version/versionCode, file identity/checksum, and expected signing model before upload where applicable.
- Keep checksums and release notes synchronized with the exact published artifact.
- Never publish debug/private test builds as production releases unless the channel explicitly and clearly identifies them as developer/test artifacts.
- Do not publish R8 mapping/retrace files, private diagnostics, signing configuration, keystores, or authentic backups.

## Documentation

- Keep README/release notes public, concise, and user-facing.
- Source-build and contributor documentation belongs in the corresponding source repository rather than being duplicated here unless the distribution channel genuinely requires it.
- Preserve licence/attribution notices that must accompany distributed artifacts.

## Security and provenance

- Release files must come from a reviewed source/version boundary and have known provenance.
- Do not accept unexplained binaries or assets.
- Treat any mismatch in expected package, version, signer, checksum, source tag/commit, or release notes as a blocker until resolved.

## Publication control

Creating a release, uploading/replacing an artifact, changing public release notes, publishing checksums, or otherwise changing the public distribution state is an official publication action and remains maintainer-controlled.
