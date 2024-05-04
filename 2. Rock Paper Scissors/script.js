let pScore = 0;
let cScore = 0;

function handToPlay(playOfThePlayer) {

    var playOfTheComputer = Math.floor(Math.random() * 3);


    let playOfThePlayerDisplay = "";
    let playOfTheComputerDisplay = "";
    let outcomes = "";
    switch (playOfThePlayer) {
        case 0:
            playOfThePlayerDisplay = "Rock"
            break;
        case 1:
            playOfThePlayerDisplay = "Paper"
            break;
        case 2:
            playOfThePlayerDisplay = "Scissor"
            break;
    }
    switch (playOfTheComputer) {
        case 0:
            playOfTheComputerDisplay = "Rock"
            break;
        case 1:
            playOfTheComputerDisplay = "Paper"
            break;
        case 2:
            playOfTheComputerDisplay = "Scissor"
            break;
    }
    if (playOfThePlayer == playOfTheComputer) {
        outcomes = "It's a tie!";

    }
    else if (playOfThePlayer == 0 && playOfTheComputer == 2 || playOfThePlayer == 1 && playOfTheComputer == 0 || playOfThePlayer == 2 && playOfTheComputer == 1) {
        outcomes = "You Win!";
        pScore = pScore + 1;
    }
    else {
        outcomes = "Computer Wins!";
        cScore = cScore + 1;
    }
    document.getElementById('playerScore').innerHTML = pScore;
    document.getElementById('computerScore').innerHTML = cScore;
    document.getElementById('playerValue').innerHTML = playOfThePlayerDisplay;
    document.getElementById('computerValue').innerHTML = playOfTheComputerDisplay;
    document.getElementById('outcomes').innerHTML = outcomes;
}