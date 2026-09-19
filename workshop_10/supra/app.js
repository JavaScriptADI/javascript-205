// ===============================================
// Supra — Table 5
// A small order page: add dishes, remove them, see the total.
// Open index.html in the browser and click around.
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
const addButton = document.querySelector(".add");
addButton.addEventListener("click", () => {
    order.push({ name: addButton.dataset.name, price: addButton.dataset.price });
    renderOrder();
});


// Remove: take one dish off the order
function removeDish(index) {
    order = order.filter((item, i) => i === index);
    renderOrder();
}


// Veggie only: hide the dishes with meat
vegOnly.addEventListener("change", () => {
    document.querySelectorAll(".dish").forEach(dish => {
        dish.classList.remove("hidden");
        if (vegOnly.checked) {
            if (dish.dataset.veg = "no") {
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

clearButton.addEventListener("click", clearOrder());
