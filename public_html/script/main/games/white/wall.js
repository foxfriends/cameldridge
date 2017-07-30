'use strict';
import Symbolic from '../../util/symbolic';

import Solid from './solid';
import {Color} from './const';
import {grass} from './sprites';

const [DIMENSIONS] = Symbolic;

export default class Wall extends Solid {
  constructor(position, dimensions, hasGrass = true) {
    super();
    this.position = [...position, -10];
    this[DIMENSIONS] = dimensions;
    this.grass = [];
    if(hasGrass) {
      while(this.grass.length < this.dimensions[0] / grass.dimensions[0]) {
        this.grass.push(this.game.util.random.integer.between(0).and(5));
      }
    }
  }

  get dimensions() {
    return this[DIMENSIONS];
  }

  draw(context) {
    context.fillStyle = '#ffffff';
    context.fillRect(...this.position.slice(0, 2), ...this.dimensions);
    if(this.game.global.colors.has(Color.Green)) {
      for(var i = 0; i < this.grass.length; ++i) {
        grass.draw(
          context, this.grass[i],
          this.position[0] + i * grass.dimensions[0], this.position[1] - grass.dimensions[1]
        );
      }
    }
  }
}
