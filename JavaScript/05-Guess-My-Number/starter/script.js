"use strict";

const random = Math.trunc(Math.random() * 20) + 1;
console.log(`Random Number - ${random}`);

document.querySelector(".check-btn").addEventListener("click", function () {
  const guessedNumber = Number(document.querySelector(".numberInput").value);

  if (!guessedNumber) {
    document.querySelector(".startGuess").textContent = "⛔️ Not a number";
  } else if (guessedNumber > 20) {
    document.querySelector(".startGuess").textContent =
      "⛔️ Number hign than 20";
  } else if (random !== guessedNumber) {
    let currentScore = Number(
      document.querySelector(".score-number").textContent
    );
    if (currentScore === 1) {
      document.querySelector(".startGuess").textContent = "Lost the Gameee";
      document.querySelector(".score-number").textContent = 0;
    } else {
      document.querySelector(".score-number").textContent = String(
        currentScore - 1
      );

      if (guessedNumber > random) {
        document.querySelector(".startGuess").textContent = "📈 Too high";
      } else if (guessedNumber < random) {
        document.querySelector(".startGuess").textContent = "📉 Too Low";
      }
    }
  } else if (random === guessedNumber) {
    let currentScore = Number(
      document.querySelector(".score-number").textContent
    );
    document.querySelector(".highscore-number").textContent =
      String(currentScore);

    document.querySelector(".guesss").textContent = String(random);
    document.querySelector(".startGuess").textContent = "Correct Number🎉🎉🎉";
    document.querySelector(".hint").textContent = "";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".guesss").style.width = "30rem";
  }
});
