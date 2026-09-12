const numbers = [12, 45, 89, 3, 230, 54, 78, 999, 11, 45, 67, 88, 90, 100, 2];
let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}

console.log(`The biggest number is ${max}`);