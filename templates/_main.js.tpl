'use strict';

<% _.forEach(gameStates, function(gameState) { %>var <%= gameState.stateName %> = require('./states/<%= gameState.shortName %>');
<% }); %>

var parent = document.querySelector('#flappy-yabi');
var screenWidth = parent.clientWidth > window.innerWidth ? window.innerWidth : parent.clientWidth;
var screenHeight = window.innerHeight;

var game = new Phaser.Game(screenWidth, screenHeight, Phaser.CANVAS, 'flappy-yabi');

// Game States
<% _.forEach(gameStates, function(gameState) {  %>game.state.add('<%= gameState.shortName %>', <%= gameState.stateName %>);
<% }); %>

game.state.start('boot');


  