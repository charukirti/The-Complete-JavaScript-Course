const arrowFunc = () => "This is arrow function.";
// console.log(arrowFunc());

/* Arrow function with parameter */

const func = userName => `The username is ${userName}`;
// console.log(func("Charukirti"));

const userDetails = (userName, password) => {
    return `Username is ${userName} and his password is ${password}.`;
}
// console.log(userDetails("Charukirti", 123));

const ageCalc = (birthYear, currentYear) => {
    const age = currentYear - birthYear;
    return `Charukirti is a ${age} years old.`;
}

// console.log(ageCalc(2002,2022));