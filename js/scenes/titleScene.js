class titleScene extends Phaser.Scene {
    constructor (){
        super("titleScene");
    }

    preload() {
        this.load.image('background', 'assets/background.png');
        this.load.image('press-start', 'assets/press-start.png');
        this.load.audio('track01', 'audio/track01.ogg');

    }

    create() {
        this.add.image(400, 300, 'background').setScale();
        this.add.image(400, 270, 'press-start'); 
        this.input.on('pointerdown', () => this.scene.start('gameScene'));

        music = this.sound.add('track01', {volume: 0.2});
        music.play();

        this.add.text(100, 550, 'CLICK THE IMAGE!', {
            fontSize: '64px',
            fill: '#000',
        });

    }

    update() {

    }


}