// GLOBAL VARS

let displayValue = '';
let currentInput = '';
let priorInput = '';
let operator = '';
let snarkyMessage = 'Har Har';
const equals = document.getElementById('equals').innerHTML;
const operators = document.getElementById('operators');

// CLEAR Function & Button

function clear() {
    displayValue = '';
    currentInput = '';
    priorInput = '';
    operator = '';
    document.getElementById('screen').innerHTML = '';
    console.log('clear!')
}

// INPUT

inputOptions.addEventListener('click', function (e) {
    if (e.target.getAttribute('id') === 'Clear') {
        clear();
    } else if (displayValue != '') {
        currentInput = '';
        priorInput = '';
        operator = '';
        displayValue = currentInput + ((displayValue) + (e.target.getAttribute('id')));
        currentInput = displayValue;
        document.getElementById('screen').innerHTML = currentInput;
        console.log(currentInput);
    } else
        currentInput = currentInput + (e.target.getAttribute('id'));
    document.getElementById('screen').innerHTML = currentInput
    console.log(currentInput)
})

inputOptions.addEventListener('click', function (e) {
    if (currentInput.length > 9) {
        let trimmedValue = currentInput.substring(0, 8)
        document.getElementById('screen').innerHTML = trimmedValue;
        console.log(trimmedValue)
    }
})

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
    if (currentInput.includes('+')) {
        priorInput = currentInput.split('+', 9);
        let a = priorInput[0].toString();
        let b = priorInput[1].toString();
        console.log(priorInput);
        console.log(displayValue = parseFloat(a) + parseFloat(b));
        displayValue = parseFloat(a) + parseFloat(b);
    } else if (currentInput.includes('-')) {
        priorInput = currentInput.split('-', 9);
        let a = priorInput[0].toString();
        let b = priorInput[1].toString();
        console.log(priorInput);
        console.log(displayValue = parseFloat(a) - parseFloat(b));
        displayValue = parseFloat(a) - parseFloat(b);
    } else if (currentInput.includes('*')) {
        priorInput = currentInput.split('*', 9);
        let a = priorInput[0].toString();
        let b = priorInput[1].toString();
        console.log(priorInput);
        console.log(displayValue = parseFloat(a) * parseFloat(b));
        displayValue = parseFloat(a) * parseFloat(b);
    } else if (currentInput.includes('/')) {
        priorInput = currentInput.split('/', 9);
        let a = priorInput[0].toString();
        let b = priorInput[1].toString();
        console.log(priorInput);
        console.log(priorInput = parseFloat(a) / parseFloat(b));
        displayValue = priorInput = parseFloat(a) / parseFloat(b);
    } else if (currentInput.includes('^')) {
        priorInput = currentInput.split('^', 9);
        let a = priorInput[0].toString();
        let b = priorInput[1].toString();
        console.log(priorInput);
        console.log(priorInput = parseFloat(a) ** parseFloat(b));
        displayValue = priorInput = parseFloat(a) ** parseFloat(b);
    }
}
