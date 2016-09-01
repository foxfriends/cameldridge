'use strict';
export default function onResize(fn) {
  setTimeout(() => {
    if(window.IS_MOBILE) {
      window.addEventListener('orientationchange', () => {
        window.addEventListener('resize', function resize() {
          fn();
          window.removeEventListener(resize);
        }, { once: true });
      });
    } else {
      window.addEventListener('resize', fn);
    }
  }, 0);
}
