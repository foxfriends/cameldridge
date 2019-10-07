import Actor from './actor';
import {tree_g, tree_r, tree_w} from './sprites';
import {Color} from './const';

export default class Tree extends Actor {
  constructor(position) {
    super(tree_w);
    this.position = position;
    this.position[2] = -1;
    this.origin[1] = this.sprite.dimensions[1];
  }

  update() {
    if(this.game.global.colors.has(Color.Green)) {
      this.sprite = tree_g;
    } else if(this.game.global.colors.has(Color.Red)) {
      this.sprite = tree_r;
    }
  }
}
