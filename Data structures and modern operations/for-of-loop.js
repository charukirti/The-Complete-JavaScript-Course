"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);
/* for-of loop prints the current element after each iteration */

/* to print element with their indexes we use .entries method.

- it will return array in the form of index and element
*/

for (const item of menu.entries()) console.log(item);

/* using destructuring syntax */

for (const [i, j] of menu.entries()){
  console.log(`element ${j} is present at index ${i}`);
}