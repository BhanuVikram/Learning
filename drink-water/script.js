let cupsCont = document.querySelector(".cups");
let root = document.querySelector(":root");
let compQty = document.querySelector(".completed-qty");
let emptyQty = document.querySelector(".empty-qty");
let input = document.querySelector(".form input");
let form = document.querySelector(".form");
let selectHeading = document.querySelector(".selectHeading");

let liters;
let numCups;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  root.style.setProperty("--completed", "0%");

  let inputVal = input.value;
  let inputML = Math.round(inputVal / 250) * 250;
  liters = inputML / 1000;
  emptyQty.innerText = liters + " L";

  numCups = inputML / 250;

  let html = "";
  for (let i = 0; i < numCups; i++) {
    html += `
              <div class="cup">250 <br>ml</div>
          `;
  }
  cupsCont.innerHTML = html;
  selectHeading.innerText =
    "Select how many glasses of water that you have drank:";

  let cups = document.querySelectorAll(".cup");

  cups.forEach((cup, index) => {
    cup.onclick = function () {
      cups.forEach((cup) => {
        cup.classList.remove("active");
      });

      for (let i = 0; i <= index; i++) {
        cups[i].classList.add("active");
      }

      let percent = ((index + 1) * (100 / cups.length)).toFixed(2) + "%";
      root.style.setProperty("--completed", percent);
      compQty.innerText = percent;

      let qty = liters - (index + 1) * (liters / cups.length) + " L";
      emptyQty.innerText = qty;
    };
  });
});
