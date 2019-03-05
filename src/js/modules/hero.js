const hero = (($) => {
  const animation = () => {
    const $holder = $('.hero');
    const ACTIVE = 'hero-active';
    const $delay = 1000;
    const $window = $(window);

    if ($holder.length === 0) return;

    $window.on('load', () => {
      setTimeout(() => {
        $holder.addClass(ACTIVE);
      }, $delay);
    });
  };

  const init = () => {
    animation();
  };

  return {
    init,
  };
})(jQuery);

export default hero;
