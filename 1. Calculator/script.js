let displayNumber = '';


function displayNum(value) {
    displayNumber += value;
    document.getElementById(display.id).value = displayNumber;
}

function calculateNum(){

    displayNumber = eval(displayNumber);
    document.getElementById('display').value = displayNumber;
}

function clearDisplay(){

    displayNumber = '';
    document.getElementById('display').value = displayNumber;
}