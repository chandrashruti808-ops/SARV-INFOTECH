const display = document.getElementById("display");

function appendValue(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        if (display.value.trim() !== "") {
            // Evaluates mathematical expression
            display.value = eval(display.value);
        }
    } catch (error) {
        display.value = "Error";
    }
}