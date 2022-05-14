
export function topNav({  //defaults
  distance = 300,
  parentId = 'js-topNav',
  hiddenClass = 'd-none',
  breakPoint = 576, // sm and larger
} = {}) {
window.addEventListener('DOMContentLoaded', (event) => {



  if (window.innerWidth >= breakPoint) {
    // console.log(`width is greater than ${breakPoint}, with is ${window.innerWidth}`)
   
    const badge = document.getElementById(parentId);  //id of nav bar parent div
    const show = function (elem) {
      elem.classList.remove(hiddenClass);
    };
    const hide = function (elem) {
      elem.classList.add(hiddenClass);
    };

    window.addEventListener('scroll', (event) => {

      if (document.body.scrollTop > distance || document.documentElement.scrollTop > distance) {
        show(badge);
      } else {
        hide(badge);
      }
    });

  }
});
}