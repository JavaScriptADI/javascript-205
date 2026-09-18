const numbers = [];
for( let i = 0; i < 100; i++) {
  const randomNum = Math.floor(Math.random() * 1000) +1;
  numbers.push(randomNum);
}
console.log(numbers);
console.log(`total numbers: ${numbers.length}`);

let greaterThan500 = 0;
let lessThan100 = 0;
for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] >= 500) {
        greaterThan500++
    }
    if(numbers[i] <= 100) {
        lessThan100++
    }
}
console.log(`numbers greater than 500 : ${greaterThan500}`);
console.log(`numbers less than 100: ${lessThan100}`);
