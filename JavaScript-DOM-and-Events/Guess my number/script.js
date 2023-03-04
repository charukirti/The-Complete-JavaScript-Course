"use strict";

/* Creating secret number */

let SecretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(SecretNumber);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // When no input

  if (!guess) {
    displayMessage("⛔ No number");

    // This is when user win
  } else if (guess === SecretNumber) {
    document.querySelector("body").style.backgroundColor = "#2ecc71";
    document.querySelector(".number").style.width = "30rem";
    displayMessage("🎉 Correct Number!");
    document.querySelector(".number").textContent = SecretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== SecretNumber) {
    if (score > 1) {
      displayMessage(guess > SecretNumber ? "📈 Too High" : "📉 Too Low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("😐 You Lost");
      document.querySelector(".score").textContent = 0;
    }
  }
});

// Logic for again button

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  SecretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(SecretNumber);

  displayMessage("Start guessing...");

  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
