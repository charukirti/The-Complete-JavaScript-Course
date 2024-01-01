'use strict'

// setTimeout

const ingr = ['olives', 'spinich']

const order = setTimeout((ing1, ing2)=> console.log(`Here is your pizza with ${ing1} and ${ing2} `), 2500, ...ingr);
console.log('Waiting...');


if(ingr.includes('olives')) 
    clearTimeout(order);

// setIntervel()

setInterval(()=>{
    const now = new Date();
    // console.log(now.getHours());
    // console.log(now.getMinutes());
    // console.log(now.getSeconds());
    console.log(`${now.getHours()} : ${now.getMinutes()} : ${now.getSeconds()}`);
}, 1000);   