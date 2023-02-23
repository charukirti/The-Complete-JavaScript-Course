// Marks Details
const marksMass = 78;
const marksHeight = 1.69;

// Johns Details
const johnsMass = 92;
const johnsHeight = 1.95;

// Calculating BMI 

// Marks BMI
const marksBMI = marksMass / marksHeight ** 2
console.log(marksBMI);


// JohnsBMI
const johnsBMI = johnsMass / (johnsHeight * johnsHeight);
console.log(johnsBMI);

const markHigherBMI = marksBMI > johnsBMI;

console.log(markHigherBMI);