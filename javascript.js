// GLOBAL VARS

let displayValue = '';
let currentInput = '';
let priorInput = '';
let allowedOperators = /\W$/
let notAllowedOperators = /^\W/
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

inputOptions.addEventListener('click', function (e) {
    if ((notAllowedOperators.test(displayValue))) {
        if (/\-/.test(displayValue)) {
            displayValue = (displayValue + (e.target.getAttribute('id')));
            return document.getElementById('screen').innerHTML = displayValue
        } else
            clear()
    }
    if (e.target.getAttribute('id') === 'Clear') {
        clear();
    } else if (displayValue != '') {
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

// // Prohibits Long Strings

// inputOptions.addEventListener('click', function (e) {
//     if (displayValue.length > 9) {
//         let trimmedValue = displayValue.substring(, -1)
//         document.getElementById('screen').innerHTML = trimmedValue;
//         console.log(trimmedValue)
//     }
// })

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
        console.log(currentInput)
    displayValue += (e.target.getAttribute('id'));
    document.getElementById('screen').innerHTML = displayValue
    console.log(displayValue)
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
