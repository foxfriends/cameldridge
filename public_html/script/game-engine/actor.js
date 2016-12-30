'use strict';
import Symbolic from '../util/symbolic';
import Sprite from './sprite';

const [SPRITE, POSITION, GAME, ORIGIN, BLEND, SUBIMAGE] = Symbolic;

export let Actor;

export default (game) => Actor = class {
  constructor(sprite) {
    this[GAME] = game;
    this.sprite = sprite;
    this.position = [0, 0, 0];
    this.subimage = 0;
    this.blend = 0xFFFFFF;
    this.origin = [0, 0];
    this.alpha = 1;
    if(this.sprite) {
      this.origin = [this.sprite.dimensions[0] / 2, this.sprite.dimensions[1] / 2];
    }
    this.scale = [1, 1];
  }

  react(input) {}
  update() {}

  destroy() {
    const i = this.game.actors.indexOf(this);
    this.game.actors.splice(i, 1);
  }

  draw(context) {
    if(!this.sprite) { return; }
    context.globalAlpha = this.alpha;
    this.sprite.blend(this.blend).draw(
      context,
      this.subimage,
      Math.sign(this.scale[0]) * this.x - this.origin[0],
      Math.sign(this.scale[1]) * this.y - this.origin[1],
      this.sprite.dimensions[0],
      this.sprite.dimensions[1],
      ...this.scale
    );
    context.globalAlpha = 1;
  }

  get x() { return this[POSITION][0]; }
  set x(x) { this[POSITION][0] = x; }
  get y() { return this[POSITION][1]; }
  set y(y) { this[POSITION][1] = y; }
  get z() { return this[POSITION][2]; }
  set z(z) { this[POSITION][2] = z; }

  get origin() {
    return this[ORIGIN];
  }

  set origin(origin) {
    if(Array.isArray(origin)) {
      this[ORIGIN] = origin;
    } else {
      throw new TypeError('Origin must be an array');
    }
  }

  get position() {
    return this[POSITION];
  }

  set position(position) {
    if(Array.isArray(position)) {
      this[POSITION] = position;
      while(this[POSITION].length < 3) {
        this[POSITION].push(0);
      }
    } else {
      throw new TypeError('Position must be an array');
    }
  }

  get blend() {
    return this[BLEND];
  }

  set blend(color) {
    if(typeof color === 'number') {
      this[BLEND] = color;
    } else if(color[0] === '#') {
      this[BLEND] = parseInt(color.slice(1), 16)
    } else if(color.slice(0, 3).toLowerCase() === 'rgb') {
      this[BLEND] = color.slice(4, -1).split(',').map((x) => parseInt(x, 10)).reduce((p, x) => p << 2 + x, 0);
    }
    if(this.sprite) {
      this.sprite.addBlend(this.blend);
    }
  }

  get sprite() {
    return this[SPRITE];
  }

  set sprite(sprite) {
    if(sprite instanceof Sprite || sprite === null || sprite === undefined) {
      this[SPRITE] = sprite;
    } else {
      throw new TypeError('Cannot set sprite to something that is not a Sprite');
    }
  }

  get subimage() {
    return this[SUBIMAGE];
  }

  set subimage(index) {
    let limit = 1;
    if(this.sprite) {
      limit = this.sprite.frames.length;
    }
    this[SUBIMAGE] = index % limit;
  }

  get dimensions() {
    if(this.sprite) {
      return this.sprite.dimensions;
    } else {
      return [0, 0];
    }
  }

  get game() {
    return game;
  }
}
