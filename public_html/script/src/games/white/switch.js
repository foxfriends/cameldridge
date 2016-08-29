'use strict';
import Symbolic from 'symbolic';

import Solid from './solid';
import {switch_platform} from './sprites';
import {Color} from './const';
import {Special} from './keyframes';
import Player from './player';

const [PLAYER] = Symbolic;

const maxSparks = 16;
export default class Switch extends Solid {
  constructor(position, vdist) {
    super(switch_platform);
    this.position = position;
    this.origin[0] = 0;
    this.ystart = this.y;
    this.vdist = vdist;
    this.sparks = [];
  }

  get player() {
    return this[PLAYER] || (this[PLAYER] = this.game.actors.find((a) => a instanceof Player));
  }

  react(input) {
    if(input === Special.Elevator && this.game.util.collision.between(this).and(this.player)) {
      this.active = true;
    }
  }

  update() {
    if(this.active) {
      if(this.y > this.ystart - this.vdist) {
        this.y -= 2;
        this.player.y -= 2;
        this.sparks.unshift([this.game.util.random.integer.between(this.x).and(this.x + this.dimensions[0]), this.y + 16]);
      } else {
        this.sparks = [];
      }
      this.subimage = 1;
      this.active = false;
    } else {
      this.subimage = 0;
      if(this.y < this.ystart) {
        this.y += 2;
        this.sparks.unshift([this.game.util.random.integer.between(this.x).and(this.x + this.dimensions[0]), this.y]);
      } else {
        this.sparks = [];
      }
    }
    if(this.sparks.length > maxSparks) {
      this.sparks = this.sparks.slice(0, maxSparks);
    }
  }

  draw(context) {
    super.draw(context);
    if(this.game.global.colors.has(Color.Green) && this.subimage === 1) {
      context.fillStyle = '#008000';
    } else if(this.game.global.colors.has(Color.Red)) {
      context.fillStyle = '#FF0000';
    } else {
      context.fillStyle = '#FFFFFF';
    }
    context.beginPath();
    context.arc(this.x + 32, this.y, 2, 0, Math.PI * 2);
    context.fill();
    context.fillStyle = '#FFFFFF';
    for(let spark of this.sparks) {
      context.fillRect(...spark, 1, 1);
    }
  }
}
