const monthNumber = 1;

switch (monthNumber) {
  case 1:
    console.log("This month is January and it has 31 days.");
    break;
  case 2:
    console.log("This month is February and it has 28 / 29 days.");
    break;
  case 3:
    console.log("This month is March and it has 31 days.");
    break;
  case 4:
    console.log("This month is April and it has 30 days.");
    break;
  case 5:
    console.log("This month is May and it has 31 days.");
    break;
  case 6:
    console.log("This month is June and it has 30 days.");
    break;
  case 7:
    console.log("This month is July and it has 31 days.");
    break;
  case 8:
    console.log("This month is August and it has 31 days.");
    break;
  case 9:
    console.log("This month is September and it has 30 days.");
    break;
  case 10:
    console.log("This month is October and it has 31 days.");
    break;
  case 11:
    console.log("This month is November and it has 30 days.");
    break;
  case 12:
    console.log("This month is December and it has 31 days.");
    break;
}

console.log(
  "------------------------ Example 2 -----------------------------------"
);

let x = 14;
let y = 2;
let calculate;
let Choice = "+";

switch (Choice) {
  case "+":
    calculate = x + y;
    console.log("The Addition is " + calculate);
    break;
  case "-":
    calculate = x - y;
    console.log("The Substraction is " + calculate);
    break;
  case "*":
    calculate = x * y;
    console.log("The Multiplication is " + calculate);
    break;
  case "/":
    calculate = x / y;
    console.log("The Division is " + calculate);
    break;
  case "%":
    calculate = x % y;
    console.log("The Remainder of " + calculate);
    break;
  default:
    console.log("You entered wrong term");
}

console.log("----------------------------- Assignments -------------------");

const language = "chinese";

switch (language) {
  case "chinese":
  case "Mandarin":
    console.log("MOST number of native speakers!");
    break;

  case "Spanish":
    console.log("2nd place in number of native speakers");
    break;

  case "English":
    break;

  case "Hindi":
    console.log("Number 4");
    break;

  case "Arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}
