import Actor from './actor';
import {Input} from '../game-engine/const';
import {player} from './sprites';
import Solid from './solid';
import Spark from './spark';
import Puff from './puff';

const accel = 1;
const gravity = 0.25;
const speed = 3;
const jump = -6;

export default class Player extends Actor {
  constructor() {
    super(player);

    this.haxis = 0;

    this.hsp = 0;
    this.vsp = 0;
    this.subimage = 2;

    this.position = [32, 400, 1];
    this.origin[1] = this.sprite.dimensions[1];
  }

  react(input) {
    switch(input) {
      case Input.Left:
        this.haxis -= 1;
        break;
      case Input.Right:
        this.haxis += 1;
        break;
      case Input.Up:
        this.vsp = jump;
        break;
    }
  }

  update() {
    if(this.haxis !== 0) {
      if(this.hsp === 0 && this.vsp === 0) {
        this.game.add.actor(
          new Puff([this.position[0] - this.haxis * 8, this.position[1]], -this.haxis)
        );
      }
      this.hsp += this.haxis * accel;
    }
    if(this.haxis !== Math.sign(this.hsp)) {
      this.hsp -= Math.sign(this.hsp) * Math.min(Math.abs(this.hsp), accel);
      if(Math.abs(this.hsp) < 1) { this.hsp = 0; }
    }
    this.hsp = Math.max(-speed, Math.min(this.hsp, speed));
    const wall = this.game.util.collision.between(this).at([this.x, this.y + this.vsp + 1]).and(Solid);
    if(!wall) {
      this.vsp = Math.max(Math.min(this.vsp + gravity, 10), -10);
    } else {
      this.position[1] = wall.position[1];
      if(this.vsp !== 0) {
        this.game.add.actor(
          new Puff([this.position[0] - 8, this.position[1]], -1),
          new Puff([this.position[0] + 8, this.position[1]], 1)
        );
        this.vsp = 0;
      }
    }
    if(this.hsp || this.vsp) {
      this.position[0] += this.hsp;
      this.position[1] += this.vsp;
    }
    const grey = Math.floor(Math.sqrt(Math.pow(this.vsp, 2) + Math.pow(this.hsp, 2)) * 2) * 10;
    this.blend = 0xFFFFFF - 0x010101 * grey;
    this.subimage = Math.floor(Math.abs(this.hsp / (speed / 2))) * Math.sign(this.hsp) + 2;
    const spark = this.game.util.collision.between(this).and(Spark);
    spark && spark.useColor();
    this.haxis = 0;
  }
}
