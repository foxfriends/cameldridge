'use strict';
import Actor from './actor';
import {grass as sprite} from './sprites';

export default class Grass extends Actor {
  constructor() {
    super(sprite);
    this.position = [sprite.dimensions[0], 0, -1000001];
  }

  update() {
    this.position[0] -= 5;
    if(this.position[0] <= 0) {
      this.position[0] += sprite.dimensions[0];
    }
  }

  draw(context) {
    sprite.draw(context, 0, this.position[0], this.position[1], ...sprite.dimensions);
    sprite.draw(context, 0, this.position[0] - sprite.dimensions[0], this.position[1], ...sprite.dimensions);
    sprite.draw(context, 0, this.position[0] + sprite.dimensions[0], this.position[1], ...sprite.dimensions);
  }
}
