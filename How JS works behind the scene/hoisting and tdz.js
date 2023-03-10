/* Variable hoisting */

console.log(me);
// console.log(job);
// console.log(age);

var me = "charukirti";
let job = "student";
const age = 20;

/* function hoisting */

console.log(addDeclr(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDeclr(a, b) {
  return a + b;
}

var addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

if (!numberOfSongs) deleteSongs();

var numberOfSongs = 5;

function deleteSongs() {
  console.log("selected songs has been deleted");
}






// let vari = "This cant be used";
// console.log(vari);
// console.log(vari);
// // let ls = TDZ;

// isHoisted();
// function isHoisted() {
//   console.log("This function is usable before initialization");
// }
