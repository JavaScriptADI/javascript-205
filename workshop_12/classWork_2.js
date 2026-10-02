// ===============================================
// Class work 2 — one at a time, or all at once?
// Do this one when class work 1 works.  Run:  node classWork_2.js
// ===============================================

// getProduct is ready (it is your solution from class work 1, shortened):
async function getProduct(id) {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    if (!response.ok) {
        throw Error(`Product ${id}: server said ${response.status}`);
    }
    return await response.json();
}

const ids = [1, 2, 3, 4, 5];

// TODO 1: async function getTotalSlow(ids) — loads the products ONE AT A TIME
//         (a for...of loop with await inside) and returns the sum of their prices.


// TODO 2: async function getTotalFast(ids) — starts ALL the requests at once:
//         const products = await Promise.all(ids.map(id => getProduct(id)))
//         then returns the sum of their prices (reduce).


// TODO 3: async function getTitles(ids) — like getTotalFast, but one bad id must NOT hide the good ones.
//         Use Promise.allSettled. Each result is { status: "fulfilled", value } or { status: "rejected", reason }.
//         Return an array: the title for a fulfilled result, the text "(failed)" for a rejected one.


// --- the lines below are ready. Don't change them. ---

async function main() {
    let start = Date.now();
    const slow = await getTotalSlow(ids);
    const slowMs = Date.now() - start;

    start = Date.now();
    const fast = await getTotalFast(ids);
    const fastMs = Date.now() - start;

    console.log("slow total:", slow.toFixed(2));    // Expected: slow total: 66.95
    console.log("fast total:", fast.toFixed(2));    // Expected: fast total: 66.95
    console.log("fast is faster:", fastMs < slowMs);  // Expected: fast is faster: true
    console.log(await getTitles([1, 9999, 3]));     // Expected: [ 'Essence Mascara Lash Princess', '(failed)', 'Powder Canister' ]
}

main();
