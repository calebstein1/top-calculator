const calcStack = [];
const calcDisplay = document.querySelector(".display span");
const histDisplay = document.getElementById("hist");
const decBtn = document.getElementById("dec");
let oper;

const sum = (a,b) => a + b;
const diff = (a,b) => a - b;
const prod = (a,b) => a * b;
const quot = (a,b) => b == 0 ? calcDisplay.textContent = "nope" : a / b;

const calc = () => {
    calcStack.push(calcDisplay.textContent);
    if (calcStack.length > 1) calcDisplay.textContent = oper(+calcStack[calcStack.length - 2], +calcStack[calcStack.length - 1]);
};

function getInput(input) {
    switch (input) {
        case "<":
            calcStack.length = 0;
            calcDisplay.textContent = "0";
            histDisplay.textContent = "";
            break;
        case "+":
            if (histDisplay.textContent) calc();
            oper = sum;
            calcStack.push(calcDisplay.textContent);
            calcDisplay.textContent = "";
            histDisplay.textContent = `${calcStack[calcStack.length - 1]} + `;
            break;
        case "-":
            if (histDisplay.textContent) calc();
            oper = diff;
            calcStack.push(calcDisplay.textContent);
            calcDisplay.textContent = "";
            histDisplay.textContent = `${calcStack[calcStack.length - 1]} - `;
            break;
        case "*":
            if (histDisplay.textContent) calc();
            oper = prod;
            calcStack.push(calcDisplay.textContent);
            calcDisplay.textContent = "";
            histDisplay.textContent = `${calcStack[calcStack.length - 1]} * `;
            break;
        case "/":
            if (histDisplay.textContent) calc();
            oper = quot;
            calcStack.push(calcDisplay.textContent);
            calcDisplay.textContent = "";
            histDisplay.textContent = `${calcStack[calcStack.length - 1]} / `;
            break;
        case "=":
            calc();
            histDisplay.textContent = "";
            break;
        case ".":
            calcDisplay.textContent.includes(".")
                ? null
                : calcDisplay.textContent += ".";
            break;
        default:
            if (calcDisplay.textContent === "0") calcDisplay.textContent = "";
            if (Number(input) || input == "0") calcDisplay.textContent += input;
    }
    calcDisplay.textContent.includes(".")
        ? decBtn.setAttribute("disabled", "disabled")
        : decBtn.removeAttribute("disabled");

}

window.addEventListener("keypress", (event) => getInput(event.key));

document.querySelectorAll("button").forEach(button => button.addEventListener("click", () => getInput(button.textContent)));