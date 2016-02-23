
'use strict';
function Ranking() {}

Ranking.prototype = {
  preload: function() {

  },
  create: function() {
    var parent = document.querySelector('#flappy-yabi');
    var screenWidth = parent.clientWidth > window.innerWidth ? window.innerWidth : parent.clientWidth;
    var screenHeight = parent.clientHeight > window.innerHeight ? window.innerHeight : parent.clientHeight;
    // add the background sprite
    this.background = this.game.add.tileSprite(0,0, this.game.width, screenHeight, 'background');
    
    // add the ground sprite as a tile
    // and start scrolling in the negative x direction
    console.log(this.game.width);
    this.ground = this.game.add.tileSprite(0,screenHeight-100, screenWidth+47,112,'ground');
    this.ground.autoScroll(-200,0);

    /** STEP 1 **/
    // create a group to put the title assets in 
    // so they can be manipulated as a whole
    //this.titleGroup = this.game.add.group()
      
    /** STEP 2 **/
    // create the title sprite
    // and add it to the group
    //this.title = this.add.sprite(0,0,'title');
    //this.titleGroup.add(this.title);
    this.scoreText = this.game.add.bitmapText(this.game.width/2-30, 40, 'flappyfont', 'Ranking', 30);
    console.log(topUsers);
    var i = 1;
    for(var user in topUsers){
      var style = { font: "16px Courier" };

      var texto = i+'. '+topUsers[user].user_login.toUpperCase()+' '+topUsers[user].value;
      var text = this.game.add.text(this.game.width/2 - 60, i*22+80, texto);
      text.font = "Lucida Console";
      text.fontSize = 16;
      text.fill = "#ffffff";
      text.stroke = "#000000";
      text.strokeThickness = 2;
      i++;
    }
    /** STEP 3 **/
    // create the bird sprite 
    // and add it to the title group
    //this.bird = this.add.sprite(200,5,'bird');
    //this.titleGroup.add(this.bird);
    
    /** STEP 4 **/
    // add an animation to the bird
    // and begin the animation
    //this.bird.animations.add('flap');
    //this.bird.animations.play('flap', 12, true);
    
    /** STEP 5 **/
    // Set the originating location of the group
    //this.titleGroup.x = this.game.width/2-100;
    //this.titleGroup.y = 100;

    /** STEP 6 **/
    //  create an oscillating animation tween for the group
    //this.game.add.tween(this.titleGroup).to({y:115}, 350, Phaser.Easing.Linear.NONE, true, 0, 1000, true);

    // add our start button with a callback
    this.startButton = this.game.add.button(this.game.width/2, screenHeight-100, 'startButton', this.startClick, this);
    this.startButton.anchor.setTo(0.5,0.5);
  },
  startClick: function() {
    // start button click handler
    // start the 'play' state
    this.game.state.start('play');
  },
  getRanking: function() {
  },
};

module.exports = Ranking;
