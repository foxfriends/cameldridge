import Actor from './actor';
import {puff} from './sprites';

const imageSpeed = 4;
export default class Puff extends Actor {
  constructor(position, direction) {
    super(puff);
    if(direction === 1) {
      this.subimage = 4;
    }
    this.position = position;
    this.imageTimer = imageSpeed;
    this.origin[1] = this.sprite.dimensions[1];
  }

  update() {
    if(!--this.imageTimer) {
      this.imageTimer = imageSpeed;
      ++this.subimage;
      if(this.subimage === 4 || this.subimage === 0) {
        this.destroy();
      }
    }
  }
}
