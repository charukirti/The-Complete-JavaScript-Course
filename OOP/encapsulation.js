// Static private field and method
class User {
    static #lastUserId = 0;
  
    static generateId() {
      return ++User.#lastUserId;
    }
  
    constructor(name) {
      this.#name = name; // private field assigned in constructor
    }
  
    #greet() { // private method
      console.log(`Hello, my name is ${this.#name}`);
    }
  
    get name() { // private getter
      return this.#name;
    }
  
    greetPublicly() { // public method accessing private method
      this.#greet();
    }
  }
  
  const user1 = new User("John");
  console.log(User.generateId()); // Output: 1
  user1.greetPublicly(); // Outputs "Hello, my name is John"
  
  // Trying to access private field or method directly throws an error
  console.log(user1.#name); // ReferenceError: #name is not defined
  user1.#greet(); // TypeError: #greet is not a function
  