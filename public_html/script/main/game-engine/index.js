'use strict';
import Symbolic from '../util/symbolic';
import generate from '../util/generate';

import {KEYFRAME_END} from './const';
import Util from './util';
import onResize from '../page/on-resize';

let playCount = 0;

const [
  CANVAS, CONTEXT, ON, END, PAUSE, UNPAUSE, VISIBLE,
  KEYFRAMES, ACTORS, BACKGROUNDS, FOREGROUNDS, PLAYING, GLOBAL
] = Symbolic;

export default class Game {
  constructor(canvas, keyframes) {
    this[CANVAS] = canvas;
    this[CONTEXT] = canvas.getContext('2d');
    this[END] = false;
    this[PAUSE] = null;
    this[UNPAUSE] = null;
    this[KEYFRAMES] = keyframes;
    this[ACTORS] = [];
    this[BACKGROUNDS] = [];
    this[FOREGROUNDS] = [];
    this[PLAYING] = false;
    this[ON] = {};
    this[GLOBAL] = {};
    onResize(() => this.trigger('resize'));

    // for scrollin/scrollout events
    const inView = () => {
      const rect = this[CANVAS].getBoundingClientRect();
      return rect.bottom >= 0 && rect.top < (window.innerHeight || document.documentElement.clientHeight);
    }
    let scrollTimeout;
    this[VISIBLE] = inView();
    window.addEventListener('scroll', () => {
      if(scrollTimeout) { clearTimeout(scrollTimeout); }
      scrollTimeout = setTimeout(() => {
        scrollTimeout = undefined;
        if(inView() != this[VISIBLE]) {
          this[VISIBLE] = !this[VISIBLE];
          if(this[VISIBLE]) {
            this.trigger('scrollin');
          } else {
            this.trigger('scrollout');
          }
        }
      }, 50);
    });
  }

  play() {
    this.trigger(this[VISIBLE] ? 'scrollin' : 'scrollout');
    playCount++;
    let frame = 0;
    this[PLAYING] = true;
    this.trigger('start');
    const step = (now) => {
      if(!this[PLAYING]) { return; } // force quit
      const inputs = this[KEYFRAMES].get(frame++);
      if(this[END] || inputs.has(KEYFRAME_END)) {
        this[END] = false;
        this[PLAYING] = false;
        this.trigger('end');
        return;
      }
      this[ACTORS] = this[ACTORS].sort(({position: [,,a]}, {position: [,,b]}) => a - b);
      this[CONTEXT].clearRect(0, 0, this[CANVAS].width, this[CANVAS].height);
      for(let actor of this[ACTORS]) { inputs.forEach(actor.react.bind(actor)); }
      for(let actor of this[ACTORS]) { actor.update(); }
      this.trigger('step');
      const drawables = [].concat(this[BACKGROUNDS], this[FOREGROUNDS], this[ACTORS]).sort(({position: [,,a]}, {position: [,,b]}) => a - b);
      for(let item of drawables) {
        item.draw(this[CONTEXT]);
      }
      if(this[PAUSE]) {
        generate(function*() {
          yield this[PAUSE];
          window.requestAnimationFrame(step);
        }, this);
      } else {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  end() {
    this[END] = true;
    if(this[PAUSE]) {
      this[UNPAUSE]();
      this[PAUSE] = this[UNPAUSE] = null;
    }
  }

  pause() {
    if(!this[PAUSE]) {
      this.trigger('pause');
      this[PAUSE] = new Promise((resolve) => {
        this[UNPAUSE] = () => {
          this[PAUSE] = null;
          this.trigger('unpause');
          resolve();
        }
      });
    }
  }

  unpause() {
    if(this[PAUSE]) {
      this[UNPAUSE]();
    }
  }

  reset() {
    this[ACTORS] = [];
    this[BACKGROUNDS] = [];
    this[FOREGROUNDS] = [];
    this[PLAYING] = false;
    this[END] = false;
    if(this[PAUSE]) {
      this[UNPAUSE]();
      this[PAUSE] = this[UNPAUSE] = null;
    }
    return this;
  }

  get actors() { return this[ACTORS]; }
  get foregrounds() { return this[FOREGROUNDS]; }
  get backgrounds() { return this[BACKGROUNDS]; }

  get width() { return this[CANVAS].width; }
  get height() { return this[CANVAS].height; }
  get canvas() { return this[CANVAS]; }
  get global() { return this[GLOBAL]; }

  get add() {
    return {
      actor: (...actors) => {
        this.actors.push(...actors);
        return this;
      },
      foreground: (...foregrounds) => {
        this.foregrounds.push(...foregrounds);
        return this;
      },
      background: (...backgrounds) => {
        this.backgrounds.push(...backgrounds);
        return this;
      }
    }
  }

  on(evt, fn) {
    this[ON][evt] = this[ON][evt] ? [...this[ON][evt], fn] : [fn];
    return this;
  }

  trigger(evt) {
    for(let f of this[ON][evt] || []) { f.bind(this)(); }
  }

  get util() {
    return Util(this);
  }
}
