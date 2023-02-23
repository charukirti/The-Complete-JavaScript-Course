// ternary operator

// Syntax :- expression ? statement 1 : statement 2;

const age = 18;

// age >= 18 ? console.log("Account type is major.") : console.log("Account type is minor");

const accountType = age >= 18 ? 'Major' : 'Minor';
console.log(accountType);

let account;
if(age >= 18) {
    account = "Major";
} else {
    account = "Minor";
}

console.log(account);