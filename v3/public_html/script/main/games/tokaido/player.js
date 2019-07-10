'use strict';
import Actor from './actor';
import {blue, purple} from './sprites';

const travelTime = 90;

export default class Player extends Actor {
  constructor(sprite, position) {
    super(sprite);
    this.position = position;
    this.previous = this.position;
    this.destination = null;
    this.travelTimer = 0;
  }

  react(input) {
    if(input === this.sprite) {
      switch(this.sprite) {
        case purple:
          this.destination = [166, 205];
          break;
        case blue:
          this.destination = [434, 210];
          break;
      }
    }
  }

  update() {
    this.z = this.y;
    if(this.destination !== null) {
      const amt = Math.pow(Math.sin(++this.travelTimer * Math.PI / 2 / travelTime), 2);
      const [dx, dy] = [this.destination[0] - this.previous[0], this.destination[1] - this.previous[1]];
      this.x = this.previous[0] + dx * amt;
      this.y = this.previous[1] + dy * amt;
      if(this.travelTimer >= travelTime) {
        this.travelTimer = 0;
        this.previous = this.position;
        this.destination = null;
      }
    }
  }

  draw(context) {
    context.drawImage(this.sprite.image, ...this.position.slice(0, 2), 50, 80);
  }
}
