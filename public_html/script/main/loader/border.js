'use strict';
import * as  SVG from '../page/svg';
import onResize from '../page/on-resize';
import {phone} from '../page/media';

const svg = document.querySelector('#header-border');
const pathstr = 'M 102.342 18.469 C 103.487 9.722 87.048 1.975 76.015 4.733 C 62.536 8.103 55.473 17.155 50.833 29.915 C 34.031 76.121 98.523 184.441 7.337 184.441 L 7.337 185.586';
const animationTime = 1500;
const paths = [];

while(paths.length < 4) {
  const path = SVG.createElement('path');
  SVG.setAttribute(path, 'd', pathstr);
  const len = path.getTotalLength();
  SVG.setAttribute(path, 'stroke-dasharray', `${len} 0`);
  SVG.setAttribute(path, 'transform-origin', '100% 100%');
  svg.appendChild(path);
  paths.push(path);
}

function transform() {
  let x = 50;
  if(phone.matches) {
    x = 0;
  }
  // mobile devices height changes when the page scrolls and the navbar expands
  // but that makes this look stupid
  const y = (window.IS_MOBILE
    ? (window.orientation === 0 ? screen.height : screen.width)
    : window.innerHeight) / 2;
  const {height: h} = paths[0].getBoundingClientRect();

  SVG.setAttribute(paths[0], 'transform', `translate(${x} ${y - h})`);
  SVG.setAttribute(paths[1], 'transform', `translate(${x} ${y + h}) scale(1 -1)`);
  SVG.setAttribute(paths[2], 'transform', `translate(${window.innerWidth - x} ${y - h}) scale(-1, 1)`);
  SVG.setAttribute(paths[3], 'transform', `translate(${window.innerWidth - x} ${y + h}) scale(-1, -1)`);
}
onResize(transform);

export default function border() {
  transform();
  paths.forEach((path) => SVG.animate(path, animationTime));
}
