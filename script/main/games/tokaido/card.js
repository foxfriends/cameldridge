'use strict';
import Actor from './actor';
import {souvenir, spring} from './sprites';

const enterTime = 45;
const waitTime = 105;
const exitTime = 150;

export default class Card extends Actor {
  constructor() {
    super(souvenir);
    this.position = [this.game.width, -this.sprite.dimensions[1], 10000];
    this.travelTimer = null;
  }

  react(input) {
    if(input === spring || input === souvenir) {
      this.sprite = input;
      this.position = [this.game.width, -this.sprite.dimensions[1], 10000];
      this.travelTimer = 0;
    }
  }

  update() {
    if(this.travelTimer !== null) {
      let previous, destination, amt;
      ++this.travelTimer;
      if(this.travelTimer < enterTime) {
        previous = [this.game.width, -this.sprite.dimensions[1], 10000]
        destination = [this.game.width / 2, this.game.height / 2];
        amt = Math.pow(Math.sin(this.travelTimer * Math.PI / 2 / enterTime), 2);
      } else if(this.travelTimer > waitTime && this.travelTimer < exitTime) {
        previous = [this.game.width / 2, this.game.height / 2];
        destination = [this.game.width / 2, this.game.height + this.sprite.dimensions[1]];
        amt = Math.pow(Math.sin((this.travelTimer - waitTime) * Math.PI / 2 / (exitTime - waitTime)), 2);
      } else {
        if(this.travelTimer > exitTime) {
          this.travelTimer = null;
        }
        return;
      }
      const [dx, dy] = [destination[0] - previous[0], destination[1] - previous[1]];
      this.x = previous[0] + dx * amt;
      this.y = previous[1] + dy * amt;
    }
  }
}
