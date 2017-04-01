'use strict';

function handler(event) {
  if(event.key === "Enter") {
    const validation = validate(this.value);
    if(!validation) shake.call(this);
  }
}

function shake() {
  if(!this.classList.contains('shake')) {
    this.classList.add('shake');
    window.setTimeout(() => this.classList.remove('shake'), 500);
  }
}

function completeLevel() {
  window.location.href = 'https://cameldridge.com/hack-test/0/';
  return true;
}

window.handler = handler;
window.completeLevel = completeLevel;
