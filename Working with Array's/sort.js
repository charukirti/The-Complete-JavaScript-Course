'use strict'


// Strings

const owners = ['Charukirti', 'Jonas', 'Adam', 'Martha'];
console.log(owners);
console.log(owners.sort());
console.log(owners);

// Numbers
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);
// console.log(movements.sort());

// return < 0 a, B
// return > 0 b, A

/* here A is a current value and B is a next value */
movements.sort((a, b) => a - b);

console.log(movements);

movements.sort((a, b) => b - a)

console.log(movements);