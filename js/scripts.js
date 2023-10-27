const hamburgerBtn = document.querySelector("#hamburger-btn");
const navLinks = document.querySelector(".nav-links");
const cookiesYes = document.querySelector("#cookies-yes");
const cookiesNo = document.querySelector("#cookies-no");
const footer = document.querySelector("footer");

hamburgerBtn.addEventListener("click", () => {
  navLinks.classList.toggle("nav-links-open");
  hamburgerBtn.classList.toggle("active");
});

cookiesNo.addEventListener("click", () => {
  footer.classList.toggle("footer-closed");
});
cookiesYes.addEventListener("click", () => {
  footer.classList.toggle("footer-closed");
  console.log("Now that's a Tough Cookie :-)");
});
