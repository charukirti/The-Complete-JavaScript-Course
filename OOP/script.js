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

// console.log(Person.prototype);

Person.prototype.calcAge = function () {
    console.log(2023 - this.birthYear);
}

// john.calcAge()
// jenny.calcAge()

// console.log(john.__proto__);

/* prototyple inheritance */


// console.log(john.__proto__);
// console.log(john.__proto__.__proto__.__proto__);

// console.log(Person.prototype.constructor);

const arr = [3, 6, 4, 5, 6, 9, 3]
// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
    return [...new Set(this)]
}

// console.log(arr.unique());

// const h1 = document.querySelector('h1')
// console.dir(h1);

const obj = {
    name: 'Charu',
    hello: () => {
        console.log('Hello', this.name);
    }
}

// obj.hello()


/* TODO: Solving coding challenge 1 */

// const Car = function (make, speed) {
//     this.make = make;
//     this.speed = speed;
// }

// Car.prototype.acclerate = function () {
//     this.speed += 20;
//     console.log(`${this.make} is going at ${this.speed} Km/h after accelerate`);
// }

// Car.prototype.break = function () {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed} Km/h after applying break`);
// }


// const toyota = new Car('Toyota', 140)
// const tata = new Car('Nexus', 130)

// console.log(toyota, tata);

// toyota.acclerate()
// toyota.acclerate()
// toyota.break()
// toyota.acclerate()
// toyota.acclerate()


// tata.acclerate()
// tata.acclerate()
// tata.break()
// tata.acclerate()
// tata.acclerate()

/* TODO: Learning about class in js */
// Class expression
// const PersonCl = class()

/* 
* About Javascript Classes
- JavaScript class is a blueprint for creating objects.
- Class encapsulates the data and functions which manipulates the data
- JavaScript are synthatic sugar over prototypal inheriatance. Or we can say ES6 classes are just functions
*/

// // class declaration
// class PersonCl {
//     constructor(fullName, birthYear) {
//         this.fullName = fullName;
//         this.birthYear = birthYear;
//     }
//     // Here methods will be added to .prototype property automatically
//     calcAge() {
//         console.log(2024 - this.birthYear);
//     }

//     get age() {
//         return 2025 - this.birthYear
//     }

//     set fullName(name) {
//         if (name.includes(' ')) {
//             this._fullName = name;
//         } else {
//             console.log(`${name}, is not full name!`)
//         }
//     }

//     get fullName() {
//         return this._fullName
//     }

//     static getName() {
//         return this.arguments
//     }
// }

// console.log(PersonCl.getName());

// const jane = new PersonCl('Jane Doe', 2002)
// console.log(jane.age);
// // console.log(jane);
// jane.calcAge()
// console.log(jane._fullName);
// console.log(jane.__proto__ === PersonCl.prototype);

// Adding method manually using .prototype

// PersonCl.prototype.greet = function () {
//     console.log(`Hello, ${this.firstName}`);
// }

// jane.greet()


/* 
Things to know about class

1. class in js are NOT hoisted
2. like functions class is also 'first class citizens'
3. classes are executed in strict mode

*/

// const joe = new PersonCl('joe', 2004)

// TODO Learning about getters and setters

/* 

* using getters and setters on  normal object litrals
*/
const account = {
    owner: 'jonas',
    movements: [200, 530, 120, 300],

    get latest() { /* This becomes the property */
        return this.movements.pop()
    },

    // similarly we have set method to set the property

    set latest(mov) { /* in this we have to insert one parameter in it */
        return this.movements.push(mov)
    }
}

// console.log(account.latest); /* so, we have to use dot notation to get the property */

/* Like we used to set new value to the property in object we have to use same way like this */

account.latest = 500;
// console.log(account.movements);


/* Learning about static methods */

// calling static method with the name of class

// PersonCl.getName()


// TODO Learning about object.create 

/* 
*The Object.create() method creates a new object using an existing object as the prototype of the new object:

* syntax -> Object.create(proto, [propertiesObject])
 */

// const personProto = {
//     calcAge() {
//         console.log(2024 - this.birthYear);
//     },

//     init(firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }
// }

// const steven = Object.create(personProto)
// console.log(steven);

// steven.name = 'Steve';
// steven.birthYear = 2000;
// steven.calcAge()

// ex-2

// const ana = Object.create(personProto)
// ana.init('Ana', 1996)
// ana.calcAge()

const personAction = {
    getFullName() {
        return `Your fullname is ${this.firstName} ${this.lastName}`
    }
}

function createUser(firstName, lastName) {
    let user = Object.create(personAction)
    user.firstName = firstName;
    user.lastName = lastName;

    return user
}


let getUser = createUser('Charukirti', 'Chougule')
// console.log(getUser.getFullName());

// Ex 3

// creating prototype object

const user = {
    name: 'John',
    greet() {
        console.log(`Hello, Good morning ${this.name}`)
    }
}

// Creating a New Object with Inheritance

const newUser = Object.create(user) // creates new object with name 'newUser' and assignes it's prototype to user object, which means 'newUser' can have the access of the properties and methods of user object.

