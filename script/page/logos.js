'use strict';
import generate from 'generate';
import onResize from './on-resize';
import {phone, tablet} from './media';

const images = [];
let alerted = false;
Array.prototype.forEach.call(document.querySelectorAll('.logo'), (logo) => {
  if(typeof logo.classList[Symbol.iterator] !== 'function') {
    logo.classList[Symbol.iterator] = function*() {
      for(let key of Object.keys(logo.classList)) {
        yield logo.classList[key];
      }
    }
  }
  generate(function*() {
    const name = [...logo.classList].filter((c) => c !== 'logo')[0];
    // alert(name);
    const src = `images/logos/${name}.svg`;
    const img = new Image();
    img.src = src;
    window.setTimeout(() => {
      if(window.IS_MOBILE) {
        img.height = 40;
      } else {
        img.height = 80;
      }
    });
    logo.appendChild(img);
    images.push(img)
  });
});

onResize(() => {
  let h = 80;
  if(phone.matches) {
    h = 40;
  } else if(tablet.matches) {
    h = 60;
  }
  images.forEach(img => img.height = h);
});
