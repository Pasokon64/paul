class Tamagotchi {

    animations = {
        "1": {
            "idle": [
                './src/sprites/stage1/0.png',
                './src/sprites/stage1/1.png'
            ]
        },
        "2": {
            "idle": [
                './src/sprites/stage2/0.png',
                './src/sprites/stage2/1.png'
            ]
        },
        "3": {
            "idle": [
                './src/sprites/stage3/0.png',
                './src/sprites/stage3/1.png'
            ]
        }
    };

    constructor(render) {
        this.render = render;
        this.currentStage = 1;

        this.setAnimation();
    }

    draw() {
        this.currentAnimation.drawAnimation();
    }

    setAnimation(animation = 'idle') {
        
        const availableAnimations = this.animations[this.currentStage];

        if (availableAnimations.hasOwnProperty(animation)) {
            
            if (this.currentAnimation != undefined) {
                this.currentAnimation.stop();
            }
    
            const newAnimation = new SpriteAnimation(this.render);
            const animationFrames = this.animations[this.currentStage][animation];
    
            for(const frame in animationFrames) {
                newAnimation.addFrame(animationFrames[frame]);
            }
    
            this.currentAnimation = newAnimation;
            this.currentAnimation.start();

            console.log('Animarion changed successfully');
        }
        else {
            console.log('Failed to set animation: unavailable animation');
        }
    }

    setStage(stage) {
        this.currentStage = stage;
        this.setAnimation();
    }
}