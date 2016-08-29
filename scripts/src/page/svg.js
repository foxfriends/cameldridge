'use strict';

export function createElement(name) {
  return document.createElementNS('http://www.w3.org/2000/svg', name);
}

export function setAttribute(element, name, value) {
  return element.setAttributeNS(null, name, value);
}

export function animate(path, time) {
  const len = path.getTotalLength();
  let start;
  const animate = (now) => {
    if(start === undefined) {
      start = now;
    } else {
      const newlen = len * Math.pow(Math.sin(Math.max(0, (time + start - now) / time) * Math.PI / 2), 2);
      setAttribute(path, 'stroke-dasharray', `${len - newlen} ${newlen}`);
      setAttribute(path, 'stroke-dashoffset', len - newlen);
    }
    if(now - start < time) {
      window.requestAnimationFrame(animate);
    }
  };
  window.requestAnimationFrame(animate);
};
