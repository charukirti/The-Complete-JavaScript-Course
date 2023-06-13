'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter(function (mov) {
    return mov > 0;
});

console.log(deposits);

const depositsfr = [];
for(const mov of movements) {
    if(mov > 0) {
        depositsfr.push(mov)
    }
}

console.log(depositsfr);

const withdrawals = movements.filter((mov)=> {
    return mov < 0;
})

console.log(withdrawals);