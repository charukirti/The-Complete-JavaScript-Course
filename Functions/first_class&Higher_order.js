"use strict";

/* 

* First Class functions

- In JS function are treated as first class citizens
- This means functions are simply values 
- Functions are just another type of object


* Higher-order functions

- A function that receives another function as an argument, that returns a new function, or both
- This only possible because of first class functions

*/

/*  Creating higher order functions */

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWords = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

const transformer = function (str, f) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${f(str)}`);

  console.log(`Transformed by: ${f.name}`);
};

transformer("JavaScript is the best!", upperFirstWords);
transformer("JavaScript is the best!", oneWord);

const high5 = function(){
    console.log('👋');
}


/* JS uses callbacks all the time 
1. help to split code into more reusable and inter-connected parts.
*/

document.body.addEventListener('click', high5);

['Spiderman', 'Captain America', 'Iron Man', 'Thor', 'Hulk', 'Black Widow'].forEach(high5);

