import Swiper, { Navigation, Thumbs, Lazy, Pagination, Autoplay } from 'swiper';

const swiperShopThumbs = new Swiper('#js-swiperShopThumbs', {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
  // loop: true, // creates additional slides
  
});

/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "swiperShopMain" }]*/
const swiperShopMain = new Swiper('#js-swiperShopMain', {
  // configure Swiper to use modules
  modules: [Navigation, Thumbs, Lazy],
  spaceBetween: 10,
    // // Disable preloading of all images
    // preloadImages: false,
    // // Enable lazy loading
    // lazy: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: swiperShopThumbs,
  },
  loop: true,
  // on: {
  //   afterInit: function() {
  //     lazySizes.autoSizer.checkElems();
  //   }
  // }
});

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('img').forEach(function(img){
   img.onerror = function(){this.style.display='none';};
  })
});

/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "swiperHome" }]*/
const swiperHome = new Swiper('#js-swiperHome', {
  // configure Swiper to use modules
  modules: [Navigation, Thumbs, Pagination, Autoplay],
  spaceBetween: 10,
    // // Disable preloading of all images
    // preloadImages: false,
    // // Enable lazy loading
    // lazy: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  // autoplay: {
  //   delay: 1000,
  //   pauseOnMouseEnter: true,
  // },
  autoplay:true,
  // on: {
  //   afterInit: function() {
  //     lazySizes.autoSizer.checkElems();
  //   }
  // }
});