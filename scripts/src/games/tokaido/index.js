'use strict';
import generate from 'generate';

import sprites from './sprites';
import backgrounds, {board} from './backgrounds';

import tokaido from './game';

generate(function*() {
  yield sprites;
  yield backgrounds;
  tokaido
    .on('start', () => {
      tokaido
        .add.actor()
        .add.background()
        .add.foreground();
    })
    .on('end', () => {
      tokaido.reset().play();
    })
    .on('resize', () => {
      tokaido.canvas.style.width = window.innerWidth + 'px';
    })
    .play();
});
