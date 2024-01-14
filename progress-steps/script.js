let prev = document.querySelector("#prev");
let next = document.querySelector("#next");
let progressLine = document.querySelector(".progress-line");
let stepsCont = document.querySelector(".steps-cont");
let steps = document.querySelectorAll(".steps");

let currentStep = 1;

next.addEventListener("click", () => {
  steps.forEach((step) => {
    step.style.transitionDelay = "0.7s";
  });

  progressLine.style.width = (100 / 3) * currentStep + "%";

  currentStep++;

  document
    .querySelector(".steps:nth-child(" + currentStep + ")")
    .classList.add("active");

  btnHandler();
});

prev.addEventListener("click", () => {
  steps.forEach((step) => {
    step.style.transitionDelay = "unset";
  });

  let currentWidth = parseInt(progressLine.style.width);
  progressLine.style.width = currentWidth - parseInt(100 / 3) + "%";

  document
    .querySelector(".steps:nth-child(" + currentStep + ")")
    .classList.remove("active");

  currentStep--;

  btnHandler();
});

function btnHandler() {
  if (currentStep === 1) {
    prev.disabled = true;
  } else {
    prev.disabled = false;
  }

  if (currentStep === 4) {
    next.disabled = true;
  } else {
    next.disabled = false;
  }
}
