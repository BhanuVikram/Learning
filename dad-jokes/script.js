let jokeDisplayArea = document.querySelector("#joke");
let getJokeBtn = document.querySelector("#getJoke");

window.addEventListener("load", getJoke);

getJokeBtn.addEventListener("click", getJoke);

function getJoke() {
  fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => (jokeDisplayArea.innerHTML = data.joke))
    .catch((err) => alert(err.message + ". Try again!"));
}

// jokeBtn.addEventListener('click', getJoke)

// getJoke()

// async function getJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   }

//   const res = await fetch('https://icanhazdadjoke.com', config)

//   const data = await res.json()

//   jokeDisplayArea.innerHTML = data.joke
// }
