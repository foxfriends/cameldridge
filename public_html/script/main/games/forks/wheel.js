'use strict';
import Actor from './actor';
import {wheel as sprite} from './sprites';

export default class Wheel extends Actor {
  constructor(position) {
    super(sprite);
    this.position = [...position, 500];
    this.angle = 0;
  }

  update() {
    this.angle += 360 / 120;
  }

  draw(context) {
    sprite.drawRotated(context, 0, ...this.position.slice(0, 2), this.angle);
  }
}
