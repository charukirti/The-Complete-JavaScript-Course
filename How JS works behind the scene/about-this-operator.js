'use strict'
// console.log(this);

const calcAge = function (birthYear) {
    console.log(2037 - birthYear);
    // console.log(this);
};

calcAge(2002);

const calcAgeArrow = (birthYear) => {
    console.log(2037 - birthYear);
    // console.log(this);
  };

  calcAgeArrow(2003);


  const charu = {
    year : 2002,
    calcAge : function( ) {
        // console.log(this);
        console.log(2037 - this.year);
    }
  }

  charu.calcAge()

  const matilda = {
    year : 2017,
  };

  matilda.calcAge = charu.calcAge;

  matilda.calcAge()

  const f = charu.calcAge;
  f()