'use strict';

const whoWrapper = document.querySelector('.who__wrapper'),
    whoSection = document.querySelector('.who__section'),
    letWrapper = document.querySelector('.let__wrapper'),
    letSection = document.querySelector('.let__section'),
    servicesWrapper = document.querySelector('.services-wrapper'),
    servicesSection = document.querySelector('.services__section');

function toSecondScreen() {
  if (whoSection.offsetTop < window.scrollY) {
    whoWrapper.classList.remove('fixed');
  }

  if (letSection.offsetTop < window.scrollY) {
    letWrapper.classList.remove('fixed');
  }

  if (servicesSection.offsetTop < window.scrollY) {
    window.removeEventListener('scroll', toSecondScreen);

    servicesWrapper.classList.remove('fixed');
  }
}

window.addEventListener('scroll', toSecondScreen);

VanillaTilt.init(document.querySelectorAll(".js-tilt"));