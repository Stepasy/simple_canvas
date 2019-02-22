/* eslint-disable*/

const animate = ($ => {

  const $section = $('.four-slide');

  const $picture = $section.find('.slide-heading');
  const $holder = $section.find('.slide');
  const $active = $section.find('.active.slide');
  const $frame1 = $section.find('.frame1');
  const $frame2 = $section.find('.frame2');
  const $frame3 = $section.find('.frame3');
  const $frame4 = $section.find('.frame4');
  
  const ACTIVE = 'active';
  const OPENER = 'opener';
  const SHOW = 'show';

  if (!($picture && $holder && $active && $frame1 && $frame2 && $frame3 && $frame4)) return;

  const init = () => {
    _bayan();
  };

  let _bayan = () => {
    $holder.hover(function (e) {
      $holder.removeClass(ACTIVE).removeClass(OPENER);
      $(this).addClass(ACTIVE);
      _imgTransform($(this));
    });
  };

  let _imgTransform = (th) => {
    if (th.find($frame1).length !== 0) {
      $frame2.addClass(SHOW);
    } else {
      $frame2.removeClass(SHOW);
    }
    if (th.find($frame4).length !== 0) {
      $frame3.addClass(SHOW);
    } else {
      $frame3.removeClass(SHOW);
    }
  }

  return {
    init
  };

})(jQuery);

export default animate;