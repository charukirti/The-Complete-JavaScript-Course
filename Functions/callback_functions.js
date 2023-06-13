"use strict";

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...otherWord] = str.split(" ");
  return [first.toUpperCase(), ...otherWord].join(" ");
};

// HigherOrderFunction

const transformer = function (str, fn) {
  console.log(`Original string${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer("Charukirti is a dumb person", upperFirstWord);
transformer("Charukirti is a dumb person", oneWord);


/* JS uses callbacks all the time */

const highFive = function() {
    console.log('Hello All 👋');
}

// document.body.addEventListener('click', highFive);

// ['GT', 'CSK', 'MI', 'RCB'].forEach(highFive);

/* ============ Advantages of callbacks =========== */
// 1. Help to split code into more reusable and inter-connected parts.
// 2. Callback functions allow us to do abstraction.

const clicked = function() {
    console.log('It works');
}
const btn = document.getElementById('check').addEventListener('click', clicked)