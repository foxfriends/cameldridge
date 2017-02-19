'use strict';
import {Input} from '../../game-engine/const';
import Keyframes from '../../game-engine/keyframes';

export const Special = {
  Transform: Symbol(),
  Die: Symbol(),
  Attack: Symbol()
};

export default new Keyframes()
  .frame(0, [Input.Right])
  .frame(2, [Special.Transform], [])
  .frame(3, [Input.Attack], [])
  .frame(3.6, [Input.Attack], [])
  .frame(4.2, [Special.Attack], [Input.Defend])
  .frame(5.2, [Input.Attack], [])
  .frame(5.6, [Input.Attack, Special.Die], [])
  .frame(6.1, [Input.Right])
  .end(10);
