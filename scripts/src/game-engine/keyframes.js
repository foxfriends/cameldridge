import Symbolic from 'symbolic';
import {KEYFRAME_END} from './const';
const [INDICES, FRAMES] = Symbolic;

export default class Keyframes extends Map {
  constructor(...args) { super(...args); }

  frame(frame, values, next = values) {
    frame *= 60;
    return this.set(Math.floor(frame), [values, next]);
  }

  end(frame) {
    frame *= 60;
    return this.set(Math.floor(frame), [[KEYFRAME_END], []]);
  }

  get(frame) {
    frame = Math.floor(frame);
    const keys = [...this.keys()].sort((a, b) => a - b);
    let values = [];
    for(let key of keys) {
      if(key >= frame) {
        if(key === frame) {
          values = super.get(key);
          values = values[0].concat(values[1]);
        }
        break;
      }
      values = super.get(key)[1];
    }
    return new Set(values);
  }
}
