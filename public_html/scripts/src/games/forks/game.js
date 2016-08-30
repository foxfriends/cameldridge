'use strict';
import Game from '../../game-engine';
import keyframes from './keyframes';

const canvas = document.querySelector('#forks');
canvas.width = 1800;
canvas.height = 800;
canvas.style.width = window.innerWidth + 'px';

export default new Game(canvas, keyframes);
