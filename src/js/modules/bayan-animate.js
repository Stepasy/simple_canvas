/* eslint-disable*/

// const animate = ($ => {

//   const $section = $('.four-slide');

//   if (!$section) return;

//   const $holder = $section.find('.slide');
//   const $frame1 = $section.find('.frame1');
//   const $frame2 = $section.find('.frame2');
//   const $frame3 = $section.find('.frame3');
//   const $frame4 = $section.find('.frame4');

//   const ACTIVE = 'active';
//   const OPENER = 'opener';
//   const SHOW = 'show';

//   const init = () => {
//     _bayan();
//   };

//   let _bayan = () => {
//     $holder.hover(function (e) {
//       $holder.removeClass(ACTIVE).removeClass(OPENER);
//       $(this).addClass(ACTIVE);
//       _imgTransform($(this));
//     });
//   };

//   let _imgTransform = (th) => {
//     if (th.find($frame1).length !== 0) {
//       $frame2.addClass(SHOW);
//     } else {
//       $frame2.removeClass(SHOW);
//     }
//     if (th.find($frame4).length !== 0) {
//       $frame3.addClass(SHOW);
//     } else {
//       $frame3.removeClass(SHOW);
//     }
//   }

//   return {
//     init
//   };

// })(jQuery);

// export default animate;

const animate = ($ => {

  const $holder = $('.slide');
  const ACTIVE_CLASS = 'active';
  const CURRENT_CLASS = 'current';
  const INNER_HOLDER_CLASS = 'inner-holder';

  if (!($holder)) return;

  let $checker;

  $(window).on('resize', 'load', () => {
    let $windowWidth = $(window).innerWidth();
    if ($windowWidth < 768) {
      $checker = true;
      console.log($checker);
    } else {
      $checker = false;
      console.log($checker);
    };
    console.log($windowWidth);
  });

  // let _checker = () => {
  //   if ($(window).width() <= 767) {
  //     return;
  //   };
  // }

  // _checker();

  // let waitForFinalEvent = (() => {
  //   let timers = {};
  //   return (callback, ms, uniqueId) => {
  //     if (timers[uniqueId]) {
  //       clearTimeout(timers[uniqueId]);
  //     }
  //     timers[uniqueId] = setTimeout(callback, ms);
  //   };
  // })();

  // $(window).resize(() => {
  //   waitForFinalEvent(function () {
  //     _checker();
  //   }, 500);
  // });

  const init = () => {

    // if ($checker) return;

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

        console.log(prevActiveIndex);

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
    })
  }

  return {
    init
  };

})(jQuery);

export default animate;