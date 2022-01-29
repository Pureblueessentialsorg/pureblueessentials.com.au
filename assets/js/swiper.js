import Swiper, { Navigation, Pagination, Thumbs } from 'swiper';

var swiperShopThumbs = new Swiper('#js-swiperShopThumbs', {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});

/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "swiperShop" }]*/
var swiperShop = new Swiper('#js-swiperShop', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination, Thumbs],
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: swiperShopThumbs,
  },
});