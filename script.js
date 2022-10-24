function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    playerSelection = playerSelection.toLowerCase();
    let firstLetter = playerSelection.substr(0, 1);
    playerSelection = playerSelection.replace(firstLetter, firstLetter.toUpperCase());
    let winner;

    const content = document.querySelector('.content');

    if (document.querySelector('.result') === null) {
        const resultDiv = document.createElement('div');
        resultDiv.classList.add('result');
        content.appendChild(resultDiv);
    }
    const result = document.querySelector('.result');

    if (playerSelection === computerSelection) {
        result.textContent = "Tie!";
        getScore(winner);
        return;
    }

    switch (playerSelection) {
        case "Rock":
            if (computerSelection === "Scissors") {
                winner = "player";
            } else {
                winner = "computer";
            }
            break;
        case "Paper":
            if (computerSelection === "Rock") {
                winner = "player";
            } else {
                winner = "computer";
            }
            break;
        case "Scissors":
            if (computerSelection === "Paper") {
                winner = "player";
            } else {
                winner = "computer";
            }
            break;
    }

    if (winner === "player") {
        result.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        result.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    getScore(winner);

    return;
}

let playerScore = 0;
let computerScore = 0;
let points = 0;

function getScore(winner) {
    points++;

    if (winner === "player") {
        playerScore++;
    } else if (winner === "computer") {
        computerScore++;
    }

    const content = document.querySelector(".content");

    if (document.querySelector('.score') === null) {
        const scoreDiv = document.createElement('div');
        scoreDiv.classList.add('score');
        content.appendChild(scoreDiv);
    }
    
    const score = document.querySelector('.score');
    score.textContent = `${playerScore} - ${computerScore}`;

    if (points === 1) {
        document.getElementById('par').style.opacity = '0';
    }
    
    if (points === 5) {
        let str;
        if (playerScore === computerScore) {
            str = "You tied the computer!";
        } else if (playerScore > computerScore){
            str = "You won the computer!";
        } else {
            str = "You lost to the computer!";
        }
        const finalRes = document.createElement('div');
        finalRes.classList.add('finalRes');
        finalRes.textContent = str;
        const body = document.querySelector('body');
        body.appendChild(finalRes);
        document.getElementById('blur').style.pointerEvents = 'none';
        setTimeout(restart, 1500);
    }
    return;
}

function restart() {
    points = 0;
    playerScore = 0;
    computerScore = 0;

    const content = document.querySelector('.content');
    const button = document.querySelector('#replayButton');
    button.classList.toggle('active');
    content.classList.toggle('active');

    return;
}

function removeTransition(e) {
    console.log(e);
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
        playRound('Rock');
});
const paper = document.querySelector(".paper");
paper.addEventListener("click", ()=> {
    paper.classList.add('clicked');
    playRound('Paper');
});
const scissors = document.querySelector(".scissors");
scissors.addEventListener("click", ()=> {
    scissors.classList.add('clicked');
    playRound('Scissors');
});

const replayButton = document.querySelector('#replayButton');
replayButton.addEventListener('click', ()=> {
    replayButton.classList.add('clicked');
    const body = document.querySelector('body');
    const content = document.querySelector('.content');
    const result = document.querySelector('.result');
    const score = document.querySelector('.score');
    const finalRes = document.querySelector('.finalRes');
    setTimeout(()=> {
        body.removeChild(finalRes);
        content.removeChild(result);
        content.removeChild(score);
        content.classList.toggle('active');
        replayButton.classList.toggle('active');
    }, 200);
    document.getElementById('blur').style.pointerEvents = 'all';
});
