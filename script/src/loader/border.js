'use strict';

function createElementSVG(name) {
  return document.createElementNS('http://www.w3.org/2000/svg', name);
}

function setAttributeSVG(element, name, value) {
  return element.setAttributeNS(null, name, value);
}

const svg = document.querySelector('#header-border');
const pathstr = 'M 102.342 18.469 C 103.487 9.722 87.048 1.975 76.015 4.733 C 62.536 8.103 55.473 17.155 50.833 29.915 C 34.031 76.121 98.523 184.441 7.337 184.441 L 7.337 185.586';
const animationTime = 1500;
const paths = [];

while(paths.length < 4) {
  const path = createElementSVG('path');
  setAttributeSVG(path, 'd', pathstr);
  const len = path.getTotalLength();
  setAttributeSVG(path, 'stroke-dasharray', `${len} 0`);
  setAttributeSVG(path, 'transform-origin', '100% 100%');
  svg.appendChild(path);
  paths.push(path);
}

const phone = window.matchMedia('(max-width: 640px)');

function transform() {
  let x = 50;
  if(phone.matches) {
    x = 0;
  }
  const y = window.innerHeight / 2;
  const {width: w, height: h} = paths[0].getBoundingClientRect();

  setAttributeSVG(paths[0], 'transform', `translate(${x} ${y - h + 1})`);
  setAttributeSVG(paths[1], 'transform', `translate(${x} ${y + h - 1}) scale(1 -1)`);
  setAttributeSVG(paths[2], 'transform', `translate(${window.innerWidth - x} ${y - h + 1}) scale(-1, 1)`);
  setAttributeSVG(paths[3], 'transform', `translate(${window.innerWidth - x} ${y + h - 1}) scale(-1, -1)`);
}

window.addEventListener('resize', transform);

export default function border() {
  transform();
  paths.forEach(path => {
    const len = path.getTotalLength();
    let start;
    const animate = (now) => {
      if(start === undefined) {
        start = now;
      } else {
        const newlen = len * Math.pow(Math.sin(Math.max(0, (animationTime + start - now) / animationTime) * Math.PI / 2), 2);
        setAttributeSVG(path, 'stroke-dasharray', `${len - newlen} ${newlen}`);
        setAttributeSVG(path, 'stroke-dashoffset', len - newlen);
      }
      if(now - start < animationTime) {
        window.requestAnimationFrame(animate);
      }
    };
    window.requestAnimationFrame(animate);
  });
}
