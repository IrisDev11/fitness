const initSliderReviews = () => {
  if (document.querySelector('.reviews__slider')) {
    // eslint-disable-next-line no-new, no-unused-vars, no-undef
    let swp = new Swiper('.reviews__slider', {
      observer: true,
      slidesPerView: 1,
      slidePerGroup: 1,
      speed: 1e3,
      infinite: false,
      loop: false,
      navigation: {
        nextEl: '.reviews__toggle--next',
        prevEl: '.reviews__toggle--prev',
      },
    });
  }
};

export {initSliderReviews};
