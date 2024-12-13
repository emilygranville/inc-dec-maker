
const submit_button = document.getElementById("submit");
const count = document.getElementById("count");
const rate = document.getElementById("rate");
const direction = document.getElementById("direction");
const results = document.getElementById("results");

submit_button.addEventListener("click", function() {
    const target = count.value;
    const currentRate = rate.value ? rate.value : 6;

    if(!checkSupportedTarget(target, currentRate)) {
        tryAgain();
    } else {
        showInstructions(target, currentRate, (direction.value == "inc"));
    }
});

function checkSupportedTarget(targetNum, rateNum) {
    return targetNum % rateNum == 0 ? true : false;
}

function showInstructions(targetNum, rateNum, isInc) {
    results.innerHTML = "";

    let wordsList = [];
    if (isInc) {
        wordsList = generateIncWords(targetNum, rateNum);
    } else {
        wordsList = generateDecWords(targetNum, rateNum);
    }
    
    wordsList.map(sent => {
        const item = document.createElement("li")
        item.textContent = sent;
        results.appendChild(item);
    });
}

function generateIncWords(targetNum, rateNum) {
    let instructionsList = [];
    for (let i = 0; i < (targetNum / rateNum); i++) {
        if (i == 0) {
            instructionsList.push(`${rateNum}st into magic circle`);
        } else if (i == 1) {
            instructionsList.push(`Inc to ${rateNum * 2}—inc all around`);
        } else {
            instructionsList.push(`Inc to ${(i + 1) * rateNum}—${i == 2 ? "" : (i - 1)}sc, inc, repeat`)
        }
    }
    return instructionsList;
}

function generateDecWords(targetNum, rateNum) {
    let instructionsList = [];
    for (let i = (targetNum / rateNum) - 2; i >= 0; i--) {
        if (i == 0) {
            instructionsList.push(`Dec to ${rateNum}—dec all around`);
        } else {
            instructionsList.push(`Dec to ${(i + 1) * rateNum}—${i == 1 ? "" : i}sc, dec, repeat`)
        }
    }
    return instructionsList;
}

function tryAgain() {
    window.alert("Please ensure that the target stitch count is a multiple of the rate");
}