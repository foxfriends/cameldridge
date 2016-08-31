'use strict';
import * as SVG from './svg';

const games = document.querySelectorAll('.game');

const pathstr = 'M -0.107 101 L 11.836 91.181 C 12.279 66.044 16.897 34.072 6.103 14.85 C 3.032 9.38 7.468 4.944 20 0';
const fillstr = 'M 20 101 L -0.107 101 L 11.836 91.181 C 12.279 66.044 16.897 34.072 6.103 14.85 C 3.032 9.38 7.468 4.944 20 0 Z';
const animationTime = 500;

const desktop = window.matchMedia('(min-width: 961px)');

Array.prototype.forEach.call(games, (game) => {
  const tab = game.querySelector('.tab');
  const svg = tab.querySelector('svg');
  const [paths, fills] = [[], []];
  while(paths.length < 2) {
    const path = SVG.createElement('path');
    SVG.setAttribute(path, 'd', pathstr);

    const len = path.getTotalLength();
    SVG.setAttribute(path, 'stroke-dasharray', `${len}`);
    SVG.setAttribute(path, 'stroke-dashoffset', `${len}`);
    SVG.setAttribute(path, 'transform-origin', '0 100%');

    const fill = SVG.createElement('path');
    SVG.setAttribute(fill, 'd', fillstr);
    SVG.setAttribute(fill, 'transform-origin', '0 100%');
    SVG.setAttribute(fill, 'stroke', 'none');
    SVG.setAttribute(fill, 'fill', 'none');

    svg.appendChild(path);
    svg.appendChild(fill);
    paths.push(path);
    fills.push(fill);
  }

  const [ow, oh] = [20, 101];
  const width = 40;
  function transform() {
    const {height} = svg.getBoundingClientRect();
    const scale = [width / ow, height / 2 / oh];
    SVG.setAttribute(paths[0], 'transform', `scale(${scale[0]} ${scale[1]})`);
    SVG.setAttribute(paths[0], 'stroke-width', ow / width);
    SVG.setAttribute(fills[0], 'transform', `scale(${scale[0]} ${scale[1]})`);
    SVG.setAttribute(paths[1], 'transform', `translate(0 ${height}) scale(${scale[0]} -${scale[1]})`);
    SVG.setAttribute(paths[1], 'stroke-width', ow / width);
    SVG.setAttribute(fills[1], 'transform', `translate(0 ${height}) scale(${scale[0]} -${scale[1]})`);
  }
  window.setTimeout(transform, 0);
  window.addEventListener('resize', () => window.setTimeout(transform, 0));

  let over = false, left = true;
  game.addEventListener('mouseover', () => {
    if(!window.IS_MOBILE && desktop.matches) {
      over = true;
      window.setTimeout(() => {
        if(left) {
          left = false;
          const animations = [null, null];
          const skip = () => {
            for(let animation of animations) {
              animation.skip();
            }
          };
          tab.addEventListener('click', skip);
          paths.forEach((path, i) => {
            animations[i] = SVG.animate(path, animationTime);
            let filler;
            animations[i].then((natural) => {
              console.log('done', natural);
              if(natural) {
                let start;
                const end = 500;
                filler = window.requestAnimationFrame(function fill(time) {
                  if(start === undefined) { start = time; }
                  const a = 0.95 * Math.min(1, (time - start) / end);
                  SVG.setAttribute(fills[i], 'fill', `rgba(255, 255, 255, ${a})`);
                  if(time - start < end) {
                    filler = window.requestAnimationFrame(fill);
                  }
                });
              } else {
                SVG.setAttribute(fills[i], 'fill', `rgba(255, 255, 255, 0.95)`);
              }
            });
            game.addEventListener('mouseout', function hide() {
              over = false;
              window.setTimeout(() => {
                if(!over) {
                  left = true;
                  animations[i].cancel();
                  window.cancelAnimationFrame(filler);
                  const len = path.getTotalLength();
                  SVG.setAttribute(path, 'stroke-dasharray', `${len}`);
                  SVG.setAttribute(path, 'stroke-dashoffset', `${len}`);
                  SVG.setAttribute(fills[i], 'fill', 'none');
                  game.removeEventListener('mouseout', hide);
                  tab.removeEventListener('click', skip);
                }
              }, 0)
            });
          });
        }
      });
    }
  });
});
