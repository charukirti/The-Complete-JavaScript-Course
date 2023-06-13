'use strict'

const arr = [1,2, 3, 4, 5, 6, 7, 8, 9];
console.log(new Array(1, 2, 3, 4, 5 ,6, 7 ,8 , 9));

// Empty array
const x = new Array(7);
console.log(x);

// x.fill(25) /* It fills entire array with the passed value */

// fill method 

x.fill(1, 3, 5)

console.log(x);

// array.from

const y = Array.from({length: 7}, ()=> 1);
console.log(y);

const z = Array.from({length:7}, (c, i) => i + 1);
console.log(z);