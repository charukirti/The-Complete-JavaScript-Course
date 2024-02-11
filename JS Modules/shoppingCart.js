// Exporting module

/* Modules offer a structured way to organize code into self container units which can be reused, promoting modularity, maintainablity, and code sharing */


// Types of exports

// '1. Named exports'

// Exporting specific values from a module using the export keyword before the declaration


console.log('Named export');

export const num = 42

export function double(x) {
    return x * 2
}

export function add(a, b) {
    console.log(`Addition of the ${a} and ${b} is ${a + b}`);
}

export const shippingCost = 45;
export const cart = [];

export const addToCart = function(quantity, product){
    cart.push({quantity, product})
    console.log(`${quantity} ${product} added to cart`);
}

/* Default exports */

// exporting single value as the modules default using export default


export default function greet(name) {return `Hello ${name}`}


