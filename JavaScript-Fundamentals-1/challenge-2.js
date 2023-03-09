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
const johnsBMI = johnsMass / johnsHeight ** 2;
console.log(johnsBMI);

if(marksBMI > johnsBMI) {
    console.log(`Marks BMI (${marksBMI}) is higher than Johns BMI (${johnsBMI})`);
}else {
    console.log(`Johns BMI (${johnsBMI}) is higher than Marks BMI (${marksBMI})`);
}