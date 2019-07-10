'use strict';
import Background from '../../game-engine/background';
import Foreground from '../../game-engine/foreground';

import BUSH_IMAGE from './images/bush.png';
import TREE1_IMAGE from './images/tree_1.png';
import TREE2_IMAGE from './images/tree_2.png';
import GRASS_IMAGE from './images/grass.png';
import FLOWERS_IMAGE from './images/flowers.png';

export const bush = new Background(BUSH_IMAGE);
export const tree1 = new Background(TREE1_IMAGE);
export const tree2 = new Background(TREE2_IMAGE);
export const grass = new Background(GRASS_IMAGE);
export const flower = new Background(FLOWERS_IMAGE);

export default Promise.all([bush, tree1, tree2, grass, flower].map(({loaded}) => loaded));
