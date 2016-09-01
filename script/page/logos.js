'use strict';
import generate from 'generate';
import onResize from './on-resize';
import {phone, tablet} from './media';

const images = [];
Array.prototype.forEach.call(document.querySelectorAll('.logo'), (logo) => {
  generate(function*() {
    const name = [...logo.classList].filter((c) => c !== 'logo')[0];
    const src = `images/logos/${name}.svg`;
    const img = new Image();
    img.src = src;
    img.height = 80;
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
