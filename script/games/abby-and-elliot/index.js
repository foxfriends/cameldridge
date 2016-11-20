'use strict';
import generate from 'generate';

import sprites from './sprites';
import backgrounds, {bush, grass, tree1, tree2, flower} from './backgrounds';

import abbyAndElliot from './game';

import Abby from './abby';
import Monster from './monster';

generate(function*() {
  yield sprites;
  yield backgrounds;

  const [grasses, trees, flowers] = [[], [], []];
  const front = [];

  for(let i = 0; i < abbyAndElliot.width; i += grass.dimensions[0]) {
    for(let j = -100; j < grass.dimensions[0]; j += abbyAndElliot.util.random.integer.from(60).to(80)) {
      const tree = [tree1, tree2][abbyAndElliot.util.random.integer.from(0).to(2)];
      const y = abbyAndElliot.util.random.integer.from(-220).to(20);
      trees.push(tree.copy([i + j, y, y - 10000]));
      if(abbyAndElliot.util.random.integer.from(0).to(2) === 0) {
        front.push(tree.copy([i + j, y + 620, y + 10000]))
      }
    }
    for(let j = 0; j < abbyAndElliot.height; j += grass.dimensions[1]) {
      grasses.push(grass.copy([i, j]));
      flowers.push(flower.copy([
        i + abbyAndElliot.util.random.integer.from(0).to(grass.dimensions[0]),
        j + abbyAndElliot.util.random.integer.from(0).to(grass.dimensions[1])
      ]));
    }
  }
  const bushx = abbyAndElliot.util.random.integer.from(200).to(abbyAndElliot.width - 200);
  abbyAndElliot
    .on('start', () => {
      abbyAndElliot
        .add.actor(new Abby(), new Monster())
        .add.background(...grasses, ...trees, ...flowers, bush.copy([bushx, 220, -1000]))
        .add.foreground(...front);
    })
    .on('end', () => {
      abbyAndElliot.reset().play();
    })
    .on('resize', () => {
      abbyAndElliot.canvas.style.width = window.innerWidth + 'px'
    })
    .on('scrollout', () => {
      abbyAndElliot.pause();
    })
    .on('scrollin', () => {
      abbyAndElliot.unpause();
    })
    .play();
});
