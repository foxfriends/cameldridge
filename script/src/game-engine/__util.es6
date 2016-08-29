'use strict';
import Symbolic from 'symbolic';

const [
  GAME, EXECUTE,
  METHOD, TARGET, FLAGS,
  DISTANCE, DIRECTION, RANDOM, COLLISION,
  NEAREST, AT,
  TO_POSITION
] = Symbolic;

export default class Util extends Function {
  constructor(game) {
    super('...args', `
      return this.execute(...args);
    `);
    this[GAME] = game;
    this[METHOD] = '';
    this[TARGET] = null;
    this[FLAGS] = new Set();
  }

  get to() {
    return this;
  }
  get and() {
    return this;
  }

  get distance() {
    this[METHOD] = DISTANCE;
    return this;
  }

  get direction() {
    this[METHOD] = DIRECTION;
    return this;
  }

  get random() {
    this[METHOD] = RANDOM;
    return this;
  }

  get collision() {
    this[METHOD] = COLLISION;
    return this;
  }

  get integer() {
    this[FLAGS].add('integer');
    return this;
  }

  at(pos) {
    this[FLAGS].add('at');
    this[AT] = this[TO_POSITION](pos);
    return this;
  }

  between(what) {
    this[TARGET] = what;
    return this;
  }

  from(what) {
    this[TARGET] = what;
    return this;
  }

  execute(...args) {
    return this[this[METHOD]](...args);
  }

  [DISTANCE](inst) {
    this[TARGET] = this[TO_POSITION](this[TARGET]);
    inst = this[TO_POSITION](inst);
    return Math.sqrt(Math.pow(this[TARGET][0] - inst[0], 2) + Math.pow(this[TARGET][1] - inst[1], 2));
  }

  [DIRECTION](inst) {
    this[TARGET] = this[TO_POSITION](this[TARGET]);
    inst = this[TO_POSITION](inst);
    return Math.atan2(inst[1] - this[TARGET][1], inst[0] - this[TARGET][0]);
  }

  [RANDOM](max) {
    const number = Math.random() * (max - this[TARGET]) + this[TARGET];
    if(this[FLAGS].has('integer')) {
      return Math.floor(number);
    }
    return number;
  }

  [COLLISION](what) {
    const targets = [[], []];
    switch(typeof this[TARGET]) {
      case 'function':
        targets[0] = this[GAME].actors.filter((a) => a instanceof this[TARGET]);
        break;
      case 'object':
        targets[0].push(this[TARGET]);
        break;
    }
    switch(typeof what) {
      case 'function':
        targets[1] = this[GAME].actors.filter((a) => a instanceof what);
        break;
      case 'object':
        targets[1].push(what);
        break;
    }
    for(let a of targets[0]) {
      for(let b of targets[1]) {
        let { position: pos_a, origin: ori_a, dimensions: dim_a } = a;
        let { position: pos_b, origin: ori_b, dimensions: dim_b } = b;
        if(this[FLAGS].has('at') && this[AT]) {
          pos_a = this[AT];
        }
        pos_a = [pos_a[0] - ori_a[0], pos_a[1] - ori_a[1]];
        pos_b = [pos_b[0] - ori_b[0], pos_b[1] - ori_b[1]];
        const h = (pos_a[0] < pos_b[0] + dim_b[0] && pos_a[0] + dim_a[0] > pos_b[0]);
        const v = (pos_a[1] < pos_b[1] + dim_b[1] && pos_a[1] + dim_a[1] > pos_b[1]);
        if(h && v) {
          return b;
        }
      }
    }
    return false;
  }

  [TO_POSITION](inst) {
    switch(typeof inst) {
      case 'function':
        inst = this[GAME].actors.find((x) => x instanceof inst).position;
        break;
      case 'object':
        if(inst.position) {
          inst = inst.position;
        }
        break;
    }
    return inst;
  }
}
