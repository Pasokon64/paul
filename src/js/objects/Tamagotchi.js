class Tamagotchi {

    animations = {
        "1": {
            "idle": {
                'frameDuration': 1000,
                'frames': [
                    loadImage('./src/sprites/stage1/0.png'),
                    loadImage('./src/sprites/stage1/1.png')
                ]
            }
        }
    };

    constructor() {
        this.currentStage = 1;
        this.state = {
            'img': loadImage('./src/sprites/stage1/0.png'),
            'x': 0,
            'y': 0,
            'width': 96,
            'height': 96
        };

        this.setAnimation('idle');
    }

    setAnimation(animationName) {
        
        const availableAnimations = this.animations[this.currentStage];

        if (availableAnimations.hasOwnProperty(animationName)) {
            
            if (this.currentAnimation != undefined) {
                this.currentAnimation.stop();
            }
    
            const animation = new SpriteAnimation();
            const model = this.animations[this.currentStage][animationName];

            animation.frames = model.frames;
            animation.frameDuration = model.frameDuration;
            animation.subscribe(this.updateImg.bind(this));

            this.currentAnimation = animation;
            this.currentAnimation.start();

            console.log('Animarion changed successfully');
        }
        else {
            console.log('Failed to set animation: unavailable animation');
        }
    }

    updateImg(frame) {

        this.state.img = frame;
    }
}