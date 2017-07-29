'use strict';
import 'reset-css/_reset.scss';
import '../../style/main.sass';
// for mobile devices, where the navigation bar moves in and out as you scroll,
// the css vh unit makes it weird, so they must be overriden
import platform from 'platform';
import onResize from './page/on-resize';
window.IS_MOBILE = platform.os.family === 'Android' || platform.os.family === 'iOS' || platform.os.family === 'Windows Phone';
if(window.IS_MOBILE) {
  Array.prototype.forEach.call(document.querySelectorAll('.vh'), (vh) => {
    function resize() {
      vh.style.height = (window.orientation === 0
        ? screen.height - 32
        : screen.width - 32
      ) + 'px';
    }
    onResize(resize);
    resize();
  });
}

import './loader';
import './page';
import './games';
import '../nav';
