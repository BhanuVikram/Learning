let imgConts = document.querySelectorAll(".imgCont");
let transitionDuration = 0.6;

document.querySelector(".imgCont.active figcaption").style.display = "initial";

imgConts.forEach((imgCont) => {
  imgCont.style.transitionDuration = transitionDuration + "s";

  imgCont.onclick = function (e) {
    let clickedImg = e.target;

    imgConts.forEach((imgCont) => {
      imgCont.classList.remove("active");
    });

    clickedImg.classList.add("active");

    document.querySelectorAll("figcaption").forEach((caption) => {
      caption.style.display = "none";
    });

    setTimeout(() => {
      clickedImg.querySelector("figcaption").style.display = "initial";
    }, transitionDuration * 1000 - 400);
  };
});
