'use strict'
// var firstName = 'xyz'
const charu = {
  firstName: "Charukirti",
  year: 2002,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    /* solution 1 */

// const self = this;
//     const isMellinial = function () {
//       console.log(self.year >= 1991 && self.year <= 2004);
//     };

/* Solution 2 */

    // const isMellinial = () => {
    //     console.log(this.year >= 1991 && this.year <= 2004); // arrow func uses its parents this keyword
    // }

    isMellinial();
  },
  greet: () => console.log(`Hey ${this.firstName}`), // undefined because var creates property on global object
  // greet: function() {console.log(`Hey ${this.firstName}`) }, // charukirt because regualar function gets its own this keyword
};

// charu.greet();
// charu.calcAge();

/* Arguments keyword */

const addExp = function (a, b) {
    console.log(arguments);
    return a + b;
}
addExp(2,3)

const addArrow = (a, b) => {
    console.log(arguments);
    return a + b
};

addArrow(4, 5)