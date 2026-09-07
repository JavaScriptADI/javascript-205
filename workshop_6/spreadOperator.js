const nums = [1, 2, 3, 5, 6, 7, 8, 9, 10];


console.log(nums);

const arr = [7, ...nums, 11];
console.log(arr.length);
console.log(arr);


// console.log(...nums);
// console.log(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);


// remove 9 from nums

const nums2 = [];
console.log(nums);

for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 6) {
        nums2.push(nums[i]);
    }
}


console.log(nums2);

