//TODO: separate canvas into a new class
class GraphicRenderer {

    constructor(room) {
        this.room = room;
    }

    /**
     * Clean the gameroom to draw next frame
     */
    clear() {

        let ctx = this.room.context;
        ctx.clearRect(0, 0, this.room.width, this.room.height);
    }
}