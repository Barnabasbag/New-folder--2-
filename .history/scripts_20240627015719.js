document.addEventListener('DOMContentLoaded', function() {
    const display = document.querySelector('.display');
    let currentNumber = '0';
    let firstOperand = null;
    let operator = null;
    let awaitingSecondOperand = false;

    const updateDisplay = () => {
        display.textContent = currentNumber;
    };

    const resetCalculator = () => {
        currentNumber = '0';
        firstOperand = null;
        operator = null;
        awaitingSecondOperand = false;
        updateDisplay();
    };

    const handleNumberClick = (num) => {
        if (currentNumber === '0' || awaitingSecondOperand) {
            currentNumber = num;
            awaitingSecondOperand = false;
        } else {
            currentNumber += num;
        }
        updateDisplay();
    };

    const handleOperatorClick = (op) => {
        const inputValue = parseFloat(currentNumber);
        if (firstOperand === null) {
            firstOperand = inputValue;
        } else if (operator) {
            const result = performCalculation(operator, firstOperand, inputValue);
            currentNumber = String(result);
            firstOperand = result;
        }
        operator = op;
        awaitingSecondOperand = true;
        updateDisplay();
    };

    const performCalculation = (op, num1, num2) => {
        switch (op) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '*':
                return num1 * num2;
            case '/':
                return num1 / num2;
            default:
                return num2;
        }
    };

    const handleEqualClick = () => {
        const inputValue = parseFloat(currentNumber);
        if (operator && !awaitingSecondOperand) {
            currentNumber = String(performCalculation(operator, firstOperand, inputValue));
            firstOperand = null;
            operator = null;
            updateDisplay();
        }
    };

    document.querySelectorAll('.number').forEach(button => {
        button.addEventListener('click', () => handleNumberClick(button.textContent));
    });

    document.querySelectorAll('.operator').forEach(button => {
        button.addEventListener('click', () => handleOperatorClick(button.textContent));
    });

    document.querySelector('.equal').addEventListener('click', handleEqualClick);

    document.querySelector('.clear').addEventListener('click', resetCalculator);
});
