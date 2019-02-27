/* eslint-disable*/

const threeGallery = (($) => {
  const $section = $('.three-slide');

  const ACTIVE = 'current';
  const INNER_HOLDER_CLASS = 'inner-holder';

  const HOLDER = 'solutions';
  const SLIDE = 'slide';
  const WRAPPER = 'accordion';
  const $dislayNone = $('.active-page');

  const widthBreakpoint = 768;

  const SW_HOLDER = 'swiper-container';
  const SW_SLIDE = 'swiper-slide';
  const SW_WRAPPER = 'swiper-wrapper';

  const breakpoint = window.matchMedia(`(min-width:${widthBreakpoint}px)`);

  let mySwiper;

  const _removeActiveSlide = () => {
    $dislayNone.detach();
  }

  const _replaceClasses = (holder, wrapper, slide, chHolder, chWrapper, chSlide) => {
    const $holder = $section.find(`.${holder}`);
    const $slide = $section.find(`.${slide}`);
    const $wrapper = $section.find(`.${wrapper}`);
    const $innerHolder = $section.find(`.${INNER_HOLDER_CLASS}`);
    $holder.removeClass().addClass(chHolder);
    $slide.removeClass().addClass(chSlide);
    $wrapper.removeClass().addClass(chWrapper);
    $innerHolder.removeAttr('style');
    $slide.removeAttr('style');
    if (!($slide.eq(2).hasClass(SW_SLIDE))) $slide.eq(2).addClass('current');
  };

  const _destroySwiper = () => {
    if ($section.length === 0) return;
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
    if (!($slide && $slideAcitve)) return;
    $slide.removeClass(ACTIVE);
    $slideAcitve.addClass(ACTIVE);
  };

  const _breakpointChecker = () => {
    if (breakpoint.matches === true) {
      if (mySwiper !== undefined) _destroySwiper();
      return _removeSwiper();
    }
    if (breakpoint.matches === false) {
      return _removeActiveSlide(), _addSwiper(), _enableSwiper();
    }
  };

  const _enableSwiper = () => {
    mySwiper = new Swiper($section.find(`.${SW_HOLDER}`), {
      slidesPerView: 1,
      direction: 'vertical',
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

export default threeGallery;
