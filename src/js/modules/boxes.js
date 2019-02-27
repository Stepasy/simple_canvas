/* eslint-disable*/

const boxes = ($ => {

  const init = () => {
    _animation();
  };

  const _animation = () => {
    const $boxes = $('.boxes');
    if ($boxes.length === 0) return;
    const BOX = 'box';
    const ACTIVE = 'active';
    const HOVERED = 'hovered';
    const $box = $boxes.find(`.${BOX}`);
    const $delay = 1000;
    let $timer;

    const _timer = (el, time) => {
      $timer = setTimeout(() => {
        $(el).addClass(ACTIVE).removeClass(HOVERED);
      }, time);
    };

    const _stopTimer = () => {
      clearTimeout($timer);
    };

    const _addClass = (el, event) => {
      $(el).on(event, () => {
        $(el).addClass(HOVERED);
        _timer(el, $delay)
      });
    };

    const _removeClass = (el, event) => {
      $(el).on(event, () => {
        _stopTimer();
        $(el).removeClass(ACTIVE).removeClass(HOVERED);
      });
    };

    $box.each((i, element) => {
      _addClass(element, 'mouseenter');
      _removeClass(element, 'mouseleave');
    });

  }

  return {
    init
  };

})(jQuery);

export default boxes;
