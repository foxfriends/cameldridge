'use strict';
import Game from '../../game-engine';
import keyframes from './keyframes';

const canvas = document.querySelector('#forks');
canvas.width = 1800;
canvas.height = 800;
setTimeout(() =>
  canvas.style.width = (window.IS_MOBILE ? screen.width : window.innerWidth) + 'px'
, 0);

export default new Game(canvas, keyframes);
