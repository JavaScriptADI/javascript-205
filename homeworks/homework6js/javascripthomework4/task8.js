const numbers = [5, 10, 5, 20, 5, 30];
const find = 5;
let count = 0;
for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] === find) {
        console.log(`found ${find} at index ${i}`);
        count++
    }
}
console.log(`${find} appeared ${count} times.`);