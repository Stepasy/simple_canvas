/* eslint-disable*/

const GALLERY = ($ => {

    const init = () => {
        _resizeListener();
    };

    let _resizeListener = () => {
        window.onresize(_breakPointCheck());
    }

    const _breakPointCheck = () => {
        if (window.innerWidth < '768') {
            _initGallery();
            console.log(123);
        } else return;
    }

    let _initGallery = () => {
        let mySwiper = new Swiper('.solutions', {
            wrapperClass: 'accordion',
            direction: 'vertical',
            loop: true,
            slideClass: 'slide',
        })
    }

    return {
        init
    };

})(jQuery);

export default GALLERY;