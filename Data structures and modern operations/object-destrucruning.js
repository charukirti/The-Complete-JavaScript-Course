"use strict";

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

  // orderDelivery: function ({
  //   starterIndex = 1,
  //   mainIndex = 0,
  //   time = "18:00",
  //   address,
  // }) {
  //   console.log(
  //     `Order recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
  //   );
  // },

  orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time = '18:00', address }) {
    // console.log(starterIndex, mainIndex, time, address);
    console.log(
      `Order recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

restaurant.orderDelivery({
  address: "near mnc kupwad",
  starterIndex: 1,
});

restaurant.orderDelivery({
  time: "22.09",
  address: "near mnc kupwad",
  mainIndex: 2,
  starterIndex: 2,
});

/* 
    - To destructure we use curly braces 
    - we need to provide variable names exact the property we want to retrive from objects
*/
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

// console.log(restaurantName, hours, tags);

/* Mutating variables */

let a = 111;
let b = 999;

const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

/* Nested objects */

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
