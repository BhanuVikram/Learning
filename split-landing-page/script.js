let ps = document.querySelector(".ps");
let xbox = document.querySelector(".xbox");

ps.addEventListener("mouseenter", () => {
  ps.style.width = "75%";
  xbox.style.width = "25%";
});

ps.addEventListener("mouseleave", () => {
  ps.style.width = "50%";
  xbox.style.width = "50%";
});

xbox.addEventListener("mouseenter", () => {
  xbox.style.width = "75%";
  ps.style.width = "25%";
});

xbox.addEventListener("mouseleave", () => {
  xbox.style.width = "50%";
  ps.style.width = "50%";
});
