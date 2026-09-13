let x = 8

if (true) {
    let x = 4          // a different x — block only
    let y = 7
    console.log(x)     // 4
}

console.log(x)       // 2 — the outer x was never touched
// console.log(y)