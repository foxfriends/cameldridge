'use strict';
import generate from 'generate';

import sprites from './sprites';
import {Color} from './const';
import white from './game';

import Player from './player';
import Wall from './wall';
import Spark from './spark';
import Bird from './bird';
import Butterfly from './butterfly';
import Door from './door';
import Flower from './flower';
import Tree from './tree';
import Switch from './switch';

generate(function*() {
  yield sprites;
  white
    .on('start', () => {
      white.canvas.style.backgroundColor = '#ffffff';
      let wallPos = 0;
      white
        .add.actor(
          new Player(),
          new Wall([wallPos, 400], [256, white.height - 400]),
          new Wall([wallPos += 256, 340], [128, white.height - 340]),
          new Wall([wallPos += 128, 400], [448, white.height - 400]),
          new Wall([wallPos += 448, 416], [64, white.height - 416], false),
          new Switch([wallPos, 400], 200),
          new Wall([wallPos += 64, 200], [128, white.height - 200]),
          new Wall([wallPos += 128, 400], [Math.ceil((white.width - wallPos) / 16) * 16, white.height - 400]),
          new Spark([300, 320], Color.Red),
          new Spark([680, 380], Color.Green),
          new Spark([1200, 380], Color.White),
          new Door([1400, 400], Color.Green),
          new Tree([276, 340]), new Tree([660, 400]), new Tree([1500, 400]),
          new Flower([296, 340]),
          new Flower([988, 200]),
          new Flower([white.util.random.integer.from(20).to(230), 400]),
          new Flower([white.util.random.integer.from(400).to(700), 400]),
          new Flower([white.util.random.integer.from(400).to(700), 400]),
          new Flower([white.util.random.integer.from(400).to(700), 400]),
          new Flower([white.util.random.integer.from(1100).to(1600), 400]),
          new Flower([white.util.random.integer.from(1100).to(1600), 400]),
          new Flower([white.util.random.integer.from(1100).to(1600), 400]),
          new Bird([white.util.random.integer.from(400).to(700), 400]),
          new Bird([white.util.random.integer.from(400).to(700), 400]),
          new Bird([white.util.random.integer.from(1100).to(1600), 400]),
          new Butterfly([white.util.random.integer.from(400).to(700), 400]),
          new Butterfly([white.util.random.integer.from(400).to(700), 400]),
          new Butterfly([white.util.random.integer.from(400).to(700), 400]),
          new Butterfly([white.util.random.integer.from(1100).to(1600), 400]),
          new Butterfly([white.util.random.integer.from(1100).to(1600), 400]),
          new Butterfly([white.util.random.integer.from(1100).to(1600), 400])
        )
        .global.colors = new Set([Color.White]);
    })
    .on('end', () => {
      white.reset().play();
    })
    .on('resize', () => {
      white.canvas.style.width = window.innerWidth + 'px'
    })
    .play();
});
