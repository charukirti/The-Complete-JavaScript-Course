//  Importing modules

import {
    num,
    add,
    double,
    shippingCost,
    addToCart,
    cart
} from './shoppingCart.js'

console.log(num); // 42

add(3, 4) // Addition of the 3 and 4 is 7

console.log(shippingCost); // 45

const dbl = double(5)
console.log(dbl); // 10

addToCart(12, 'Yogart') // 12 Yogart added to cart

console.log(cart);

import greet from './shoppingCart.js'

let message = greet('World')

console.log(message);


/* top level await */

// console.log('Fetching....');

// const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)

// const data = await res.json()

// console.log(data);

// console.log('Done fetching.....');

const getLastPost = async function() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')

    const data = await res.json()
    console.log(data);

    return {title: data.at(-1).title, text: data.at(-1).body}
}

const lastPost = getLastPost()

console.log(lastPost);

//  getting it by using regular promise

// this is not good approach
lastPost.then(last => console.log(last))

// with top level await
const lastPost2 = await getLastPost()

console.log(lastPost2);

