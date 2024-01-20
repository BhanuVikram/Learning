let sounds = document.querySelectorAll("audio");
let btnHTML = "";

sounds.forEach((sound) => {
  let name = sound.getAttribute("id");
  btnHTML += `<button>${name}</button>`;
});

let buttonsDiv = document.querySelector(".buttons");
buttonsDiv.innerHTML = btnHTML;

let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    sounds.forEach((sound) => {
      sound.pause();
      sound.currentTime = 0;
    });
    let id = this.innerText;
    document.getElementById(id).play();
  });
});
