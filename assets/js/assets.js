// import core-js so babel can provide necessarty polyfills
// import 'core-js/stable';
// apply year to footer
// document.getElementById('year').innerHTML = new Date().getFullYear();

const distance = 300;
const parentId = 'js-topNav';
const hiddenClass = 'd-none';

document.addEventListener("DOMContentLoaded", function (event) {


  const badge = document.getElementById(parentId);  //id of nav bar parent div
  const show = function (elem) {
    elem.classList.remove(hiddenClass);
  };
  const hide = function (elem) {
    elem.classList.add(hiddenClass);
  };

  const showOnScroll = function () {
    if (document.body.scrollTop > distance || document.documentElement.scrollTop > distance) {
      show(badge);
    } else {
      hide(badge);
    }
  }
  if (badge) {
    window.addEventListener('scroll', showOnScroll);
  }


});