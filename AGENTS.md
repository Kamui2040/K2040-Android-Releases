# K2040 Android Releases Repository Instructions

## Purpose

This public repository is the K2040 Android projects website and catalogue. It is not a private development area, archive, or general release-storage repository.

New app source and normal app releases belong in the app's public source repository unless an explicit exception is approved.

## Public-safe content

- Keep only source, site assets, tests, deterministic tooling, public documentation, metadata, and release records that have a current or plausible future public purpose.
- Do not store credentials, signing or recovery material, private test data, personal data, device IDs, private links or IDs, machine-specific paths, private backups, internal QA, maintainer-only records, or private workflow notes.
- Do not document private storage or internal documentation locations here.
- Keep required licence, attribution, and provenance records with public assets.

## Release records

- Keep historical public release material only when it still supports downloads, compatibility, verification, licensing, support, or another current or future public need.
- Remove duplicate or archive-only release notes, checksums, handoffs, and records when the authoritative public source already provides them and no live public dependency remains.
- Do not add new APKs here as the normal release workflow when the app has its own public source repository.
- Download links, version labels, checksums, package identity, and app identity must match the authoritative public source.
- Stop if the app, version, file, checksum, signer, source, or release notes do not match what is expected.
- Add website update records only for confirmed public changes that are already implemented or published. Do not present planned or merely announced changes as completed updates.
- The Main K2040 site consumes the Android update feed automatically. Keep Android update facts here and do not duplicate the same mutable records in the Main-site repository.

## Maintenance

- Routine website and repository maintenance may be performed directly through GitHub; no local checkout is required or canonical for this repository.
- If local tooling is actually needed, use Linux/Bazzite with Bash, POSIX tools, Python, or repository-native tooling. Do not add Windows paths or PowerShell-first maintainer procedures.
- Keep durable repository rules here. Add a separate public current-state file only when it has a continuing contributor-facing purpose.
- Keep prevention rules only when they address a real recurring failure, and keep them short and explicit.

## Public writing

- Use natural, simple language in website text, READMEs, install information, security/privacy pages, issue forms, release-facing notes, and contributor guidance.
- Include technical detail only when it helps installation, verification, security, support, accessibility, licensing, or troubleshooting.

## QA

Before accepting website or catalogue changes, verify as applicable:

- public links and download destinations;
- app and release identity;
- version labels and checksums;
- licence and asset provenance;
- localization and site behavior;
- that the change contains no private or machine-specific material;
- diff cleanliness and the final repository state.

Do not use GitHub Actions or other cloud CI for this repository unless explicitly authorized.

## Publication boundary

Routine website and repository maintenance is allowed. Creating or changing an official public app release, release artifact, release checksum, signing state, or store listing remains an explicit-approval action.
