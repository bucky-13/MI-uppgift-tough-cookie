const hamburgerBtn = document.querySelector("#hamburger-btn");
const navLinks = document.querySelector(".nav-links");
const cookiesYes = document.querySelector("#cookies-yes");
const cookiesNo = document.querySelector("#cookies-no");
const cookieWindow = document.querySelector(".cookie-window");

hamburgerBtn.addEventListener("click", () => {
  navLinks.classList.toggle("nav-links-open");
  hamburgerBtn.classList.toggle("active");
});

cookiesNo.addEventListener("click", () => {
  cookieWindow.classList.toggle("cookie-window-closed");
});
cookiesYes.addEventListener("click", () => {
  cookieWindow.classList.toggle("cookie-window-closed");
  console.log("Now that's a Tough Cookie :-)");
});
