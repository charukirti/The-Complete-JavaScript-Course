//! There ara 5 falsy values is JavaScript
 /* 
    0
    undefined
    ''
    null
    NaN
 */

const chance = 0;

if(chance) {
    // console.log("use it wisely.");
}else {
    // console.log('wait for next time.');
}

let variable ;

if(variable) {
    // console.log('Variable is defined.');
} else {
    // console.log('variable is not defined.');
}

const userName = '';
if(userName) {
    // console.log("String is full.");
} else {
    // console.log("String is empty.")
}

// Assignment

const numNeighbours = 1;

if(numNeighbours === 1) {
    console.log('Only one border.')
} else if(numNeighbours > 1) {
    console.log('More than one border.')
} else {
    console.log('No border.')
}