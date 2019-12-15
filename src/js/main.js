const canvas = document.getElementById('gameroom');

let room = new GameRoom(canvas);
let render = new GraphicRenderer(room);
let tamagotchi = new Tamagotchi(render);

renderScreen();

function renderScreen() {
    render.clear();
    tamagotchi.draw();
    console.log('rendered');

    requestAnimationFrame(renderScreen);
}