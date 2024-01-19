let elements = document.querySelectorAll(".content");

window.addEventListener("scroll", animate);
window.addEventListener("resize", animate);

function animate() {
  let vH = window.innerHeight;
  let offset = 200;

  elements.forEach((el) => {
    let top = el.getBoundingClientRect().top;

    if (vH - top < offset) {
      el.classList.add("hide");
    } else {
      el.classList.remove("hide");
    }
  });
}

animate();
