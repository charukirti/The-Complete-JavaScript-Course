const data = [2002, 2009, 2012, 2016, 2018, 2020, 2022, 2023];
console.log(data);

// Object
const myData = {
    firstName : "Charukirti",
    lastName : "Chougule",
    age : 2022 - 2002,
    job : "Frontend Developer",
    data: data[3]
};

console.log(myData);

// accessing object elements using DOT notation
let nameKey = 'Name';
console.log(myData.firstName);
console.log(myData.age);
console.log(myData.data);
console.log(myData['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Me. Choose one of this first name, last name, age, job, data');

console.log(interestedIn);
if(myData[interestedIn]){
    console.log(myData[interestedIn]);
} else {
    console.log('Wrong request! Choose one of this first name, last name, age, job, data');
}



