/* eslint-disable*/

const ANIMATE = ($ => {

    const $picture = $('.slide-heading');
    const $holder = $('.slide');
    const $active = $('.active.slide');
    const ACTIVE = 'active';
    const OPENER = 'opener';

    if (!($picture && $holder && $active)) return;

    const init = () => {
        _bayan();
    };

    let _bayan = () => {
        $holder.hover(function (e) {
            $holder.removeClass(ACTIVE).removeClass(OPENER);
            $(this).addClass(ACTIVE);
        });
    }

    return {
        init
    };

})(jQuery);

export default ANIMATE;