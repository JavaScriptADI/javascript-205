function filter(array, test) {
  let matchedElements = [];
  for (let i = 0; i < array.length; i++) {
    if (test(array[i])) {
      matchedElements.push(array[i]);
    }
  }
  return matchedElements;
}
const numbers = [9, 4, 12, 7, 21, 8];
const divisibleBy3 = filter(numbers, n => n % 3 === 0);
console.log("My filter (divisible by 3):", divisibleBy3);

const words = ["sun", "planet", "moon", "galaxy", "star"];
const fourLetterWords = filter(words, w => w.length === 4);
console.log("My filter (4-letter words):", fourLetterWords);

console.log("Built-in filter (divisible by 3):", numbers.filter(n => n % 3 === 0));
console.log("Built-in filter (4-letter words):", words.filter(w => w.length === 4));