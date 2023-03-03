"use strict";

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉 Correct Number!';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;


document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value); 
*/

/* Creating secret number */

let SecretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(SecretNumber);
let score = 20;


document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // When no input

  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No number";

    // This is when user win
  } else if (guess === SecretNumber) {
    document.querySelector("body").style.backgroundColor = "#2ecc71";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".message").textContent = "🎉 Correct Number!";
    document.querySelector(".number").textContent = SecretNumber;
    document.querySelector('.highscore').textContent = score;
  } else if (guess > SecretNumber) {
    // This is when guess is high
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too High";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😐 You Lost";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < SecretNumber) {
    // This is when guess is low
    if (score > 1) {
      document.querySelector(".message").textContent = "📉 Too Low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😐 You Lost";
      document.querySelector(".score").textContent = 0;
    }
  }
});


// Logic for again button

document.querySelector('.again').addEventListener('click', function (){
score = 20;
SecretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(SecretNumber);
document.querySelector(".message").textContent = "Start guessing...";
document.querySelector(".score").textContent = score;
document.querySelector(".number").textContent = '?';
document.querySelector('.guess').value = '';
document.querySelector('body').style.backgroundColor = '#222';
document.querySelector(".number").style.width = "15rem";
})