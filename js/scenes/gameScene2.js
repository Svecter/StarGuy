class gameScene2 extends Phaser.Scene {
    constructor (){
        super("gameScene2");
    }

    preload () {

        this.load.image('ground', 'assets/ground.png');
        this.load.image('island', 'assets/island.png');
        this.load.image('star', 'assets/star.png');
        this.load.spritesheet('player', 'assets/player.png', {frameWidth: 32, frameHeight: 48});
        this.load.audio('earn', 'audio/earn.ogg');
         
    }
    
    create (){

        platforms = this.physics.add.staticGroup();
        platforms.create(400, 588, 'ground');
        platforms.create(600, 450, 'island');
        platforms.create(50, 250, 'island');
        platforms.create(650, 220, 'island');
        platforms.create(250, 520, 'island');
        platforms.create(250, 320, 'island');

        stars = this.physics.add.group({
            key: 'star',
            repeat: 11,
            setXY: { x: 12, y: 0, stepX: 70 }
        });

        stars.children.iterate(function (child) {

            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

        });
          
        player = this.physics.add.sprite(380, 500, 'player');
        player.setBounce(0);
        player.setCollideWorldBounds(true);
          
        this.anims.create({
            key: 'idle',
            frames: [{ key: 'player', frame: 4}],
            frameRate: 20
        });
        this.anims.create({
        key: 'left',
            frames: this.anims.generateFrameNumbers('player', { start: 0, end: 3}),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('player', { start: 5, end: 8}),
            frameRate: 10,
            repeat: -1
        });

        this.physics.add.collider(player, platforms);
        this.physics.add.collider(stars, platforms);

        score = 120;
        scoreText = this.add.text(16, 16, 'Stars: 120', {
            fontSize: '32px',
            fill: '#000',
         });

        this.physics.add.overlap(player, stars, this.collectStar, null, this);

        cursors = this.input.keyboard.createCursorKeys();

        this.earn = this.sound.add('earn', {volume: 1.5});

    }

    update()
    {
        if (cursors.left.isDown) {
            player.setVelocityX(-160);
            player.anims.play('left', true);
        } else if (cursors.right.isDown) {
            player.setVelocityX(160);
            player.anims.play('right',true);
        } else {
            player.setVelocityX(0);
            player.anims.play('idle');
        }
        if (cursors.up.isDown && player.body.touching.down) {
            player.setVelocityY(-330);
        }
        
    }

    collectStar (player, star)
    {
        star.disableBody(true, true);

        score += 10;
        scoreText.setText('Score: ' + score);
        this.earn.play();
        if (score >= 240)
            { this.scene.start('gameSceneCredits') }


    }

}