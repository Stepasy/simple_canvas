/* eslint-disable*/

const boxes = ($ => {

  const init = () => {
    _animation();
  };

  const _animation = () => {
    const $boxes = $('.boxes');
    const BOX = 'box';
    const ACTIVE = 'active';
    const HOVERED = 'hovered';
    const $box = $boxes.find(`.${BOX}`);
    let $time = 3000;

    const _addClass = (el, event) => {
      $(el).on(event, () => {
        $(el).addClass(ACTIVE);
      });
    };

    const _removeClass = (el, event) => {
      $(el).on(event, () => {
        $(el).removeClass(ACTIVE);
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