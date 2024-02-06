const lotteryPromise = new Promise(function (resolve, reject) {

    console.log('Lottery draw is happening');

    setTimeout(function () {
        if (Math.random() >= 0.5) {
            resolve(`You won the lottery :) `)
        } else {
            reject(new Error('You Lost ):'))
        }
    }, 3000)
})

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err))


// Promisifying setTimeout() function
const wait = function (seconds) {
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000)
    )
}

wait(2).then(() => {
    console.log(`I waited for 2 seconds`);

    return wait(1)
}).then(() => console.log('I waited for 1 second'))