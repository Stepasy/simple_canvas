/* eslint-disable*/

const fourAnimate = ($ => {
  const $section = $('.four-slide');
  const SLIDE = 'slide';
  const $holder = $section.find(`.${SLIDE}`);
  const ACTIVE_CLASS = 'active';
  const CURRENT_CLASS = 'current';
  const INNER_HOLDER_CLASS = 'inner-holder';
  const BREAKPOINT = 768;
  if (!($section)) return;

  var waitForFinalEvent = (function () {
    var timers = {};
    return function (callback, ms, uniqueId) {
      if (timers[uniqueId]) {
        clearTimeout(timers[uniqueId]);
      }
      timers[uniqueId] = setTimeout(callback, ms);
    };
  })();

  function accordionSlider() {

    let isMobileHeader;

    $(window).on('resize load', function () {
      waitForFinalEvent(function () {
        isMobileHeader = $(window).width() < BREAKPOINT;
        horizontalSlider();
      }, 500);
    });

    function horizontalSlider() {

      if (isMobileHeader) {
        _destroy();
        return false;
      };

      const positionsPool = [
        [0, 50, 100, 150],
        [50, 50, 100, 150],
        [50, 100, 100, 150],
        [50, 100, 150, 150]
      ];
      const slidesQuantity = positionsPool.length;
      let slideActiveindex = $holder.index($(`.${CURRENT_CLASS}`));
      let StartPositions = positionsPool[slideActiveindex];
      let $preLastInnerHolder = $($holder[slidesQuantity - 2]).find(`.${INNER_HOLDER_CLASS}`);
      $holder.each(function (i, element) {
        let translateValue = StartPositions[i];
        $(element).css({
          'transform': `translateX(-${translateValue}%)`
        })
        $(element).on('mouseenter', function () {
          let prevActiveIndex = $holder.index($(`.${CURRENT_CLASS}`));
          let currentItemStartPosition = StartPositions[i];
          let prevItemStartPosition = StartPositions[prevActiveIndex];
          let ActiveElementIndex = i;
          $($holder[prevActiveIndex]).removeClass(CURRENT_CLASS).removeClass(ACTIVE_CLASS);
          $(this).addClass(CURRENT_CLASS).addClass(ACTIVE_CLASS);
          $holder.each(function (i, element) {
            let currentPosition = positionsPool[ActiveElementIndex][i];
            $(element).css({
              'transform': `translateX(-${currentPosition}%)`
            })
          });
          $preLastInnerHolder.css({
            'transform': 'translateX(0)'
          });
          if (i == slidesQuantity - 1) {
            $preLastInnerHolder.css({
              'transform': 'translateX(50%)'
            })
          }
        })
        $(element).on('mouseleave', function () {
          $(this).removeClass(ACTIVE_CLASS);
        })
      })

      function _destroy() {
        $holder.each(function (i, element) {
          $(element).css({
            'transform': `translateX(0)`
          })
          $(element).unbind('mouseenter');
        })
      }
    }
  }

  const init = () => {
    accordionSlider();
  }

  return {
    init
  };
})(jQuery);
export default fourAnimate;
