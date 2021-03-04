/** @format */

'use strict';

// 1. Smooth scroll effects for about us nav & footer arrow btn
const aboutNav = document.querySelector('.about-nav');
const arrow = document.querySelector('.arrow');
const footer = document.querySelector('#footer');
const header = document.querySelector('#header');
console.log(aboutNav, arrow, footer, header);

aboutNav.addEventListener('click', function (e) {
  e.preventDefault();
  footer.scrollIntoView({ behavior: 'smooth' });
});

arrow.addEventListener('click', function (e) {
  e.preventDefault();
  header.scrollIntoView({ behavior: 'smooth' });
});
