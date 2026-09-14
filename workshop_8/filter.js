const nums = [1, 2, 3, 4, 5, 6];
const filtered = [];



console.log(filtered);

const names = ["Nika", "Marry", "Nick", "Nate", "George", "David"];
const filteredNames = [];



console.log(filteredNames);

const prices = [50, 5, 10, 17, 20, 21, 12, 9, 10];
const filteredPrices = [];



for (const name of names) {
    if (name[0] !== "N") {
        filteredNames.push(name);
    }
}
for (const num of nums) {
    if (num % 2 === 0) {
        filtered.push(num);
    }
}
for (const price of prices) {
    if (price <= 15) {
        filteredPrices.push(price);
    }
}

console.log(filteredPrices);
