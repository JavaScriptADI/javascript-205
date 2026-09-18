// count a number
const numbers = [55, 66, 77, 33, 66, 77, 14, 34];
const find = 66;
let count = 0;
for(let i = 0 ; i < numbers.length; i++ ) {
    if (numbers[i] === find) {
        count++
    }
}
console.log(`${find} appears ${count} times`);