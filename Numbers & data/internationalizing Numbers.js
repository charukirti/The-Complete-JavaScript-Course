'use strict'

const num = 3884764.23;

const options = {
    style : 'unit',
    unit : 'celsius',
}

console.log('US:',new Intl.NumberFormat('en-US', options).format(num));
console.log('Germany:',new Intl.NumberFormat('en-DE', options).format(num));

console.log(
    navigator.language,
    new Intl.NumberFormat(navigator.language, options).format(num)
);
