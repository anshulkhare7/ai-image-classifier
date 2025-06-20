# Smart AI Vision

Smart AI Vision is a Progressive Web App (PWA) that performs **image recognition** using a custom-trained AI model. The application can analyze images from a live camera feed or uploaded files.

## Live Demo

You can try out a live version of Smart AI Vision [here](https://anshulkhare7.github.io/ai-image-classifier/).

## Current AI Model

**Custom Model**

- **Platform**: Trained on [Teachable Machine by Google](https://teachablemachine.withgoogle.com/)
- **Model URL**: https://teachablemachine.withgoogle.com/models/-fCow7Sym/
- **Training Data**: 30 images per class (90 total images)
- **Classes**: 3 trained classes

## Features

- **Real-time Camera Analysis**: Use your device's camera to capture and analyze images instantly
- **Image Upload Support**: Upload photos from your gallery for analysis
- **Progressive Web App**:
  - Install directly from your browser
  - Works offline after initial load
  - Native app-like experience on mobile and desktop
- **Privacy-First**: All AI processing happens locally in your browser - no images uploaded to servers
- **Confidence Scores**: Each prediction includes a confidence percentage
- **Real-time Processing**: Powered by TensorFlow.js for fast, client-side inference
- **Responsive Design**: Optimized for all screen sizes and devices

## Technical Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **AI Framework**: TensorFlow.js
- **Model**: Custom Teachable Machine image classification model
- **PWA**: Service Worker for offline functionality and caching
- **Deployment**: GitHub Pages

## How to Use

### 1. Initial Loading

- Open the application and wait for the custom AI model to load
- Status message will show "Loading custom AI model... Please wait"
- Once loaded: "Custom AI model loaded! Ready to analyze images."
- Camera and Gallery buttons will become active

### 2. Camera Mode

- Click **Camera** button
- Grant camera permissions when prompted
- Point camera at a person's face
- Click **Analyze** to capture and analyze the image
- Results will show the detected class name with confidence score
- Use **Stop** to exit camera mode or **Clear** to reset

### 3. Gallery Upload

- Click **Gallery** button
- Select an image file (JPEG, PNG, WebP supported)
- Image will automatically be analyzed after loading
- Results display immediately with class identification
- Use **Clear** to reset and try another image

### 4. Understanding Results

Results display:

- **Class Name**: Detected class from trained classes
- **Confidence Score**: Percentage indicating model certainty
- **Alternative Predictions**: Other possibilities with lower confidence scores
- **Target Icon**: Indicates custom model prediction

## Development

### Local Development

```bash
# Clone the repository
git clone https://github.com/anshulkhare7/ai-image-classifier.git
cd ai-image-classifier

# Serve locally
Simply open the index.html file in browser.
```

### Project Structure

```
├── index.html          # Complete application (HTML + CSS + JavaScript)
├── manifest.json       # PWA configuration
├── sw.js              # Service worker for offline functionality
├── icons/             # PWA icons (192x192, 512x512)
├── CHANGELOG.md       # Version history
├── RELEASE_NAMES.md   # River-based release naming system
└── README.md          # This file
```

## Version History

- **v2.1.0 - Betwa** (Current) - Updated custom Teachable Machine recognition model
- **v2.0.0 - Yamuna** - Custom Teachable Machine celebrity recognition model
- **v1.0.0 - Ganga** - Initial PWA release with multiple AI models (COCO-SSD, FaceMesh, MobileNet)

## Release Naming

This project follows an **Indian river naming convention** for releases, starting with sacred rivers:

- v1.0.0 - **Ganga** (The most sacred river)
- v2.1.0 - **Betwa** (Sacred tributary)
- v2.0.0 - **Yamuna** (Sacred tributary of Ganga)
- Future: Saraswati, Narmada, Godavari, Kaveri...

## Model Limitations

**Current Model Constraints**:

- **Limited to 3 classes**: Only trained on a specific set of classes
- **Small dataset**: 30 images per class (90 total training images)
- **Lighting conditions**: Performance may vary with different lighting
- **Face angles**: Works best with frontal face views
- **Image quality**: Higher resolution images generally yield better results

## Future Enhancements

- Expand training dataset with more images
- Add more classes
- Improve model accuracy with data augmentation
- Add prediction confidence visualization
- Model versioning and easy switching between different trained models

## Privacy & Data

- **No data collection**: Images are processed entirely on your device
- **No server uploads**: All AI inference happens in your browser
- **No tracking**: No analytics or user behavior tracking
- **Open source**: Complete transparency in code and functionality

## Browser Compatibility

- Chrome 88+ (recommended)
- Firefox 85+
- Safari 14+
- Edge 88+
- Mobile browsers with camera support

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- **AI Development**: Built with assistance from [Claude Code](https://claude.ai/code) by Anthropic
- **Model Training**: [Teachable Machine by Google](https://teachablemachine.withgoogle.com/)
- **AI Framework**: [TensorFlow.js](https://www.tensorflow.org/js)
- **Icons**: Emoji icons for consistent cross-platform display

---

**Current Version**: v2.1.0 - Betwa | **Model**: Custome Image Recognition | **Classes**: 3 trained classes
