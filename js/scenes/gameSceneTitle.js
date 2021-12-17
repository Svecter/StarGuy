class gameSceneTitle extends Phaser.Scene {
    constructor (){
        super("gameSceneTitle");
    }

    preload() {
        this.load.image('game', 'assets/game.png');

    }

    create() {

        this.cameras.main.fadeIn(2000, 0, 0, 0);

        this.input.on('pointerdown', function (pointer) {
            music = this.sound.add('click-sound', {volume: 0.5});
            music.play();
        },  this);

        this.add.image(400, 300, 'game');
        this.add.text(30, 570, 'Made by: Victor Sanchis', {
            fontSize: '16px',
            fill: '#000',
        });
        this.input.on('pointerdown', () => this.scene.start('gameScene'));

    }

    update() {

    }


}
