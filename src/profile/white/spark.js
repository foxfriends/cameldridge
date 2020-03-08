import Actor from './actor';
import {spark} from './sprites';

const imageSpeed = 4;

export default class Spark extends Actor {
  constructor(position, color) {
    super(spark);
    this.blend = this.color = color;
    this.position = position;
    this.imageTimer = imageSpeed;
  }

  update() {
    if(!--this.imageTimer) {
      ++this.subimage;
      this.imageTimer = imageSpeed;
    }
  }

  useColor() {
    this.game.global.colors.add(this.color);
    this.game.canvas.style.backgroundColor = `#${this.color.toString(16).padStart(6, '0')}`;
  }
}
