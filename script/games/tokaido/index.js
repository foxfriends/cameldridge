'use strict';
import generate from 'generate';

import sprites, {green, blue, purple} from './sprites';
import backgrounds, {board} from './backgrounds';

import tokaido from './game';
import Player from './player';
import Card from './card';

generate(function*() {
  yield sprites;
  yield backgrounds;
  tokaido
    .on('start', () => {
      tokaido
        .add.actor(
          new Player(green, [79, 290]),
          new Player(blue, [79, 360]),
          new Player(purple, [79, 430]),
          new Card()
        )
        .add.background(board);
    })
    .on('end', () => {
      tokaido.reset().play();
    })
    .on('resize', () => {
      tokaido.canvas.style.width = window.innerWidth + 'px'
    })
    .on('scrollout', () => {
      tokaido.pause();
    })
    .on('scrollin', () => {
      tokaido.unpause();
    })
    .play();
});
