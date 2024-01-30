const person = {
    firstName: 'John',
    lastName: 'Doe',

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    set fullName(newName) {
        const [firstName, lastName] = newName.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }
};

console.log(person.fullName); // Output: "John Doe" (using the getter)

person.fullName = "Jane Smith"; // Using the setter
console.log(person.firstName); // Output: "Jane"
console.log(person.lastName);  // Output: "Smith"




