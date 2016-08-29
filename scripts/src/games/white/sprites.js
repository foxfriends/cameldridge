'use strict';
import Sprite from '../../game-engine/sprite';

import BIRD_IMAGE from './images/bird.png';
import BIRD_FLYING_IMAGE from './images/bird_flying.png';
import BUTTERFLY_IMAGE from './images/butterfly.png';
import DOOR_IMAGE from './images/door.png';
import FLOWER_G_IMAGE from './images/flower_g.png';
import FLOWER_R_IMAGE from './images/flower_r.png';
import FLOWER_W_IMAGE from './images/flower_w.png';
import GRASS_IMAGE from './images/grass.png';
import PLAYER_IMAGE from './images/player.png';
import PUFF_IMAGE from './images/puff.png';
import SPARK_IMAGE from './images/spark.png';
import SWITCH_IMAGE from './images/switch.png';
import TREE_G_IMAGE from './images/tree_g.png';
import TREE_R_IMAGE from './images/tree_r.png';
import TREE_W_IMAGE from './images/tree_w.png';

export const bird = new Sprite(BIRD_IMAGE, 4);
export const bird_flying = new Sprite(BIRD_FLYING_IMAGE, 4);
export const butterfly = new Sprite(BUTTERFLY_IMAGE, 4);
export const door = new Sprite(DOOR_IMAGE);
export const flower_g = new Sprite(FLOWER_G_IMAGE);
export const flower_r = new Sprite(FLOWER_R_IMAGE);
export const flower_w = new Sprite(FLOWER_W_IMAGE);
export const grass = new Sprite(GRASS_IMAGE, 5);
export const player = new Sprite(PLAYER_IMAGE, 5);
export const puff = new Sprite(PUFF_IMAGE, 8);
export const spark = new Sprite(SPARK_IMAGE, 17);
export const switch_platform = new Sprite(SWITCH_IMAGE, 2);
export const tree_g = new Sprite(TREE_G_IMAGE);
export const tree_r = new Sprite(TREE_R_IMAGE);
export const tree_w = new Sprite(TREE_W_IMAGE);

export default Promise.all([
  bird, bird_flying, butterfly, door,
  flower_g, flower_r, flower_w, grass,
  player, puff, spark, switch_platform,
  tree_g, tree_r, tree_w
].map(({loaded}) => loaded));
