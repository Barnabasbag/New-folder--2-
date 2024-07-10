let displayValue = '0';
let operator = null;
let firstOperand = null;
let waitingForSecondOperand = false;

function addToDisplay(value) {
  if (displayValue === '0' || waitingForSecondOperand) {
    displayValue = value;
    waitingForSecondOperand = false;
  } else {
    displayValue += value;
  }
  updateDisplay();
}

function setOperator(op) {
  operator = op;
  firstOperand = parseFloat(displayValue);
  waitingForSecondOperand = true;
}

function calculate() {
  const secondOperand = parseFloat(displayValue);
  let result = 0;
  switch (operator) {
    case '+':
      result = firstOperand + secondOperand;
      break;
    case '-':
      result = firstOperand - secondOperand;
      break;
    case '*':
      result = firstOperand * secondOperand;
      break;
    case '/':
      result = firstOperand / secondOperand;
      break;
    default:
      return;
  }
  displayValue = result.toString();
  updateDisplay();
}

function clearDisplay() {
  displayValue = '0';
  operator = null;
  firstOperand = null;
  waitingForSecondOperand = false;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').innerText = displayValue;
}
