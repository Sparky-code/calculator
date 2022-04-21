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
    if (e.target.getAttribute('id') === 'Clear') {
        clear();
        console.log('you pressed clear')
    } else if (displayValue != '') {
        if ((/\-/.test(displayValue))) {
            document.getElementById('screen').innerHTML = displayValue.toString()
            console.log(displayValue + 'contains a negative lead')
        } else if ((notAllowedOperators.test(displayValue))) {
            console.log(displayValue + 'contains a leading operator')
        } else
            currentInput = '';
        priorInput = '';
        displayValue = ((displayValue) + (e.target.getAttribute('id')));
        document.getElementById('screen').innerHTML = displayValue;
        console.log(displayValue + 'is the increment value');
    } else
        displayValue = currentInput + (e.target.getAttribute('id'));
    document.getElementById('screen').innerHTML = displayValue
    console.log(displayValue + 'is the new value')
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
        console.log(currentInput + 'is a bottom row value')
    displayValue += (e.target.getAttribute('id'));
    document.getElementById('screen').innerHTML = displayValue
    console.log(displayValue + 'is the new value with bottom row addition')
})

// OPERATION

function operate() {
    if (displayValue.includes('+')) {
        priorInput = displayValue.split('+', 9);
        let a = priorInput[0].toString();
        let b = priorInput[1].toString();
        console.log(priorInput + ' was just split for addition');
        console.log(displayValue = parseFloat(a) + parseFloat(b));
        num = parseFloat(a) + parseFloat(b);
        return roundToTwo(num)
    } else if (displayValue.includes('-')) {
        priorInput = displayValue.split('-', 9);
        let a = priorInput[0].toString();
        let b = priorInput[1].toString();
        console.log(priorInput + 'was just split for subtraction');
        console.log(displayValue = parseFloat(a) - parseFloat(b));
        num = parseFloat(a) - parseFloat(b);
        return roundToTwo(num)
    } else if (displayValue.includes('*')) {
        priorInput = displayValue.split('*', 9);
        let a = priorInput[0].toString();
        let b = priorInput[1].toString();
        console.log(priorInput + 'was just split for multiplication');
        console.log(displayValue = parseFloat(a) * parseFloat(b));
        num = parseFloat(a) * parseFloat(b);
        return roundToTwo(num)
    } else if (displayValue.includes('/')) {
        priorInput = displayValue.split('/', 9);
        let a = priorInput[0].toString();
        let b = priorInput[1].toString();
        console.log(priorInput + 'was just split for division');
        console.log(priorInput = parseFloat(a) / parseFloat(b));
        num = priorInput = parseFloat(a) / parseFloat(b);
        return roundToTwo(num)
    } else if (displayValue.includes('^')) {
        priorInput = displayValue.split('^', 9);
        let a = priorInput[0].toString();
        let b = priorInput[1].toString();
        console.log(priorInput + 'was just split for powers');
        console.log(priorInput = parseFloat(a) ** parseFloat(b));
        num = priorInput = parseFloat(a) ** parseFloat(b);
        return roundToTwo(num)
    }
}

// ROUNDING

function roundToTwo(num) {
    return displayValue = +(Math.round(num + "e+2") + "e-2");
}
