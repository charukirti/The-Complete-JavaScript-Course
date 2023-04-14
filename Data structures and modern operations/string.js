"use strict";

/* String part - 1 */

const airline = "TAP air India";
const plane = "A203";

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);

console.log(airline.length);

/* ------------- string methods ---------------- */

console.log(airline.indexOf("a"));
console.log(airline.lastIndexOf("a"));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E middle seats
  const s = seat.slice(-1);
  if (s === "B" || s === "E") {
    console.log("You got the middle seat 😢");
  } else {
    console.log("You got lucky 😎");
  }
};

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

/* ------------------ String part 2 ----------------- */

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// fix capitalization in name
const passenger = "cHaRu";
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// compair email

const email = "hello@charu.io";
console.log(email);
const logInEmail = " Hello@Charu.io \n";

const lowerCase = logInEmail.toLowerCase();
const trim = lowerCase.trim();
// console.log(trim);

const normalizedEmail = logInEmail.toLowerCase().trim();
console.log(normalizedEmail);

// Replace
const priceIN = '288.99₹';
const priceUS = priceIN.replace('₹', '$');

console.log(priceUS);

const announcement = 'All passenger come to the boarding door 23, Boarding door 23!';

console.log(announcement.replaceAll('door', 'gate'));

// Booleans

const flight = 'Air_India A320neo';
console.log(flight.includes('A320'));
console.log(flight.startsWith('Air'));

// practice
