console.log(1);
async function getPosts() {
    console.log("Fetching Posts");
    const response = await fetch("https://dummyjson.com/posts?limit=5&select=title,body");
    const data = await response.json();
    console.log(4);
    console.log(data);
}

async function getProducts() {
    console.log("Fetching Products");
    const response = await fetch("https://dummyjson.com/products?limit=5&select=title,price");
    const data = await response.json();
    console.log(4);
    console.log(data);
}

getProducts();
getPosts();
console.log(3);
