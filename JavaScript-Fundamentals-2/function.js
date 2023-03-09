// * Functions : functions are the set of code which is used to execute perticular task for the multiple times.

// * Functions are executed once they invoked("Called").

function functionName() {
  console.log("This is the function body");
}

// functionName();
// // console.log(functionName);

function makingTea(Water, Chaipatti) {
  console.log(`Tea is made up of ${Water} & ${Chaipatti}.`);
}

// makingTea("Water", "chaipatti");

function logIn(firstName, lastName) {
  return `Users first name is ${firstName} & Users last name is ${lastName}`;
}

// const userDetails = logIn("Charukirti","Chougule")

// console.log(userDetails);

function foodProcessor(firstItem, secondItem) {
  return `The juice is made up of ${firstItem} & ${secondItem}.`;
}

const juice = foodProcessor("Apple", "Banana");
// console.log(juice);


// Assignment
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
}
const indiaDetails = describeCountry("India", 1.68, "Delhi");
// console.log(indiaDetails);

const chinaDetails = describeCountry("China", 1.79, "Bejing");
// console.log(chinaDetails);


function ageCalculate(currentYear, birthYear) {
  return `Your age is :- ${currentYear - birthYear}`
}

const calculate = ageCalculate(2022, 2002)
// console.log(calculate);

function unitConverter(km) {
  const oneMeter = 1000;
  return `${km} Kilometer = ${km * oneMeter} Meter.`
}

console.log(unitConverter(20));