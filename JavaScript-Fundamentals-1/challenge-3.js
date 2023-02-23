// const dolphinsAverage = (96 + 108 + 89)/3;
// const kolasAverage = (88 + 91 + 110)/3;

// console.log(dolphinsAverage,kolasAverage);


// if(dolphinsAverage > kolasAverage) {
//     console.log("Dolphins won the trophy");
// } else if(dolphinsAverage < kolasAverage) {
//     console.log("Kolas won the trophy");
// } else if(dolphinsAverage === kolasAverage) {
//     console.log("Match is Drown, both won the trophy");
// }

// Bonus : 1

const dolphinsAverage = (97 + 112 + 91)/3;
const kolasAverage = (109 + 95 + 24)/3;
console.log(dolphinsAverage,kolasAverage)

if(dolphinsAverage > kolasAverage && dolphinsAverage >= 100) {
    console.log("Dolphins won the trophy");
} else if(dolphinsAverage < kolasAverage && kolasAverage >= 100) {
    console.log("Kolas won the trophy");
} else if(dolphinsAverage === kolasAverage && dolphinsAverage >= 100 && kolasAverage >= 100 ) {
    console.log("Match is Drown, both won the trophy");
} else {
    console.log("No one won the trophy.")
}