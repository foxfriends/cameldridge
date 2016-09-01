'use strict';
import generate from 'generate';

Array.prototype.forEach.call(document.querySelectorAll('.logo'), (logo) => {
  generate(function*() {
    const name = [...logo.classList].filter((c) => c !== 'logo')[0];
    const src = `images/logos/${name}.svg`;
    const img = new Image();
    img.src = src;
    img.height = 80;
    logo.appendChild(img);
  });
});
