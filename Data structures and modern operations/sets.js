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

/* Set is a collection of unique values */

const orderSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);

console.log(orderSet); /* All the duplicates are removed */

// * Sets are iterables

/* 
 Sets are different from array
  1. Elements are unique
  2. Order is irrelavent
*/

console.log(new Set("Charu"));

/* Set Operations */

// Size : checks the size

console.log(orderSet.size); //3

// has : checks certain element is present or not

console.log(orderSet.has("Pizza"));

// add : used to add element in a set

orderSet.add("Garlic Bread");
orderSet.add("Garlic Bread");
console.log(orderSet);

// delete
orderSet.delete("Risotto");
console.log(orderSet);

// clear
// orderSet.clear();
// console.log(orderSet);

/* Looping through the sets */

for (const order of orderSet) {
  console.log(order);
}

/* Use case

remove dulicates from an array

*/

// EX-1
const staff = ["waiter", "chef", "waiter", "manager", "chef", "waiter"];

const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(
  new Set(["waiter", "chef", "waiter", "manager", "chef", "waiter"]).size
);

console.log(new Set("Charukirti").size);
console.log(new Set("Charukirti Chavagonda Chougule").size);

const resources = new Set([
  "Twitter",
  "YouTube",
  "Scrimba",
  "freeCodeCamp",
  "Udemy",
  "YouTube",
  "Udemy",
]);

console.log(resources);

/* check the size */
console.log(resources.size); //5 unique elements

/* add the elements */
resources.add("Codecademy");
console.log(resources);

/* Check the value exists or not */

console.log(resources.has("Udemy"));

resources.delete("Codecademy");
console.log(resources);

console.log(resources.entries());
console.log(resources.values());

function unique(arr) {
  /* your code */
  const uniqueVal = new Set(arr);
  return uniqueVal;
}
let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];
console.log(unique(values));

const aclean = function (elem) {
  const uniqueAclean = new Set(elem);
  return uniqueAclean;
};

const arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log(aclean(arr));

let myset = new Set().add(1)
.add(2)
.add({})
.add({})

console.log("The size is", myset.size);