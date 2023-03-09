// creating arrow function to calculate average of both teams.

const calcAverage = (a, b, c) => (a + b + c) / 3;

// assigning both teams scores Data - 1
// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);

// assigning both teams scores Data - 2

const scoreDolphins = calcAverage(88, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);


console.log(scoreDolphins, scoreKoalas);

const checkWinner = (avgDolphins, avgKoalas) => {
    if(avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins win (${avgDolphins} v ${avgKoalas})`);
    } else if(avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas win (${avgKoalas} v ${avgDolphins})`);
    } else {
        console.log(`No one wins`)
    }
}

checkWinner(scoreDolphins, scoreKoalas);