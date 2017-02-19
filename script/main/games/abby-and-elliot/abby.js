import Actor from './actor';
import {Input} from '../../game-engine/const';
import {abby, elliot} from './sprites';

const speed = 3;
const imageSpeed = 8;
const followDistance = 120;

export default class Abby extends Actor {
  constructor() {
    super(abby);

    this.hsp = 0;
    this.vsp = 0;

    this.animationTimer = imageSpeed;
    this.walkFrame = 0;
    this.talking = false;

    this.position = [200, 320];
  }

  react(input) {
    switch(input) {
      case Input.Left:
        this.hsp = -speed * 2;
        break;
      case Input.Right:
        this.hsp = speed;
        break;
      case Input.Talk:
        this.talking = true;
        break;
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
      this.scale[0] = Math.sign(this.hsp) || this.scale[0];
    } else {
      this.subimage = 0;
      if(this.talking) {
        this.scale[0] = -1;
      } else {
        this.scale[0] = 1;
      }
    }
    this.hsp = this.vsp = 0;
  }

  draw(context) {
    elliot.draw(
      context,
      this.subimage,
      Math.sign(this.talking ? 1 : this.scale[0]) * (this.position[0] - followDistance) - elliot.dimensions[0] / 2,
      Math.sign(this.scale[1]) * this.position[1] - elliot.dimensions[1] / 2,
      elliot.dimensions[0],
      elliot.dimensions[1],
      this.talking ? 1 : this.scale[0],
      this.scale[1]
    );
    this.talking = false;
    super.draw(context);
  }
}
