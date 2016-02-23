'use strict';

var BootState = require('./states/boot');
var MenuState = require('./states/menu');
var PlayState = require('./states/play');
var PreloadState = require('./states/preload');
var RankingState = require('./states/ranking');


var parent = document.querySelector('#flappy-yabi');
var screenWidth = parent.clientWidth > window.innerWidth ? window.innerWidth : parent.clientWidth;
var screenHeight = window.innerHeight;

var game = new Phaser.Game(screenWidth, screenHeight, Phaser.CANVAS, 'flappy-yabi');

// Game States
game.state.add('boot', BootState);
game.state.add('menu', MenuState);
game.state.add('play', PlayState);
game.state.add('preload', PreloadState);
game.state.add('ranking', RankingState);


game.state.start('boot');


  