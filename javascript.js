// GLOBAL VARS

let displayValue = '';
let currentInput = '';
let priorInput = '';
let allowedOperators = /\W$/
let notAllowedOperators = /^\W/
let allowedValues = /\[0-9]$/
let snarkyMessage = 'GOING PLAID';
const operators = document.getElementById('operators');
const dot = document.getElementById('.')

// CLEAR Function & Button

function clear() {
    displayValue = '';
    currentInput = '';
    priorInput = '';
    document.getElementById('screen').innerHTML = '';
    console.log('clear!')
}

//Input

inputOptions.addEventListener('click', function (e) {
    if (e.target.getAttribute('id') === 'Clear') {
        clear();
        console.log('you pressed clear')
    } else if (displayValue != '') {
        if (allowedOperators.test(e.target.getAttribute('id'))) {       // Manages multiple operators
            if ((/^\-/.test(displayValue))) {
                console.log(displayValue + ' contains a negative lead')
                document.getElementById('screen').innerHTML = displayValue.toString()   // Manages negative leads
            } else if ((notAllowedOperators.test(displayValue))) {
                console.log(displayValue + ' contains a leading operator')      // Manages leading operators
                displayValue = displayValue.substring(1, 9);
            } else
                operate()
        } else                                                              // Manages adding to an existing display
            currentInput = '';
        priorInput = '';
        displayValue = ((displayValue) + (e.target.getAttribute('id')));
        document.getElementById('screen').innerHTML = displayValue;
        console.log(displayValue + ' is the increment value');
    } else                                                                  // Manages New Display
        displayValue = currentInput + (e.target.getAttribute('id'));
    document.getElementById('screen').innerHTML = displayValue
    console.log(displayValue + ' is the new value')
})

// // Prohibits Long Strings

// inputOptions.addEventListener('click', function (e) {
//     if (displayValue.length > 9) {
//         let trimmedValue = displayValue.substring(0, -1)
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
        displayValue += (e.target.getAttribute('id'));
    document.getElementById('screen').innerHTML = displayValue
    console.log(displayValue + ' is the new value with bottom row addition')
})

// OPERATION

function operate() {
    if (displayValue < 0) {                     // Manages negative number + eqauls error
        return displayValue;
    }
    if (displayValue.startsWith('-')) {                 // Dealing with negative addition....
        priorInput = displayValue.substring(1, 5)
        console.log(priorInput)
        priorInput = priorInput.split('-');
        console.log(priorInput)
        let a = currentInput.concat('-', priorInput[0]);
        console.log(a);
        let b = priorInput[1].toString();
        console.log(priorInput + ' was just split for subtraction');
        console.log(displayValue = parseFloat(a) - parseFloat(b));
        num = parseFloat(a) - parseFloat(b);
        return roundToTwo(num)
    }
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
        console.log(priorInput + ' was just split for subtraction');
        console.log(displayValue = parseFloat(a) - parseFloat(b));
        num = parseFloat(a) - parseFloat(b);
        return roundToTwo(num)
    } else if (displayValue.includes('*')) {
        priorInput = displayValue.split('*', 9);
        let a = priorInput[0].toString();
        let b = priorInput[1].toString();
        console.log(priorInput + ' was just split for multiplication');
        console.log(displayValue = parseFloat(a) * parseFloat(b));
        num = parseFloat(a) * parseFloat(b);
        return roundToTwo(num)
    } else if (displayValue.includes('/')) {
        priorInput = displayValue.split('/', 9);
        let a = priorInput[0].toString();
        let b = priorInput[1].toString();
        console.log(priorInput + ' was just split for division');
        console.log(priorInput = parseFloat(a) / parseFloat(b));
        num = priorInput = parseFloat(a) / parseFloat(b);
        return roundToTwo(num)
    } else if (displayValue.includes('^')) {
        priorInput = displayValue.split('^', 9);
        let a = priorInput[0].toString();
        let b = priorInput[1].toString();
        console.log(priorInput + ' was just split for powers');
        console.log(priorInput = parseFloat(a) ** parseFloat(b));
        num = priorInput = parseFloat(a) ** parseFloat(b);
        return roundToTwo(num)
    }
}

// ROUNDING

function roundToTwo(num) {
    return displayValue = +(Math.round(num + "e+2") + "e-2");
}


// Needs floating point handling
// Needs keyboard integration
// needs moderate refactoring