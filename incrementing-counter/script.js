let data = {
  stats: [
    {
      icon: "fa-brands fa-twitter",
      count: 12000,
      caption: "Twitter Followers",
    },
    {
      icon: "fa-brands fa-youtube",
      count: 5000,
      caption: "YouTube Subscribers",
    },
    {
      icon: "fa-brands fa-facebook",
      count: 7500,
      caption: "Facebook Fans",
    },
  ],
};

let html = "";

data.stats.forEach((stat) => {
  html += statTemplate(stat);
});

function statTemplate(s) {
  let stat = `
        <div class="stat">
            <i class="icon ${s.icon}"></i>
            <h2 class="count">${s.count}</h2>
            <p class="caption">${s.caption}</p>
        </div>
    `;
  return stat;
}

let statsCont = document.querySelector(".stats");
statsCont.innerHTML = html;

let countTime = 2000;
let intervals = 20;

data.stats.forEach((stat, index) => {
  let initial = 0;

  let increments = setInterval(function () {
    if (initial >= stat.count) {
      document.querySelectorAll(".count")[index].innerHTML = stat.count;
      clearInterval(increments);
    } else {
      document.querySelectorAll(".count")[index].innerHTML =
        Math.round(initial);
      initial += stat.count / intervals;
    }
  }, countTime / intervals);
});
