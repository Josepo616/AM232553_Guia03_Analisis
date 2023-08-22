let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        const result = eval(displayValue);
        displayValue = '';
        const resultBar = document.querySelector('.result-bar');
        resultBar.textContent = '' + result; 
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function handleKeyDown(event) {
    if (event.key === 'Enter') {
        calculate();
    }
}

function handleKeyUp(event) {
    if (!isNaN(event.key) || event.key === '.' || ['+', '-', '*', '/', '%'].includes(event.key)) {
        appendToDisplay(event.key);
    } else if (event.key === 'Backspace') {
        displayValue = displayValue.slice(0, -1);
        document.getElementById('display').value = displayValue;
    }
}

function squareRoot() {
    const value = parseFloat(displayValue);
    if (!isNaN(value) && value >= 0) {
        displayValue = Math.sqrt(value).toString();
        document.getElementById('display').value = displayValue;
    } else {
        document.getElementById('display').value = 'Error';
    }
}

function square() {
    const value = parseFloat(displayValue);
    if (!isNaN(value)) {
        displayValue = (value * value).toString();
        document.getElementById('display').value = displayValue;
    } else {
        document.getElementById('display').value = 'Error';
    }
}

function inverse() {
    const value = parseFloat(displayValue);
    if (value !== 0) {
        displayValue = (1 / value).toString();
        document.getElementById('display').value = displayValue;
    } else {
        document.getElementById('display').value = 'Error';
    }
}
function clearEntry() {
    displayValue = displayValue.slice(0, -1);
    document.getElementById('display').value = displayValue;
}
