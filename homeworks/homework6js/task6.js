const numbers = [5,7,10,11,3];
function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

function biggestOf(arr) {
    let biggest = arr[0];
    for(let i = 0; i < arr.length; i ++) {
        if(arr[i] > biggest) {
            biggest = arr[i];
        }
    }
    return biggest;
}

function average(arr) {
    return sum(arr) / arr.length;
}

console.log("Sum: " + sum(numbers));
console.log("Biggest: " + biggestOf(numbers));
console.log("Average: " + average(numbers));
console.log("Sum of [1, 2, 3]: " + sum([1, 2, 3]));