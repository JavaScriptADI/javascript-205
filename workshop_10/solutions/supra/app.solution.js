// ===============================================
// Supra — Table 5 · SOLUTION
// The same page with its five bugs fixed. Every fix is marked FIX 1 … FIX 5.
// ===============================================

let order = [];

const orderList = document.querySelector("#order");
const totalText = document.querySelector("#total");
const vegOnly = document.querySelector("#veg-only");
const clearButton = document.querySelector("#clear");


// Show the order and the total on the page
function renderOrder() {
    orderList.textContent = "";

    order.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = `${item.name} · ${item.price} ₾`;

        const remove = document.createElement("button");
        remove.textContent = "Remove";
        remove.addEventListener("click", () => removeDish(index));

        li.append(remove);
        orderList.append(li);
    });

    const total = order.reduce((sum, item) => sum + item.price, 0);
    totalText.textContent = `Total: ${total} ₾`;
}


// Add: every dish on the menu has an Add button
// FIX 1: querySelector finds only the FIRST .add button — querySelectorAll finds all five.
// FIX 2: dataset values are always strings ("12"), so 0 + "12" + "12" was "01212". Number() makes it 12.
document.querySelectorAll(".add").forEach(button => {
    button.addEventListener("click", () => {
        order.push({ name: button.dataset.name, price: Number(button.dataset.price) });
        renderOrder();
    });
});


// Remove: take one dish off the order
// FIX 3: filter KEEPS what the callback says yes to. Keep every dish except the one at index.
function removeDish(index) {
    order = order.filter((item, i) => i !== index);
    renderOrder();
}


// Veggie only: hide the dishes with meat
// FIX 4: = puts "no" into data-veg (and "no" is truthy). === compares.
vegOnly.addEventListener("change", () => {
    document.querySelectorAll(".dish").forEach(dish => {
        dish.classList.remove("hidden");
        if (vegOnly.checked) {
            if (dish.dataset.veg === "no") {
                dish.classList.add("hidden");
            }
        }
    });
});


// Clear: empty the whole order
function clearOrder() {
    order = [];
    renderOrder();
}

// FIX 5: no parentheses. clearOrder() ran once at load and passed undefined;
// clearOrder hands over the function itself, for the browser to call on every click.
clearButton.addEventListener("click", clearOrder);
