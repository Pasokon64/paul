img_tamagochi.src = 'src/sprites/stage1/0.png';

frame();

setInterval(() => {
    frame();
}, 1000);

function frame() {
    img_tamagochi.src = 'src/sprites/stage1/0.png';

    setTimeout(() => {
        img_tamagochi.src = 'src/sprites/stage1/1.png';
    }, 500);
}





