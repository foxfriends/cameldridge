import Actor from './actor';
import {flower_g, flower_r, flower_w} from './sprites';
import {Color} from './const';

export default class Flower extends Actor {
  constructor(position) {
    super(flower_w);
    this.position = position;
    this.position[2] = -1;
    this.origin[1] = this.sprite.dimensions[1];
  }

  update() {
    if(this.game.global.colors.has(Color.Green)) {
      this.sprite = flower_g;
    } else if(this.game.global.colors.has(Color.Red)) {
      this.sprite = flower_r;
    }
  }
}
