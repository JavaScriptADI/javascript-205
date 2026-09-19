// ===============================================
// Class Work — class Order · SOLUTION
// Run it: node solutions/classWork.solution.js
// ===============================================


// --- Task 1 + 2 — class Dish, label() ------------------------

class Dish {
    constructor(name, price, veg) {
        this.name = name;
        this.price = price;
        this.veg = veg;
    }

    label() {
        return `${this.name} · ${this.price} ₾`;
    }
}


// --- Task 3 – 7 — class Order --------------------------------

class Order {
    constructor(table) {
        this.table = table;
        this.items = [];
    }

    add(dish) {
        this.items.push(dish);
    }

    total() {
        return this.items.reduce((sum, dish) => sum + dish.price, 0);
    }

    remove(name) {
        this.items = this.items.filter(dish => dish.name !== name);
    }

    receipt() {
        const lines = this.items.map(dish => dish.label());
        return `Table ${this.table}\n${lines.join("\n")}\nTotal: ${this.total()} ₾`;
    }

    // ★
    vegNames() {
        return this.items.filter(dish => dish.veg).map(dish => dish.name);
    }

    // ★★
    split(people) {
        return (this.total() / people).toFixed(2);
    }
}


// --- Checks ---------------------------------------------------

const lobio = new Dish("Lobio", 8, true);
const mtsvadi = new Dish("Mtsvadi", 15, false);
console.log("1:", lobio);
console.log("1:", mtsvadi.price);

console.log("2:", lobio.label());

const t5 = new Order(5);
console.log("3:", t5);

const khachapuri = new Dish("Khachapuri", 12, true);
t5.add(khachapuri);
t5.add(mtsvadi);
t5.add(lobio);
console.log("4:", t5.items.length);

console.log("5:", t5.total());

t5.remove("Mtsvadi");
console.log("6:", t5.items.length, t5.total());

console.log(t5.receipt());

const t7 = new Order(7);
t7.add(new Dish("Pkhali", 7, true));
console.log("8:", t5.total(), t7.total());

console.log("★:", t5.vegNames());
console.log("★★:", t5.split(3));
