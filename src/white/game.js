import Game from '../game-engine';
import keyframes from './keyframes';

const canvas = document.querySelector('#white');
canvas.width = 1800;
canvas.height = 480;

export default new Game(canvas, keyframes);
