const canvas = document.getElementById('gameroom');
let room = new GameRoom(canvas);
let render = new GraphicRenderer(room);

let tamagotchi = new Tamagotchi(render);

function loop() {
    render.clear();
    tamagotchi.draw();
    console.log('frame');
}

setInterval(loop, 15);