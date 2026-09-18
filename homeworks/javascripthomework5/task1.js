function triple(n) {
    return n * 3;
}

const tripleExpression = function (n) {
    return n * 3;
}

const tripleArrow = (n) => n*3;
const isOdd = (n) => n % 2 !== 0;

console.log(triple(14));
console.log(tripleExpression(14));
console.log(tripleArrow(14));
console.log(isOdd(7));
console.log(isOdd(10));