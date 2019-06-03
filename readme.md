# CanvasCapture 🎥
CanvasCapture is a Js library for create a video from animation canvas.

## Require
This library use jszip and FileSaver. Be careful to include them before !

```javascript
<script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.2.0/jszip.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/1.3.8/FileSaver.min.js"></script>
```

## Installation
```bash
git clone git@github.com:nicolasmht/canvascapture.git
cd canvascapture
```

## Usage
Instantiate the library width the id of canvas

```javascript
let canvasCapture = new CanvasCapture(canvas);
```

Start the capture. 
The first parameter is the delay before launching the capture. 
The second parameter is the duration.

```javascript
canvasCapture.capture(delay, duration);
```

