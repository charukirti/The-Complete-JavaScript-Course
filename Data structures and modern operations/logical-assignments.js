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

  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

const rest1 = {
  name: "capri",
  // numGuest : 0,
  numGuest: 2,
};

const rest2 = {
  name: "la-pizza",
  owner: "Giovnni Rossi",
};

// rest1.numGuest = rest1.numGuest || 10;
// rest2.numGuest = rest2.numGuest || 10;

// console.log(rest1, rest2);

/* logical or operator */

/* 
  syntax = 
            x ||= y

            it will assign y to the x only if the value of x is falsy
  */

rest1.numGuest ||= 10;
rest2.numGuest ||= 10;

console.log(rest1, rest2);

/* Logical Nullish Operator */

/* 
syntax = 
        x ??= y
*/

// rest1.numGuest ??= 10;
// rest2.numGuest ??= 10;

// console.log(rest1, rest2);

/* Logical AND assignment */

/* 
  Syntax :- 
            x &&= y

            It will assign y to the x only if the value of x is true
*/

// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
// console.log(rest1, rest2);

// rest1.owner &&= 'ANONYMOUS';
// rest2.owner &&= 'ANONYMOUS';
// console.log(rest1, rest2);

let name;
name ||= "<ANONYMOUS>";
console.log(name);

const userInfo = {
  firstName: "Tony",
  lastName: "Stark",
};

userInfo.lastName &&= "Shark";
console.log(userInfo); //{ firstName: 'Tony', lastName: 'Shark' }
// The following example uses the logical AND assignment operator to change the last name of a person object if the last name is truthy:

let user = {
  username: "Jane",
};
user.nickname ??= "anonymous";

console.log(user); //


