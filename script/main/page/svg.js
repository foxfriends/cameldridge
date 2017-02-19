'use strict';

export function createElement(name) {
  return document.createElementNS('http://www.w3.org/2000/svg', name);
}

export function setAttribute(element, name, value) {
  return element.setAttributeNS(null, name, value);
}

export function getAttribute(element, name) {
  return element.getAttributeNS(null, name);
}

export function animate(path, time) {
  // this is only approximate... for more complex designs use multiple paths
  const segments = (getAttribute(path, 'd').match(/m/ig) || []).length;
  const len = path.getTotalLength() / segments;
  let finish, cancel;
  const finished = new Promise((resolve, reject) => {
    finish = resolve;
    cancel = reject;
  });
  let start;
  let animation = window.requestAnimationFrame(function animate(now) {
    if(start === undefined) {
      start = now;
    } else {
      const newlen = len * Math.pow(Math.sin(Math.max(0, (time + start - now) / time) * Math.PI / 2), 2);
      setAttribute(path, 'stroke-dasharray', `${len - newlen} ${newlen}`);
      setAttribute(path, 'stroke-dashoffset', len - newlen);
    }
    if(now - start < time) {
      animation = window.requestAnimationFrame(animate);
    } else {
      finish(true);
    }
  });
  finished.cancel = () => {
    window.cancelAnimationFrame(animation);
    cancel();
  };
  finished.skip = () => {
    window.cancelAnimationFrame(animation);
    setAttribute(path, 'stroke-dasharray', `${len}`);
    setAttribute(path, 'stroke-dashoffset', 0);
    finish(false);
  };
  return finished;
};
