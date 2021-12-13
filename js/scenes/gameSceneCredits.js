class gameSceneCredits extends Phaser.Scene {
    constructor (){
        super("gameSceneCredits");
    }

    preload() {

    }

    create() {
        this.add.text(400, 300, 'THANKS FOR PLAY! ;)', {
            fontSize: '64px',
            fill: '#000',
        });

    }

    update() {

    }


}