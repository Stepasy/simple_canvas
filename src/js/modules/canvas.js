/* eslint-disable */

const IMG = ($ => {

    const init = () => {
        _make_base();
    };

    let canvas = document.getElementById('viewport');
    let context = canvas.getContext('2d');

    let _make_base = () => {
        let base_image = new Image();
        base_image.src = '/assets/images/1.jpeg';
        base_image.onload = () => {
            canvas.width = base_image.width;
            canvas.height = base_image.height;
            context.drawImage(base_image, 0, 0);
        }
    }

    return {
        init
    };

})(jQuery);

export default IMG;