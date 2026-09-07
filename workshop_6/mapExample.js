
const nums = [2, 3, 4, 5, 6, 7];
// const squares = [];

// for (const num of nums) {
//     squares.push(num ** 2);
// }

const squares = nums.map(num => num ** 2);

console.log(squares);
