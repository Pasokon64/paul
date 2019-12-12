const canvas = document.getElementById('gameroom');
const render = new GraphicRenderer(canvas);

function loop() {
    render.clear();
    console.log('frame');
}

setInterval(loop, 15);