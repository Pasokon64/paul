//TODO: separate canvas into a new class
class GraphicRenderer {

    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');

        // Resize images without blur effect
        this.ctx.imageSmoothingEnabled = false;
    }

    /**
     * Clean the gameroom to draw next frame
     */
    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}