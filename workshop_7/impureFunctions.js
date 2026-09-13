function choice(arr) {
    const i = Math.floor(Math.random() * arr.length);
    return arr[i];
}


const nums = [rith, 6, 7, 8];


for (let i = 0; i < 10000; i++) {
    if (choice(nums) === 8) {
        console.log(`Found it ${i}`);
        break;
    }
}


// anonymous function
const add2 = (a, b) => a + b;


function add(a, b) {
    return a + b;
}



console.log(add2(5, 7));
console.log(add(5, 7));
