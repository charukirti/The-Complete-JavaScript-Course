/* ------ Understanding Closures ------- */

/* 
   
    - 'A function has a access to the variable environment of the execution context in which it was created'

    - 'Closure: VE atached to that function, exactly as it was at the time and place the function was created' 
    
*/

"use strict";

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();

console.dir(booker);
// choice example

const createChoice = function() {
    let choice = 0;

    return function() {
        choice++;
        console.log(`You have only ${choice} Choice / Choices`);
    };
};

const getChoice = createChoice();
getChoice()
getChoice()
getChoice()
getChoice()

console.dir(getChoice);

