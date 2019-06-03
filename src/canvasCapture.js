/* 
 * Include this library before CanvasCapture
 *
 * <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.2.0/jszip.min.js"></script>
 * <script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/1.3.8/FileSaver.min.js"></script>
*/

class CanvasCapture {

    constructor(canvas) {

        this.zip = new JSZip();
        this.containerAllImg = [];
        this.canvas = canvas;
        this.requestAnimationId = 0;
    }

    startCapture() {

        let start = () => {
            this.containerAllImg.push(this.canvas.toDataURL());
            this.requestAnimationId = window.requestAnimationFrame(start);
        }

        start();
    }

    stopCapture() {
        window.cancelAnimationFrame(this.requestAnimationId);
    }

    saveCapture() {

        let img = this.zip.folder("canvasCapture-images");

        for (let i = 0; i < this.containerAllImg.length; i++) {
            this.containerAllImg[i] = this.containerAllImg[i].replace(/^data:image\/(png|jpg);base64,/, "");
            img.file(i + ".png", this.containerAllImg[i], {base64: true});
        }

        this.zip.generateAsync({type: "blob"}).then(function(content) {
            saveAs(content, "canvasCapture-images.zip");
        });
    }

    capture(delay = 0, duration = 1000) {

        setTimeout(() => {
            this.startCapture();
        }, delay);

        setTimeout(() => {
            this.stopCapture();
        }, duration);

        setTimeout(() => {
            this.saveCapture();
        }, duration + 1000);
    }
}