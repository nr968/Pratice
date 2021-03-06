"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

function setTextContent(cssClass, text) {
  document.querySelector(cssClass).textContent = text;
}

document.querySelector(".check-btn").addEventListener("click", function () {
  const guessedNumber = Number(document.querySelector(".numberInput").value);

  //if guessed number is 0
  if (!guessedNumber) {
    setTextContent(".startGuess", "βοΈ Not a number...");
  }

  //if guessed number is >20
  else if (guessedNumber > 20) {
    setTextContent(".startGuess", "βοΈ Number hign than 20...");
  }

  //if guessed number between 1-20
  else {
    //if guessed number != secertNumber
    if (secretNumber !== guessedNumber) {
      if (score === 1) {
        setTextContent(".startGuess", "π₯ You Lost the Gamee");
        setTextContent(".score-number", 0);
      } else {
        score--;
        setTextContent(".score-number", score);
        setTextContent(
          ".startGuess",
          guessedNumber > secretNumber ? "π Too high..." : "π Too Low..."
        );
      }
    }

    //if guessed number === secertNumber
    else if (secretNumber === guessedNumber) {
      highScore = Number(
        document.querySelector(".highscore-number").textContent
      );

      if (score > highScore) {
        highScore = score;
        setTextContent(".highscore-number", highScore);
      }

      setTextContent(".guesss", secretNumber);
      setTextContent(".startGuess", "Correct Numberπππ");
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".guesss").style.width = "30rem";
    }
  }
});

//To play the Game Again
document.querySelector(".again").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guesss").style.width = "15rem";
  setTextContent(".guesss", "?");
  document.querySelector(".numberInput").value = "";
  setTextContent(".startGuess", "Start Guessing...");
  score = 20;
  document.querySelector(".score-number").textContent = score;
  setTextContent(".score-number", score);
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
