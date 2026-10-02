// Class work 2 — SOLUTION

async function getProduct(id) {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    if (!response.ok) {
        throw Error(`Product ${id}: server said ${response.status}`);
    }
    return await response.json();
}

const ids = [1, 2, 3, 4, 5];

// TODO 1: one at a time. Each await waits for the previous product before it asks for the next.
async function getTotalSlow(ids) {
    let total = 0;
    for (const id of ids) {
        const product = await getProduct(id);
        total += product.price;
    }
    return total;
}

// TODO 2: all at once. map starts all five requests without waiting; Promise.all waits for all of them.
async function getTotalFast(ids) {
    const products = await Promise.all(ids.map(id => getProduct(id)));
    return products.reduce((sum, product) => sum + product.price, 0);
}

// TODO 3: one bad id must not hide the good ones. allSettled waits for all and never throws.
async function getTitles(ids) {
    const results = await Promise.allSettled(ids.map(id => getProduct(id)));
    return results.map(result => result.status === "fulfilled" ? result.value.title : "(failed)");
}

async function main() {
    let start = Date.now();
    const slow = await getTotalSlow(ids);
    const slowMs = Date.now() - start;

    start = Date.now();
    const fast = await getTotalFast(ids);
    const fastMs = Date.now() - start;

    console.log("slow total:", slow.toFixed(2));
    console.log("fast total:", fast.toFixed(2));
    console.log("fast is faster:", fastMs < slowMs);
    console.log(await getTitles([1, 9999, 3]));
}

main();
