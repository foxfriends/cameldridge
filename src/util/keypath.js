const PATH = Symbol('PATH'), DEREF = Symbol('DEREF');

class Keypath extends Function {
  constructor(...path) {
    super();
    this[PATH] = path;
  }

  [DEREF](object) {
    for (const key of this) {
      if (object !== undefined && object !== null) {
        object = object[key];
      }
    }
    return object;
  }

  *[Symbol.iterator]() { yield * this[PATH]; }
}

function keypath(base) {
  return new Proxy(base, {
    get(target, prop) {
      if (prop !== Symbol.iterator) {
        return keypath(new Keypath(...target, prop));
      } else {
        return target[prop];
      }
    },

    apply(target, thisArg, args) {
      return target[DEREF](...args);
    },
  });
}

export default keypath(new Keypath);
