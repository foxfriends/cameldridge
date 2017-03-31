'use strict';
import 'reset-css/_reset.scss';
import '../../style/diversions.sass';
import './hack-test';
import './details';
import './prism';
import '../main/page/burst';

import platform from 'platform';
import onResize from '../main/page/on-resize';

window.IS_MOBILE = platform.os.family === 'Android' || platform.os.family === 'iOS' || platform.os.family === 'Windows Phone';
if(window.IS_MOBILE) {
  Array.prototype.forEach.call(document.querySelectorAll('.vh'), (vh) => {
    function resize() {
      vh.style.height = (window.orientation === 0
        ? screen.height - 32
        : screen.width - 32) + 'px';
    }
    onResize(resize);
    resize();
  });
}
