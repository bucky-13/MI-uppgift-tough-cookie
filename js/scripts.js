const hamburgerBtn = document.querySelector("#hamburger-btn");
const navMenu = document.querySelector(".nav-menu");

hamburgerBtn.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu-open");
  hamburgerBtn.classList.toggle("active");
});
