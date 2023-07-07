'use strict'

// create a date

/* 1. new Date() */

// const now = new Date();
// console.log(now);


// console.log(new Date('2023-06-16T14:35:58.457Z'));

// console.log(new Date('December 24, 2013'));

// console.log(new Date(2034, 10, 19, 12, 23, 5));
// console.log(new Date(2034, 10, 33));

// console.log(new Date(0));
// console.log(new Date(3 * 24 * 60 * 60 * 1000));



// working with dates
const future = new Date(2037, 10, 19, 15, 23);
// console.log(future);

// console.log(future.getFullYear());
// console.log(future.getMonth()); // 0 based months
// console.log(future.getDay()); // day of week
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());
// console.log(future.toISOString());
// console.log(future.getTime());

// future.setFullYear(2040)
// console.log(future);

// const dateExt = new Date();

// console.log(dateExt.getTime());
// console.log(dateExt.getHours());
// console.log(dateExt.getMinutes());
// console.log(dateExt.getSeconds());
// console.log(dateExt.getDay());
// console.log(dateExt.getMonth());
// console.log(dateExt.getFullYear());


const future2 = new Date(2037, 10, 19, 15, 23);

console.log(+future2);

const calcDaysPassed = (date1, date2) => Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14, 10, 8))
console.log(days1);

const intel = new Date();
const init = new Intl.DateTimeFormat('en-IN').format(intel);
console.log(intel);
// console.log(intel.toLocaleDateString());
// console.log(intel.toLocaleTimeString());
// console.log(intel.getTimezoneOffset());

