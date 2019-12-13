class Tamagotchi {

    constructor(render) {
        this.render = render;
        this.image = new Image();
        this.image.src = './src/sprites/stage1/0.png';
    }

    draw() {
        this.render.drawImage(this.image, 0, 0, 16, 16, 100, 100, 96, 96);
    }
}