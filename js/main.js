const config = {
  type: Phaser.AUTO,
  title: 'Star Guy',
  version: '1.0',
  width: 800,
  height: 600,
  backgroundColor: 0xffffff,
  scene:[titleScene,gameScene,gameScene2,gameSceneCredits],
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 350},
      debug:false
    }
  }
};

const game = new Phaser.Game(config);

let player;
let cursors;
let music;
let platforms;
let stars;
let score;
let scoreText;
