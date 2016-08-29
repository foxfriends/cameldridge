'use strict';
import Symbolic from 'symbolic';
const [IMAGE, DIMENSIONS, LOADED, BLENDS, SPRITE] = Symbolic;

function blend(canvas, color) {
  const context = canvas.getContext('2d');
  const img = context.getImageData(0, 0, canvas.width, canvas.height);
  const [r, g, b] = [
    (color >> 16 & 0xFF) / 0xFF,
    (color >> 8 & 0xFF) / 0xFF,
    (color & 0xFF) / 0xFF
  ];
  for(let i = 0; i < img.data.length; i += 4) {
    img.data[i] *= r;
    img.data[i + 1] *= g;
    img.data[i + 2] *= b;
  }
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.putImageData(img, 0, 0);
}

class Sprite {
  constructor(imageUrl, frames = 1) {
    if(imageUrl) {
      this[IMAGE] = new Image();
      this[IMAGE].src = imageUrl;
      this[DIMENSIONS] = [0, 0];
      this[LOADED] = new Promise((resolve, reject) => {
        this[IMAGE].onload = () => {
          this[DIMENSIONS] = [Math.floor(this[IMAGE].width / frames), this[IMAGE].height];
          resolve();
        };
        this[IMAGE].onerror = reject;
      });
      this[BLENDS] = new Map([[0xFFFFFF, this]]);
    }
  }

  get frames() {
    if(window.Proxy) {
      return new Proxy(this, {
        get(target, frame) {
          if(frame === 'length') {
            return target[IMAGE].width / target[DIMENSIONS][0];
          } else {
            return [target[DIMENSIONS][0] * (frame % (target[IMAGE].width / target[DIMENSIONS][0])), 0, ...target[DIMENSIONS]];
          }
        }
      });
    } else {
      const frames = [];
      for(let i = 0; i < this[IMAGE].width / this[DIMENSIONS][0]; ++i) {
        frames.push([this[DIMENSIONS][0] * (i % (this[IMAGE].width / this[DIMENSIONS][0])), 0, ...this[DIMENSIONS]]);
      }
      return frames;
    }
  }

  get dimensions() {
    return this[DIMENSIONS];
  }

  get image() {
    return this[IMAGE];
  }

  get loaded() {
    return this[LOADED];
  }

  addBlend(color) {
    if(!this[BLENDS].has(color)) {
      const canvas = document.createElement('canvas');
      canvas.width = this[IMAGE].width;
      canvas.height = this[IMAGE].height;
      canvas.style.display = 'none';
      canvas.style.width = `${canvas.width}px`;
      canvas.style.height = `${canvas.height}px`;
      const context = canvas.getContext('2d');
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(this[BLENDS].get(0xFFFFFF)[IMAGE], 0, 0);
      blend(canvas, color);
      this[BLENDS].set(color, new BlendedSprite(canvas, this[SPRITE] || this));
    }
  }

  blend(color) {
    return this[BLENDS].get(color);
  }

  draw(context, frame, x, y, w = this[DIMENSIONS][0], h = this[DIMENSIONS][1], sx = 1, sy = 1) {
    context.save();
    context.scale(...[sx, sy].map(Math.sign));
    context.drawImage(
      this[IMAGE],
      ...this.frames[frame],
      Math.floor(x), Math.floor(y), Math.floor(w) * Math.abs(sx), Math.floor(h) * Math.abs(sy)
    );
    context.restore();
  }

  drawRotated(context, frame, x, y, angle, cx = this[DIMENSIONS][0] / 2, cy = this[DIMENSIONS][1] / 2, w = this[DIMENSIONS][0], h = this[DIMENSIONS][1], sx = 1, sy = 1) {
    context.save();
    context.translate(Math.floor(x), Math.floor(y));
    context.rotate(angle * Math.PI / 180);
    context.scale(...[sx, sy].map(Math.sign));
    context.drawImage(
      this[IMAGE],
      ...this.frames[frame],
      -Math.floor(cx), -Math.floor(cy), Math.floor(w) * Math.abs(sx), Math.floor(h) * Math.abs(sy)
    );
    context.restore();
  }
}

class BlendedSprite extends Sprite {
  constructor(canvas, sprite) {
    super(null, sprite.frames.length);
    this[SPRITE] = sprite;
    this[IMAGE] = canvas;
  }

  get frames() { return this[SPRITE].frames; }
  get dimensions() { return this[SPRITE].dimensions; }
  get loaded() { return this[SPRITE].loaded; }
  get image() { return this[IMAGE]; }
  blend(color) { return this[SPRITE].blend(color); }
  addBlend(color) { return this[SPRITE].addBlend(color); }
}

export default Sprite;
