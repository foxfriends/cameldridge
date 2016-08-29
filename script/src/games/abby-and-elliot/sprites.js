'use strict';
import Sprite from '../../game-engine/sprite';
import ABBY_IMAGE from './images/abby.png';
import ELLIOT_IMAGE from './images/elliot.png';
import MONSTER_IMAGE from './images/monster.png';

export const abby = new Sprite(ABBY_IMAGE, 4);
export const elliot = new Sprite(ELLIOT_IMAGE, 4);
export const monster = new Sprite(MONSTER_IMAGE, 4);

export default Promise.all([abby, elliot, monster].map(({loaded}) => loaded));
