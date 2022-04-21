// GLOBAL VARS

let displayValue = '';
let currentInput = '';
let priorInput = '';
let snarkyMessage = 'GOING PLAID';
const equals = document.getElementById('equals').innerHTML;
const operators = document.getElementById('operators');

// CLEAR Function & Button

function clear() {
    displayValue = '';
    currentInput = '';
    priorInput = '';
    document.getElementById('screen').innerHTML = '';
    console.log('clear!')
}

// INPUT

function inputCheck() {

    if (allowedValues.test(displayValue)) {
        console.log('YUUUUP!' + displayValue)
    }
}

inputOptions.addEventListener('click', function (e) {
    if (e.target.getAttribute('id') === 'Clear') {
        clear();
    } else if (displayValue != '') {
        allowedOperators = /\W$/
        if (allowedOperators.test(e.target.getAttribute('id'))) {
            operate()
        } else
            currentInput = '';
        priorInput = '';
        displayValue = ((displayValue) + (e.target.getAttribute('id')));
        document.getElementById('screen').innerHTML = displayValue;
        console.log(displayValue);
    } else
        displayValue = currentInput + (e.target.getAttribute('id'));
    document.getElementById('screen').innerHTML = displayValue
    console.log(displayValue)
})

// Prohibits Long Strings

inputOptions.addEventListener('click', function (e) {
    if (currentInput.length > 9) {
        let trimmedValue = currentInput.substring(0, 8)
        document.getElementById('screen').innerHTML = trimmedValue;
        console.log(trimmedValue)
    }
})

// Equals, Prohibit 1/0, Adds input to display

bottomRow.addEventListener('click', function (e) {
    if (e.target.getAttribute('id') === 'equals') {
        if (currentInput == '1/0') {
            clear()
            return document.getElementById('screen').innerHTML = snarkyMessage;
        }
        operate();
        return document.getElementById('screen').innerHTML = displayValue;
    } else
        currentInput += (e.target.getAttribute('id'));
    document.getElementById('screen').innerHTML = currentInput
    console.log(currentInput)
})

// OPERATION

function operate() {
    if (displayValue.includes('+')) {
        priorInput = displayValue.split('+', 9);
        let a = priorInput[0].toString();
        let b = priorInput[1].toString();
        console.log(priorInput);
        console.log(displayValue = parseFloat(a) + parseFloat(b));
        displayValue = parseFloat(a) + parseFloat(b);
    } else if (displayValue.includes('-')) {
        priorInput = displayValue.split('-', 9);
        let a = priorInput[0].toString();
        let b = priorInput[1].toString();
        console.log(priorInput);
        console.log(displayValue = parseFloat(a) - parseFloat(b));
        displayValue = parseFloat(a) - parseFloat(b);
    } else if (displayValue.includes('*')) {
        priorInput = displayValue.split('*', 9);
        let a = priorInput[0].toString();
        let b = priorInput[1].toString();
        console.log(priorInput);
        console.log(displayValue = parseFloat(a) * parseFloat(b));
        displayValue = parseFloat(a) * parseFloat(b);
    } else if (displayValue.includes('/')) {
        priorInput = displayValue.split('/', 9);
        let a = priorInput[0].toString();
        let b = priorInput[1].toString();
        console.log(priorInput);
        console.log(priorInput = parseFloat(a) / parseFloat(b));
        displayValue = priorInput = parseFloat(a) / parseFloat(b);
    } else if (displayValue.includes('^')) {
        priorInput = displayValue.split('^', 9);
        let a = priorInput[0].toString();
        let b = priorInput[1].toString();
        console.log(priorInput);
        console.log(priorInput = parseFloat(a) ** parseFloat(b));
        displayValue = priorInput = parseFloat(a) ** parseFloat(b);
    }
}
