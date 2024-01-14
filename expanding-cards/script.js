let imgConts = document.querySelectorAll(".imgCont");
let figcaptions = document.querySelectorAll("figcaption");
let activeFigcaption = document.querySelector(".imgCont.active figcaption");

activeFigcaption.style.display = "initial";

let transitionDuration = 0.6;

imgConts.forEach((imgCont) => {
  imgCont.style.transitionDuration = transitionDuration + "s";

  imgCont.addEventListener("click", function (e) {
    let clickedImg = e.target;

    imgConts.forEach((imgCont) => {
      imgCont.classList.remove("active");
    });

    clickedImg.classList.add("active");

    figcaptions.forEach((caption) => {
      caption.style.display = "none";
    });

    let clickedImgFigcaption = clickedImg.querySelector("figcaption");

    setTimeout(() => {
      clickedImgFigcaption.style.display = "initial";
    }, transitionDuration * 1000 + 100);
  });
});
