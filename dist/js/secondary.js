/** @format */

'use strict';
/* ----------------------------------------------------------- */
// SMOOTH SCROLL EFFECT FOR ABOUT US NAV
/* ----------------------------------------------------------- */
const aboutNav = document.querySelector('.about-nav');
const footer = document.querySelector('#footer');

aboutNav.addEventListener('click', function (e) {
  e.preventDefault();
  footer.scrollIntoView({ behavior: 'smooth' });
});
