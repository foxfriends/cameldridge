'use strict';
import {Input} from '../../game-engine/const';
import Keyframes from '../../game-engine/keyframes';
import {blue, purple, souvenir, spring} from './sprites';

export default new Keyframes()
  .frame(1, [purple], [])
  .frame(2, [souvenir], [])
  .frame(7, [blue], [])
  .frame(8, [spring], [])
  .end(11);
