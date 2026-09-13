
function double(n) { 
    return n * 2 
}                     // 1 declaration

const doubleExpression = function (n) { return n * 2 }  // 2 expression
const doubleArrow = (n) => n * 2                        // 3 arrow

console.log(double(5));
console.log(doubleExpression(10));
console.log(doubleArrow(15));

// console.log(
//     (function (n) { return n * 2 })(5)
// )

console.log(double);