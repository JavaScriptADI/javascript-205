const prompt = require(`prompt-sync`)();
// exercise1 even or odd
const input = Number(prompt("pick A number! "));
const number = Number (input);

if (Number.isNaN(number)) {
    console.log('error: please enter a valid number!');
}
else if (number % 2 === 0) {
    console.log(`${number} is even`);
} 
else {
    console.log(`${number} is odd`); 
}

// exercise2
const score = Number(prompt('your score: '));
if (score >= 90) {
   console.log('your grade is A');
}
 else if (score >=80) {
    console.log('your grade is B');
}
  else if (score >= 70) {
    console.log('your grade is C');
}
   else {
    console.log('failed!');
}

// exercise 3 (while loop)

let n = Number(prompt('pick a number: '));

while (Number.isNaN(n)) {
    n = Number(prompt('invalid input! pick a number '));
}
while (n >= 1) {
    console.log(n);
    n--
}
console.log('Liftoff!!');

// exercise4 add them all
let yourQuantity = Number(prompt('pick a number for sum: '));
let total = 0;
if(yourQuantity <= 0 || Number.isNaN(yourQuantity)) {
  console.log('please enter a positive integer greater than 0.');
}
else {
for (let step = 1; step <= yourQuantity; step++) {
    total += step;
} 
console.log(` the sum of 1 to ${yourQuantity} is ${total}`);
}

// exercise5 
let word = prompt('type a word please ' ) .trim (). toLowerCase();
let vowelCount = 0;
for (let i = 0; i < word.length; i++) {
    let char = word[i];

 if (char === 'a' || char === 'e' || char === 'o' || char === 'u' || char === 'i') {
    vowelCount += 1 }
 }
    console.log(` ${word} has ${vowelCount} vowels out of ${word.length} letters.`);

// exercise6 
let age = Number(prompt("what's your age? "));
let name = prompt("what's your name? ") .trim() .toLowerCase();
if (age < 18) {
    console.log('sorry, you cannot enter.');
}
 else if ( age >= 21 && name === 'nino') {
    console.log('welcome, vip!');
 }
  else if ( (age >= 18 && age % 2 === 0) || name === 'giorgi') {
     console.log('you get a free drink!');
 }
   else {
    console.log('welcome in. \n \t enjoy your evening.')
  }

// exercise7 loop
let x = 5;

while (x > 0) {
    console.log(x);
    x++;
}       
// კიდევ კაი მიწერილი იყო კოდი როგორ გამეჩერებინა )) მოკლედ, მანამ, სანამ ცვლადი იქსი მეტია ნულზე იქსი გაიზარდოს 1 ით, ანუ იქსში გვიდევს 5 ეხლა და გაიზრდება 5 ჯერ 1 ით, მერე 6 და ა.შ. ეს ციფრები და რიცხვები ყოველთვის მეტი იქნება 0 ზე ბუნებრივია, ასე, რომ ციკლი არ გაჩერდება, უსასრულოა! აქ დაკლება რომ იყოს და არა მატება, ნულამდე მისვლიასა გაჩერდება, რადგან ჯერ გახდება 4, მერე 3,2,1, და ბოლოს 0>0.





