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
const priceIN = "288.99₹";
const priceUS = priceIN.replace("₹", "$");

console.log(priceUS);

const announcement =
  "All passenger come to the boarding door 23, Boarding door 23!";

console.log(announcement.replaceAll("door", "gate"));

// Booleans

const flight = "Air_India A320neo";
console.log(flight.includes("A320"));
console.log(flight.startsWith("Air"));

// practice

const checkBaggage = function (item) {
  const baggage = item.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are not allowed to board");
  } else {
    console.log("Welcome a board");
  }
};

checkBaggage("I have a laptop, some food and pocket Knife");
checkBaggage("I have Sockes and camera");
checkBaggage("I have some snaks and gun for a safty");

/* ------------------ String part 3 ----------------- */

//split
console.log("Chennai + Super + Kings".split(" + "));

console.log("Charukirti Chougule".split(" "));

const [firstName, lastName] = "Charukirti Chougule".split(" ");

const newName = ["Mr", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const capitalizeName = function(name){
  const names = name.split(' ');
  const namesUpper = [];
  for(const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(namesUpper.join(' '));
}

capitalizeName('jessica ann smith davis');
capitalizeName('charukirti Chougule');


// Padding

const message = 'Go to gate 23!';
console.log(message.padStart('25', '+'));

const advice = 'Happy';
console.log(advice.padEnd('25', ':)'));

const maskCreditCard = function(number) {
  const str = String(number);
  const last = str.slice(-4);
  return last.padStart(str.length, '*')
}

console.log(maskCreditCard(190000430095));

// repeat 
const message2= 'Bad weather, all departues delayed...';

console.log(message2.repeat(4));

