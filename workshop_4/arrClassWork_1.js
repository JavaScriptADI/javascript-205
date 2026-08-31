const names = ["Nick", "Anna", "Marry", "James", "Jhon"];

// while (names.length > 0) {
// for (let i = 0; i < names.length; i++) {
//     console.log(`Hello, ${names[i]}`);
//     names.shift();
// }

for (let i = names.length - 1; i >= 0; i--) {
    console.log(`Hello, ${names[i]}`);
    names.pop();
}

console.log(names);

