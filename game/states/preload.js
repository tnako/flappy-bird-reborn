
'use strict';
function Preload() {
  this.asset = null;
  this.ready = false;
}

Preload.prototype = {
  preload: function() {
    this.asset = this.add.sprite(this.width/2,this.height/2, 'preloader');
    this.asset.anchor.setTo(0.5, 0.5);

    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
    this.load.setPreloadSprite(this.asset);
    this.load.image('background', '/games/flappy/assets/background.png');
    this.load.image('ground', '/games/flappy/assets/ground.png');
    this.load.image('title', '/games/flappy/assets/title.png');
    this.load.spritesheet('bird', '/games/flappy/assets/yabi.png', 34,24,3);
    this.load.spritesheet('pipe', '/games/flappy/assets/pipes.png', 54,320,2);
    this.load.image('startButton', '/games/flappy/assets/start-button.png');
    this.load.image('rankingButton', '/games/flappy/assets/ranking-button.png');
    
    this.load.image('instructions', '/games/flappy/assets/instructions.png');
    this.load.image('getReady', '/games/flappy/assets/get-ready.png');
    
    this.load.image('scoreboard', '/games/flappy/assets/scoreboard.png');
    this.load.spritesheet('medals', '/games/flappy/assets/medals.png',44, 46, 2);
    this.load.image('gameover', '/games/flappy/assets/gameover.png');
    this.load.image('particle', '/games/flappy/assets/particle.png');

    this.load.audio('flap', '/games/flappy/assets/flap.wav');
    this.load.audio('pipeHit', '/games/flappy/assets/pipe-hit.wav');
    this.load.audio('groundHit', '/games/flappy/assets/ground-hit.wav');
    this.load.audio('score', '/games/flappy/assets/score.wav');
    this.load.audio('ouch', '/games/flappy/assets/ouch.wav');

    this.load.bitmapFont('flappyfont', '/games/flappy/assets/fonts/flappyfont/flappyfont.png', '/games/flappy/assets/fonts/flappyfont/flappyfont.fnt');
  },
  create: function() {
    this.asset.cropEnabled = false;
  },
  update: function() {
    if(!!this.ready) {
      this.game.state.start('menu');
    }
  },
  onLoadComplete: function() {
    this.ready = true;
  }
};

module.exports = Preload;
