'use strict'
const arr = [[1,2,3], [4, 5, 6], 7, 8];
console.log(arr);
console.log(arr.flat());


const arrDeep = [[[1,2],3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));