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
    let $addingTimer;
    let $removingTimer;

    const _classAdding = (el) => {
      $(el).addClass(ACTIVE).removeClass(HOVERED);
    }

    const _addingTimer = (el, time) => {
      $addingTimer = setTimeout(() => {
        _classAdding(el);
      }, time);
    };

    const _stopAddingTimer = () => {
      clearTimeout($addingTimer);
    };

    const _classRemoving = (el) => {
      $(el).removeClass(ACTIVE);
      $box.removeClass(ACTIVE);
    }

    const _removingTimer = (el, time) => {
      $removingTimer = setTimeout(() => {
        _classRemoving(el);
      }, time);
    };

    const _stopRemovingTimer = () => {
      clearTimeout($removingTimer);
    };

    const _addClass = (el, event) => {
      $(el).on(event, () => {
        if (!($(el).hasClass(ACTIVE))) $(el).addClass(HOVERED);
        _addingTimer(el, $delay);
      });
    };

    const _removeClass = (el, event) => {
      $(el).on(event, () => {
        _stopAddingTimer();
        _stopRemovingTimer();
        _removingTimer(el, $delay);
        $(el).removeClass(HOVERED);
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
