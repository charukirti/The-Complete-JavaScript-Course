// syntax

/*for(initialize, condition, iteration) {
    // Statement
}*/


// for(let i = 1; i <= 10; i++) {
//     console.log(`${"i * i"} = ${i * i}`)
// }

// for(let n = 1; n <= 10; n++) {
//     for(let m = 1; m <= 10; m++) {
//         console.log(`${n * m}`)
//     }
// }


const solarSys = ['Mars','Earth', 'Mercury', 'Saturn', 'Venus', 'Jupitor', 'Uranus'];

// for(let i = 0; i < solarSys.length; i++) {
//     console.log(solarSys[i])
// }

const birthYears = [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009];

const ages = []

for(let i = 0; i < birthYears.length; i++) {
    ages.push(2023 - birthYears[i])
}

// console.log(ages)

/* ============= Breaking and Continue =========== */

for(let i = 0; i < ages.length; i++) {
    if(ages[3] >= 18 ) {
        continue;
    }
    console.log(ages[i])
}
console.log(ages);
