// creat basic math operators

//add
const add = function (a, b) {
    let result = a + b;
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
const power = function (a, b) {
    let result = a ** b;
    return result
}

const displayValue = document.getElementById('screen');
const input = document.getElementsByClassName('button');

// create operate() - takes an operator and two numbers, calls a function
function operate(a, b, op) {
    let opsy = op.name;
    console.log(opsy)
    ops = new Object(a, b);
    ops.add = add;
    ops.subtract = subtract;
    ops.multiply = multiply;
    ops.divide = divide;
    ops.power = power;
    let total = ops[`${opsy}`](a, b);
    return total;
}

window.addEventListener('click', function (e) {
    value = document.getElementById('plus').innerText
    alt = e.target.getAttribute('id');
    console.log(value)
    console.log(alt);
})

//add clear button



// link up buttons with JS
// Make it work!