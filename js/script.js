// toggle class active untuk hamburger menu
const navbarnav = document.querySelector(".navbar-nav");
//Ketika Hamburger Menu di Klick
document.querySelector("#hamburger-menu").onclick = () => {
  navbarnav.classList.toggle("active");
};
// click di luar navbar
const hm = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarnav.contains(e.target)) {
    navbarnav.classList.remove("active");
  }
});
