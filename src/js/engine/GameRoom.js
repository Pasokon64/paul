class GameRoom {

    constructor(canvas) {
        this.canvas = canvas;
    }

    get context() {

        let context = this.canvas.getContext('2d');

        // Resize images without blur effect
        context.imageSmoothingEnabled = false;

        return context;
    }

    get width() {
        return this.canvas.width;
    }

    get height() {
        return this.canvas.height;
    }
}