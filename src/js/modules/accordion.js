/* eslint-disable*/

const ACCORDION = ($ => {

  const init = () => {
    _accordion();
  };

  let _accordion = () => {
    accordion.init({
      id: 'accordion',
      expandWidth: 225,
      itemWidth: 450,
      extpand: 0,
      autoPlay: false,
      animateTime: 400,
      borderWidth: 5,
      deviator: 0,
      bounce: "50px"
    });
  }

  return {
    init
  };

})(jQuery);

export default ACCORDION;