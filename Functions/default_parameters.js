"use strict";

const bookings = [];

const createBooking = function (
  flightNum,
  numPassenger = 1,
  price = 2330 * numPassenger
) {
  /* OLD way ES5 */
  // numPassenger = numPassenger || 1;
  // price = price || 2330;

  const booking = {
    flightNum,
    numPassenger,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123", 2);
createBooking("IN124", undefined, 4000);

const userDetails = [];

const enterDetail = function (
  userName = "ABC",
  eMail = "abc@gmail.com",
  birthDate = "1-1-1991"
) {
  const userDetail = {
    userName,
    eMail,
    birthDate,
  };

  console.log(userDetail);
  userDetails.push(userDetail);
};

enterDetail("Charukirti", undefined, "11-11-2002");
