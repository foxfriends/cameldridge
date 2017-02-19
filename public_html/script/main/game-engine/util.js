'use strict';
import Symbolic from '../util/symbolic';

const [
  GAME, EXECUTE,
  METHOD, TARGET, FLAGS,
  DISTANCE, DIRECTION, RANDOM, COLLISION,
  NEAREST, AT,
  TO_POSITION
] = Symbolic;

export default function Util(game) {
  let [method, target, flags, at] = ['', null, new Set(), null];
  const util = function(...args) { return method(...args); };
  Object.defineProperties(util, {
    to: { get() { return util; } },
    and: { get() { return util; } },
    distance: { get() { return method = distance, util; } },
    direction: { get() { return method = direction, util; } },
    random: { get() { return method = random, util; } },
    collision: { get() { return method = collision, util; } },
    integer: { get() { return flags.add('integer'), util; } },
    at: { value(where) { return at = where, flags.add('at'), util; } },
    between: { value(what) { return target = what, util; } },
    from: { value(what) { return target = what, util; } }
  });

  function toPosition(inst) {
    switch(typeof inst) {
      case 'function':
        inst = game.actors.find((x) => x instanceof inst).position;
        break;
      case 'object':
        if(inst.position) {
          inst = inst.position;
        }
        break;
    }
    return inst;
  }

  function distance(inst) {
    target = toPosition(target);
    inst = toPosition(inst);
    return Math.sqrt(Math.pow(target[0] - inst[0], 2) + Math.pow(target[1] - inst[1], 2));
  }

  function direction(inst) {
    target = toPosition(target);
    inst = toPosition(inst);
    return Math.atan2(inst[1] - target[1], inst[0] - target[0]);
  }

  function random(max) {
    const number = Math.random() * (max - target) + target;
    if(flags.has('integer')) {
      return Math.floor(number);
    }
    return number;
  }

  function collision(what) {
    const targets = [[], []];
    switch(typeof target) {
      case 'function':
        targets[0] = game.actors.filter((a) => a instanceof target);
        break;
      case 'object':
        targets[0].push(target);
        break;
    }
    switch(typeof what) {
      case 'function':
        targets[1] = game.actors.filter((a) => a instanceof what);
        break;
      case 'object':
        targets[1].push(what);
        break;
    }
    for(let a of targets[0]) {
      for(let b of targets[1]) {
        let { position: pos_a, origin: ori_a, dimensions: dim_a } = a;
        let { position: pos_b, origin: ori_b, dimensions: dim_b } = b;
        if(flags.has('at') && at) {
          pos_a = at;
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

  return util;
}
