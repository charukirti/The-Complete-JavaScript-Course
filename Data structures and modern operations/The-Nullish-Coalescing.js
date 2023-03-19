'use strict'

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
  }

restaurant.numGests = 0;

const guest1 = restaurant.numGests ? restaurant.numGests : 10;
// console.log(guest1);

const guest2 = restaurant.numGests || 10;
console.log(guest2);

const guest3 = restaurant.numGests ?? 10;
console.log(guest3);