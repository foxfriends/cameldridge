'use strict';
import Actor from './actor';
import {coal as sprite} from './sprites';

const floorHeight = 630;

export default class Coal extends Actor {
  constructor(position) {
    super(sprite);
    this.position = position;
    this.hsp = Math.floor(Math.random() * 3 + 3);
    this.vsp = -4;
    this.deltaY = Math.floor(Math.random() * 10);
  }

  update() {
    this.position[0] += this.hsp;
    this.position[1] += this.vsp;
    this.vsp += 0.5;
    if(this.position[1] >= floorHeight - this.deltaY) {
      this.vsp = -this.vsp / 2;
      if(this.hsp) {
        this.hsp -= Math.min(this.hsp, 1);
      } else {
        this.vsp = 0;
      }
    }
  }
}
