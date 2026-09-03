const arr = [5, 7, 10, 11, 3];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }


for (let number of arr) {
    console.log(number);
}

console.log("-".repeat(20));
for (let i in arr) {
    console.log(i, arr[i])
}