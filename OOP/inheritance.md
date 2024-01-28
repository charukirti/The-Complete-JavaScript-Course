# Inheritance in JS

Inheritance in JavaScript enables us to create new classes which inherits properties and methods from the another class (parent class).

This promotes code reusablity, maintainability and a hierarchical structure

## Benifits of inheritance
- Code reusablity
- Esatablishment of relationship between classes 
- Creation of classes with common functionality

## Implementing inheritance in ES6

1. `Extends` keyword:
    - create a child class that inherites from parent class
    using `extends`:

    ```JavaScript
    class Child extends Parent {
        // child class code
    }
    ```
2. `super()` Method:
    - calling parent class constructor from the child class constructor using `super()`:

    ```JavaScript
    class Child extends Parent {
        constructor(name) {
            super(name) // calling parents constructor
        }
    }
    ```

## Example for the inheritance in ES6
```JavaScript

    class Animal {
        constructor(name) {
            this.name = name
        }

        eat() {
            console.log(`${this.name} is eating`)
        }
    }

    // className dog inheriting properties from parent class Animal

    class Dog extends Animal{
        constructor(name, breed) {
            super(name)
            this.breed = breed;
        }

        bark() {
            console.log(`${this.name} the ${this.breed} says woof!`)
        }
    }

    const myDog = new Dog('Jimmy', 'Labrador')
    myDog.eat() // o/p : Jimmy is eating
    myDog.bark() // o/p : Jimmy says woof

```