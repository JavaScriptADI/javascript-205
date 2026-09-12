const numbers = [12, 45, 89, -25, 230, 54, 78, 999, 11, 45, 67, 88, 90, 100, 2];

if(numbers.length === 0) {
  console.log('empty');
}
else {
let min = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] < min) {
    min = numbers[i];
  }
} 
console.log(`The smallest number is ${min}`);
}