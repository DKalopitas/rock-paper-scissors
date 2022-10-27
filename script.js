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

    const result = document.querySelector('.result');

    if (playerSelection === computerSelection) {
        result.textContent = "Tie!";
        document.getElementById('temp').style.opacity = '1';
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
    document.getElementById('temp').style.opacity = '1';
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
    
    const score = document.querySelector('.score');
    score.textContent = `${playerScore} - ${computerScore}`;
    
    if (points === 5) {
        let str;
        if (playerScore === computerScore) {
            str = "You tied the computer!";
        } else if (playerScore > computerScore){
            str = "You won the computer!";
        } else {
            str = "You lost to the computer!";
        }
        const finalRes = document.querySelector('.finalRes');
        finalRes.textContent = str;
        document.getElementById('blur').style.pointerEvents = 'none';
        setTimeout(restart, 1500);
    }
    return;
}

function restart() {
    points = 0;
    playerScore = 0;
    computerScore = 0;

    const score = document.querySelector('.score');
    document.getElementById('temp').style.opacity = '0';
    score.textContent = `${playerScore} - ${computerScore}`;

    const blur = document.querySelector('#blur');
    const replayModal = document.querySelector('#replayModal');
    blur.classList.toggle('active');
    replayModal.classList.toggle('active');

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
    const replayModal = document.querySelector('#replayModal');
    const blur = document.querySelector('#blur');
    setTimeout(()=> {
        replayModal.classList.toggle('active');
        blur.classList.toggle('active');
    }, 200);
    document.getElementById('blur').style.pointerEvents = 'all';
});
