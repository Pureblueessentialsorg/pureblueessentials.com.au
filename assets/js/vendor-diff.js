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

// bootstrap js - import the whole library
// import 'bootstrap';

// example initialization from this import 
// var scrollSpy = new bootstrap.ScrollSpy(document.body, {
//   target: '#navbar-example'
// })

// alternatively only import the modules that you need from the library
import {
  // Alert, // Control alerts
  // Button, // complex button toggles etc
  // Carousel, // required for carousel
  Collapse, // required for mobile collapse menu
  // Dropdown, // not required for navbar only for custom dropdowns
  // Modal, // modal popups
  // Popover, // popovers
  // ScrollSpy, // auto update active link for 1 page sites
  Tab, // Tabs
  // Toast, // Toasts
  // Tooltip , // Tooltips
} from 'bootstrap';

// example initialization from this import 
// var scrollSpy = new bootstrap.ScrollSpy(document.body, {
//   target: '#navbar-example'
// })