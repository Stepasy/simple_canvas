const hero = (($) => {
  const animation = () => {
    const $holder = $('.hero');
    const ACTIVE = 'hero-active';
    const $delay = 1000;

    if ($holder.length === 0) return;

    $holder.on('mouseenter', () => {
      setTimeout(() => {
        console.log(123);
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
