const age = 15;
const ageCondition = age >= 18;
if(ageCondition) {
    // console.log("You are eligible to vote 😊.");
} else {
    const ageRemaining = 18 - age;
    // console.log(`You are too young to vote, wait another ${ageRemaining} years :)`);
}

const year = 2022;
if(year % 4 == 0) {
    // console.log("The year is a leap year.");
} else {
    // console.log("The year is not a leap year.")
}



// Assignment
const indianPopulation = 33;
const averagePopulation = 20;

if(indianPopulation >= averagePopulation) {
    console.log(`Indian population ${indianPopulation} million is above average population ${averagePopulation} million.`)
} else {
    console.log(`Indian population ${indianPopulation} million is below average population ${averagePopulation} million.`)
}