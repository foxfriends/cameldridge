'use strict';
import Symbolic from '../../util/symbolic';

import Actor from './actor';
import Player from './player';
import {bird, bird_flying} from './sprites';
import {Color} from './const';

const [PLAYER] = Symbolic;
const imageSpeed = 6;

export default class Bird extends Actor {
  constructor(position) {
    super(bird);
    this.position = position;
    this.origin = [this.sprite.dimensions[0] / 2, this.sprite.dimensions[1]];
    this.color = [Color.Red, Color.Green, Color.White][this.game.util.random.integer.from(0).to(3)];
    this.hsp = 0;
    this.vsp = 0;
  }

  get player() {
    return this[PLAYER] || (this[PLAYER] = this.game.actors.find((a) => a instanceof Player));
  }

  update() {
    if(this.sprite === bird) {
      if(this.game.util.random.integer.from(0).to(90) === 0) {
        this.imageTimer = imageSpeed;
      }
      if(this.game.util.distance.from(this).to(this.player) < 32) {
        this.vsp = -2;
        this.hsp = 1;
        this.sprite = bird_flying;
        this.imageTimer = imageSpeed;
      }
    } else {
      this.position[0] += this.hsp;
      this.position[1] += this.vsp;
      if(this.position[1] < 0) {
        this.destroy();
      }
    }
    if(this.imageTimer) {
      --this.imageTimer;
      if(!this.imageTimer) {
        ++this.subimage;
        if(this.sprite === bird && this.subimage === 0) {
          this.subimage = 0;
        } else {
          this.imageTimer = imageSpeed;
        }
      }
    }
    if(this.game.global.colors.has(this.color)) {
      this.blend = this.color;
    }
  }
}
