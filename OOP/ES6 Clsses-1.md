# ES6 Classes

## About ES6 classes
- In JavaScript ES6 classes are blueprints for creating objects.

- These classes contains data and the functions which manipulates the data.

- Unlike other programming language like `C++`, `Java` or `C#`, JS classes are synthatically sugar coated over prototypal inheritance

- In other words ES6 classes are special type of functions

---

## ES6 class declaration
We define class using `class` keyword followed by the class name. Inside the curly braces we can define properties & methods.

```javascript
class person = {
    constructor(name, age) {
        this.name = name;
        this.age = age
    } // constructor function which holds property related to class

    introduce(){
        console.log(`Hi, my name is ${this.name} and I am ${this.age} old.`)
    } // this is method access the data from the class
}

```

### constructors :
- it is called when new instance of class is created.

### methods :
- Methods are the functions defined inside class. Which can access the data from the class and can modify that and performes operations

### properties : 
- properties are the are the variables associated with the class and they can easyly accessed and can modified using methods

## Things to know about class

1. class in js are NOT hoisted
2. like functions class is also 'first class citizens'
3. classes are executed in strict mode