"use strict";
const btnCheckbox = document.querySelector("#btn-checkbox");
const monthly = document.querySelectorAll(".monthly");
const annually = document.querySelectorAll(".annually");

const switcher = () => {
  if (btnCheckbox.checked === true) {
    monthly.forEach((month) => (month.style.display = "none"));
    annually.forEach((annual) => (annual.style.display = "block"));
  }
  if (btnCheckbox.checked === false) {
    monthly.forEach((month) => (month.style.display = "block"));
    annually.forEach((annual) => (annual.style.display = "none"));
  }
};

btnCheckbox.addEventListener("click", switcher);
