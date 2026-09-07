// ===============================================
// Class Work 2 — Build the methods yourself
// The methods are not magic. They are for loops + a callback.
// RULE: here you MAY use for loops — that is the whole point.
//       But you may NOT use the built-in map/filter/find/reduce.
// ===============================================

const nums = [4, 9, 1, 16, 25, 3];
const words = ["banana", "kiwi", "apple", "fig"];


// --- Task 1 — myForEach --------------------------------------
// Call the callback once per element. Returns nothing.
// myForEach(nums, (n) => console.log(n));

function myForEach(array, callback) {
    // TODO
}
myForEach(words, (w) => console.log("1:", w));


// --- Task 2 — myMap ------------------------------------------
// Return a NEW array with the callback applied to each element.
// Expected: myMap(nums, (n) => n * 2) -> [8, 18, 2, 32, 50, 6]

function myMap(array, callback) {
    // TODO
}
console.log("2:", myMap(nums, (n) => n * 2));


// --- Task 3 — myFilter ---------------------------------------
// Keep only elements where the callback returns true.
// Expected: myFilter(nums, (n) => n > 5) -> [9, 16, 25]

function myFilter(array, callback) {
    // TODO
}
console.log("3:", myFilter(nums, (n) => n > 5));


// --- Task 4 — myFind -----------------------------------------
// Return the FIRST matching element, or undefined.
// Must stop as soon as it finds one.
// Expected: myFind(words, (w) => w.length === 4) -> "kiwi"

function myFind(array, callback) {
    // TODO
}
console.log("4:", myFind(words, (w) => w.length === 4));


// --- Task 5 — myReduce ---------------------------------------
// callback(accumulator, item) -> new accumulator
// Expected: myReduce(nums, (sum, n) => sum + n, 0) -> 58

function myReduce(array, callback, startValue) {
    // TODO
}
console.log("5:", myReduce(nums, (sum, n) => sum + n, 0));


// --- Task 6 — the twist --------------------------------------
// Now write myMap2 and myFilter2 using ONLY myReduce.
// No for loops here.

function myMap2(array, callback) {
    // TODO — myReduce(array, ..., [])
}

function myFilter2(array, callback) {
    // TODO
}
console.log("6:", myMap2(nums, (n) => n + 1), myFilter2(nums, (n) => n < 10));


// --- STRETCH — recursion -------------------------------------
// deepSum works on arrays inside arrays, any depth.
// Expected: deepSum([1, [2, 3], [4, [5, [6]]]]) -> 21
// Hint: Array.isArray(x)

function deepSum(array) {
    // TODO
}
console.log("stretch:", deepSum([1, [2, 3], [4, [5, [6]]]]));
