const canvas = document.getElementById('gameroom');

let room = new GameRoom(canvas);
let render = new GraphicRenderer(room);
let tamagotchi = new Tamagotchi(render);

render.addObject(tamagotchi);

renderScreen();

function renderScreen() {
    render.clear();
    render.renderScreen();
    console.log('rendered');

    requestAnimationFrame(renderScreen);
}

function loadImage(source) {
    let image = new Image();
    image.src = source;
    
    return image;
}