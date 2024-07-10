document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = Array.from(document.querySelectorAll('.button'));
    let displayValue = '0';

    const updateDisplay = () => {
        display.textContent = displayValue;
    };

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const { value } = button.dataset;

            if (value) {
                if (displayValue === '0') {
                    displayValue = value;
                } else {
                    displayValue += value;
                }
            }

            if (button.id === 'clear') {
                displayValue = '0';
            }

            if (button.id === 'equals') {
                try {
                    displayValue = eval(displayValue).toString();
                } catch {
                    displayValue = 'Error';
                }
            }

            updateDisplay();
        });
    });
});
