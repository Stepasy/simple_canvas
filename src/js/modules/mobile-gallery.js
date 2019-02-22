/* eslint-disable*/

const gallery = (($) => {
  const $section = $('.four-slide');

  if (!($section)) return;

  const ACTIVE = 'active';
  const OPENER = 'opener';

  const HOLDER = 'solutions';
  const SLIDE = 'slide';
  const WRAPPER = 'accordion';

  const widthBreakpoint = 768;

  const SW_HOLDER = 'swiper-container';
  const SW_SLIDE = 'swiper-slide';
  const SW_WRAPPER = 'swiper-wrapper';

  const breakpoint = window.matchMedia(`(min-width:${widthBreakpoint}px)`);

  let mySwiper;

  const _replaceClasses = (holder, wrapper, slide, chHolder, chWrapper, chSlide) => {
    const $holder = $section.find(`.${holder}`);
    const $slide = $section.find(`.${slide}`);
    const $wrapper = $section.find(`.${wrapper}`);
    $holder.removeClass().addClass(chHolder);
    $slide.removeClass().addClass(chSlide);
    $wrapper.removeClass().addClass(chWrapper);
    $slide.removeAttr('style');
    if (!($slide.eq(2).hasClass(SW_SLIDE))) $slide.eq(2).addClass('current');
  };

  const _destroySwiper = () => {
    mySwiper.destroy(true, true);
  };

  const _removeSwiper = () => {
    _replaceClasses(SW_HOLDER, SW_WRAPPER, SW_SLIDE, HOLDER, WRAPPER, SLIDE);
  };

  const _addSwiper = () => {
    _replaceClasses(HOLDER, WRAPPER, SLIDE, SW_HOLDER, SW_WRAPPER, SW_SLIDE);
  };

  const _startAnimation = () => {
    const $slide = $section.find('.swiper-slide');
    const $slideAcitve = $section.find('.swiper-slide-active');
    $slide.removeClass(ACTIVE);
    $slideAcitve.addClass(ACTIVE);
  };

  const _breakpointChecker = () => {
    if (breakpoint.matches === true) {
      if (mySwiper !== undefined) _destroySwiper();
      return _removeSwiper();
    } if (breakpoint.matches === false) {
      return _addSwiper(), _enableSwiper();
    }
  };

  const _enableSwiper = () => {
    mySwiper = new Swiper($section.find(`.${SW_HOLDER}`), {
      slidesPerView: 1,
      direction: 'vertical',
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
    });
    mySwiper.on('slideChangeTransitionEnd', () => {
      _startAnimation();
    });
  };

  breakpoint.addListener(_breakpointChecker);

  const init = () => {
    _breakpointChecker();
  };

  return {
    init,
  };
})(jQuery);

export default gallery;
