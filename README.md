# Smart AI Vision 🤖

Smart AI Vision is a web-based application that uses multiple TensorFlow.js models to perform real-time face and object detection in images provided via webcam or gallery upload. It demonstrates a pipeline of models including specialized face detection, general object detection, and a fallback classifier, with a clear structure for integrating your own custom-trained TensorFlow.js model.

## Features ✨

*   **Camera Input:** Analyze images directly from your device's camera.
*   **Gallery Upload:** Select and analyze images from your device's storage.
*   **Multi-Model Pipeline:**
    *   **FaceMesh:** Accurate face detection.
    *   **COCO-SSD:** Detects 80+ common objects.
    *   **Custom Model Integration:** Scaffolded to easily add your own TensorFlow.js model.
    *   **MobileNet:** Fallback for general image classification.
*   **Clear Results:** Displays identified objects and faces with confidence scores and relevant icons.
*   **Client-Side Processing:** All AI model inference runs directly in your browser using TensorFlow.js.

## How It Works 🧠

The application processes images using the following priority:

1.  **Face Detection (FaceMesh):** Prioritizes finding human faces.
2.  **Object Detection (COCO-SSD):** Identifies a wide range of common objects.
3.  **Custom Model (Your Model Here):** Analyzes the image with your custom-trained TensorFlow.js model. The placeholder logic runs after COCO-SSD and before MobileNet. You can adjust this priority in `index.html`.
4.  **Fallback Classification (MobileNet):** If no significant results are found by the above models, MobileNet provides a general classification.

## Setup 🚀

1.  Clone this repository (or download `index.html`).
2.  Open `index.html` directly in a modern web browser that supports WebRTC (for camera access) and WebGL (for TensorFlow.js).
    *   For some browser security features or if you encounter issues with file paths (especially if you add local model files), running it through a local web server is recommended. You can use simple tools like Python's `http.server` or Node.js `http-server`.
      ```bash
      # Example using Python
      python -m http.server
      ```
      Then navigate to `http://localhost:8000` (or the port shown).

## Integrating a Custom TensorFlow.js Model 🧩

The `index.html` file is scaffolded to help you integrate your own image classification or object detection model.

1.  **Train and Convert Your Model:**
    *   Train your model using TensorFlow, PyTorch, or another framework.
    *   Convert it to TensorFlow.js format (`tfjs_graph_model` or `tfjs_layers_model`).
    *   Host your converted model files (e.g., `model.json` and binary shard files) at a publicly accessible URL.

2.  **Update `index.html`:**
    *   **Model URL:**
        *   Search for the line: `this.models.customModel = await tf.loadGraphModel('YOUR_CUSTOM_MODEL_URL/model.json');`
        *   Replace `'YOUR_CUSTOM_MODEL_URL/model.json'` with the actual URL to your hosted model's `model.json` file.
    *   **Input Preprocessing (in `analyzeImage` method):**
        *   Locate the section starting with `console.log("Running custom model...");`.
        *   The line `const imageTensor = tf.browser.fromPixels(imageElement);` creates a basic tensor.
        *   Your model will likely require specific input dimensions, normalization (e.g., pixel values between 0-1 or -1-1), and possibly channel ordering.
        *   You **must** add preprocessing steps like `tf.image.resizeBilinear`, `div`, `sub`, `expandDims` as needed, ideally within a `tf.tidy()` block to manage tensor memory.
            ```javascript
            // Example placeholder for preprocessing:
            // const imageTensor = tf.tidy(() => {
            //   let tensor = tf.browser.fromPixels(imageElement);
            //   tensor = tf.image.resizeBilinear(tensor, [224, 224]); // Resize to 224x224
            //   tensor = tensor.div(255.0); // Normalize to 0-1
            //   tensor = tensor.expandDims(0); // Add batch dimension
            //   return tensor;
            // });
            // const customModelPredictions = await this.models.customModel.predict(imageTensor);
            ```
    *   **Output Parsing (in `analyzeImage` method):**
        *   The current placeholder code for `customModelPredictions` assumes a simple JavaScript array of objects: `[{class: 'className', score: 0.9}, ...]</code>.
        *   Your model's `predict()` or `executeAsync()` method will return TensorFlow tensors. You need to convert these tensors to JavaScript values (e.g., using `.dataSync()`, `.arraySync()`, `.data()`, or `.array()`).
        *   Map these values to meaningful class names and confidence scores. You might need to apply softmax, find indices of max values, etc., depending on your model's output structure.
            ```javascript
            // Example placeholder for output parsing:
            // const outputTensor = customModelPredictions; // Assuming predict returns one tensor
            // const scores = await outputTensor.data(); // Or .array()
            // const classes = await anotherOutputTensor.data(); // If model has multiple outputs
            // Process these scores and classes to populate the 'results' array.
            ```
    *   **Helper Functions (Optional but Recommended):**
        *   **Icons:** If your custom model detects objects for which you want specific icons, add them to the `getObjectIcon(className)` method. The current placeholder uses "🐾".
        *   **Class Names:** If your custom model's class names need cleaning (e.g., removing underscores, capitalizing), update `cleanObjectName(className)` or add a new dedicated function (e.g., `cleanCustomClassName()`) and use it when pushing to the `results` array. The current placeholder prepends "Custom: ".

## Model Credits 🙏

This application utilizes the following pre-trained models from TensorFlow.js:

*   [COCO-SSD](https://github.com/tensorflow/tfjs-models/tree/master/coco-ssd) for object detection.
*   [Face Landmarks Detection (with MediaPipe FaceMesh)](https://github.com/tensorflow/tfjs-models/tree/master/face-landmarks-detection) for face detection.
*   [MobileNet](https://github.com/tensorflow/tfjs-models/tree/master/mobilenet) for general image classification.

Please ensure you comply with their respective licenses if you build upon this code.
