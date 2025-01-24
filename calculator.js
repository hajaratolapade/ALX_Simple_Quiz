// Function to perform addition
function add(number1, number2) {
    return number1 + number2;
}

// Function to perform subtraction
function subtract(number1, number2) {
    return number1 - number2;
}

// Function to perform multiplication
function multiply(number1, number2) {
    return number1 * number2;
}

// Function to perform division
function divide(number1, number2) {
    // Prevent division by zero
    if (number2 === 0) {
        return "Cannot divide by zero";
    }
    return number1 / number2;
}

// Function to update the result in the UI
function updateResult(result) {
    document.getElementById('calculation-result').textContent = result;
}

// Add event listeners for each button
document.getElementById('add').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = add(number1, number2);
    updateResult(result);
});

document.getElementById('subtract').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = subtract(number1, number2);
    updateResult(result);
});

document.getElementById('multiply').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = multiply(number1, number2);
    updateResult(result);
});

document.getElementById('divide').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = divide(number1, number2);
    updateResult(result);
});