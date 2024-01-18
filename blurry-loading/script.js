/*
Count: 0 - 100
Opacity: 1 - 0
Blur: 20 - 0
Interval: 30ms
*/

let timer = setInterval(changes, 5);
let loadValue = 0,
  opacityValue = 1,
  blurValue = 20;

let divEl = document.querySelector("div");
let imgEl = document.querySelector("img");

function changes() {
  loadValue++;
  opacityValue -= 1 / 100;
  blurValue -= 20 / 100;

  if (loadValue > 99) {
    clearInterval(timer);
  }

  divEl.innerHTML = loadValue + "%";
  divEl.style.opacity = opacityValue;
  imgEl.style.filter = `blur(${blurValue}px)`;
}

// const scale = (num, in_min, in_max, out_min, out_max) => {
//   return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
// };
