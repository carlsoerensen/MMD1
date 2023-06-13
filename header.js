// document.addEventListener("DOMContentLoaded", function() {
//   let hamburger = document.querySelector(".hamburger");
//   let nav = document.querySelector("nav");
//   hamburger.addEventListener("click", function() {
//     hamburger.classList.toggle("active");
//     nav.classList.toggle("active");
//   });
// });

// // Toggle menu function
// function toggleMenu() {
//   const menu = document.querySelector('.header-left');
//   menu.classList.toggle('active');
// }

// // Event listener for burger menu
// const burgerMenu = document.querySelector('.hamburger');
// burgerMenu.addEventListener('click', toggleMenu);

hamburger = document.querySelector(".hamburger");
nav = document.querySelector("nav");
        hamburger.onclick = function() {
            nav.classList.toggle("active");
        }