'use strict';
import generate from 'generate';

import sprites from './sprites';
import backgrounds, {train, rails} from './backgrounds';

import forks from './game';
import Grass from './grass';
import Dave from './dave';
import Waitor from './waitor';
import Wheel from './wheel';

generate(function*() {
  yield sprites;
  yield backgrounds;
  forks
    .on('start', () => {
      forks
        .add.actor(
            new Grass(),
            new Dave(),
            new Waitor(),
            new Wheel([224, 704]), new Wheel([1344, 704]), new Wheel([1814, 709]))
        .add.background(train, train.copy([1590, 5]))
        .add.foreground(rails, rails.copy([1590, 5]));
    })
    .on('end', () => {
      forks.reset().play();
    })
    .on('resize', () => {
      forks.canvas.style.width = window.innerWidth + 'px';
    })
    .play();
});
