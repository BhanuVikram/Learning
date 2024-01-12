import header from "../modules/header.js";
import footer from "../modules/footer.js";

let head = document.querySelector("#header");
let foot = document.querySelector("#footer");

head.innerHTML = header();
foot.innerHTML = footer();