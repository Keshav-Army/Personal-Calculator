

let displayValue = "";
document.querySelector('#display').value = displayValue;


let clearAll = () => {
    displayValue = '';
    document.querySelector('#display').value = displayValue;
}

let zero = () => {
    displayValue += '0';
    document.querySelector('#display').value = displayValue;
}

let one = () => {
    displayValue += '1';
    document.querySelector('#display').value = displayValue;
}

let two = () => {
    displayValue += '2';
    document.querySelector('#display').value = displayValue;
}

let three = () => {
    displayValue += '3';
    document.querySelector('#display').value = displayValue;
}

let four = () => {
    displayValue += '4';
    document.querySelector('#display').value = displayValue;
}

let five = () => {
    displayValue += '5';
    document.querySelector('#display').value = displayValue;
}
let six = () => {
    displayValue += '6';
    document.querySelector('#display').value = displayValue;
}

let seven = () => {
    displayValue += '7';
    document.querySelector('#display').value = displayValue;
}

let eight = () => {
    displayValue += '8';
    document.querySelector('#display').value = displayValue;
}

let nine = () => {
    displayValue += '9';
    document.querySelector('#display').value = displayValue;
}

// ================================
let divide = () => {
    displayValue += '/';
    document.querySelector('#display').value = displayValue;
}

let multiply = () => {
    displayValue += '*';
    document.querySelector('#display').value = displayValue;
}

let plus = () => {
    displayValue += '+';
    document.querySelector('#display').value = displayValue;
}

let subtraction = () => {
    displayValue += '-';
    document.querySelector('#display').value = displayValue;
}

let dot = () => {
    displayValue += '.';
    document.querySelector('#display').value = displayValue;
}

let percentage = () => {
    displayValue += '%';
    document.querySelector('#display').value = displayValue;
}

let backspace = () => {
    displayValue = displayValue.slice(0, -1);
    document.querySelector('#display').value = displayValue;
}

// ============Result==========

let equal = () => {
    displayValue = eval(displayValue);
    document.querySelector('#display').value = displayValue;
}
