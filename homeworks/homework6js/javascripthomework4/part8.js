const numbers = [5, 9, 11, 12, 13, 25, 50, 100];
const target = 50;
let isFound = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === target) {
    console.log("Found " + target + " at index " + i);
    isFound = true;
    break;
  }
}

if (!isFound) {
  console.log("Number " + target + " was not found.");

}