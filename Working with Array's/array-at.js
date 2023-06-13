'use strict'

const arr = ['😎', '🤣', '😍', '😭', '😁'];
console.log(arr);

console.log(arr[2]);
console.log(arr.at(3));

// getting last element of array
console.log(arr[arr.length-1]);
console.log(arr.slice(-1));

// using at()
console.log(arr.at(-2));

console.log('theck'.at(-2));