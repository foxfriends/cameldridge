'use strict';
import Background from '../../game-engine/background';
import Foreground from '../../game-engine/foreground';
import TRAIN_IMAGE from './images/train.png';
import RAILS_IMAGE from './images/rails.png';

export const train = new Background(TRAIN_IMAGE);
export const rails = new Foreground(RAILS_IMAGE);

export default Promise.all([train, rails].map(({loaded}) => loaded));
