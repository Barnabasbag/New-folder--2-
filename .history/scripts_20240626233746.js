let display = document.getElementById('display');
let currentInput = '';
let operatorPressed = false;

function appendCharacter(char) {
    if (operatorPressed && isNaN(char)) {
        operatorPressed = false;
    } else if (operatorPressed) {
        currentInput = '';
        operatorPressed = false;
    }
    currentInput += char;
    display.innerText = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.innerText = '0';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    display.innerText = currentInput || '0';
}

function calculate() {
    try {
        currentInput = eval(currentInput.replace('×', '*').replace('÷', '/')).toString();
        display.innerText = currentInput;
    } catch (error) {
        display.innerText = 'Error';
        currentInput = '';
    }
    operatorPressed = true;
}
