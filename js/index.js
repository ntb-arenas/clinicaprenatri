const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
// const header = document.querySelector("header");
const body = document.querySelector("body");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  // header.classList.toggle("touch-none");
  body.classList.toggle("touch-none");
});
