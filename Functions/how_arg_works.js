'use strict'

const flight = 'LH123';
const charu = {
    name : 'Charukirti',
    passport : 12778394512,
}

const checkIn = function(flightNum , passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr.' + passenger.name;

    if(passenger.passport === 12778394512) {
        alert('Check IN');
    } else {
        alert('Wrong passport');
    }
}

// checkIn(flight, charu);
console.log(flight);
console.log(charu);


/* passing a primitive type to a function is really just a same as creating a copy outside of a function */

/* OTOH passing object  */

const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 1000000000);
}

newPassport(charu);
checkIn(flight, charu)