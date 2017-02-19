'use strict';
import Background from '../../game-engine/background';
import Foreground from '../../game-engine/foreground';
import BOARD_IMAGE from './images/board.jpg';

export const board = new Background(BOARD_IMAGE);

export default Promise.all([board].map(({loaded}) => loaded));
