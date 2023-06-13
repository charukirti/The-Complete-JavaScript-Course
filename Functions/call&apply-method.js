"use strict";
const luftansa = {
  airline: "luftansa",
  iataCode: "LH",
  bookings: [],
  book(flighNumber, name) {
    console.log(
      `${name} booked a seats on ${this.airline} flight ${this.iataCode}${flighNumber}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flighNumber}`, name });
  },
};

console.log(luftansa);
luftansa.book(239, "Charukirti");
luftansa.book(129, "Duckman");

const earwing = {
  airline: "Earwings",
  iataCode: "EW",
  bookings: [],
};

const book = luftansa.book;
/* It does not work */
// book(23, 'Charukirti')

// 1 call method

book.call(earwing, 23, "Pranjali");
console.log(earwing);

book.call(luftansa, 41, "Doctor Strange");
console.log(luftansa);

const airIndia = {
  airline: "Air India Airlines",
  iataCode: "IN",
  bookings: [],
};

book.call(airIndia, 47, "Charles Xavier");

// 2. Apply method

const flightData = [583, "George Cooper"];
book.apply(airIndia, flightData);
console.log(airIndia);

// 3. Bind method

/* 
  - Just like call method, bind method allows us to manually set this keyword for any function call 
  - The main difference is, bind method does not immediately call the function insted it returns the new function where the this keyword is bound

  - in call method we can pass the multiple argument beside the this keyword in bind method we do the same
  \
*/

const bookEr = book.bind(earwing);
bookEr(458, "Steven Smith");

const bookAir = book.bind(airIndia);
bookAir(784, "Feku Sheth");

const bookEw = book.bind(earwing, 23);
bookEw("Jonas");
bookEw("james cooper");

// With event listeners

luftansa.planes = 300;
luftansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

// luftansa.buyPlane()
document
  .querySelector(".buy")
  .addEventListener("click", luftansa.buyPlane.bind(luftansa));

// Partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVat = addTax.bind(null, 0.23);
console.log(addVat(100));
