// * JavaScript Scoping

/* There are three types of scope*/
// 1. Global Scope
// Its in the outside of function block
// Variables declared in global scope are acessible everywhere

// 2. Function Scope
// Variables are only accessible inside a function, not outside
// also called as a local scope

// 3. Block Scope
// In this variables are only accessible inside block 
// it only applies for let and const variables

/* Variable with  */

// 'use strict'

function calcAge(birthYear) {
    const age = 2037 - birthYear;
    // console.log(firstName);
    function printAge() {
        let output = `${firstName} You are ${age} years old, born in ${birthYear}`;
        console.log(output);

        if(birthYear >= 2000 && birthYear <= 2019){
            const firstName = 'charu';
            const str = `oh you are a millenlial, ${firstName}`;
            var millenlial = true;
            console.log(str);

            function add(a, b){
                return a + b;
            }

            output = 'this is output';
        }
        console.log(output);
        console.log(add(1,2))
        console.log(millenlial);
        // console.log(str);
    }
    // console.log(firstName);
    printAge();
    return age;
}

const firstName = 'charukirti';

console.log(calcAge(2002))
