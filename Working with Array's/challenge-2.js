'use strict'

/* 
§Data 1: [5, 2, 4, 1, 15, 8, 3]
§Data 2: [16, 6, 10, 5, 6, 1, 4]
*/


const calcAverageHumanAge = function(ages) {
    const humanAges = ages.map(age => age <= 2 ? 2* age : 16 + age * 4);
    console.log(humanAges);
    const adults = humanAges.filter(age => age >= 18);
    console.log(adults);

    const averageAge = adults.reduce((acc, age, i, arr) => acc + age, 0) / adults.length;

    return averageAge;
}

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(avg1, avg2);