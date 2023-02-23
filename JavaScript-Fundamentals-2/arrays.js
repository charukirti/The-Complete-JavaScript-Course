const friends = ['Aniket', 'Sammed', 'Smitesh', 'Pooja', 'Pranjali'];
console.log(friends);

// Another way to create array using array constructor 👇

const years = new Array('2002', '2006', '2009', '2012', '2014', '2016', '2018', '2020', '2022');
console.log(years);

// \Accesing array elements using array index

console.log(friends[2]);
console.log(friends[1]);
console.log(friends[3]);

// to print length of array use .length mthd

console.log(friends.length);

// to print last element
console.log(friends[friends.length - 1]);

// to change array Element

friends[4] = 'Sanika';
console.log(friends);

// javascript arrays holds any kind of data

const myInfo = [2002, 'Charukirti', 20, 'B+', 2020];
console.log(myInfo);

// Array inside array

const solarSys = ['Mars', 'Saturn', 'Venus', 'Jupitor', 'Uranus'];
const universe = ['Nebula', 'Commet', 'Astoride', 'Galaxy', solarSys];

console.log(universe);

// Exercise

const calcAge = function(birthYear) {
    return 2023 - birthYear;
}

const birthYears = [1998, 1999, 2000, 2001, 2002, 2003];

console.log(calcAge(birthYears[1]));
console.log(calcAge(birthYears[4]));

const ages = [calcAge(birthYears[1]), calcAge(birthYears[3]), calcAge(birthYears[4]), calcAge(birthYears[5])];

console.log(ages);

const thisArr = ['apple', 'mango',];
console.log(thisArr)

function addItem (item1, item2, item3){
    thisArr[2] = item1;
    thisArr[3] = item2;
    thisArr[4] = item3;
    return thisArr;
}

console.log(addItem('Orange', 'Grapes', 'Banana'));

console.log(thisArr);

function setFirstElement( arr = [a, b], c){
    arr[0] = c;
    return arr;
 }
 console.log(setFirstElement([15, 16], 5));


 /* Assignments */

 const populations = [120000, 110000, 100000, 900000];
// checking array length is equal to 4

console.log(populations.length === 4); //true

function percentageOfWorld1(population = []) {
    return (population / 7900) * 100;
  }

const percentages = [
percentageOfWorld1(populations[0]),
percentageOfWorld1(populations[1]),
percentageOfWorld1(populations[2]),
percentageOfWorld1(populations[3])
]

console.log(percentages)

  //debug
//   const present1 = (120000 / 7900) * 100;
//   const present2 = (110000 / 7900) * 100;
//   const present3 = (100000 / 7900) * 100;
//   const present4 = (900000 / 7900) * 100;

//   console.log(present1)
//   console.log(present2)
//   console.log(present3)
//   console.log(present4)