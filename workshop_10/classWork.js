// ===============================================
// Class Work — class Order
// Tools: class · constructor · this · new · methods
// The Supra page kept its order in loose variables and functions.
// Today the order becomes ONE object that carries its own data and its own functions.
//
// How to work:
//   1. Write the code for a task inside the class it belongs to.
//   2. Scroll down to CHECKS and remove the // in front of that task's lines.
//   3. Run it: node classWork.js   (from the workshop_10 folder) — compare with Expected.
// Red error? Read it before you change anything: it tells you the line.
// ===============================================


// --- Task 1 — class Dish -------------------------------------
// Write a class Dish. Its constructor takes three parameters —
// name, price and veg — and keeps each one on this:  this.name = name
// Expected:
//   1: Dish { name: 'Lobio', price: 8, veg: true }
//   1: 15

// --- Task 2 — label() ----------------------------------------
// Give Dish a method label() that RETURNS a string like "Lobio · 8 ₾".
// Inside a method, the dish's own values are this.name and this.price.
// Expected:
//   2: Lobio · 8 ₾

// write class Dish here ↓




// --- Task 3 — class Order ------------------------------------
// Write a class Order. Its constructor takes one parameter, table.
// Keep it on this, and give every new order an empty array: this.items = []
// Expected:
//   3: Order { table: 5, items: [] }

// --- Task 4 — add(dish) --------------------------------------
// A method that puts one dish into this.items.
// Expected:
//   4: 3

// --- Task 5 — total() ----------------------------------------
// A method that RETURNS the sum of the prices in this.items.
// Hint: reduce, starting at 0 — the same line as on the Supra page.
// Expected:
//   5: 35

// --- Task 6 — remove(name) -----------------------------------
// A method that takes every dish called name off the order.
// Hint: filter keeps what the callback says yes to — keep the dishes whose
// name is NOT this one, and store the result back in this.items.
// Expected:
//   6: 2 20

// --- Task 7 — receipt() --------------------------------------
// A method that RETURNS one string with line breaks ("\n") in it.
// Hint: this.items.map(dish => dish.label()) gives the middle lines,
// .join("\n") glues them together, and a method can call another: this.total()
// Expected:
//   Table 5
//   Khachapuri · 12 ₾
//   Lobio · 8 ₾
//   Total: 20 ₾

// --- Task 8 — a second table ---------------------------------
// No new code: just remove the //. Table 7 orders Pkhali.
// Why is table 5's total still 20?
// Expected:
//   8: 20 7

// --- ★ vegNames() --------------------------------------------
// A method that RETURNS the names of the veggie dishes in the order.
// Expected:
//   ★: [ 'Khachapuri', 'Lobio' ]

// --- ★★ split(people) ----------------------------------------
// Split the bill: each person's share with two decimals, as a string.
// Hint: (12.3456).toFixed(2) is "12.35"
// Expected:
//   ★★: 6.67

// write class Order here ↓




// ===============================================
// CHECKS — remove the // in front of a task's lines when you get to it
// ===============================================

// Task 1
// const lobio = new Dish("Lobio", 8, true);
// const mtsvadi = new Dish("Mtsvadi", 15, false);
// console.log("1:", lobio);
// console.log("1:", mtsvadi.price);

// Task 2
// console.log("2:", lobio.label());

// Task 3
// const t5 = new Order(5);
// console.log("3:", t5);

// Task 4
// const khachapuri = new Dish("Khachapuri", 12, true);
// t5.add(khachapuri);
// t5.add(mtsvadi);
// t5.add(lobio);
// console.log("4:", t5.items.length);

// Task 5
// console.log("5:", t5.total());

// Task 6
// t5.remove("Mtsvadi");
// console.log("6:", t5.items.length, t5.total());

// Task 7
// console.log(t5.receipt());

// Task 8
// const t7 = new Order(7);
// t7.add(new Dish("Pkhali", 7, true));
// console.log("8:", t5.total(), t7.total());

// ★
// console.log("★:", t5.vegNames());

// ★★
// console.log("★★:", t5.split(3));
