import Symbolic from '../util/symbolic.js';

const [IMAGE, POSITION, LOADED] = Symbolic;

export default class Background {
  constructor(imageUrl, position = [0, 0, -1000000]) {
    this.position = position;
    this[IMAGE] = new Image();
    this[IMAGE].src = imageUrl;
    this[LOADED] = new Promise((resolve, reject) => {
      this[IMAGE].onload = resolve;
      this[IMAGE].onerror = reject;
    });
  }

  draw(context) {
    context.drawImage(this[IMAGE], ...this[POSITION].slice(0, 2));
  }

  get loaded() {
    return this[LOADED];
  }

  get position() {
    return this[POSITION];
  }

  set position(position) {
    if(Array.isArray(position)) {
      this[POSITION] = position;
      while(this[POSITION].length < 3) {
        this[POSITION].push(this[POSITION].length === 2 ? -1000000 : 0);
      }
    } else {
      throw new TypeError('Position must be an array');
    }
  }

  get dimensions() {
    return [this[IMAGE].width, this[IMAGE].height];
  }

  copy(position = this[POSITION]) {
    // this.constructor used to support Foregrounds default depth
    return new this.constructor(this[IMAGE].src, position);
  }
}
