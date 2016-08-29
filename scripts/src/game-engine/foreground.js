'use strict';
import Background from './background';

export default class Foreground extends Background {
  constructor(imageUrl, position = [0, 0, 1000000]) {
    while(position.length < 3) {
      position.push(position.length === 2 ? 1000000 : 0);
    }
    super(imageUrl, position);
  }

  get position() {
    return super.position;
  }

  set position(position) {
    if(Array.isArray(position)) {
      while(position.length < 3) {
        position.push(position.length === 2 ? 1000000 : 0);
      }
      super.position = position;
    } else {
      throw new TypeError('Position must be an array');
    }
  }
}
