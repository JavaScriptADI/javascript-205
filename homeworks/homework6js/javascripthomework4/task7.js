const numbers = [12, 45, 7, 99, 31, 18, 50, 3];
const find = 50;
let isFound = false;
for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] === find) {
        console.log(`found ${find} at index ${i}.`)
        isFound = true;
        break;
    }
}
if(!isFound) {
    console.log(`${find} was not found!`);
}