'use strict';
import enumerate from 'enumerate';
import Actor from './actor';
import Dave from './dave';
import {monster as sprite} from './sprites';
import {Special} from './keyframes';
import {Input} from '../../game-engine/const';
import Coal from './coal';

const speed = 2;
const imageSpeed = 60 / 8;
const knockAmount = 10;

const Subimage = enumerate('Walk1', 'Walk2', 'Attack');

export default class Monster extends Actor {
  constructor(position) {
    super(sprite);
    this.position = position;

    this.animationTimer = imageSpeed;
    this.walkFrame = 0;
    this.knock = 0;
    this.attacking = 0;
  }

  react(input) {
    switch(input) {
      case Special.Attack:
        this.attacking = 60;
        break;
      case Special.Die:
        for(let i = 0; i < 5; ++i) {
          this.game.actors.push(new Coal([this.position[0], this.position[1] + 100]));
        }
        this.destroy();
        break;
      case Input.Attack:
        if(!this.knock) {
          this.knock = 10;
        }
        break;
    }
  }

  update() {
    const dir = -Math.sign(Math.abs(this.game.util.direction.from(this).to(Dave)) - Math.PI / 2);
    if(this.knock) {
      this.position[0] -= dir * this.knock;
      --this.knock;
    } else if(this.attacking) {
      this.subimage = Subimage.Attack;
      --this.attacking;
    } else {
      if(!Math.floor(--this.animationTimer)) {
        this.walkFrame = 1 - this.walkFrame;
        this.animationTimer += imageSpeed;
      }
      this.subimage = this.walkFrame;
      if(dir) {
        this.scale[0] = -dir;
      }
      this.position[0] += speed * dir;
    }
  }
}
