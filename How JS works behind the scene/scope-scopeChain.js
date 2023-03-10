/* Scope:- Scope is way to access variables, functions and objects in some perticular part of your 
code during runtime.

* There is a three type of scopes
1. Global scope :- 
        - Outside of any function or block
        - Variables declared in the global scope can be accessed from anywhere

2. Function Scope :-
        - Variable can be accessed inside a function block
        - This also called as local scope

3. Block Scope :-
        - This can be accessed inside a block
        - This can be only applies for let and const
        - Functions are also block scope in sctrict mode
*/


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




// Examples 💡

/* 1. Global Scope */

var a = 123; // Globally scoped variable
function printVar1() {
  console.log(a);
}

printVar1(); // 12

/* Local Scope */

function localScope() {
  const j = 15;
  console.log("This is locally scoped variable", j);
}

localScope();

// * Example 2

/* Now if I declare this variable outside of a function block and try to access it. then it will give me a error */

// function localScope() {
  // console.log('This is locally scoped variable',j);
// }
// const j = 15;
// localScope();

// * Example 3

function printVar2() {
    var k = 19;
    console.log(k);
}

printVar2()

// console.log(k);

/* Block Scope */

var name = 'charukirti';
function blockScope() {
    console.log('This is block scope');
    const age = 20
    let isElligible = true;
    if(age >= 18 && isElligible == true) {
        console.log('You are elligible to become driver');
    } 

    function nestedBlock() {
        const currentRole = 'student';
        console.log(`${name} is a ${age} old, ${currentRole}`);
    }
    nestedBlock();
}

blockScope()