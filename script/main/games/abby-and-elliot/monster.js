import enumerate from '../../util/enumerate';

import Actor from './actor';
import {Input} from '../../game-engine/const';
import {Special} from './keyframes';
import {monster} from './sprites';

const speed = 3;
const imageSpeed = 8;

export default class Monster extends Actor {
  constructor(position) {
    super(monster);

    this.hsp = 0;
    this.vsp = 0;

    this.animationTimer = imageSpeed;
    this.walkFrame = 0;

    this.position = [this.game.width + this.sprite.dimensions[0] / 2, 320];
    this.scale = [-1, 1];
  }

  react(input) {
    if(input === Special.Monster) {
      this.hsp = -speed;
    }
  }

  update() {
    if(this.hsp || this.vsp) {
      this.position[0] += this.hsp;
      this.position[1] += this.vsp;
      if(!Math.floor(--this.animationTimer)) {
        this.subimage = (this.subimage + 1) % 4;
        this.animationTimer += imageSpeed;
      }
    }
  }
}
