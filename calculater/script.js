
var display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}
function clearDisplay() {
    display.value = '';
}
function calculate() {
    try {
        let expression = display.value;
        expression = expression.replace('x', '*');
        const result = eval(expression);
        display.value = result;
    } catch (error) {
        display.value = 'Error';

    }
}

