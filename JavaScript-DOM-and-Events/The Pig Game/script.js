"use strict";

// Selecting Elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");


let score, currentScore, activePLayer, playing;

// Starting Conditions
const init = function(){
    score = [0, 0];
     currentScore = 0;
     activePLayer = 0;
     playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    diceEl.classList.add("hidden");
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
};

init();

const switchPlayer = function () {
  document.getElementById(`current--${activePLayer}`).textContent = 0;
  activePLayer = activePLayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};
// Rolling Dice

btnRoll.addEventListener("click", () => {
  if (playing) {
    // 1. Generating Random Dice Number
    const dice = Math.trunc(Math.random() * 6) + 1;

    console.log(dice);
    // 2. Display Dice
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;
    // 3. Check for rolled 1, if yes then switch player
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePLayer}`).textContent =
        currentScore;
      // current0El.textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", () => {
  if (playing) {
    score[activePLayer] += currentScore;
    // console.log( score[activePLayer]);
    document.getElementById(`score--${activePLayer}`).textContent =
      score[activePLayer];

    if (score[activePLayer] >= 100) {
      playing = false;
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player--${activePLayer}`)
        .classList.add("player--winner");

      document
        .querySelector(`.player--${activePLayer}`)
        .classList.remove("player--active");
    } else {
      switchPlayer();
    }
  }
});


btnNew.addEventListener('click', init)