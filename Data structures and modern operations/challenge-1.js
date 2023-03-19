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
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/* Task 1 */
const [players1, players2] = game.players;
console.log(players1, players2);

/* Task 2 */

const [gk, ...restPlayers] = players1;
console.log(gk, restPlayers);

/* Task 3 */
const allPlayers = [...players1, ...players2];
console.log(allPlayers);


/* Task 4 */
const players1Final = ['Thiago', 'Coutinho', 'Perisic', ...players1];
console.log(players1Final);

/* Task 5 */
const {
  odds : {team1, x : draw, team2}, 
}=game;
console.log(team1, draw, team2);

/* Task 6 */
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals scored`);
}

printGoals( 'Davies', 'Muller', 'Lewandowski', 'Kimmich')