"use strict";

/* 
    - Spread operator is used to expand an array into all its elements. 

    - inshort it means 'unpacking all the array elements at once. 

    - we use spread operator whenever we would otherwise write multiple values separated by commas & arguments passed in function

    - whenever we need to print element individually we use spread operator

    - spread operators takes the all the elements out of the array and also dosen't creates new variables

    - we can use arrays to copy elements 

    - merge to arrays together

    - We can use spread operator with any iterables

    - Iterable are :- Array's, String, Maps and Sets but not Object
*/

const arr = [3, 4, 5];
const newBadArray = [1, 2, arr[0], arr[1], arr[2]];
console.log("With out spread operator ", newBadArray);

/* Using spread operator */
const newArr = [1, 2, ...arr];
console.log("with spread operator ", newArr);



const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  /* Added object to previous code block */

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "18:00",
    address,
  }) {
    // console.log(starterIndex, mainIndex, time, address);
    console.log(
      `Order recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
};

// const ingredient = [
//   prompt("Let's make pasta!, Ingredient 1?"),
//   prompt("Let's make pasta!, Ingredient 2?"),
//   prompt("Let's make pasta!, Ingredient 3?"),
// ];

// console.log(ingredient);

// restaurant.orderPasta(...ingredient);

const newMenu = [...restaurant.mainMenu, "Vada Pav"];
console.log(newMenu);

/* copy array using spread operator */

const mainMenuCpy = [...restaurant.mainMenu];
console.log("copied array", mainMenuCpy);

/* Join two arrays together  */

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log("joined arrays", menu);

/* using spread operators with string */

const str = "charukirti";
const letters = [...str, " ", "s."];
console.log(letters);

console.log(...str); /* same as the array */
