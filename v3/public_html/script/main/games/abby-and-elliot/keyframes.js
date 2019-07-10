'use strict';
import {Input} from '../../game-engine/const';
import Keyframes from '../../game-engine/keyframes';

export const Special = {
  Monster: Symbol()
};

export default new Keyframes()
  .frame(0, [Input.Right])
  .frame(4, [Input.Talk])
  .frame(5, [Special.Monster], [Input.Talk])
  .frame(6, [])
  .frame(6.5, [Input.Left])
  .end(10);