// newUser.name = 'Amit' // overriding property 
// newUser.greet() // inherited greet method from the user object



// todo: Learning about Inheritance between Classes : constructor functions

const Newperson = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
}

Newperson.prototype.calcAge = function () {
    console.log(2037 - this.birthYear)
}

const Student = function (firstName, birthYear, course) {
    Newperson.call(this, firstName, birthYear, course)
    this.course = course;
}

Student.prototype = Object.create(Newperson)


Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const rohan = new Student('Rohan', 2019, 'Mechanical Engineering')

rohan.introduce();

const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
}

Car.prototype.acclerate = function () {
    this.speed += 20;
    console.log(`${this.make} is going at ${this.speed} Km/h after accelerate`);
}

Car.prototype.break = function () {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} Km/h after applying break`);
}

const EV = function (make, speed, charge) {
    Car.call(this, make, speed)
    this.charge = charge;
}

EV.prototype = Object.create(Car.prototype)

EV.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo
}

EV.prototype.acclerate = function () {
    this.speed += 20;
    this.charge--;
    console.log(`${this.make} is going at ${this.speed} Km/h with the charge of ${this.charge}`);
}
const tesla = new EV('Tesla', 120, 23)
tesla.chargeBattery(90)
console.log(tesla)
tesla.break()
tesla.acclerate()
tesla.break()


// todo learning about ES6 class inheritance

// class declaration
class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }
    // Here methods will be added to .prototype property automatically
    calcAge() {
        console.log(2024 - this.birthYear);
    }

    get age() {
        return 2025 - this.birthYear
    }

    set fullName(name) {
        if (name.includes(' ')) {
            this._fullName = name;
        } else {
            console.log(`${name}, is not full name!`)
        }
    }

    get fullName() {
        return this._fullName
    }

    static getName() {
        return this.arguments
    }
    introduce() {
        console.log(`My name is ${this.fullName} and I study ${this.course}`);
    }

    calcAge() { // overrided method from parent class
        console.log(`I'm ${2027 - this.birthYear} years old`);
    }
}

class studentCl extends PersonCl {
    constructor(fullName, birthYear, course) {
        // Always needs to happen first
        super(fullName, birthYear)
        this.course = course
    }
}

const martha = new studentCl('Martha jones', 2002, 'computer science')

// martha.introduce()
// martha.calcAge()

// creating default credentials

const defaultCredentials = {
    email: 'charukirticc@gmail.com',
    uniqueId: 'defaultUniquw'
}

class userBase {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.uniqueId = Math.random().toString(36).substring(2, 15);
        this.isLoggedIn = false; // Track login status
    }

    loggedIn() {
        this.isLoggedIn = true;
        console.log(`${this.name}, welcome to our page!`);
    }

    logout() {
        this.isLoggedIn = false;
        console.log(`${this.name}, you have been logged out.`);
    }

    useDefaultCredentials() {
        this.email = defaultCredentials.email;
        this.uniqueId = defaultCredentials.uniqueId;

        const success = this.checkCredentials(defaultCredentials.email, "correctpassword");

        if (success) {
            this.loggedIn = true;
            console.log(`${this.name}, welcome back!`);
        } else {
            console.error(`${this.name}, incorrect default credentials. Please try again or log in.`);
        }
    }

    checkCredentials(providedEmail, providedPassword) {
        if (providedEmail === defaultCredentials.email && providedPassword === "correctpassword") {
            return true;
        } else {
            return false;
        }
    }

}

// const hc12 = new userBase('Charu', 'charukirticc2609@gmail.com', defaultCredentials.uniqueId)
// console.log(hc12);
// hc12.useDefaultCredentials()
// console.log(hc12);

const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear)
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
};

const steven = Object.create(PersonProto)

const studentProto = Object.create(PersonProto)
studentProto.init = function(firstName, birthYear, course){
    PersonProto.init.call(this, firstName, birthYear, course)
    this.course = course;
}

studentProto.introduce = function() {
    console.log(`My name is ${this.firstName} and I study ${this.course}`)
}

const jay = Object.create(studentProto)
jay.init('Jay', 2010, 'Mechanical engineering')

jay.introduce()
jay.calcAge()


// Another class example 

class Account {
    // 1) public fields (instances)
    locale = navigator.language;
    
    // 2) private fields
    #movements = [];


    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this._pin = pin;
        // protected property
        // this._movements = [];
        // this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${owner}`);
    }

    // public interface

    // method to deposit 
    deposit(value){
        this.#movements.push(value)
    }

    // Method to withdrawl 
    withdraw(value) {
        this.deposit(-value)
    }

    _approveLoan(value) {
        return true;
    }

    requestLoan(value) {
        if(this.approveLoan(value)){
            this.deposit(value)
            console.log(`Loan approved`);
        }
    }

    getMovement(){
        return  this.#movements
    }
}


const acc1 = new Account('jonas', 'Rupee', 1111)
// console.log(acc1);

// acc1.deposit(250)    
// acc1.deposit(460)
// acc1.withdraw(145)
// acc1.requestLoan(250)

/* Incapsultion */
console.log(acc1.getMovement());


// Public fields
// private fields
// public methods
// private methods