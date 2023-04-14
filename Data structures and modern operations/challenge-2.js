"use strict";

const scored = ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"];

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored,
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const entries = Object.entries(scored);
console.log(entries);
/* Task 1 */

for (const [index, player] of game.scored.entries()) {
  console.log(`Goal ${index + 1} : ${player}`);
}

/* Task 2 */
const odds = Object.values(game.odds);

// console.log(odds);
let average = 0;

for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);


/* Task 3 */

for( const [team, odd] of odds.entries()){
  const teamStr = team === 'x' ? 'draw' : `Victory ${game[team]}`;
  console.log(`odd of ${teamStr} ${odd}`);
}