'use strict';
import tab from './tab';
const games = document.querySelectorAll('.game');

const mobile = window.matchMedia('(max-width: 960px)');

Array.prototype.forEach.call(games, (game) => {
  game.querySelector('.tab').addEventListener('click', () => {
    game.classList.add('open');
    const info = game.querySelector('.info');
    info.addEventListener('mouseout', function close() {
      game.classList.remove('open');
      info.removeEventListener('mouseout', close);
    });
  });
  game.addEventListener('click', () => {
    if(window.IS_MOBILE || mobile.matches) {
      game.classList.add('open');
      window.addEventListener('resize', () => {
        if(!mobile.matches) {
          game.classList.remove('open');
        }
      });
    }
  });
  const close = game.querySelector('.close');
  close && close.addEventListener('click', (event = window.event) => {
    game.classList.remove('open');
    event.stopPropagation ? event.stopPropagation() : (event.cancelBubble = true);
  });
});

window.setTimeout(() => {
  if(window.IS_MOBILE) {
    // hide tabs on mobile
    Array.prototype.forEach.call(document.querySelectorAll('.tab'), (tab) => {
      tab.style.display = 'none';
    });
  }
}, 0);
