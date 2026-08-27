// for (start, stop, step)

for (let number = 2; number <= 30; number  += 2) {
    if (number % 3 == 0) {
        // break;
        continue;
    }
    console.log(number);
}
console.log("Loop finished");
