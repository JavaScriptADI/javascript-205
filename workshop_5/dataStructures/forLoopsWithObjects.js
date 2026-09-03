const student = {
    name: "Mark",
    score: 85
};


console.log(Object.keys(student));
console.log(Object.values(student));
console.log("-".repeat(10), "Keys", "-".repeat(10));

for (const key of Object.keys(student)) {
    console.log(key, "->", student[key]);
}

console.log("-".repeat(10), "Values", "-".repeat(10));
for (const value of Object.values(student)) {
    console.log(value);
}

console.log("-".repeat(10), "Entries", "-".repeat(10));
// console.log(Object.entries(student));
// for (const item of Object.entries(student)) {
//     console.log(item[0], item[1]);
// }

for (const [key, value] of Object.entries(student)) {
    console.log(key, value);
}