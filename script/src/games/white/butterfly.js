'use strict';
import Symbolic from 'symbolic';

import Actor from './actor';
import {butterfly} from './sprites';
import {Color} from './const';
import Player from './player';

const [PLAYER] = Symbolic;

const imageSpeed = 3;
const moveInterval = 4;
export default class Butterfly extends Actor {
  constructor(position) {
    super(butterfly);
    this.position = position;
    this.startPosition = [...this.position];
    this.color = [Color.Red, Color.Green, Color.White][this.game.util.random.integer.between(0).and(3)];
    this.imageTimer = imageSpeed;
    this.moveTimer = moveInterval;
  }

  get player() {
    return this[PLAYER] || (this[PLAYER] = this.game.actors.find((a) => a instanceof Player));
  }

  update() {
    if(!--this.imageTimer) {
      this.imageTimer = imageSpeed;
      ++this.subimage;
    }
    if(!--this.moveTimer) {
      this.moveTimer = moveInterval;
      let [xmin, xmax, ymin, ymax] = [-2, 2, -2, 2];
      if(this.game.util.distance.from(this).to(this.player) < 48) {
        const [dx, dy] = [
          this.x - this.player.position[0],
          this.y - this.player.position[1]
        ]
        if(Math.abs(dx) < Math.abs(dy)) {
          if(dx > 0) {
            xmin += 3;
            xmax += 3
          } else {
            xmin -= 3;
            xmax -= 3;
          }
      } else {
          if(dy > 0) {
            ymin += 3;
            ymax += 3;
          } else {
            ymin -= 3;
            ymax -= 3;
          }
        }
      } else if(this.game.util.distance.from(this).to(this.startPosition) >= 32) {
        const [dx, dy] = [
          this.x - this.startPosition[0],
          this.y - this.startPosition[1]
        ];
        if(Math.abs(dx) > 24) {
          if(dx > 0) {
            xmax -= 3;
          } else {
            xmin += 3;
          }
        }
        if(Math.abs(dy) > 24) {
          if(dy > 0) {
            ymax -= 3;
          } else {
            ymin += 3;
          }
        }
      }
      this.x += this.game.util.random.integer.between(xmin).and(xmax);
      this.y += this.game.util.random.integer.between(ymin).and(ymax);
    }
    if(this.game.global.colors.has(this.color)) {
      this.blend = this.color;
    }
  }
}
