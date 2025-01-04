// script.js
const DENOMINATIONS = {
    "ONE HUNDRED": 100,
    "TWENTY": 20,
    "TEN": 10,
    "FIVE": 5,
    "ONE": 1,
    "QUARTER": 0.25,
    "DIME": 0.1,
    "NICKEL": 0.05,
    "PENNY": 0.01
};

let cid = [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
];

const price = 19.5;

function calculateChange(cashValue) {
    if (cashValue < price) {
        alert("Customer does not have enough money to purchase the item");
        return;
    }

    if (cashValue === price) {
        return {
            status: "EXACT",
            change: []
        };
    }

    let change = cashValue - price;
    let cidTotal = cid.reduce((acc, curr) => acc + curr[1], 0);
    
    if (change > cidTotal) {
        return {
            status: "INSUFFICIENT_FUNDS",
            change: []
        };
    }

    let changeArray = [];
    let tempCid = [...cid].reverse();

    for (let [unit, unitAmount] of tempCid) {
        let unitValue = DENOMINATIONS[unit];
        let unitAvailable = Math.round(unitAmount * 100) / 100;
        let unitsNeeded = Math.floor(change / unitValue);
        let unitReturn = Math.min(unitAvailable, unitsNeeded * unitValue);

        if (unitReturn > 0) {
            changeArray.push([unit, unitReturn]);
            change = Math.round((change - unitReturn) * 100) / 100;
        }
    }

    if (change > 0) {
        return {
            status: "INSUFFICIENT_FUNDS",
            change: []
        };
    }

    return {
        status: cidTotal === cashValue - price ? "CLOSED" : "OPEN",
        change: changeArray
    };
}

function updateCIDDisplay() {
    const cidDisplay = document.getElementById('cid-display');
    cidDisplay.innerHTML = cid.map(([unit, amount]) => `
        <div class="cid-item">
            <span>${unit}:</span>
            <span>$${amount}</span>
        </div>
    `).join('');
}

function handlePurchase() {
    const cashInput = document.getElementById('cash');
    const changeDueElement = document.getElementById('change-due');
    const cashValue = parseFloat(cashInput.value);

    if (isNaN(cashValue)) {
        alert("Please enter a valid amount");
        return;
    }

    const result = calculateChange(cashValue);

    if (!result) return;

    if (result.status === "EXACT") {
        changeDueElement.textContent = "No change due - customer paid with exact cash";
        return;
    }

    if (result.status === "INSUFFICIENT_FUNDS") {
        changeDueElement.textContent = "Status: INSUFFICIENT_FUNDS";
        return;
    }

    const changeString = result.change
        .map(([unit, amount]) => `${unit}: $${amount}`)
        .join(" ");
    
    changeDueElement.textContent = `Status: ${result.status} ${changeString}`;
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    updateCIDDisplay();
    document.getElementById('purchase-btn').addEventListener('click', handlePurchase);
});