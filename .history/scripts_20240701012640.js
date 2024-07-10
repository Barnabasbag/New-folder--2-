document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    let currentInput = '';
    let previousInput = '';

    let operator = null;

    const updateDisplay = () => {

        display.textContent = currentInput || '0';
    };

    const handleNumber = (num) => {

        if (currentInput.length < 16) {
            currentInput = currentInput === '0' ? num : currentInput + num;
        }

        updateDisplay();
    };


    const handleOperator = (op) => {
        if (currentInput) {
            if (previousInput && operator) {
                calculate();
            } else {
                previousInput = currentInput;
                currentInput = '';
            }
            operator = op;
        }
    };




    const calculate = () => {

        if (previousInput && currentInput) {
            const prev = parseFloat(previousInput);

            const current = parseFloat(currentInput);
            switch (operator) {
                case 'add':
                    currentInput = (prev + current).toString();
                    break;


                case 'subtract':
                    currentInput = (prev - current).toString();

                    break;
                case 'multiply':
                    currentInput = (prev * current).toString();
                    break;


                case 'divide':
                    currentInput = (prev / current).toString();
                    break;
                default:

                    return;
            }
            operator = null;
            previousInput = '';
        }
        updateDisplay();
    };

    const handleAction = (action) => {
        switch (action) {

            case 'clear':
            
            currentInput = '';
                previousInput = '';
                operator = null;
                updateDisplay();
                break;
            case 'delete':
                currentInput = currentInput.slice(0, -1) || '';
                updateDisplay();
                break;
            case 'percent':
                currentInput = (parseFloat(currentInput) / 100).toString();
                updateDisplay();
                break;
            case 'decimal':
                if (!currentInput.includes('.')) {
                    currentInput += '.';
                }
                updateDisplay();
                break;
            case 'calculate':
                calculate();
                break;
            default:
                break;
        }
    };

    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', () => {
            const action = button.getAttribute('data-action');
            if (action === 'number') {
                handleNumber(button.textContent);
            } else if (['add', 'subtract', 'multiply', 'divide'].includes(action)) {
                handleOperator(action);
            } else {
                handleAction(action);
            }
        });
    });
});
