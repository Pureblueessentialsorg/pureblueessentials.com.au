import Swiper, { Navigation, Thumbs, Lazy, Pagination, Autoplay, EffectFade } from 'swiper';

const swiperShopThumbs = new Swiper('#js-swiperShopThumbs', {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
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

// document.addEventListener('DOMContentLoaded', function() {
//   document.querySelectorAll('img').forEach(function(img){
//    img.onerror = function(){this.style.display='none';};
//   })
// });

/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "swiperHome" }]*/
const swiperHome = new Swiper('#js-swiperHome', {
  // configure Swiper to use modules
  modules: [Navigation, Thumbs, Pagination, Autoplay, EffectFade],
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
  autoplay: {
    delay: 4000,
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  // on: {
  //   afterInit: function() {
  //     lazySizes.autoSizer.checkElems();
  //   }
  // }
});


function swipe(dropId, swiperInstance) {
  const elem = document.getElementById(dropId);
  if (elem) {
    elem.addEventListener('change', () => {
      // check how many slides there are, includes a dublicate at start and end
      const slidesLen = swiperInstance.slides.length; // 17
      // check how many designs there are
      const designs = elem.length //12
      // account for extra photos at the start of gallery which arent numbered designs
      const extraSlides = slidesLen - designs - 2 // 3
      // move to the desired slide 
      // e.g 1st design selectedIndex = 0 + 3 + 1 = 3 (4th slide)
      const slideTo = elem.selectedIndex + extraSlides + 1 // + 1 for the duplicate slide at start
      swiperInstance.slideTo(slideTo)
    })
  }
}

swipe('js-designs', swiperShopMain);
