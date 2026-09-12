const numbers = [];

for (let i = 0; i < 100; i++) {
  const randomNum = Math.floor(Math.random() * 2001) - 1000;
  numbers.push(randomNum);
}

let max = numbers[0];
let min = numbers[0];
let positive = 0;
let negative = 0;
let zeros = 0;
let even = 0;
let odd = 0;
let count100 = 0;

for (let i = 0; i < numbers.length; i++) {
  let current = numbers[i];


  if (current > max) max = current;
  if (current < min) min = current;


  if (current > 0) {
    positive++;
  } else if (current < 0) {
    negative++;
  } else {
    zeros++;
  }

  if (current % 2 === 0) {
    even++;
  } else {
    odd++;
  }

  if (current === 100) {
    count100++;
  }
}

console.log("===== Statistics =====");
console.log(`Biggest number: ${max}`);
console.log(`Smallest number: ${min}`);
console.log(`Positive numbers: ${positive}`);
console.log(`Negative numbers: ${negative}`);
console.log(`Zeros: ${zeros}`);
console.log(`Even numbers: ${even}`);
console.log(`Odd numbers: ${odd}`);
