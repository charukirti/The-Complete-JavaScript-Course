'use strict'
const weekdays = ['mon', 'tues', 'wed', 'thu', 'fri', 'sat', 'sun']
const openingHours= {
    [weekdays[3]]: {
      open: 12,
      close: 22,
    },
    [weekdays[4]]: {
      open: 11,
      close: 23,
    },
    [weekdays[6]]: {
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
//   openingHours: openingHours, /* Before ES6 */

/* ES6 Enhanced object literals */
openingHours,  /* We just have to put an object name */


    
  
    orderPizza (mainIngredient, ...otherIngredient) {
      console.log(mainIngredient);
      console.log(otherIngredient);
    },
  };

 