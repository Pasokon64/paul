const canvas = document.getElementById('gameroom');
const ctx = canvas.getContext('2d');

ctx.imageSmoothingEnabled = false;

function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    console.log('frame');
}

setInterval(loop, 15);