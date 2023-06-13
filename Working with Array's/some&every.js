'use strict'

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

// Equality
console.log(movements.includes(-130));

// Condition
const anyDeposit = movements.some(mov => mov > 1500);
console.log(anyDeposit)   


// every
// If all the elements passes the condition then every mth returns the true

console.log(movements.every(mov => mov > 0));