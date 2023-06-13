'use strict'

const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1

dogs.forEach(dogs => (dogs.reqFood = Math.trunc(dogs.weight ** 0.75 * 28)));

// 2

const dogSarah = dogs.find(dogs=>dogs.owners.includes('Sarah'));
console.log(dogSarah);

console.log(`Sarah's dog eatting too ${dogSarah.curFood > dogSarah.reqFood ? 'Much' : 'Little'}`);

// 3

