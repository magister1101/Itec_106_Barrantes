function sequence(num) {
    
    let FibonacciSequence = [];
    let n0 = 0; //term 0
    let n1 = 1; //term 1
    let counter = 0;
    num = num + 1 //acounting for Term 0

    while (counter < num){ //acounting for Term 0 {
        FibonacciSequence.push(n0);
        let temp = n0;
        n0 = n1;
        n1 = temp + n1;
        counter++;
    }
    alert("Fibonacci Sequence: \n" + FibonacciSequence.join("\n"));
}
function main() {

    let input = prompt("Enter the number of terms for the Fibonacci Secuence (must be between 0 and 100");

    if (!isNaN(input)) {
        let num = parseFloat(input)
        if (!Number.isInteger(num)) {
            alert("Please enter an Integer that is also less than 100");
            main();
        }
        else if (num >= 100){

        }
        else if (num <= 0) {
            alert("Please enter a valid positive Integer")
            main();
        }
        else {
            num = parseInt(input);
            sequence(num);
        }
    }
    else {
        alert("Invalid Input")
        main();
    }
}
main()