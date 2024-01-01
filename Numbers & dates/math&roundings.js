'use strict'

// '.sqrt() - to get the square root'

console.log(Math.sqrt(64));
console.log(64 ** (1 / 2));

// .max() - to get maximum value

console.log(Math.max(2, 34, 54.5, 44));

// .min() - to get minimum value 

console.log(Math.min(21, 32, 3, 34, -8));

console.log(Math.PI);

// .random() - to get random value bet 0 - 1
console.log(Math.trunc(Math.random() * 8) + 1);

const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + 1) + min;
console.log(randomInt(10, 20));

// rounding 

console.log(Math.trunc(23.45587121));

// .round()

console.log(Math.round(23.345));

// .floor()

console.log(Math.floor(23.3));
console.log(Math.floor('23.6'));

// .ceil()
console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));

/* rounding of decimal */

console.log((2.7).toFixed(0));
console.log((4.5853).toFixed(3));
console.log((4.5853).toFixed(2));
console.log(+(4.5853).toFixed(2));

/* --------- practice ------------ */

console.log(Math.sqrt(25));

console.log(Math.max(32, 2, 33, 21, 34, 12));

console.log(Math.min(32, 2, 33, 21, 34, 12));

console.log(Math.PI);

console.log(Math.random());
console.log(Math.trunc(Math.random() * 8) + 1);

console.log(Math.round(25.5648));

console.log(Math.floor(45.255));