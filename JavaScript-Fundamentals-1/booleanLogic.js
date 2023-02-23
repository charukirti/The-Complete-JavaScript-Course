// Boolean logic or Logical operator's

/*
 logical and :- && here both condition must be true. 
 logical or :- || here one of the both condition must be true.
 logical Not :- ! it inverts one value.
*/

const haveGoodMarks = true;
const haveGoodCollege = false;

// logical AND (&&) :
console.log(haveGoodMarks && haveGoodCollege);

// logical OR (||)
console.log(haveGoodMarks || haveGoodCollege);

// logical NOT (!)
console.log(!haveGoodMarks);

const condition = (haveGoodMarks && haveGoodCollege);

if(condition) {
    console.log("Have good marks and good college.");
} else {
    console.log("Have good marks but dont have good college");
}

// assignment

const countryName = "India";
const countryPopulation = 40;
const languageSpeaks = "English";
const isIsland = false;

if(countryPopulation < 50 && languageSpeaks == "English" && isIsland == false) {
    console.log("You can live in this country.");
} else {
    console.log("You can't live in this country")
}