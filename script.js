function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch(choice) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let firstLetter = playerSelection.substr(0, 1);
    playerSelection = playerSelection.replace(firstLetter, firstLetter.toUpperCase());
    let winner;
    if(playerSelection === computerSelection) {
        winner = "none";
        console.log("Tie!");
        return(winner);
    }

    switch(playerSelection) {
        case "Rock":
            if(computerSelection === "Scissors") {
                winner = "player";
            } else {
                winner = "computer";
            }
            break;
        case "Paper":
            if(computerSelection === "Rock") {
                winner = "player";
            } else {
                winner = "computer";
            }
            break;
        case "Scissors":
            if(computerSelection === "Paper") {
                winner = "player";
            } else {
                winner = "computer";
            }
            break;
    }

    if(winner === "player") {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    } else {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    }
    return(winner);
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for(let i=0; i<5; i++) {
        let playerSelection = prompt("Enter rock, paper or scissors");
        let computerSelection = getComputerChoice();
        let winner = playRound(playerSelection, computerSelection);
        
        if(winner === "player") {
            playerScore++;
        } else if(winner === "computer") {
            computerScore++;
        }
        console.log(`${playerScore} - ${computerScore}`);
    }

    if(playerScore === computerScore) {
        console.log("You tied the computer!");
    } else if(playerScore > computerScore){
        console.log("You won the computer!");
    } else {
        console.log("You lost to the computer!");
    }
}
game();