'use strict';
import Sprite from '../../game-engine/sprite';
import DAVE_IMAGE from './images/dave.png';
import WAITOR_IMAGE from './images/waitor.png';
import GRASS_IMAGE from './images/grass.png';
import WHEEL_IMAGE from './images/wheel.png';
import COAL_IMAGE from './images/coal.png';
import MONSTER_IMAGE from './images/monster.png';
import FORK_IMAGE from './images/fork.png';

export const dave = new Sprite(DAVE_IMAGE, 5);
export const waitor = new Sprite(WAITOR_IMAGE);
export const grass = new Sprite(GRASS_IMAGE);
export const wheel = new Sprite(WHEEL_IMAGE);
export const coal = new Sprite(COAL_IMAGE);
export const monster = new Sprite(MONSTER_IMAGE, 3);
export const fork = new Sprite(FORK_IMAGE);

export default Promise.all([dave, waitor, grass, wheel, coal, monster, fork].map(({loaded}) => loaded));
