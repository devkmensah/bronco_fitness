/** @format */

'use strict';
// 1. Pricing & Plans btn checkbox
const btnCheckbox = document.querySelector('#btn-checkbox');
const monthly = document.querySelectorAll('.monthly');
const annually = document.querySelectorAll('.annually');

const switcher = () => {
  if (btnCheckbox.checked === true) {
    monthly.forEach(month => (month.style.display = 'none'));
    annually.forEach(annual => (annual.style.display = 'block'));
  }
  if (btnCheckbox.checked === false) {
    monthly.forEach(month => (month.style.display = 'block'));
    annually.forEach(annual => (annual.style.display = 'none'));
  }
};
btnCheckbox.addEventListener('click', switcher);

// 2. Smooth scroll effects for about us nav & footer arrow btn
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
