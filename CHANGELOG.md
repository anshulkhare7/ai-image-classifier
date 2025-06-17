# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html) (though we are at an early version).

## [0.0.2] - 2025-06-15

### Added

- **Progressive Web App (PWA) Features:**
  - Added `manifest.json` to define PWA properties (name, icons, start URL, display mode, theme colors).
  - Implemented `sw.js` (Service Worker) for basic offline caching of the main application page (`index.html`).
  - Modified `index.html` to link the manifest, register the service worker, and include meta tags for theme color and Apple PWA compatibility.
  - Added app icons (`icons/icon-192x192.png` and `icons/icon-512x512.png`).
  - These changes enable the "Add to Home Screen" functionality on supported browsers and provide a basic offline experience.
