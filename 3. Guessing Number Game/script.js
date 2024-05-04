let counter = 0;
function guessNumber() {
    const guessInput = document.getElementById('guess');
    const guessInputValue = guessInput.value;
    console.log(guessInputValue);
    if (guessInputValue < 1 || guessInputValue > 10) {
        document.getElementById('words').innerHTML = "please input a number between 1-10"
    }
    else if (guessInputValue >= 1 && guessInputValue <= 10) {
        var randomNumberGenerator = Math.floor((Math.random() * 10) + 1);
        document.getElementById('display').innerHTML = randomNumberGenerator;
        if (guessInputValue == randomNumberGenerator) {
            document.getElementById('words').innerHTML = "Correct Guess";
            resetCounter();
        } else if (guessInputValue != randomNumberGenerator) {

            if (guessInputValue < randomNumberGenerator) {
                document.getElementById('words').innerHTML = "Guess is too low";
            }
            if (guessInputValue > randomNumberGenerator) {
                document.getElementById('words').innerHTML = "Guess is too high";
            }
            guessCounter();
        }
    }
    document.getElementById('guess').value = "";
}
function guessCounter() {
    counter++;
    document.getElementById('counter').innerHTML = counter;
}
function resetCounter() {
    counter = 0;
    document.getElementById('counter').innerHTML = counter;
}

