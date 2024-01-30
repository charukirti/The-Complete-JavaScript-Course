/* Creating objects with prototypes */

// function Person(name) {
//     this.name = name;
// }

// const personOg = new Person('Ajay')

// // Prototype Property
// function Car(make) {
//     // this.make = make
// }

// Car.prototype.stop = function() {
//     console.log('Car Stopped');
// }

// const myCar = new Car('Toyota')
// myCar.stop()



const person = {
    name: 'Elon',
}


console.log(person);

function Person(fname, lname) {
    this.fname = fname;
    this.lname = lname;
}

Person.prototype.gender = 'male'
Person.prototype.age = 22
Person.prototype.fullName = function(){
    return `${this.fname} ${this.lname}`
}
const personOne = new Person('Elon', 'Musk')
const personTwo = new Person('Bill', 'Gates')

console.log(personOne, personTwo);
console.log(personOne.gender, personTwo.gender);
console.log(personOne.fullName());






