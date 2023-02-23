const friends = ["Aniket", "Sammed", "Tejas", "Smitesh"];
console.log(friends);

/* Adding elements to the Array */

//* Push(element) :- push element adds the element at the end of an array.

const newElem = friends.push('Pooja');
console.log(friends);
// console.log(newElem);

//* unshift() :- adds the element at the beginning
friends.unshift('Pranjali');
console.log(friends);


/* Removing elements from an array */

//* pop() :- Removes element from the end of an array

friends.pop();
const popedElem = friends.pop();
console.log(popedElem);
console.log(friends);

//* shift() :- removes element from the begining

friends.shift();
console.log(friends);

//* indexOf() :- returns the index of an element

console.log(friends.indexOf('Aniket'));
console.log(friends.indexOf('Pranjali')); // here, it will return a -1 because the element we want isn't in the array.

//* includes() :- checks the element is present or not in that array and returns boolean value true or false.

console.log(friends.includes('Aniket'));

/* Assignments */

const neighbours = ['Sri-lanka', 'Bangladesh', 'Mynmar', 'Nepal', 'chaina', 'Bhutan', 'Pakistan'];
neighbours.push('Taiwan')
console.log(neighbours);

neighbours.pop();
console.log(neighbours)

if(!neighbours.includes('Sri-lanka')) {
    console.log("That country is not present");
}

console.log(neighbours.indexOf('Nepal'));
neighbours[3] = 'Maldivs';
console.log(neighbours)



