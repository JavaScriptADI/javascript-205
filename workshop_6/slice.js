const nums = [1, 2, 3, 5, 7, 8, 6, 9, 10];
const remove = 3;
console.log(nums.slice(0, 4));
console.log(nums.slice(5));


console.log(
    [
        ...nums.slice(0, nums.indexOf(remove)),
        ...nums.slice(nums.indexOf(remove) + 1)
    ]
);
