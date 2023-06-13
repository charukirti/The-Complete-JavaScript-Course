"use strict";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
console.log("----- for..of-----");
// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log("-----forEach---");

// forEach()

movements.forEach((movement, index, array) => {
  if (movement > 0) {
    console.log(`Movement ${index + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
  }
});

/* ------- forEach() with maps ------ */

console.log("------- forEach() with maps ------ ");

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currencies.forEach(function (val, key, map) {
  console.log(`${key} ${val}`);
});

console.log("------- forEach with Sets ------");

const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);

console.log(currenciesUnique);
currenciesUnique.forEach(function(value, _, map){
  console.log(`${_}: ${value}`);
})