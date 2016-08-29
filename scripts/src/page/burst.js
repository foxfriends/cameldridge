'use strict';

import * as SVG from './svg';

const svgs = document.querySelectorAll('.burst');
const pathstr = 'M 242.045 26.845 C 235.174 15.265 252.673 9.194 256.562 20.331 C 257.28 22.387 258.362 27.943 255.469 32.642 C 250.15 41.281 241.689 42.842 230.909 40.209 C 214.19 36.125 207.736 32.195 196.389 26.652 C 184.111 20.654 176.454 18.94 169.089 18.449 C 163.47 18.075 160.195 18.053 156.118 18.206 C 152.733 18.333 141.704 19.696 137.327 20.434 C 132.629 21.226 129.324 21.96 131.407 21.538 M 156.898 33.347 C 154.215 32.231 149.785 33.435 148.194 36.36 C 146.855 38.822 147.471 42.212 149.355 43.688 C 151.649 45.485 154.179 45.931 158.491 44.482 C 169.188 40.887 169.512 23.332 154.909 20.404 C 136.023 16.617 113.006 28.284 94.665 30.179 C 87.387 30.931 65.969 31.376 51.021 28.409 M 92.259 12.639 C 91.942 13.633 90.511 14.806 88.619 14.917 C 83.811 15.198 82.791 10.379 86.203 7.199 C 90.86 2.859 100.116 8.285 96.713 16.822 C 92.769 26.714 76.995 29.629 67.758 29.629 C 46.664 29.629 26.524 22.39 5.393 21.833';
const animationTime = 2000;

const phone = window.matchMedia('(max-width: 640px)');
const tablet = window.matchMedia('(min-width: 641px) and (max-width: 960px)');

Array.prototype.forEach.call(svgs, (svg) => {
  const paths = [];
  while(paths.length < 2) {
    const path = SVG.createElement('path');
    SVG.setAttribute(path, 'd', pathstr);
    const len = path.getTotalLength();
    SVG.setAttribute(path, 'stroke-dasharray', `${len}`);
    SVG.setAttribute(path, 'stroke-dashoffset', `${len}`);
    SVG.setAttribute(path, 'transform-origin', '0 50%');
    svg.appendChild(path);
    paths.push(path);
  }
  function transform() {
    const {width: w, height: h} = paths[0].getBoundingClientRect();
    let scale = 1;
    if(phone.matches) {
      scale = 0.4;
    } else if(tablet.matches) {
      scale = 0.6;
    }
    SVG.setAttribute(paths[0], 'transform', `translate(${window.innerWidth / 2 - 200 * scale} 0) scale(-${scale} ${scale})`);
    SVG.setAttribute(paths[1], 'transform', `translate(${window.innerWidth / 2 + 200 * scale} 0) scale(${scale} ${scale})`);
  }
  window.addEventListener('resize', transform);
  transform();

  window.addEventListener('scroll', function scrollListener() {
    if(document.body.scrollTop > svg.getBoundingClientRect().bottom - window.innerHeight) {
      paths.forEach(path => SVG.animate(path, animationTime));
      window.removeEventListener('scroll', scrollListener);
    }
  });
});
