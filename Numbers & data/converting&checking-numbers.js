'use strict'

'In js numbers are represented internally as floating point number'
'Numbers are always stored in binary format'
console.log(23 === 23.0);

console.log(0.1 + 0.2 === 0.3);

/* string to number */

'Number()'

console.log(Number('47'));
console.log(+ '47');

/* parsing */

console.log(Number.parseInt('50px', 10)); // here string needs to start with a number
console.log(Number.parseInt('e25', 10)); // NaN

console.log(Number.parseFloat('2.5rem'));

/* isNaN */

// To check only if it is NaN
console.log(Number.isNaN(+'25c'));
console.log(Number.isNaN(23 / 0));

/* Using .isFinte() is the best way to check if value is a number */
console.log(Number.isFinite(23 / 0));
console.log(Number.isFinite(25));
console.log(Number.isFinite('20'));

// isInteger()
console.log(Number.isInteger(25));
console.log(Number.isInteger('25'));

/* practice */

console.log(Number.parseInt('25vw'));
console.log(Number.parseInt('5E'));
console.log(Number.parseFloat('25.2rem'));
console.log(Number.parseFloat('25.5em'));
console.log(Number.isNaN(56));
console.log(Number.isNaN('25cc'));
console.log(Number.isNaN(+'25c'));
console.log(Number.isFinite(23 / 0));
console.log(Number.isFinite(25));
console.log(Number.isInteger(25));
console.log(Number.isInteger('225c'));