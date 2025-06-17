# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Smart AI Vision is a Progressive Web App (PWA) that performs real-time object and face detection using TensorFlow.js models directly in the browser. The application supports both camera-based analysis and image upload functionality.

## Architecture

### Core Components
- **Single-page HTML application** (`index.html`) - Contains all UI, styling, and JavaScript logic
- **Service Worker** (`sw.js`) - Provides PWA capabilities and basic caching
- **Web App Manifest** (`manifest.json`) - PWA metadata and installation configuration

### AI Models Integration
The application dynamically loads three TensorFlow.js models:
- **COCO-SSD**: Primary object detection (80+ object classes)
- **FaceMesh**: Face detection and landmark tracking  
- **MobileNet**: Fallback general image classification

Models are loaded asynchronously from CDN and cached by the browser. The app gracefully handles model loading failures.

### UI State Management
The application manages multiple UI states:
- **Loading state**: Models initializing, controls disabled
- **Camera active**: Video feed with capture/stop controls
- **Image analysis**: Static image with clear/upload controls
- **Results display**: Detection results with confidence scores

## Key Technical Patterns

- **Progressive Enhancement**: App works offline after initial load
- **Responsive Design**: Mobile-first approach with flexible layouts
- **Error Handling**: Graceful degradation when models fail to load
- **Privacy-First**: All processing happens client-side, no server uploads
- **Performance**: Selective model loading and result caching

## Development Commands

This is a static web application with no build process. Development workflow:

```bash
# Serve locally (any static server)
python -m http.server 8000
# or
npx serve .
# or  
php -S localhost:8000

# View at http://localhost:8000
```

## Testing

Test the application functionality:
- **Camera access**: Verify permission prompts work across browsers
- **Image upload**: Test various image formats (JPEG, PNG, WebP)
- **Model loading**: Check network throttling doesn't break initialization
- **Offline functionality**: Test service worker caching after first load
- **PWA installation**: Verify install prompts appear on supported browsers

## File Structure

- `index.html` - Complete application (HTML + CSS + JavaScript)
- `manifest.json` - PWA configuration
- `sw.js` - Service worker for caching and offline support
- `icons/` - PWA icons (192x192, 512x512)
- `CHANGELOG.md` - Version history

## Current Version

The app displays version 2.0.1 - Betwa in the UI footer. Update both the display version in `index.html:347` and the service worker cache name in `sw.js:1` when deploying changes.