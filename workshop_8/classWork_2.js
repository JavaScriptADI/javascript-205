// ===============================================
// Class Work 2 — Find the bug
// Every snippet below runs, but prints the WRONG thing.
// Fix each one so it prints the Expected value.
// Change as little as possible — usually one word or a pair of brackets.
// Run it after every fix: node classWork_2.js
// ===============================================


// --- Bug 1 --------------------------------------------------
// A 10% discount.
// Expected: 1: 90

const discount = (price) => { price * 0.9 };
console.log("1:", discount(100));


// --- Bug 2 --------------------------------------------------
// Make a to-do card from a title.
// Expected: 2: { title: 'Buy milk' }

const toCard = (title) => { title: title };
console.log("2:", toCard("Buy milk"));


// --- Bug 3 --------------------------------------------------
// Get the user with id 2 and print the name.
// Expected: 3: Gio

const users = [
    { id: 1, name: "Ana" },
    { id: 2, name: "Gio" },
    { id: 3, name: "Nino" },
];
const user = users.filter((u) => u.id === 2);
console.log("3:", user.name);


// --- Bug 4 --------------------------------------------------
// Keep only the passing scores (60 or more).
// Expected: 4: [ 82, 67, 91 ]

const scores = [45, 82, 67, 91, 30];
const passed = scores.map((s) => s >= 60);
console.log("4:", passed);


// --- Bug 5 --------------------------------------------------
// Add up the cart.
// Expected: 5: 19

const cart = [
    { item: "bread",  price: 2 },
    { item: "cheese", price: 12 },
    { item: "tea",    price: 5 },
];
const total = cart.reduce((sum, product) => { sum + product.price }, 0);
console.log("5:", total);


// --- Bug 6 --------------------------------------------------
// The same cart total, written differently.
// Expected: 6: 19

const total2 = cart.reduce((sum, product) => sum + product.price);
console.log("6:", total2);


// --- Bug 7 --------------------------------------------------
// Names in capital letters.
// Expected: 7: [ 'ANA', 'GIO', 'NINO' ]

const loud = users.map((u) => u.name.toUpperCase);
console.log("7:", loud);


// --- Bug 8 --------------------------------------------------
// This one does not print the wrong thing — it crashes.
// Read the error message first: what is "not a function"?
// Expected: 8: hi
//           8: hi

function sayHi() {
    console.log("8: hi");
}
function runTwice(action) {
    action();
    action();
}
runTwice(sayHi());
