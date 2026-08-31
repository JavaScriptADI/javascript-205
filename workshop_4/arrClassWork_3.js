// Guessing game 

const nums = [5, 9, 11, 12, 13, 25, 50, 100];
const find = 50;



console.log(nums);

for (let i = 0; i < nums.length; i++) {
    if (nums[i] === find) {
        console.log(`Found ${find} number at ${i} index`);
        break;
    }
}