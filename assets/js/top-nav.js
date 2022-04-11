
export function topNav({  //defaults
  distance = 300,
  parentId = 'js-topNav',
  hiddenClass = 'd-none',
} = {}) {

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