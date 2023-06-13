'use strict';

let arr = ['a', 'b', 'c', 'd', 'e'];

// .slice() Method

console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());

// .splice() Method

console.log(arr.splice(2));
arr.splice(2,4)
console.log(arr);

// .reverse() method

 arr = ['a', 'b', 'c', 'd', 'e'];

 const arr2 = ['j', 'l', 'o', 'k', 'n', 'm', 'p'];

 console.log(arr2.reverse());
//  console.log(arr2.sort());

// .concate() method

const letters = arr.concat(arr2);
console.log(letters);