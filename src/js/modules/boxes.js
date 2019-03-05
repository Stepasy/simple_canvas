const boxes = (($) => {
  const animation = () => {
    const $boxes = $('.boxes');
    if ($boxes.length === 0) return;

    const BOX = 'box';
    const ACTIVE = 'active';
    const HOVERED = 'hovered';

    const $box = $boxes.find(`.${BOX}`);

    const $delay = 1000;
    let $addingTimer;
    let $removingTimer;

    const classAdding = (el) => {
      $(el).addClass(ACTIVE).removeClass(HOVERED);
    };

    const addingTimer = (el, time) => {
      $addingTimer = setTimeout(() => {
        classAdding(el);
      }, time);
    };

    const stopAddingTimer = () => {
      clearTimeout($addingTimer);
    };

    const classRemoving = (el) => {
      $(el).removeClass(ACTIVE);
      $box.removeClass(ACTIVE);
    };

    const removingTimer = (el, time) => {
      $removingTimer = setTimeout(() => {
        classRemoving(el);
      }, time);
    };

    const stopRemovingTimer = () => {
      clearTimeout($removingTimer);
    };

    const addClass = (el, event) => {
      $(el).on(event, () => {
        if (!($(el).hasClass(ACTIVE))) $(el).addClass(HOVERED);
        addingTimer(el, $delay);
      });
    };

    const removeClass = (el, event) => {
      $(el).on(event, () => {
        stopAddingTimer();
        stopRemovingTimer();
        removingTimer(el, $delay);
        $(el).removeClass(HOVERED);
      });
    };

    $box.each((i, element) => {
      addClass(element, 'mouseenter');
      removeClass(element, 'mouseleave');
    });
  };
  const init = () => {
    animation();
  };

  return {
    init,
  };
})(jQuery);
export default boxes;
