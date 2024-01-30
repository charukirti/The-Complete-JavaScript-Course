'use strict'

// classes in JavaScript (ES6)

class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `thhdjh${this.password}abcjdf`
    }

    capitalizeUser(){
        return `${this.username.toUpperCase()}`
    }
};

const userOne = new User('Alex', 'Alex12@gmail.com', '123');

console.log(userOne.encryptPassword());
console.log(userOne.capitalizeUser());


// Behind the scene

function MyUser(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
};

// Adding methods to the function's prototype

MyUser.prototype.capitalizeUser = function(){
    return `${this.username.toUpperCase()}`
};

MyUser.prototype.encryptPassword = function(){
    return `jfhdjkfh${this.password}djfldj`
};

MyUser.prototype.greet = function(){
    return `Welcome ${this.username}`
};

const newUser = new MyUser('Martha', 'martharr21@gmail.com', '1234Thjdkl')

console.log(newUser.capitalizeUser())
console.log(newUser.encryptPassword());