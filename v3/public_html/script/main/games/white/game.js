'use strict';
import Game from '../../game-engine';
import keyframes from './keyframes';

const canvas = document.querySelector('#white');
canvas.width = 1800;
canvas.height = 480;
setTimeout(() => canvas.style.width = (window.IS_MOBILE ? screen.width : window.innerWidth) + 'px');

export default new Game(canvas, keyframes);
