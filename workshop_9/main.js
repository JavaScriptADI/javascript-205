const nums = [1, 7, 10, 9, 11, 2, 4];
let evens = nums.filter(num => num % 2 === 0);


// evens = [];
// let i = 0;
// while (i < nums.length) {
//     if (nums[i] % 2 === 0) {
//         evens.push(nums[i]);
//     }
//     i++;
// }

function filter(arr, callback) {
    const filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}


function map(arr, callback) {
    const mappedArr = [];
    for (let i = 0; i < arr.length; i++) {
        mappedArr.push(callback(arr[i]));
    }
    return mappedArr;
}


function find(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(nums[i])) {
            return nums[i];
        }
    }
}


function some(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(nums[i])) {
            return true;
        }
    }
    return false;
}


function every(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (!callback(nums[i])) {
            return false;
        }
    }
    return true;
}


function reduce(arr, callback, start) {
    let s = start;
    for (let i = 0; i < arr.length; i++) {
        s = callback(s, nums[i]);
    }
    return s;
}

console.log(some(nums, (num) => num === "5"));
console.log(nums.some((num) => num === "5"));
console.log(every(nums, (num) => Number.isInteger(num)));
console.log(reduce(nums, (sum, num) => sum + num, 0))

