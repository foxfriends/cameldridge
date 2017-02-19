'use strict';
import Sprite from '../../game-engine/sprite';
import BLUE_IMAGE from './images/blue_player.svg';
import GREEN_IMAGE from './images/green_player.svg';
import PURPLE_IMAGE from './images/purple_player.svg';
import SOUVENIR_IMAGE from './images/souvenir.jpg';
import SPRING_IMAGE from './images/spring.jpg';

export const blue = new Sprite(BLUE_IMAGE);
export const green = new Sprite(GREEN_IMAGE);
export const purple = new Sprite(PURPLE_IMAGE);
export const souvenir = new Sprite(SOUVENIR_IMAGE);
export const spring = new Sprite(SPRING_IMAGE);

export default Promise.all([].map(({loaded}) => loaded));
