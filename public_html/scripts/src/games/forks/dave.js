import enumerate from 'enumerate';

import Actor from './actor';
import {Input} from '../../game-engine/const';
import {dave as sprite, fork} from './sprites';

const Subimage = enumerate('Idle', 'Walk1', 'Walk2', 'Attack', 'Defend');

const speed = 6;
const imageSpeed = 60 / 8;
const attackTime = 14;

export default class Dave extends Actor {
  constructor() {
    super(sprite);
    this.attacking = 0;
    this.defending = false;

    this.hsp = 0;
    this.vsp = 0;

    this.animationTimer = imageSpeed;
    this.walkFrame = 0;

    this.position = [0, 470];
  }

  react(input) {
    switch(input) {
      case Input.Right:
        this.hsp = speed;
        break;
      case Input.Attack:
        if(!this.attacking) {
          this.attacking = attackTime;
        }
        break;
      case Input.Defend:
        this.defending = true;
        this.attacking = 0;
        break;
    }
  }

  update() {
    if(this.attacking) {
      if(this.attacking > 2) {
        this.subimage = Subimage.Attack;
      } else {
        this.subimage = Subimage.Idle;
      }
      --this.attacking;
    } else if(this.defending) {
      this.subimage = Subimage.Defend;
    } else if(this.hsp || this.vsp) {
      this.position[0] += this.hsp;
      this.position[1] += this.vsp;
      this.subimage = 1 + this.walkFrame;
      if(!Math.floor(--this.animationTimer)) {
        this.walkFrame = 1 - this.walkFrame;
        this.animationTimer += imageSpeed;
      }
      this.scale[0] = Math.sign(this.hsp) || this.scale[0];
    } else {
      this.subimage = Subimage.Idle;
    }
    this.hsp = this.vsp = 0;
    this.defending = false;
  }

  draw(context) {
    if(this.attacking > 2) {
      if(this.scale[0] === 1) {
        const forkPos = [this.position[0] + 112, this.position[1] + 9];
        fork.drawRotated(context, 0, ...forkPos, 90);
      } else {
        const forkPos = [this.position[0] - 112, this.position[1] + 9];
        fork.drawRotated(context, 0, ...forkPos, 270);
      }
    }
    super.draw(context);
  }
}
