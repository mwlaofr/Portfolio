function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function backspace() {
    var displayValue = document.getElementById('display').value;
    document.getElementById('display').value = displayValue.substring(0, displayValue.length - 1);
}

function calculate() {
    try {
        var result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function percentage() {
    var displayValue = document.getElementById('display').value;
    var lastNumber = getLastNumber(displayValue);
    var percentage = parseFloat(lastNumber) / 100;
    document.getElementById('display').value = percentage;
}

function getLastNumber(displayValue) {
    var regex = /\d+(\.\d+)?$/;
    var match = displayValue.match(regex);
    if (match) {
        return match[0];
    }
    return '';
}