'use strict';

let whoWrapper = document.querySelector('.who__wrapper'),
    logoSection = document.querySelector('.logo__section');

function toSecondScreen() {
  if (logoSection.offsetHeight < window.scrollY) {
    // console.log('this.scrollY: ', window.scrollY);
    window.removeEventListener('scroll', toSecondScreen);

    whoWrapper.classList.remove('fixed');
  }
}

window.addEventListener('scroll', toSecondScreen);

VanillaTilt.init(document.querySelectorAll(".js-tilt"), {
  max: 5
});