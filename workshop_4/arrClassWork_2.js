const nums = [];



for (let i = 0; i < 1000; i++) {
    const randNum = Math.round(Math.random() * 10000);
    nums.push(randNum);
}

console.log(nums);
let count = 0;
for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 27) {
        count++;
    }
}

// console.log(Math.max(...nums));
console.log(count);


// find biggest number

console.log("-".repeat(10))
let max = nums[0];

for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
        console.log(max);
        max = nums[i];
    }
}

console.log(`Biggest number is ${max}`);