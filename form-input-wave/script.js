let labels = document.querySelectorAll("label");

labels.forEach((label) => {
  let html = "";
  label.innerText.split("").forEach((letter) => {
    html += `<span class="letter">${letter}</span>`;
  });
  label.innerHTML = html;

  let delay = 0;
  label.querySelectorAll(".letter").forEach((letter) => {
    letter.style.transitionDelay = delay + "s";
    delay += 0.075;
  });

  let id = label.getAttribute("for");
  let input = document.querySelector("#" + id);

  input.addEventListener("focus", () => {
    label.querySelectorAll(".letter").forEach((letter) => {
      letter.classList.add("active");
    });
  });

  input.addEventListener("blur", () => {
    label.querySelectorAll(".letter").forEach((letter) => {
      letter.classList.remove("active");
    });
  });
});
