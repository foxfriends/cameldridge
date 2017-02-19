import Symbolic from '../util/symbolic';
import {KEYFRAME_END} from './const';
const [INDICES, FRAMES, PAIRS] = Symbolic;

export default class Keyframes {
  constructor() {
    this[PAIRS] = [];
  }

  frame(frame, values, next = values) {
    frame *= 60;
    this[PAIRS][Math.floor(frame)] = [values, next];
    return this;
  }

  end(frame) {
    frame *= 60;
    this[PAIRS][Math.floor(frame)] =  [[KEYFRAME_END], []];
    return this;
  }

  get(frame) {
    frame = Math.floor(frame);
    const keys = Object.keys(this[PAIRS]).map(x => +x);
    let values = [];
    for(let key of keys) {
      if(key >= frame) {
        if(key === frame) {
          values = this[PAIRS][key];
          values = values[0].concat(values[1]);
        }
        break;
      }
      values = this[PAIRS][key][1];
    }
    return new Set(values);
  }
}
