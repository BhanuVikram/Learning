let input = document.querySelector("textarea");
let tagsCont = document.querySelector(".tags");
let replayBtnCont = document.querySelector(".replay");

input.addEventListener("keyup", function (e) {
  replayBtnCont.innerHTML = "";

  if (e.key !== "Enter") {
    let value = input.value;

    let tags = value.split(",");

    tagsCont.innerHTML = "";

    tags.forEach((tag) => {
      let trimmed = tag.trim();
      if (trimmed !== "") {
        let span = document.createElement("span");
        span.className = "choice";
        span.innerText = trimmed;

        tagsCont.append(span);
      }
    });
  } else {
    input.value = "";
    chooseRandom();
  }
});

function chooseRandom() {
  let choices = document.querySelectorAll(".choice");

  let replayBtn = document.createElement("button");
  replayBtn.innerText = "Choose again!";
  replayBtnCont.innerHTML = "";

  let flash = setInterval(function () {
    let random = Math.floor(Math.random() * choices.length);
    choices.forEach((choice) => {
      choice.classList.remove("active");
    });
    choices[random].classList.add("active");
  }, 100);

  setTimeout(function () {
    clearInterval(flash);

    replayBtnCont.append(replayBtn);
  }, 2500);

  replayBtn.addEventListener("click", chooseRandom);
}
