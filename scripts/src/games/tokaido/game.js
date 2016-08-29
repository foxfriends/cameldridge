'use strict';
import Game from '../../game-engine';
import keyframes from './keyframes';

const canvas = document.querySelector('canvas.game#tokaido');
canvas.width = 1800;
canvas.height = 570;
canvas.style.width = window.innerWidth + 'px';

export default new Game(canvas, keyframes);
