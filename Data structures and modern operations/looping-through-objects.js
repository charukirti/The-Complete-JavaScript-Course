"use strict";

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

/* Property names */

const properties = Object.keys(openingHours);

let openStr = `We are open on ${properties.length} days:`;

for (const day of Object.keys(openingHours)) {
  //   console.log(day);

  openStr += `${day},`;
}

console.log(openStr);

console.log(properties);

/* Property values */

const values = Object.values(openingHours);

console.log(values);

/* Entire object */
const entries = Object.entries(openingHours);
// console.log(entries);

for (const [key, {open, close}] of entries) {
    // console.log(x);
    console.log(`on a ${key} we open at ${open} and ${close}`);
}
