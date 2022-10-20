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

function playRound(playerSelection) {
    const content = document.querySelector(".content");

    if(document.querySelectorAll(".result").length > 0) {
        const result = document.querySelector(".result");
        content.removeChild(result);
    }

    let computerSelection = getComputerChoice();
    playerSelection = playerSelection.toLowerCase();
    let firstLetter = playerSelection.substr(0, 1);
    playerSelection = playerSelection.replace(firstLetter, firstLetter.toUpperCase());
    let winner;

    const result = document.createElement('div');
    result.classList.add("result");

    if(playerSelection === computerSelection) {
        result.textContent = "Tie!";
        content.appendChild(result);
        getScore(winner);
        return;
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
        result.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        result.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    content.appendChild(result);
    getScore(winner);
}

let playerScore = 0;
let computerScore = 0;
let points = 0;

function getScore(winner) {
    const content = document.querySelector(".content");
    points++;

    if(winner === "player") {
        playerScore++;
    } else if(winner === "computer") {
        computerScore++;
    }

    if(document.querySelectorAll(".score").length > 0) {
        const score = document.querySelector(".score");
        content.removeChild(score);
    }
    const score = document.createElement('div');
    score.classList.add("score");
    score.textContent = `${playerScore} - ${computerScore}`;
    content.appendChild(score);
    
    if(points === 5) {
        let str;
        if(playerScore === computerScore) {
            str = "You tied the computer!";
        } else if(playerScore > computerScore){
            str = "You won the computer!";
        } else {
            str = "You lost to the computer!";
        }
        const finalRes = document.createElement('div');
        finalRes.classList.add('finalRes');
        finalRes.textContent = str;
        const body = document.querySelector('body');
        body.appendChild(finalRes);
    }
    return;
}

function restart() {
    points = 0;
    playerScore = 0;
    computerScore = 0;

    const content = document.querySelector('.content');
    const score = document.querySelector('.score');
    content.removeChild(score);

    const body = document.querySelector('body');
    const finalRes = document.querySelector('.finalRes');
    body.removeChild(finalRes);

    /*const button = document.createElement('button');
    button.classList.add('replay');
    button.textContent = 'Play Again';
    const body = document.querySelector('body');
    body.appendChild(button);*/
    return;
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') {
      return;
    }
    this.classList.remove('clicked');
}

const buttons = document.querySelectorAll('button');
buttons.forEach(btn => btn.addEventListener('transitionend', removeTransition));

const rock = document.querySelector(".rock");
rock.addEventListener("click", ()=> {
        rock.classList.add('clicked');
        if(points > 4) {
            restart();
        }
        playRound('Rock');
    }
);
const paper = document.querySelector(".paper");
paper.addEventListener("click", ()=> {
    paper.classList.add('clicked');
    if(points > 4) {
        restart();
    }
    playRound('Paper');
    }
);
const scissors = document.querySelector(".scissors");
scissors.addEventListener("click", ()=> {
    scissors.classList.add('clicked');
    if(points > 4) {
        restart();
    }
    playRound('Scissors');
    }
);
