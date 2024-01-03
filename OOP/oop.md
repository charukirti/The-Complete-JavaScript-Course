
# Object-oriented Programming (OOP) in JavaScript

### 1. Objects:

Objects are the fundamental building blocks in JavaScript. They are collections of key-value pairs, where values can be primitive data types or other objects. Objects can be created using object literals or through the `Object` constructor.

```javascript
// Object literal
let person = {
  name: 'John',
  age: 30,
  sayHello: function() {
    console.log('Hello!');
  }
};

// Object created using the Object constructor
let car = new Object();
car.make = 'Toyota';
car.model = 'Camry';
```

### 2. Constructor Functions:

Constructor functions are used to create objects with a specific structure and behavior. By convention, constructor function names start with a capital letter.

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;

  this.sayHello = function() {
    console.log('Hello!');
  };
}

// Creating an instance of the Person object
let person1 = new Person('John', 30);
```

### 3. Prototypes:

JavaScript objects have a prototype, which is another object that they inherit properties and methods from. You can add methods and properties to an object's prototype to be shared among all instances.

```javascript
// Adding a method to the Person prototype
Person.prototype.sayGoodbye = function() {
  console.log('Goodbye!');
};

person1.sayGoodbye(); // Outputs: Goodbye!
```

### 4. Inheritance:

JavaScript supports prototypal inheritance, where objects can inherit properties and methods from other objects. You can use the `Object.create()` method or constructor functions to set up inheritance.

```javascript
// Inheriting from a prototype
function Student(name, age, grade) {
  // Call the parent constructor
  Person.call(this, name, age);
  this.grade = grade;
}

// Set up inheritance
Student.prototype = Object.create(Person.prototype);

let student1 = new Student('Alice', 18, 'A');
student1.sayHello(); // Outputs: Hello!
```

### 5. Encapsulation:

Encapsulation involves bundling the data and methods that operate on the data into a single unit, often achieved through the use of closures.

```javascript
function Counter() {
  let count = 0;

  this.increment = function() {
    count++;
  };

  this.getCount = function() {
    return count;
  };
}

let counter = new Counter();
counter.increment();
console.log(counter.getCount()); // Outputs: 1
```

