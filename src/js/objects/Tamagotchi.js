class Tamagotchi {

    constructor(render) {
        this.render = render;

        this.animation = new SpriteAnimation(this.render);
        this.animation.addFrame('./src/sprites/stage1/0.png');
        this.animation.addFrame('./src/sprites/stage1/1.png');
        this.animation.start();
    }

    draw() {
        this.animation.drawAnimation();
    }
}