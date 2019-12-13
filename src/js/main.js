const canvas = document.getElementById('gameroom');
let room = new GameRoom(canvas);
let render = new GraphicRenderer(room);

function loop() {
    render.clear();
    console.log('frame');
}

setInterval(loop, 15);