const name = "Charukirti";
const role = "Frontend developer";
const birth = 2002;
const currentYear = 2025;

// Normal concatination

const details = name + " is a " + (currentYear - birth) + " year old " + role;

// console.log(details);

// template literals

const employee = `${name} is a ${currentYear - birth} year old ${role}`
// console.log(employee);

// Multiline string is JavaScript

// classic way

console.log('JavaScript \n\
is a \n\
scripting language');

// Modern way using backticks

console.log(`JavaScript
is a
scripting language`);

// Assignment

// const description = "India is in Asia, and it's 11 million people speaks Marathi.";

const countryName = "India";
const population = "8 Million";
const languageSpeaked = "Marathi"
const description = `${countryName} is in Asia, and it's ${population} million people speaks ${languageSpeaked}`;

console.log(description);
