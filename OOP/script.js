'use strict'


/* // Using constructor functions

- constructor function is just like a normal function

- and the only difference is that we use a new keyword with constructor function

- name of the all constructor function starts with the capital letters. 
 
- With arrow function constructor function will not work. just because arrow function does not have own this keyword.


*/


const Person = function(firstName, birthYear){

}

new Person('John', 2003)

/* 

# Behind the scene

1. New empty object is created
2. function is called, this keyword is assigned to new object created at step one
3. newly created obj is linked to prototype
4. function automatically returns empty object
*/