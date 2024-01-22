let togglers = document.querySelectorAll(".toggler");

togglers.forEach((t) => {
  t.addEventListener("click", function () {
    let faq = this.parentNode.parentNode;
    faq.classList.toggle("active");
  });
});
