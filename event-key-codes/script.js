window.addEventListener("keydown", (e) => keyfinder(e));

function keyfinder(e) {
  let div1 = document.createElement("div");
  div1.className = "event-info";

  let label1 = document.createElement("label");
  label1.innerText = "event.key";

  let p1 = document.createElement("p");
  p1.className = "info";
  p1.innerText = e.key === " " ? "Space" : e.key;

  div1.append(label1);
  div1.append(p1);

  let div2 = document.createElement("div");
  div2.className = "event-info";

  let label2 = document.createElement("label");
  label2.innerText = "event.keyCode";

  let p2 = document.createElement("p");
  p2.className = "info";
  p2.innerText = e.keyCode;

  div2.append(label2);
  div2.append(p2);

  let div3 = document.createElement("div");
  div3.className = "event-info";

  let label3 = document.createElement("label");
  label3.innerText = "event.code";

  let p3 = document.createElement("p");
  p3.className = "info";
  p3.innerText = e.code;

  div3.append(label3);
  div3.append(p3);

  let container = document.querySelector(".container");

  container.innerHTML = "";

  container.append(div1);
  container.append(div2);
  container.append(div3);

  document.querySelector("h2").style.display = "none";
}
