const nums = [4, 9, 1, 16, 25, 3];
const words = ["banana", "kiwi", "apple", "fig"];

function myForEach(array, callback) {
    for (let i = 0; i < array.length; i++) callback(array[i], i, array);
}
myForEach(words, (w) => console.log("1:", w));

function myMap(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) result.push(callback(array[i], i, array));
    return result;
}
console.log("2:", myMap(nums, (n) => n * 2));

function myFilter(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) if (callback(array[i], i, array)) result.push(array[i]);
    return result;
}
console.log("3:", myFilter(nums, (n) => n > 5));

function myFind(array, callback) {
    for (let i = 0; i < array.length; i++) if (callback(array[i], i, array)) return array[i];
    return undefined;
}
console.log("4:", myFind(words, (w) => w.length === 4));

function myReduce(array, callback, startValue) {
    let acc = startValue;
    for (let i = 0; i < array.length; i++) acc = callback(acc, array[i], i, array);
    return acc;
}
console.log("5:", myReduce(nums, (sum, n) => sum + n, 0));

function myMap2(array, callback) {
    return myReduce(array, (acc, item) => [...acc, callback(item)], []);
}
function myFilter2(array, callback) {
    return myReduce(array, (acc, item) => callback(item) ? [...acc, item] : acc, []);
}
console.log("6:", myMap2(nums, (n) => n + 1), myFilter2(nums, (n) => n < 10));

function deepSum(array) {
    return array.reduce((sum, item) => sum + (Array.isArray(item) ? deepSum(item) : item), 0);
}
console.log("stretch:", deepSum([1, [2, 3], [4, [5, [6]]]]));
