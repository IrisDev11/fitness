import {Swiper} from './vendor/swiper';
import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import {setupVideo} from './modules/setup-video';
import {initTabs} from './modules/tabs/init-tabs';
import {initSliderReviews} from './modules/init-slider-reviews';
import {initSliderCoaches} from './modules/init-slider-coaches';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initSliderCoaches();
    initSliderReviews();
    initTabs();
    setupVideo();
    initModals();
    const form = new Form();
    window.form = form;
    form.init();
    // eslint-disable-next-line no-unused-vars
    const swp = new Swiper('.reviews__slider', {
      observer: true,
      slidesPerView: 1,
      slidePerGroup: 1,
      speed: 1e3,
      initialSlide: 0,
      // infinite: false,
      // loop: false,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
