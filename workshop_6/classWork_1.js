// ===============================================
// Class Work 1 — Course Dashboard
// Tools: map · filter · find · reduce · arrow functions
// RULE: no `for` / `while` in this file. Array methods only.
// ===============================================

const students = [
    { name: "Nika",  age: 19, grades: [8, 9, 10, 7], paid: true  },
    { name: "Anna",  age: 22, grades: [5, 4, 6, 5],  paid: false },
    { name: "Luka",  age: 25, grades: [10, 10, 9, 9], paid: true  },
    { name: "Marry", age: 20, grades: [6, 7, 6, 8],  paid: false },
    { name: "James", age: 31, grades: [3, 5, 4, 2],  paid: true  },
];

const PRICE = 500;


// --- Task 1 -------------------------------------------------
// Make an array of just the names.
// Expected: ["Nika", "Anna", "Luka", "Marry", "James"]

const names = null; // TODO
console.log("1:", names);


// --- Task 2 -------------------------------------------------
// Write average(grades) with reduce. Return a number.
// Expected: average([8, 9, 10, 7]) === 8.5

function average(grades) {
    // TODO
}
console.log("2:", average([8, 9, 10, 7]));


// --- Task 3 -------------------------------------------------
// Turn every student into { name, average }.
// Expected: [{ name: "Nika", average: 8.5 }, ...]

const withAverage = null; // TODO
console.log("3:", withAverage);


// --- Task 4 -------------------------------------------------
// Who passed? average >= 6
// Expected names: Nika, Luka, Marry

const passed = null; // TODO
console.log("4:", passed);


// --- Task 5 -------------------------------------------------
// findStudent("Luka") -> the student object
// findStudent("Bob")  -> null   (careful: what does find return?)

function findStudent(name) {
    // TODO
}
console.log("5:", findStudent("Luka"), findStudent("Bob"));


// --- Task 6 -------------------------------------------------
// How much money is still owed? (unpaid students × PRICE)
// One reduce, no filter.
// Expected: 1000

const debt = null; // TODO
console.log("6:", debt);


// --- Task 7 -------------------------------------------------
// Best student — highest average. Use reduce, not sort.
// Expected: "Luka"

const topStudent = null; // TODO
console.log("7:", topStudent);


// --- STRETCH ------------------------------------------------
// report() returns one string, one line per student:
// "Luka  | 9.50 | PASSED | paid"
// "Anna  | 5.00 | FAILED | owes 500"
// Hint: map to lines, then .join("\n")

function report() {
    // TODO
}
console.log("stretch:\n" + report());
