# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
mdbook serve    # Serve locally with live reload
mdbook build    # Build static site to ./docs/
```

After building, push to GitHub to publish (GitHub Pages serves from the `docs/` output directory).

## Architecture

This is an [mdBook](https://rust-lang.github.io/mdBook/) documentation site for USD8 (a DeFi stablecoin/coverage protocol).

- `src/` — Markdown source files; `SUMMARY.md` defines the navigation structure
- `docs/` — Built output (committed to repo for GitHub Pages)
- `book.toml` — mdBook config: Navy theme, MathJax enabled, output to `./docs/`
- `theme/` — Custom mdBook theme overrides (CSS, JS, Handlebars template)
- `analytics.js` — Injected into all pages via `book.toml`; loads Google Analytics

## Key notes

- The `docs/` build output is committed to the repo — always run `mdbook build` before committing content changes so the built files stay in sync with sources.
- `recover.js` is a standalone utility script (not part of the book); uses ethers.js to derive an Ethereum wallet from a BIP39 mnemonic.
- The `src/CNAME` file is copied into `docs/` at build time for the custom domain.
