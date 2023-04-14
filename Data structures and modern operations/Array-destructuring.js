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

/* Array destructring :- breaking complex data structure into smaller data structure like variable */

const array = [2, 3, 5];
const [a, b, c] = array;
console.log(a, b, c);

// const [first, , second] = restaurant.categories;

// console.log(first, second);

let [main, , secondary] = restaurant.categories;

// main = secondary;
// secondary = temp;

// console.log(main, secondary);

/* Without temperory variable */

[main, secondary] = [secondary, main];
// console.log(main, secondary);

/* Receive two return values from a function */

console.log(restaurant.order(2, 0)); /* [ 'Garlic Bread', 'Pizza' ] */

const [starter, mainItem] = restaurant.order(2, 0);
console.log(starter, mainItem);

/* Destructuring from nested array */

const nestedArr = [3, 4, [6, 7]];
// const [i, , j] = nestedArr;

const[i, ,[j, k]] = nestedArr;
console.log(i, j, k);

const numbers = [1, 2, 3, 4, 5];
const [m, , l] = numbers;
console.log(m); // 1
console.log(l); // 3

