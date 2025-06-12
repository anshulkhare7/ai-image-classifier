# Smart AI Vision

Smart AI Vision is a web-based application that uses artificial intelligence to perform object and face detection. It can analyze images from a live camera feed or from an uploaded file.

## Live Demo

You can try out a live version of Smart AI Vision here:
[https://anshulkhare7.github.io/ai-image-classifier/](https://anshulkhare7.github.io/ai-image-classifier/)

## Features

- **Real-time Object and Face Detection:** Utilizes your device's camera to detect objects and faces in real-time.
- **Image Upload Analysis:** Allows you to upload image files (JPEG, PNG, etc.) for object and face detection.
- **AI-Powered:** Leverages TensorFlow.js to run multiple pre-trained machine learning models directly in your browser:
    - **COCO-SSD:** For detecting a wide variety of common objects.
    - **FaceMesh:** For detailed face detection and landmark tracking.
    - **MobileNet:** As a fallback for general image classification.
- **Confidence Scores:** Displays the detected objects or faces along with a confidence score for each prediction.
- **User-Friendly Interface:** Simple and intuitive controls for starting the camera, uploading images, and viewing results.
- **Client-Side Processing:** All image processing and AI analysis happen directly in your web browser, ensuring privacy as your images are not uploaded to a server.

## How to Use

1.  **Initial State:**
    *   When you first open the application, it will begin loading the necessary AI models. During this time, the "Camera" and "Gallery" buttons will be disabled.
    *   A status message "Loading AI models... Please wait" will be displayed.
    *   Once the models are loaded, a success message "✅ All AI models loaded! Ready to analyze images." will appear, and the "Camera" and "Gallery" buttons will become active.

2.  **Using the Camera:**
    *   Click the "📸 Camera" button.
    *   Your browser will likely ask for permission to access your camera. Grant the permission.
    *   Your camera feed will appear in the preview area.
    *   The controls will change to "✨ Analyze" and "❌ Stop".
    *   Point your camera at the objects or faces you want to detect.
    *   Click the "✨ Analyze" button. This will capture a still photo from the camera feed.
    *   The application will then analyze this photo, and the results will be displayed below.
    *   After analysis, or if you want to stop the camera feed, click the "❌ Stop" button. This will deactivate the camera and show the initial "Camera" and "Gallery" buttons. You can also click "🗑️ Clear" to remove the current image and results.

3.  **Uploading an Image from Gallery:**
    *   Click the "🖼️ Gallery" button.
    *   Your device's file selector will open. Choose an image file (e.g., JPEG, PNG).
    *   The selected image will be displayed in the preview area.
    *   The application will automatically start analyzing the image.
    *   The results will be displayed below.
    *   After viewing the results, you can click "🗑️ Clear" to remove the image and results, or upload another image using the "🖼️ Gallery" button, or switch to the "📸 Camera".

4.  **Viewing Results:**
    *   Detected objects or faces will be shown in result cards under the "🔍 What I found:" section.
    *   Each card displays:
        *   An icon representing the object/face.
        *   The name of the detected object (e.g., "Cat", "Human Face", "Laptop").
        *   A confidence score (e.g., "92% confident").
        *   Sometimes, additional information like other detected objects might be listed.

5.  **Clearing Results/Resetting:**
    *   If an image is displayed (either from camera capture or gallery upload), the "🗑️ Clear" button will be visible.
    *   Clicking "🗑️ Clear" will remove the current image from the preview, clear any displayed analysis results, and reset the view to the initial placeholder.

## Version

Current version: **0.0.1**
