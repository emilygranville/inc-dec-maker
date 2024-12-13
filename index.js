
const submit_button = document.getElementById("submit");
const count = document.getElementById("count");
const direction = document.getElementById("direction");
const results = document.getElementById("results");

submit_button.addEventListener("click", function() {
    const target = count.value;

    if(!checkSupportedTarget(target)) {
        tryAgain();
    } else {
        showInstructions(target, (direction.value == "inc"));
    }
});


function checkSupportedTarget(targetNum) {
    return targetNum % 6 == 0 ? true : false;
}

function showInstructions(targetNum, isInc) {
    results.innerHTML = "";

    let wordsList = [];
    if (isInc) {
        wordsList = generateIncWords(targetNum);
    } else {
        wordsList = generateDecWords(targetNum);
    }
    
    wordsList.map(sent => {
        const item = document.createElement("li")
        item.textContent = sent;
        results.appendChild(item);
    });
}

function generateIncWords(targetNum) {
    let instructionsList = [];
    for (let i = 0; i < (targetNum / 6); i++) {
        if (i == 0) {
            instructionsList.push("6st into magic circle");
        } else if (i == 1) {
            instructionsList.push("Inc to 12—inc all around");
        } else {
            instructionsList.push(`Inc to ${(i + 1) * 6}—${i == 2 ? "" : (i - 1)}sc, inc, repeat`)
        }
    }
    return instructionsList;
}

function generateDecWords(targetNum) {
    let instructionsList = [];
    for (let i = (targetNum / 6) - 2; i >= 0; i--) {
        if (i == 0) {
            instructionsList.push("Dec to 6—dec all around");
        } else {
            instructionsList.push(`Dec to ${(i + 1) * 6}—${i == 1 ? "" : i}sc, dec, repeat`)
        }
    }
    return instructionsList;
}

function tryAgain() {
    window.alert("Please ensure that the target stitch count is a multiple of 6");
}