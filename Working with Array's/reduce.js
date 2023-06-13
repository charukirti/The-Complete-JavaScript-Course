'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements);

// acumulator is like a snowball
const balance = movements.reduce((acc, curr, i, arr) => acc + curr
, 0)

console.log(balance);


let balance2 = 0;
for(const mov of movements) balance2+= mov;
console.log(balance2);

const num = [1, 2, 3, 4, 5];
const total = num.reduce((acc, curr)=> acc + curr, 0);
console.log(total);

