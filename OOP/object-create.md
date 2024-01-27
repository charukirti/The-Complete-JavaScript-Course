# Object.creat()

The `Object.create` method used to create new object, with an existing object as it's prototype.

It helps to create object which inherites property and methods from another object
---
# **Syntax**
```javascript
const newObject = Object.create(prototypeObject, propertiesObject);
```

## Parameters
`prototypeObject` : Which is going to used as prototype in another object

`propertiesObject` (optional) : An object whose properties define additional properties for the newly created object.

---
## Example 

```JavaScript
const person = {
  name: "John Doe",
  greet() {
    console.log("Hello, my name is " + this.name);
  }
};

const student = Object.create(person);
student.name = "Jane Smith";

student.greet(); // Output: Hello, my name is Jane Smith
```

### Explaination

1. Creating a Prototype Object:
- `const person = { ... }` creates an object called `person` with two properties:

  - name: a string with the value "John Doe"
  - greet(): a method that logs a greeting message using the current object's name property

2. Creating a New Object with Inheritance:
`const student = Object.create(person);` creates a new object called student and sets its prototype to the `person` object. This means:

  - `student` inherits properties and methods from `person`.

  - If a property or method is not found directly on `student`, it's looked up in its prototype, `person`.

3. Overriding Properties:

`student.name = "Jane Smith";` sets the `name` property of `student` to "Jane Smith". This overrides the inherited `name` property from `person`.

4. Inheriting Methods:

- `student.greet();` calls the `greet()` method on student.
  - Even though `greet()` is not directly defined on `student`, it's found in its prototype, `person`.

  - When the method is called, `this` within the method refers to student.

  - The `name` property used inside the method is now "Jane Smith" (from `student`), not "John Doe" (from `person`).