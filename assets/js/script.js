'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 10) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});



/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

navToggleBtn.addEventListener("click", function () {

  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
  elemToggleFunc(document.body);

});



/**
 * skills toggle
 */

const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

toggleBtns.forEach(btn => {
  btn.addEventListener("click", function () {
    // Remove active class from all buttons
    toggleBtns.forEach(b => b.classList.remove("active"));
    // Add active class to the clicked button
    this.classList.add("active");

    // Check which button is active and set classes accordingly
    // toggleBtns[0] is "Skills", toggleBtns[1] is "Tools"
    if (toggleBtns[0].classList.contains("active")) {
      // Skills button is active
      toggleBtnBox.classList.remove("active"); // Indicator for "Skills"
      skillsBox.classList.remove("active");    // Show skills-list
    } else {
      // Tools button is active
      toggleBtnBox.classList.add("active");    // Indicator for "Tools"
      skillsBox.classList.add("active");       // Show tools-list
    }
  });
});



/**
 * dark & light theme toggle
 */

const themeToggleBtn = document.querySelector("[data-theme-btn]");

themeToggleBtn.addEventListener("click", function () {

  elemToggleFunc(themeToggleBtn);

  if (themeToggleBtn.classList.contains("active")) {
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");

    localStorage.setItem("theme", "light-theme");
  } else {
    document.body.classList.add("dark-theme");
    document.body.classList.remove("light-theme");

    localStorage.setItem("theme", "dark-theme");
  }

});

/**
 * check & apply last time selected theme from localStorage
 */

if (localStorage.getItem("theme") === "light-theme") {
  themeToggleBtn.classList.add("active");
  document.body.classList.remove("dark-theme");
  document.body.classList.add("light-theme");
} else {
  themeToggleBtn.classList.remove("active");
  document.body.classList.remove("light-theme");
  document.body.classList.add("dark-theme");
}