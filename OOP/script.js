'use strict'


/* // Using constructor functions

- constructor function is just like a normal function

- and the only difference is that we use a new keyword with constructor function

- name of the all constructor function starts with the capital letters. 
 
- With arrow functions, constructor function will not work. just because arrow functions does not have their own this keyword.


*/


const Person = function (firstName, birthYear) {
    // console.log(this);

    // instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    // never create function inside constructor
    // this.calcAge = function(){
    //     console.log(2024 - this.birthYear);
    // }
}

const john = new Person('John', 2003)
// console.log(john);
/* 

# Behind the scene

1. New empty object is created
2. function is called, this keyword is assigned to new object created at step one
3. newly created obj is linked to prototype
4. function automatically returns empty object

*/

/* Based on constructor we can create as many objects we can */

const jenny = new Person('Jenny', 2004)
const ajay = new Person('Ajay', 2003)
// console.log(jenny, ajay);


// console.log(john instanceof Person);


/* Prototypes */

console.log(Person.prototype);

Person.prototype.calcAge = function () {
    console.log(2023 - this.birthYear);
}

john.calcAge()
jenny.calcAge()

console.log(john.__proto__);