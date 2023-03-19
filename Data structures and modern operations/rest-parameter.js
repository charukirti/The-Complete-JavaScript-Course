"use strict";

/* 
    - rest is to pack elements to array
    
*/

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

  orderPizza : function(mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  }
};

restaurant.orderPizza('mushrooms', 'onion', 'olievs', 'spinch');

/* About destructure */


/* Spread because right side of the = operator */
const arr = [2, 4, 5, ...[4, 5, 6]];

/* Rest because left side of the = operator */

const [a, b, ...others] = [2, 3, 4, 6, 7];
// console.log(a, b, others);

const [pizza, ,risotto,  ...otherFoods] = [...restaurant.mainMenu, restaurant.starterMenu];
console.log(pizza, risotto, otherFoods);

const {sat, ...weekdays} = restaurant.openingHours;
console.log(sat, weekdays);

/* About functions */
const add = function(...numbers) {
  // console.log(numbers);
  let sum = 0;
  for(let i = 0; i < numbers.length; i++) sum+=
    numbers[i];
    console.log(sum);
  
}

add(2, 3);
add(5, 3, 7, 2);
add(4, 5, 6, 8, 9, 1, 3, 2);

const nums = [12, 22, 32];
add(...nums);