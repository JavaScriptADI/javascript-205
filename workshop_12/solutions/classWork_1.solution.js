// Class work 1 — SOLUTION

// TODO 1: fetch does NOT fail on a 404, so we check response.ok ourselves and throw
async function getProduct(id, baseUrl = "https://dummyjson.com") {
    const response = await fetch(`${baseUrl}/products/${id}`);
    if (!response.ok) {
        throw Error(`Product ${id}: server said ${response.status}`);
    }
    return await response.json();
}

// TODO 2: try / catch / finally — whatever happens, "--- done ---" prints
async function showProduct(id, baseUrl) {
    try {
        const product = await getProduct(id, baseUrl);
        console.log(`${product.title} · $${product.price}`);
    } catch (error) {
        console.log("Could not load:", error.message);
    } finally {
        console.log("--- done ---");
    }
}

// One after another, so the lines come out in order
async function main() {
    await showProduct(1);
    await showProduct(9999);
    await showProduct(3);
    await showProduct(1, "https://dummyjson.invalid");   // a host that does not exist
}

main();
