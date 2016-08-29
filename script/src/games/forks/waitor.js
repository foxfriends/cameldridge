'use strict';
import Actor from './actor';
import {waitor, monster} from './sprites';
import {Special} from './keyframes';
import Monster from './monster';

const transformTime = 30;

export default class Waitor extends Actor {
  constructor(game) {
    super(waitor);
    this.position = [1000, 470];
    this.transforming = 0;
  }

  react(input) {
    if(input === Special.Transform) {
      this.transforming = transformTime;
    }
  }

  update() {
    if(this.transforming) {
      --this.transforming;
      if(this.transforming % 4 === 0) {
        if(this.sprite === monster) {
          this.sprite = waitor;
        } else {
          this.sprite = monster;
        }
      }
      if(this.transforming === 0) {
        this.game.actors.push(new Monster(this.position));
        this.destroy();
      }
    }
  }
}
