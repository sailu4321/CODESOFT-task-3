function appendToScreen(value) {
    document.getElementById('screen').value += value; // Append the value (number/operator) to the screen
}

function calculateResult() {
    let screen = document.getElementById('screen');
    try {
        screen.value = eval(screen.value); // Calculate and display the result
    } catch (error) {
        screen.value = 'Error'; // Display error if the calculation fails
    }
}

function clearScreen() {
    document.getElementById('screen').value = ''; // Clear the screen
}
