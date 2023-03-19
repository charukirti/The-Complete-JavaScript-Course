'use strict'



/* previous code */

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






/* 
    - They can use any datatype
    - They can return any datatype 
    - They can do short circuting
*/

console.log(4 || 'Charukirti'); /* for the or operator if the first value is truthy then other operand will not executed  */

// console.log('' || 'charukirti'); //o/p :- charukirti
// console.log(true || 0); // o/p:- true
// console.log(undefined || null); // o/p :- null
// console.log(undefined || 0 || '' || 'hello' || 23 || null); // o/p :- hello 'because it is the starting truthy value of this entire chain'


restaurant.numGests = 11;

const guest1 = restaurant.numGests ? restaurant.numGests : 10;
// console.log(guest1);

const guest2 = restaurant.numGests || 10;
// console.log(guest2);

/* ------------ AND Operator --------------- */

console.log('---------------- AND-------------');


/* 
  AND operator will shortcircuit and will return the falsy value 
*/

console.log('charukirti' && 0);
console.log(undefined && null);
console.log(1 && 'string');