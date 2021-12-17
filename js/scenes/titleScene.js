class titleScene extends Phaser.Scene {
    constructor (){
        super("titleScene");
    }

    preload() {
        this.load.image('background', 'assets/background.png');
        this.load.image('press-start', 'assets/press-start.png');
        this.load.image('star-particle', 'assets/star-particle.png');
        this.load.audio('track01', 'audio/track01.ogg');
        this.load.audio('click-sound', 'audio/click-sound.ogg');

    }

    create() {

        this.cameras.main.fadeIn(2000, 0, 0, 0);

        this.input.on('pointerdown', function (pointer) {
            music = this.sound.add('click-sound', {volume: 0.5});
            music.play();
        },  this);

        musicMenu = this.sound.add('track01', {volume: 0.3});
        musicMenu.play();

        this.add.image(400, 300, 'background');

        const p = this.add.particles('star-particle');
        const e = p.createEmitter({
            x: 400,
            y: 490,
            angle: { min: 180, max: 360 },
            speed: 1000,
            gravityY: 800,
            lifespan: 4000,
            quantity: 6,
            scale: { start: 0.01, end: 0.05 },
            blendMode: 'ADD',
        });

        this.add.image(400, 270, 'press-start');
        this.input.on('pointerdown', () => this.scene.start('gameSceneTitle'));

        this.add.text(100, 550, 'CLICK THE IMAGE!', {
            fontSize: '64px',
            fill: '#000',
        });

    }

    update() {

    }


}
