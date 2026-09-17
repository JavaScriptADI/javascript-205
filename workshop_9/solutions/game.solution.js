// ===============================================
// Class Work — Coin Clicker · SOLUTION
// Try every task in ../game.js yourself first.
// ===============================================

let score = 0;
let perClick = 1;

const upgrades = [
    { name: "Extra hands", bonus: 1,  price: 20  },
    { name: "Coin press",  bonus: 5,  price: 100 },
    { name: "Gold mine",   bonus: 20, price: 500 },
];


// --- Task 1 — querySelector + textContent -------------------

const scoreText = document.querySelector("#score");
const perClickText = document.querySelector("#per-click");

function render() {
    scoreText.textContent = `${score} 🪙`;
    perClickText.textContent = `+${perClick} per click`;

    // Task 6 — switch off what you can't afford
    upgrades.forEach(upgrade => {
        upgrade.button.disabled = score < upgrade.price;
    });
}


// --- Task 2 — addEventListener ------------------------------

const coin = document.querySelector("#coin");

coin.addEventListener("click", () => {
    score += perClick;
    render();

    // Task 3
    coin.classList.add("pop");
});


// --- Task 3 — classList -------------------------------------

coin.addEventListener("animationend", () => {
    coin.classList.remove("pop");
});


// --- Task 4 + Task 5 — createElement, append, buy -----------

const shop = document.querySelector("#shop");

upgrades.forEach(upgrade => {
    // Task 4
    const button = document.createElement("button");
    button.classList.add("upgrade");
    button.textContent = `${upgrade.name} · +${upgrade.bonus} per click · ${upgrade.price} 🪙`;
    shop.append(button);
    upgrade.button = button;

    // Task 5
    button.addEventListener("click", () => {
        if (score >= upgrade.price) {
            score -= upgrade.price;
            perClick += upgrade.bonus;
            render();
        }
    });
});


// --- ★ Stretch — race mode ----------------------------------

const raceButton = document.querySelector("#race-button");
const raceResult = document.querySelector("#race-result");

raceButton.addEventListener("click", () => {
    raceResult.textContent = "Go! 10 seconds…";
    startRace(finalScore => {
        raceResult.textContent = `Time! You made ${finalScore} 🪙`;
    });
});


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
