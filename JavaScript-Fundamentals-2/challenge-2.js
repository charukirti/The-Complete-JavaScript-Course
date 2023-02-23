

const calcTip = (billValue) => {
    return billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.20;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips)
