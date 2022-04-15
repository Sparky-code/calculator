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

//add visuals to html css
//mock up the visuals
//add clear button

// link up buttons with JS
// Make it work!