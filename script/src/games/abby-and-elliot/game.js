'use strict';
import Game from '../../game-engine';
import keyframes from './keyframes';

const canvas = document.querySelector('canvas.game#abby-and-elliot');
canvas.width = 1800;
canvas.height = 640;
canvas.style.width = window.innerWidth + 'px';
export default new Game(canvas, keyframes);
