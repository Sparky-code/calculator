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
    } else
        currentInput += (e.target.getAttribute('id'));
    document.getElementById('screen').innerHTML = currentInput
    console.log(currentInput)
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
    let operatorRegEx = /\W/;
    let operatorMatch = currentInput.match(operatorRegEx)
    priorInput = currentInput.split(operatorMatch, 9);
    let a = priorInput[0].toString();
    let b = priorInput[1].toString();
    console.log(priorInput);
    if (currentInput.includes('+')) {
        console.log(displayValue = parseInt(a) + parseInt(b));
        displayValue = parseInt(a) + parseInt(b);
    } else if (currentInput.includes('-')) {
        console.log(displayValue = parseInt(a) - parseInt(b));
        displayValue = parseInt(a) - parseInt(b);
    } else if (currentInput.includes('*')) {
        console.log(displayValue = parseInt(a) * parseInt(b));
        displayValue = parseInt(a) * parseInt(b);
    } else if (currentInput.includes('/')) {
        console.log(priorInput = parseInt(a) / parseInt(b));
        displayValue = priorInput = parseInt(a) / parseInt(b);
    } else if (currentInput.includes('^')) {
        console.log(priorInput = parseInt(a) ** parseInt(b));
        displayValue = priorInput = parseInt(a) ** parseInt(b);
    }
}
