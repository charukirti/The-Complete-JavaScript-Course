"use strict";

/* 
Map is a data structure we use to map values with keys

like objects data is stored in the form of key & pairs

Difference: In maps key can be any types (objects supports only key wich are string)


*/

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  /* Added object to previous code block */

  openingHours,

  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

const rest = new Map();

// .set() : To add element and return updated map

rest.set("Name", "Raymonde");
rest.set(1, "Kupwad, Sangli");
// console.log(rest.set(2, "Pune, MH"));
// console.log(rest);

rest
  .set("Cate", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("Open", 11)
  .set("close", 23)
  .set(true, "We are open :D")
  .set(false, "We are close :(");

// console.log(rest);

/* .get :- to read data from the map */

// console.log(rest.get("Name"));
// console.log(rest.get(true));
// console.log(rest.get(1));

const time = 11;
// console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

/* .has() : to check item is present or not */

// console.log(rest.has("Cate"));

/* .delete() : to delete item at specific location */
rest.delete(1);
// console.log(rest);

/* .size : size */
// console.log(rest.size);

/* ------------------- Iteraion ------------------------ */

const question = new Map([
  ["Question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["Correct", 3],
  [true, "Correct 🔥"],
  [false, "try again 😢"],
]);

// console.log(question);

const mapHours = new Map(Object.entries(openingHours));
console.log(mapHours);

// console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") {
    console.log(`Answer ${key}: ${value}`);
  }
}

// const answer = Number(prompt('Your answer'));
// console.log(answer);

// console.log(question.get(question.get('Correct') === answer))

