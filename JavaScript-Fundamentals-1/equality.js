// === triple equal is strict equality operator.
// == double equal means loose equality. It does type conversion


const age = '18';
if(age === 18) 
console.log("You just became an adult. (Strict equality)");

if(age == 18){
    console.log("You just became an adult. (Loose Equality)");
}

const Age = prompt('Enter a age.');

if(Age == 18) {
    console.log('This is Loose Equality.');
} else {
    console.log('Strict');
}



