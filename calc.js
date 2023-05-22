calcDisplay = document.querySelector(".display span");

document.querySelectorAll("button").forEach(button => button.addEventListener("click", () => {
    if (calcDisplay.textContent === "0") calcDisplay.textContent = "";
    switch (button.textContent) {
        case "<":
            calcDisplay.textContent = "0";
            break;
        case "+":
            calcDisplay.textContent = "not implementeded";
            break;
        case "-":
            calcDisplay.textContent = "not implementeded";
            break;
        case "x":
            calcDisplay.textContent = "not implementeded";
            break;
        case "/":
            calcDisplay.textContent = "not implementeded";
            break;
        case "=":
            calcDisplay.textContent = "not implementeded";
            break;
        default:
            calcDisplay.textContent += button.textContent;
    }
}));