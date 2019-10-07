import {Input} from '../game-engine/const';
import Keyframes from '../game-engine/keyframes';

export const Special = {
  Elevator: Symbol()
};

export default new Keyframes()
  .frame(1, [Input.Right])
  .frame(1.8, [])
  .frame(2.5, [Input.Up], [Input.Right])
  .frame(6.3, [])
  .frame(6.5, [Special.Elevator])
  .frame(8, [Input.Right, Special.Elevator])
  .frame(8.5, [Input.Right])
  .frame(11.05, [])
  .end(11.5);
