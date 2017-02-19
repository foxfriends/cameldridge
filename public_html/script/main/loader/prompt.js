'use strict';
import Symbolic from '../util/symbolic';
const [ELEMENT, PROMPT, COMMAND, UPDATER] = Symbolic;

export default class Prompt {
  constructor(element) {
    this[ELEMENT] = element;
    this[PROMPT] = '&gt;';
    this[COMMAND] = '';
    this[UPDATER] = window.requestAnimationFrame(this.update.bind(this));
  }

  set prompt(prompt) { this[PROMPT] = prompt; }
  get prompt() { return this[PROMPT]; }

  setCommand(command) {
    return new Promise((resolve, reject) => {
      let i = 0;
      this[COMMAND] = '';
      const addLetter = () => {
        if(i < command.length) {
          this[COMMAND] += command[i++];
          window.setTimeout(addLetter, 50);
        } else {
          resolve();
        }
      };
      window.setTimeout(addLetter, 50);
    });
  }
  set command(command) {
    this[COMMAND] = command;
    this[ELEMENT].innerHTML = this.prompt + ' ' + this.command;
    window.cancelAnimationFrame(this[UPDATER]);
  }
  get command() { return this[COMMAND]; }

  update(time) {
    this[ELEMENT].innerHTML = this.prompt + ' ' + this.command + (Math.floor(time / 500) % 2 ? '_' : '');
    this[UPDATER] = window.requestAnimationFrame(this.update.bind(this));
  }

  next() {
    this[ELEMENT].innerHTML = this.prompt + ' ' + this.command;
    window.cancelAnimationFrame(this[UPDATER]);
    const next = document.createElement('div');
    next.classList.add('prompt');
    this[ELEMENT].parentNode.appendChild(next);
    return new Prompt(next);
  }
}
