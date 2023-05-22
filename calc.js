calcDisplay = document.querySelector(".display span");
decBtn = document.getElementById("dec");

function getInput(input) {
    switch (input) {
        case "<":
            calcDisplay.textContent = "0";
            break;
        case "+":
            calcDisplay.textContent = "not implementeded";
            break;
        case "-":
            calcDisplay.textContent = "not implementeded";
            break;
        case "*":
            calcDisplay.textContent = "not implementeded";
            break;
        case "/":
            calcDisplay.textContent = "not implementeded";
            break;
        case "=":
            calcDisplay.textContent = "not implementeded";
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