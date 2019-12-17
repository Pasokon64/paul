class SpriteAnimation {

    constructor() {
        this.frames = [];
        this.frameDuration = 1000;
        this.playing = false;
        this.currentFrame = 0;
        this.observes = [];
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

            this.notifyAll(this.frames[this.currentFrame]);
            setTimeout(this.loop.bind(this), this.frameDuration);
        }
    }

    subscribe(observerFunction) {
        this.observes.push(observerFunction);
    }

    notifyAll(frame) {
        this.observes.forEach(observerFunction => {
            observerFunction(frame);
        });
    }
}