// let age = 19;
// let oldAge = age;
// age = 20;
// console.log(age);
// console.log(oldAge);


// const me = {
//     name : 'Charukirti',
//     age : 20
// }

// const friend = me;

// friend.age = 22;

// console.log('me: ', me);
// console.log('friend: ', friend);

/* primitive type */

let lastName = 'Patil';
let oldLastName = lastName;
lastName = 'Chougule'

console.log(oldLastName);
console.log(lastName);

/* object type */

const shobha = {
    firstName : 'Shobha',
    lastName : 'Patil',
    age : 30,
}

const marriedShobha = shobha;
marriedShobha.lastName = 'chougule'
console.log('before marriage: ', shobha);
console.log('after marriage: ', marriedShobha);


const shobha2 = {
    firstName : 'Shobha',
    lastName : 'Patil',
    age : 37,
}

const shobhaCopy = Object.assign({}, shobha2); /* This method copy's whole object to the new object */

shobhaCopy.lastName = 'chougule'

console.log('Before marriage ',shobha2);
console.log('After marriage ', shobhaCopy);