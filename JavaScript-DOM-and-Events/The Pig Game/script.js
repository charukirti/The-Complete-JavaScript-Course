'use strict'

// Selecting Elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting Conditions

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden')

const score = [0, 0];
let currentScore = 0;
let activePLayer = 0;
const switchPlayer = function() {
    document.getElementById(`current--${activePLayer}`).textContent = 0;
    activePLayer = activePLayer === 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}
// Rolling Dice

btnRoll.addEventListener('click', ()=>{

    // 1. Generating Random Dice Number
const dice = Math.trunc(Math.random() * 6) + 1;

console.log(dice);
    // 2. Display Dice
diceEl.classList.remove('hidden');
diceEl.src = `dice-${dice}.png`;
    // 3. Check for rolled 1, if yes then switch player
    if(dice !== 1) {
        currentScore += dice;
        document.getElementById(`current--${activePLayer}`).textContent = currentScore;
        // current0El.textContent = currentScore;
    }else {
        
       switchPlayer()
    }
})

btnHold.addEventListener('click',()=>{
    score[activePLayer] += currentScore;
    // console.log( score[activePLayer]);
    document.getElementById(`score--${activePLayer}`).textContent = score[activePLayer]; 

if(score[activePLayer] >= 30) {
    document.querySelector(`.player--${activePLayer}`).classList.add('player--winner');

    document.querySelector(`.player--${activePLayer}`).classList.remove('player--active');
}else {

    switchPlayer()
}
})