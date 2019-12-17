class GraphicRenderer {

    constructor(room) {
        this.room = room;
        this.objects = [];
    }

    renderScreen() {

        this.objects.forEach(object => {
            
            const state = object.state;
            this.drawImage(state.img, state.x, state.y, state.width, state.height);
        });
    }

    addObject(object) {

        this.objects.push(object);
    }

    clear() {

        let ctx = this.room.context;
        ctx.clearRect(0, 0, this.room.width, this.room.height);
    }

    drawImage(image, dx, dy, dw, dh) {

        let ctx = this.room.context;
        ctx.drawImage(image, dx, dy, dw, dh);
    }
}