# Getters and Setters in JavaScript

## Context 
- Getters and Setters are the special type of methods which can control how you can access or modify properties of the objects

- They act as intermediaries between us and actual property values

- Defined by using `get` and `set` keywords

---

## How they work ?

### getters
- This is called when we want to **read** property from the object.

- This returns the value we want to *expose* to the real world.

- Sytax : `get propertyName()`

### setters
- Called when you try to set (assign a new value to) a property.

- It's a function that receives the new value as an argument and can perform actions before or after updating the actual property value.

- Syntax: `set propertyName(newValue) { ... }`