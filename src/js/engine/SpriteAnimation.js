class SpriteAnimation {

    constructor(render) {
        this.render = render;
        this.frames = [];
        this.playing = false;
        this.currentFrame = 0;
    }

    start() {

        this.playing = true;
        this.loop();
    }

    stop() {

        this.playing = false;
    }

    loop() {

        if(this.playing == true) {

            if (this.currentFrame < (this.frames.length - 1)) {
    
                this.currentFrame += 1;
            }
            else {
    
                this.currentFrame = 0;
            }
    
            setTimeout(this.loop.bind(this), 1000);
        }
    }

    drawAnimation() {

        this.render.drawImage(this.frames[this.currentFrame], 0, 0, 16, 16, 100, 100, 96, 96);
    }

    addFrame(frame) {

        let image = new Image();
        image.src = frame;
        this.frames.push(image);
    }
}