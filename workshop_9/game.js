// ===============================================
// Class Work — Coin Clicker
// Tools: querySelector · textContent · addEventListener · classList · createElement · append
// Open index.html in the browser. After every task: save, refresh, compare with Expected.
// Red errors? Open DevTools → Console, and read the error before you change anything.
// ===============================================

let score = 0;
let perClick = 1;

const upgrades = [
    { name: "Extra hands", bonus: 1,  price: 20  },
    { name: "Coin press",  bonus: 5,  price: 100 },
    { name: "Gold mine",   bonus: 20, price: 500 },
];


// --- Task 1 — querySelector + textContent -------------------
// Show the score on the page.
//   1. Right here, above render(), find #score and #per-click with
//      document.querySelector and keep them in two consts named
//      scoreText and perClickText (score and perClick are already
//      taken by the numbers at the top).
//   2. Inside render(), set their textContent:
//        #score      →  `${score} 🪙`
//        #per-click  →  `+${perClick} per click`
// render() is already called once, at the very bottom of this file.
// Expected: the page shows "0 🪙" and "+1 per click" instead of "…".
// Check it: change `let score = 0` to 5, refresh → "5 🪙". Then change it back.


function render() {
    const scoreText = document.querySelector("#score");
    const perClickText = document.querySelector("#per-click");

    scoreText.textContent = `${score} 🪙`;
    perClickText.textContent = `+${perClick} per click`;
    // Task 6 goes here, at the end of render()

    // შევამოწმო upgrade-ები და რომელიც არ შემიძლია რომ ვიყიდო იმის ღილაკი უნდა გახდეს disabled
    upgrades.forEach(upgrade => {
        if (score < upgrade.price) {
            upgrade.button.disabled = true;
        } else {
            upgrade.button.disabled = false;
        }
    });
}


// --- Task 2 — addEventListener ------------------------------
// When the coin is clicked: add perClick to score, then call render().
// Hint: const coin = document.querySelector("#coin");
//       coin.addEventListener("click", () => { ... });
// Expected: every click adds 1 to the score.
const coinButton = document.querySelector("#coin");
coinButton.addEventListener("click", () => {
    coinButton.classList.remove("pop");
    void coinButton.offsetWidth;
    coinButton.classList.add("pop");
    score += perClick;

    render();
});



// --- Task 3 — classList -------------------------------------
// Make it bounce! In your click listener from Task 2, also add the class "pop":
//       coin.classList.add("pop");
// The CSS animation plays once. When it ends, the browser fires an "animationend"
// event on the coin. Listen for it and remove the class again, so the next
// click can play the animation again.
// Expected: the coin bounces on every click.
coinButton.addEventListener("animationend", () => {
    coinButton.classList.remove("pop");
});

// --- Task 4 — createElement + append ------------------------
// Open the shop: one <button> per upgrade, inside #shop.
// In the forEach below, for every upgrade:
//   1. create a button               document.createElement("button")
//   2. give it the class "upgrade"   button.classList.add("upgrade")
//   3. set its text, for example:    Extra hands · +1 per click · 20 🪙
//        `${upgrade.name} · +${upgrade.bonus} per click · ${upgrade.price} 🪙`
//   4. append it to #shop
//   5. remember it on the object:    upgrade.button = button;   (Task 6 needs it)
// The button is created INSIDE the loop: every upgrade gets its own new button.
// Expected: three shop buttons appear under "Shop".
const shopDiv = document.querySelector("#shop");
upgrades.forEach(upgrade => {
    const button = document.createElement("button");
    button.classList.add("upgrade");
    button.textContent = `${upgrade.name} · +${upgrade.bonus} per click · ${upgrade.price} 🪙`;
    button.addEventListener("click", () => {
        if (upgrade.price <= score) {
            score -= upgrade.price;
            perClick += upgrade.bonus;
            render();
        }
    });
    upgrade.button = button;
    shopDiv.append(button);
});

// --- Task 5 — buy an upgrade --------------------------------
// Still inside the same forEach: listen for a click on the button.
// When it is clicked, and score >= upgrade.price:
//   take the price away from score, add upgrade.bonus to perClick, call render().
// Expected: click the coin 20 times, buy Extra hands → "0 🪙" and "+2 per click".



// --- Task 6 — disabled --------------------------------------
// Back in render(), at the end: switch off every upgrade you can't afford yet.
// Hint: button.disabled = true switches a button off, false switches it on.
//       score < upgrade.price is already true or false.
//       Loop over upgrades: since Task 4 every upgrade remembers its button.
// Expected: at the start all three shop buttons are grey.
//           Extra hands switches on when you reach 20 🪙.


// --- ★ Stretch — race mode ----------------------------------
// When #race-button is clicked:
//   1. show "Go! 10 seconds…" in #race-result
//   2. call startRace with a callback. After 10 seconds startRace calls it
//      and gives it the final score:
//          startRace(finalScore => { ... });
//   3. inside the callback, show "Time! You made 37 🪙" (with the real score)
// Expected: click the race button, click like crazy, and after 10 s the result appears.



// ===============================================
// GIVEN — timers come in a later workshop. Don't change this function.
// ===============================================
function startRace(onFinish) {
    document.querySelector("#race-button").disabled = true;   // no second race while this one runs
    score = 0;
    perClick = 1;
    render();
    setTimeout(() => {
        document.querySelector("#race-button").disabled = false;
        onFinish(score);
    }, 10000);
}

render();
