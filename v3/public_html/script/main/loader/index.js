'use strict';
import generate from '../util/generate';
import wait from '../util/wait';

import Prompt from './prompt';
import border from './border';

let prompt = new Prompt(document.querySelector('.prompt'));

const skip = () => end();
let ended = false;
function end() {
  if(ended) { return; }
  ended = true;
  document.body.classList.remove('loading');
  document.body.classList.add('loaded');
  window.setTimeout(() => {
    const loading = document.querySelector('.loading');
    loading.parentNode.removeChild(loading);
  }, 0);
  window.removeEventListener('click', skip);
  window.removeEventListener('wheel', skip);
  window.removeEventListener('keydown', skip);
  border();
}

generate(function*() {
  yield wait(500);
  yield prompt.setCommand('cd public_html');
  yield wait(100);
  prompt = prompt.next();
  yield wait(500);
  yield prompt.setCommand('npm start');
  yield wait(100);
  prompt = prompt.next();
  prompt.prompt = '';
  prompt.command = 'Starting server';
  for(var i = 0; i < 3; ++i) {
    yield wait(250);
    prompt.command += '.';
  }
  yield wait(250);
  end();
});

window.addEventListener('click', skip);
window.addEventListener('wheel', skip);
window.addEventListener('keydown', skip);
