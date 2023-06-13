'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUsd = 1.1;


const movementsUSD = movements.map(mov =>  mov * euroToUsd)

console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];

for (const mov of movements) {
    movementsUSDfor.push(mov * euroToUsd);
};

console.log(movementsUSDfor);

const movementsDescription = movements.map((mov, i, arr) => {
    if (mov > 0) {
        return `Movement ${i + 1}: You deposited ${mov}`;
      } else {
        return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
      }
});

console.log(movementsDescription);