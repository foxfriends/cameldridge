'use strict';
import Prism from 'prismjs';

function zip(a, b) {
  return Array.prototype.map.call(a, (e, i) => [e, b[i]]);
}

zip(document.querySelectorAll('.summary'), document.querySelectorAll('.content')).forEach(([s, c]) => {
  const show = s.querySelector('.details');
  const hide = c.querySelector('.details');
  show.classList.add('down');
  hide.classList.add('up');
  show.addEventListener('click', () => (s.classList.add('open'), c.classList.add('open')));
  hide.addEventListener('click', () => (s.classList.remove('open'), c.classList.remove('open')));
});

const cats = document.querySelector('#cats');
const show = document.querySelector('.details.cats');
show.addEventListener('click', () => {
  show.parentNode.insertBefore(document.importNode(cats.content, true), show);
  // kind of overkill, but highlightElement wasn't working
  Prism.highlightAll();
});
