/** @format */

'use strict';
// 2. Smooth scroll effects for about us nav
const aboutNav = document.querySelector('.about-nav');
const footer = document.querySelector('#footer');

aboutNav.addEventListener('click', function (e) {
  e.preventDefault();
  footer.scrollIntoView({ behavior: 'smooth' });
});
