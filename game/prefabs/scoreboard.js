'use strict';

var Scoreboard = function(game) {
  
  var gameover;
  
  Phaser.Group.call(this, game);
  gameover = this.create(this.game.width / 2, 100, 'gameover');
  gameover.anchor.setTo(0.5, 0.5);

  this.scoreboard = this.create(this.game.width / 2, 200, 'scoreboard');
  this.scoreboard.anchor.setTo(0.5, 0.5);
  
  this.scoreText = this.game.add.bitmapText(this.game.width/2+60, 180, 'flappyfont', '', 18);
  this.add(this.scoreText);

  this.rankText = this.game.add.bitmapText(this.game.width/2, 180, 'flappyfont', '', 18);
  this.add(this.scoreText);
  
  this.bestText = this.game.add.bitmapText(this.game.width/2+60, 230, 'flappyfont', '', 18);
  this.add(this.bestText);

  // add our start button with a callback
  this.startButton = this.game.add.button(this.game.width/2-60, 300, 'startButton', this.startClick, this);
  this.startButton.anchor.setTo(0.5,0.5);
  this.rankingButton = this.game.add.button(this.game.width/2+60, 300, 'rankingButton', this.rankingClick, this);
  this.rankingButton.anchor.setTo(0.5,0.5);

  this.add(this.startButton);
  this.add(this.rankingButton);

  this.y = this.game.height;
  this.x = 0;
  
};

Scoreboard.prototype = Object.create(Phaser.Group.prototype);
Scoreboard.prototype.constructor = Scoreboard;

Scoreboard.prototype.show = function(score) {
  var coin;
  this.scoreText.setText(score.toString());
  if(score>bestScore) {
    bestScore = score;
    this.saveScore();
  }

  this.bestText.setText(bestScore.toString());

  if(score >= 10 && score < 20)
  {
    coin = this.game.add.sprite(-65 , 7, 'medals', 1);
  } else if(score >= 20) {
    coin = this.game.add.sprite(-65 , 7, 'medals', 0);
  }

  this.game.add.tween(this).to({y: 0}, 1000, Phaser.Easing.Bounce.Out, true);

  if (coin) {
    
    coin.anchor.setTo(0.5, 0.5);
    this.scoreboard.addChild(coin);
    
     // Emitters have a center point and a width/height, which extends from their center point to the left/right and up/down
    var emitter = this.game.add.emitter(coin.x, coin.y, 400);
    this.scoreboard.addChild(emitter);
    emitter.width = coin.width;
    emitter.height = coin.height;


    //  This emitter will have a width of 800px, so a particle can emit from anywhere in the range emitter.x += emitter.width / 2
    // emitter.width = 800;

    emitter.makeParticles('particle');

    // emitter.minParticleSpeed.set(0, 300);
    // emitter.maxParticleSpeed.set(0, 600);

    emitter.setRotation(-100, 100);
    emitter.setXSpeed(0,0);
    emitter.setYSpeed(0,0);
    emitter.minParticleScale = 0.25;
    emitter.maxParticleScale = 0.5;
    emitter.setAll('body.allowGravity', false);

    emitter.start(false, 1000, 1000);
    
  }
};

Scoreboard.prototype.startClick = function() {
  this.game.state.start('play');
};

Scoreboard.prototype.rankingClick = function() {
  this.game.state.start('ranking');
};

Scoreboard.prototype.saveScore = function() {
  var url = '/backend/add_score';
  var xmlhttp=new XMLHttpRequest();
  xmlhttp.open("POST",url, true);
  xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  xmlhttp.send("value=" +bestScore );
  xmlhttp.onreadystatechange=function(){
    console.log(xmlhttp.responseText);
    if (xmlhttp.readyState==4 && xmlhttp.status==200){
    }
  };
};

Scoreboard.prototype.update = function() {
  // write your prefab's specific update code here
};

module.exports = Scoreboard;
