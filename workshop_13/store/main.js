const API_PRODUCTS_URL = "https://dummyjson.com/products";
const API_PRODUCTS_SERACH_URL = "https://dummyjson.com/products/search";
const PRODUCTS_PER_PAGE = 30;
let lastPage = 0;
let page = 0;

const searchForm = document.querySelector("#search");
const productsOl = document.querySelector("#products");
const firstPage = document.querySelector("#first");
const nextPage = document.querySelector("#next");
const prevPage = document.querySelector("#prev");
const lastPageBtn = document.querySelector("#last");

const currentPage = document.querySelector("#current");


function renderProducts(products) {
    products.forEach(product => {
        const li = document.createElement("li");
        li.textContent = `${product.id} ${product.title} - ${product.price}`;
        productsOl.append(li);
    });
}

async function fetchProducts(page=1) {
    if (page <= 0) {
        page = 0;
        prevPage.disabled = true;
        firstPage.disabled = true;
    } else {
        prevPage.disabled = false;
        firstPage.disabled = false;
    }
    
    const response = await fetch(`${API_PRODUCTS_URL}?skip=${page * PRODUCTS_PER_PAGE}`);
    const data = await response.json();
    lastPage = Math.floor(data.total / PRODUCTS_PER_PAGE);
    productsOl.textContent = "";
    renderProducts(data.products);
    if (page >= lastPage) {
        page = lastPage;
        nextPage.disabled = true;
        lastPageBtn.disabled = true;
    } else {
        nextPage.disabled = false;
        lastPageBtn.disabled = false;
    }
}

async function searchProduct(q) {
    const response = await fetch(`${API_PRODUCTS_SERACH_URL}?q=${q}`);
    const data = await response.json();
    productsOl.textContent = "";
    renderProducts(data.products);
}

function setPage(value) {
    page = value;
    fetchProducts(value);
    currentPage.textContent = value;
}


nextPage.addEventListener("click", () => {
    setPage(page + 1);
});

prevPage.addEventListener("click", () => {
    setPage(page - 1);
})

firstPage.addEventListener("click", () => {
    setPage(0);
});

lastPageBtn.addEventListener("click", () => {
    setPage(lastPage);
});

searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    searchProduct(searchForm.q.value);
})


fetchProducts(page);

