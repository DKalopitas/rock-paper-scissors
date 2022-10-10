function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch(choice) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
        default:
            return null;
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let firstLetter = playerSelection.substr(0, 1);
    playerSelection = playerSelection.replace(firstLetter, firstLetter.toUpperCase());
    let winner;
    if(playerSelection === computerSelection) {
        return("Tie!");
    }

    switch(playerSelection) {
        case "Rock":
            if(computerSelection === "Scissors") {
                winner = "player";
            } else {
                winner = "computer";
            }
        case "Paper":
            if(computerSelection === "Rock") {
                winner = "player";
            } else {
                winner = "computer";
            }
        case "Scissors":
            if(computerSelection === "Paper") {
                winner = "player";
            } else {
                winner = "computer";
            }
    }

    if(winner === "player") {
        return(`You Win! ${playerSelection} beats ${computerSelection}`);
    } else {
        return(`You Lose! ${computerSelection} beats ${playerSelection}`);
    }
}

console.log(playRound("rOCk", getComputerChoice()));