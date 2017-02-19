'use strict';
import Symbolic from '../../util/symbolic';
import Actor from './actor';
import {door} from './sprites';
import Player from './player';

const [PLAYER] = Symbolic;

export default class Door extends Actor {
  constructor(position, color) {
    super(door);
    this.position = position;
    this.color = color;
    this.origin[1] = this.sprite.dimensions[1];
  }

  get player() {
    return this[PLAYER] || (this[PLAYER] = this.game.actors.find((a) => a instanceof Player));
  }

  update() {
    this.alpha = this.game.util.collision.between(this).and(this.player) ? this.alpha + 0.1 : this.alpha - 0.1;
    this.alpha = Math.max(0.5, Math.min(this.alpha, 1));
    if(this.game.global.colors.has(this.color)) {
      this.blend = this.color;
    }
  }

  draw(context) {
    if(this.blend === this.color) {
      super.draw(context);
    }
  }
}
