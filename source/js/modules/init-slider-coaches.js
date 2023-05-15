const initSliderCoaches = () => {
  if (document.querySelector('.coaches__slider')) {
    // eslint-disable-next-line no-new, no-unused-vars, no-undef
    let swp = new Swiper('.coaches__slider', {
      observer: true,
      slidesPerView: 4,
      loop: true,
      spaceBetween: 40,
      speed: 1e3,
      navigation: {
        nextEl: '.coaches__toggle--next',
        prevEl: '.coaches__toggle--prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 4,
        },
      },
    });
  }
};

export {initSliderCoaches};
