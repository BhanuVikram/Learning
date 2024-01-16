let menuOpen = document.querySelector("#menu-open");
let menuClose = document.querySelector("#menu-close");
let container = document.querySelector("#container");
let menu = document.querySelector("#menu");
let navItems = document.querySelectorAll(".nav-item");

menuOpen.addEventListener("click", () => {
  container.classList.add("rotated");
  menu.classList.add("rotated");
  navItems.forEach((navItem) => navItem.classList.add("visible"));
});

menuClose.addEventListener("click", () => {
  container.classList.remove("rotated");
  menu.classList.remove("rotated");
  navItems.forEach((navItem) => navItem.classList.remove("visible"));
});
