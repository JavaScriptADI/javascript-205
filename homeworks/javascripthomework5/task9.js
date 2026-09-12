function myMap(array, transform) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(transform(array[i]));
  }
  return result;
}

function myReduce(array, combine, start) {
  let accumulator = start;
  for (let i = 0; i < array.length; i++) {
    accumulator = combine(accumulator, array[i]);
  }
  return accumulator;
}

console.log("myMap:", myMap([1, 2, 3], n => n * 10));
console.log("Built-in map:", [1, 2, 3].map(n => n * 10));

console.log("myReduce:", myReduce([1, 2, 3, 4], (sum, n) => sum + n, 0));
console.log("Built-in reduce:", [1, 2, 3, 4].reduce((sum, n) => sum + n, 0));

console.log("myReduce (text):", myReduce(["a", "b", "c"], (text, ch) => text + ch, ""));