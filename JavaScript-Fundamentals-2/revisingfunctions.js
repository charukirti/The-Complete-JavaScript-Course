/************* Revising Functions *************/

/* functions are basic building block of a program. they are used to perform or reuse the code for multiple times whenever we call that function */

const calcAge = function (birthYear) {
    return 2023 - birthYear;
}

const retirementAge = function (birthYear, personName) {
    const age = calcAge(birthYear);
    const retirement = 45 - age;
    if(retirement > 0) {
        console.log(`${personName} retires in ${retirement} years.`)
        return retirement;
    } else {
        console.log(`${personName} is already retired.`)
        return -1;
    }
}

console.log(retirementAge(1978, "Charukirti"));

