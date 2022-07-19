"use strict";

let random = Math.trunc(Math.random() * 20) + 1;
console.log(random);
let score = 20;
let highScore = 0;

document.querySelector(".check-btn").addEventListener("click", function () {
  const guessedNumber = Number(document.querySelector(".numberInput").value);

  if (!guessedNumber) {
    document.querySelector(".startGuess").textContent = "⛔️ Not a number...";
  } else if (guessedNumber > 20) {
    document.querySelector(".startGuess").textContent =
      "⛔️ Number hign than 20...";
  } else if (random !== guessedNumber) {
    if (score === 1) {
      document.querySelector(".startGuess").textContent =
        "💥 You Lost the Gamee";
      document.querySelector(".score-number").textContent = 0;
    } else {
      score--;
      document.querySelector(".score-number").textContent = String(score);

      if (guessedNumber > random) {
        document.querySelector(".startGuess").textContent = "📈 Too high...";
      } else if (guessedNumber < random) {
        document.querySelector(".startGuess").textContent = "📉 Too Low...";
      }
    }
  } else if (random === guessedNumber) {
    highScore = Number(document.querySelector(".highscore-number").textContent);

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore-number").textContent = String(score);
    }

    document.querySelector(".guesss").textContent = String(random);
    document.querySelector(".startGuess").textContent = "Correct Number🎉🎉🎉";
    document.querySelector(".hint").textContent = "";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".guesss").style.width = "30rem";
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guesss").style.width = "15rem";
  document.querySelector(".guesss").textContent = "?";
  document.querySelector(".numberInput").value = "";
  document.querySelector(".startGuess").textContent = "Start Guessing...";
  score = 20;
  document.querySelector(".score-number").textContent = score;
  random = Math.trunc(Math.random() * 20) + 1;
  console.log(random);
});
