/* eslint-disable */

const ANIMATE = ($ => {

    const init = () => {
        _animate();
    };

    let holder = $('.canvas-holder');
    let photo = $('#viewport');

    if (!(holder && photo)) return;

    let _animate = () => {
        let tween_global;
        photo
            .mouseenter(() => {
                let tween = new TweenMax.to(photo, 2, {
                    width: "200px",
                    height: "150px"
                });
                tween_global = tween;
            })
            .mouseleave(() => {
                tween_global.reverse();
            });
    }

    return {
        init
    };

})(jQuery);

export default ANIMATE;