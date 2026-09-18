function printDouble(n) {
    console.log(n * 2);
}

function doubleOf(n) {
    return n * 2;
}

printDouble(5);
console.log(doubleOf(5));
const result =(doubleOf(8));
console.log(result);
console.log(doubleOf(5)+doubleOf(10));
//  Because a function without return gives back undefined, and undefined + undefined is NaN (Not a Number), not 30.
// printDouble(5)+printDouble(10);