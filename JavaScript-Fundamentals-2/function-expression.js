// function expression stored inside a variable
/* function expression has been stored in a variable, the variable can be used as a function */

const addition = function (numberOne, numberTwo) {
  return `Addition is ${numberOne + numberTwo}.`;
};

// console.log(addition(12, 5));
// console.log(addition(12, 15));
// console.log(addition(12, 25));

const concatinate = function (stringOne, stringTwo) {
  return stringOne + " " + stringTwo;
};

// console.log(concatinate("Hello","World"));

//assignment

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const percentageOfWorld = percentageOfWorld1(1441);
// console.log(percentageOfWorld);

const percentageOfWorld2 = function (population) {
  const percentage = (population / 7900) * 100;
  return `India has ${population} million people, so it's about ${percentage}% of the world population`;
};

// console.log(percentageOfWorld2(1449));

const jobRole = function (empName, empRole) {
  switch (empRole) {
    case "designer":
      return `${empName} is a designer.`;
    case "frontend":
      return `${empName} is a frontend developer.`;
    case "backend":
      return `${empName} is a backend developer.`;
    case "fullstack":
      return `${empName} is a full-stack developer.`;
    case "database":
      return `${empName} is a database engineer.`;
    case "tester":
      return `${empName} is a tester.`;
  }
};

// console.log(jobRole("charukirti","frontend"));
// console.log(jobRole("Aniket","tester"));

// simple interest calculator

const simpleInterest = function(p, r, t){
  return `Simple interest is : ${(p * r * t)/100}`;
};

// console.log(simpleInterest(120000, 7, 3));