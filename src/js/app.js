// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

import fourAnimate from './modules/four-bayan-animate';
import fourGallery from './modules/four-mobile-gallery';
import threeGallery from './modules/three-mobile-gallery';
import threeAnimate from './modules/three-bayan-animate';
import boxes from './modules/boxes';
import hero from './modules/hero';

(($) => {
  // When DOM is ready
  $(() => {
    fourAnimate.init();
    fourGallery.init();
    threeGallery.init();
    threeAnimate.init();
    boxes.init();
    hero.init();
  });
})(jQuery);
