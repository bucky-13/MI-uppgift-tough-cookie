const hamburgerBtn = document.querySelector("#hamburger-btn");
const navMenu = document.querySelector(".nav-menu");
const cookiesYes = document.querySelector("#cookies-yes");
const cookiesNo = document.querySelector("#cookies-no");
const footer = document.querySelector("footer");

hamburgerBtn.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu-open");
  hamburgerBtn.classList.toggle("active");
});

cookiesNo.addEventListener("click", () => {
  footer.classList.toggle("footer-closed");
});
cookiesYes.addEventListener("click", () => {
  footer.classList.toggle("footer-closed");
});
