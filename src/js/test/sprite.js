const canvas = document.getElementById('gameroom');
const ctx = canvas.getContext('2d');

ctx.imageSmoothingEnabled = false;

var image = new Image();
image.src = './src/sprites/stage1/0.png';
image.onload = draw;

function draw() {
    
    ctx.drawImage(image, 0, 0, 16, 16, 100, 100, 96, 96);
}
