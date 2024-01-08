# JavaScript `prototype`

- Every object in JavaScript has an hidden and internal property called as `[[prototype]]` that links in another object called its `prototype`.

- This `prototype` serves as a template through which it inherits properties & methods.

---

# `prototype` chain 

- If we try to find any method or property inside object JS will search it within the object and if it is not found then it will follow another `prototype` linked to it's `prototype` and checks the method or property is available or not. This process will continues until the match is found.

# `prototypal` Inheritance

Prototype inheritance allows objects to share properties and methods, promoting code reuse and organization. Instead of duplicating code for every object, you can define common properties and methods on a prototype and have other objects inherit from it.

## Examples

```javascript 
const animal = { eats: true };
const dog = Object.create(animal);
dog.barks = true;
```