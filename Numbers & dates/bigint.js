'use strict'

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER + 1);
console.log(Number.MAX_SAFE_INTEGER + 2);
console.log(Number.MAX_SAFE_INTEGER + 3);

console.log(343545464646435653243343n);

console.log(BigInt(3435454));

// operations

console.log(10000n + 10000n);
console.log(21203348459496030486864n * 1000000n);

const huge = 13435958503343534325n;
const num = 22;

console.log(huge * BigInt(num));

console.log(typeof 22n);