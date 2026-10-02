// ===============================================
// Class work 1 — a loader that survives failure
// Fill in the TODOs, then run:  node classWork_1.js   (Node 22 has fetch built in)
// Compare what you see with the "Expected" lines.
// ===============================================

// TODO 1: write  async function getProduct(id, baseUrl = "https://dummyjson.com")
//         - fetch  `${baseUrl}/products/${id}`
//         - a 404 does NOT make fetch fail! So check response.ok.
//           If it is false: throw Error(`Product ${id}: server said ${response.status}`)
//         - otherwise return the data: await response.json()


// TODO 2: write  async function showProduct(id, baseUrl)  that uses getProduct inside try / catch / finally:
//         - try:     print  `${product.title} · $${product.price}`
//         - catch:   print  "Could not load:", error.message
//         - finally: print  "--- done ---"   (it must print in BOTH cases)


// --- the lines below are ready. Don't change them. ---
// (They run one after another, so the lines come out in order.)

async function main() {
    await showProduct(1);
    await showProduct(9999);
    await showProduct(3);
    await showProduct(1, "https://dummyjson.invalid");   // a host that does not exist
}

main();

// Expected:
// Essence Mascara Lash Princess · $9.99
// --- done ---
// Could not load: Product 9999: server said 404
// --- done ---
// Powder Canister · $14.99
// --- done ---
// Could not load: fetch failed
// --- done ---
