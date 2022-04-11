// import core-js so babel can provide necessarty polyfills
// import 'core-js/stable';
// apply year to footer
// document.getElementById('year').innerHTML = new Date().getFullYear();

function topNav() {

  distance = 300,
  parentId = 'js-topNav',
  hiddenClass = 'd-none',


  window.addEventListener('scroll', showOnScroll);
  const badge = document.getElementById(parentId);  //id of nav bar parent div
  const show = function (elem) {
    elem.classList.remove(hiddenClass);
  };
  const hide = function (elem) {
    elem.classList.add(hiddenClass);
  };
  function showOnScroll() {
    if (document.body.scrollTop > distance || document.documentElement.scrollTop > distance) {
      show(badge);
    } else {
      hide(badge);
    }
  }
}
topNav();