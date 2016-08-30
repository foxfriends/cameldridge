'use strict';
import 'reset-css/_reset.scss';
import '../../style/index.sass';
// for mobile devices, where the navigation bar moves in and out as you scroll,
// the css vh unit makes it weird, so they must be overriden
import platform from 'platform';
window.IS_MOBILE = platform.os.family === 'Android' || platform.os.family === 'iOS' || platform.os.family === 'Windows Phone';
if(window.IS_MOBILE) {
  Array.prototype.forEach.call(document.querySelectorAll('.page-header'), (header) => {
    header.style.height = window.innerHeight + 'px';
  });
}

import './loader';
import './page';
import './games';
