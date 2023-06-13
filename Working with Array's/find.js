'use strict'

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

'we use find method to retrive one element of an array based on a condition'
'find method is bit similar to the filter method, but the difference is that find returns the element & filter returns the new array'

const firstWithdrawal = movements.find(mov => mov < 0)
console.log(firstWithdrawal);