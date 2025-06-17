# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.1-betwa] - 2025-06-17

### Changed

- **Model Update:**
  - Updated custom Teachable Machine model URL to `https://teachablemachine.withgoogle.com/models/-fCow7Sym/`
  - Improved model performance and accuracy
  - Updated service worker cache name to `smart-ai-vision-cache-betwa`

- **Version Updates:**
  - Updated application version display to "v2.0.1 - Betwa"
  - Updated all documentation to reflect v2.0.1 release

## [2.0.0-yamuna] - 2025-06-17

### Added

- **Custom Celebrity Recognition Model:**
  - Integrated custom Teachable Machine model for celebrity face recognition
  - Added support for 3 celebrity classes: Donald Trump, Tom Cruise, Bill Gates
  - Model trained on 30 images per class (90 total training images)
  - Direct model loading from `https://teachablemachine.withgoogle.com/models/KNWYtL46s/`
  - Added Teachable Machine library integration (`@teachablemachine/image@0.8`)

- **Enhanced Documentation:**
  - Complete README.md rewrite focusing on celebrity recognition capabilities
  - Added detailed model specifications and training data information
  - Documented Indian river naming convention for releases
  - Added comprehensive privacy and limitations sections
  - Enhanced development and usage guides

- **Release Management:**
  - Added `RELEASE_NAMES.md` with Indian river names for version naming
  - Implemented river-based release naming starting with Ganga and Yamuna

### Changed

- **Model Architecture:**
  - Replaced multiple AI models (COCO-SSD, FaceMesh, MobileNet) with single custom model
  - Simplified model loading process from 3 models to 1 custom model
  - Updated prediction logic to handle custom model classes and confidence scores
  - Changed UI text from "object & face detection" to "custom AI model"

- **Code Optimization:**
  - Removed 147 lines of obsolete helper functions (`cleanObjectName`, `getObjectIcon`, `cleanClassName`)
  - Streamlined model initialization and error handling
  - Fixed gallery image analysis bug in `analyzeImage()` function
  - Updated service worker cache name to `smart-ai-vision-cache-yamuna`

- **Version Updates:**
  - Updated application version display to "v2.0.0 - Yamuna"
  - Updated all documentation to reflect v2.0.0 release
  - Changed placeholder text to emphasize custom AI analysis

### Removed

- **Legacy AI Models:**
  - Removed COCO-SSD object detection model and related code
  - Removed FaceMesh face detection model and related code  
  - Removed MobileNet classification model and related code
  - Removed all associated helper functions and object/icon mappings
  - Removed complex multi-model prediction logic

### Technical Details

- **Dependencies:** Added `@teachablemachine/image@0.8` library
- **Model URL:** `https://teachablemachine.withgoogle.com/models/KNWYtL46s/`
- **Training Data:** 90 images total (30 per celebrity class)
- **Performance:** Significantly reduced bundle size and initialization time
- **Privacy:** Maintained client-side processing with no server uploads

## [1.0.0-ganga] - 2025-06-17

### Added

- **River Naming Convention:**
  - Introduced Indian river naming for releases starting with Ganga
  - Updated version display to include river names

### Changed

- **Version Management:**
  - Updated from v0.0.2 to v1.0.0 - Ganga
  - Updated service worker cache name to include release name

## [0.0.2] - 2025-06-15

### Added

- **Progressive Web App (PWA) Features:**
  - Added `manifest.json` to define PWA properties (name, icons, start URL, display mode, theme colors).
  - Implemented `sw.js` (Service Worker) for basic offline caching of the main application page (`index.html`).
  - Modified `index.html` to link the manifest, register the service worker, and include meta tags for theme color and Apple PWA compatibility.
  - Added app icons (`icons/icon-192x192.png` and `icons/icon-512x512.png`).
  - These changes enable the "Add to Home Screen" functionality on supported browsers and provide a basic offline experience.
