// Workshop 12 solution: async/await, response.ok, try/catch/finally, loading + error states.
const PRODUCTS_URL = "https://dummyjson.com/products";

const list = document.querySelector(".product-grid");
const statusBox = document.querySelector("#status");
const retry = document.querySelector("#retry");

const BADGE = {
    "In Stock": "badge--in",
    "Low Stock": "badge--low",
    "Out of Stock": "badge--out",
};

function showStatus(text, isError) {
    statusBox.hidden = text === "";
    statusBox.textContent = text;
    statusBox.classList.toggle("status--error", isError);
}

function renderProduct(product) {
    const li = document.createElement("li");
    li.classList.add("product-card");
    li.innerHTML = `
        <div class="product-card__media">
            <img src="${product.thumbnail}" alt="${product.title}" loading="lazy" decoding="async">
            <span class="tag tag--discount">−${product.discountPercentage}%</span>
        </div>
        <div class="product-card__head">
            <p class="product-card__category">${product.category}</p>
            <span class="badge ${BADGE[product.availabilityStatus]}">${product.availabilityStatus}</span>
        </div>
        <h2 class="product-card__title">${product.title}</h2>
        <p class="product-card__brand">${product.brand ?? ""}</p>
        <p class="rating">
            <span class="rating__stars" style="--rating: ${product.rating}" aria-hidden="true">★★★★★</span>
            <span class="rating__value">${product.rating}</span>
        </p>
        <div class="product-card__foot">
            <p class="price"><span class="price__now">$${product.price}</span></p>
            <button class="bag" type="button">Add to bag</button>
        </div>
    `;
    list.append(li);
}

async function loadProducts() {
    retry.hidden = true;
    list.textContent = "";
    showStatus("Loading products…", false);

    try {
        const response = await fetch(PRODUCTS_URL);
        // fetch does NOT fail on 404 or 500: we check response.ok ourselves
        if (!response.ok) {
            throw Error(`The server answered ${response.status}`);
        }
        const data = await response.json();
        data.products.forEach(renderProduct);
        showStatus("", false);
    } catch (error) {
        showStatus(`Could not load the products. ${error.message}`, true);
        retry.hidden = false;
    }
}

retry.addEventListener("click", loadProducts);
loadProducts();
