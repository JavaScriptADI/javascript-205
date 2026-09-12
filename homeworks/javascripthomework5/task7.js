const sentence = "the cat and the dog and the bird";
const words = sentence.split(" ");

// 1. (a) How many words there are
console.log("Number of words:", words.length);

// 2. (b) An object that counts how many times each word appears using reduce
const counts = words.reduce((result, word) => {
  result[word] = (result[word] || 0) + 1;
  return result;
}, {});
console.log("Word counts:", counts);

// 3. (c) The longest word using reduce
const longestWord = words.reduce((longest, word) => {
  return word.length > longest.length ? word : longest;
}, words[0]);
console.log("Longest word:", longestWord);