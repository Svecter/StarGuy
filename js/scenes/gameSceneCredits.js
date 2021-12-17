class gameSceneCredits extends Phaser.Scene {
    constructor (){
        super("gameSceneCredits");
    }

    preload() {
        this.load.image('thanks', 'assets/thanks.png');

    }

    create() {

        this.cameras.main.fadeIn(2000, 0, 0, 0);

        this.add.image(400, 270, 'thanks');

        this.add.text(30, 500, 'Press F5 for play again!', {
            fontSize: '40px',
            fill: '#000',
        });

    }

    update() {

    }


}