// creat basic math operators

//add
const add = function (a, b) {
    let result = parseInt(a) + parseInt(b);
    return result;
}

//subtract
const subtract = function (a, b) {
    let result = a - b;
    return result;
}

//multiply
const multiply = function (a, b) {
    let result = a * b;
    return result;
}
//divide
const divide = function (a, b) {
    let result = a / b;
    return result;
}
//power
const power = function (a, b) {
    let result = a ** b;
    return result
}

// GLOBAL VARS
let displayValue;
let a;
let b;
let operator;
const equals = document.getElementById('equals');
const clear = document.getElementById('clear');
const operators = document.getElementById('operators');

// OPERATE() - takes an operator and two numbers, calls a function
function operate(a, b, operator) {
    let ops = {
        add,
        subtract,
        multiply,
        divide,
        power,
    }
    displayValue = ops[`${operator}`](a, b);
    document.getElementById('screen').innerHTML = displayValue
}

// CLEAR ALL 
plate.addEventListener('click', function (e) {
    if (e.target.getAttribute('id') === 'Clear') {
        a = [];
        b = [];
        operator = [];
        displayValue = [];
        document.getElementById('screen').innerHTML = '';
    }
})

//input - takes value and adds it to a stringed array
numbers.addEventListener('click', function (e) {
    // INPUT B NEW
    if ((a != undefined) && (operator != undefined) && (b != undefined)) {
        b.push(e.target.getAttribute('id'));
        console.log(typeof b);
        b = new Array(b.join(''));
        console.log(b);
        document.getElementById('screen').innerHTML = b;
        // INPUT B ADD
    } else if ((a != undefined) && (operator != undefined)) {
        b = new Array(e.target.getAttribute('id'));
        document.getElementById('screen').innerHTML = b;
        console.log(b);
        console.log(typeof b);
        // INPUT A NEW
    } else if (a === undefined) {
        a = new Array(e.target.getAttribute('id'));
        document.getElementById('screen').innerHTML = a;
        console.log(a);
        console.log(typeof a);
        // INPUT A ADD
    } else if (a != undefined) {
        a.push(e.target.getAttribute('id'));
        console.log(typeof a);
        a = new Array(a.join(''));
        console.log(a);
        document.getElementById('screen').innerHTML = a;
    }
})

// INPUT CHOOSE OPERATOR
operators.addEventListener('click', function (e) {
    if (a != undefined) {
        operator = e.target.getAttribute('id');
        console.log(operator);
        console.log(typeof operator);
        document.getElementById('screen').innerText = operator;
        return operator
    }
})

// equals - push to screen innerHTML
equals.addEventListener('click', function () {
    a = String(a)
    b = String(b);
    console.log(typeof (a))
    console.log(typeof (b))
    operate(a, b, operator);
})

// link up buttons with JS
// Make it work!

//get input value
//store input value as inputA
//if next input is number, concat to inputA
//if next input is operator, store appropriate operator as operator
//if next input is operator, return error
// if next input is number, store value as inputB
    // if next input is number, concat to inputB
// if next input is input is operator call operation with inputs
// display result
// if next input is enter call operation with inputs
// display result
// repeat

