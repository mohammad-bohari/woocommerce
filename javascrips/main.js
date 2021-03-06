const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navBar.classList.toggle("open");
});
