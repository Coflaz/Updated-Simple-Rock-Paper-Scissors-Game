const player = {
    win: 0,
    lose: 0,
    tie: 0
};

const rockImageElement = document.querySelector('.rock.move-icon img');
const paperImageElement = document.querySelector('.paper.move-icon img');
const scissorsImageElement = document.querySelector('.scissors.move-icon img');

let playerChoice;
let computerChoice;
let result;

function computerPlay() {
    let computerChoiceNum = Math.random();
    if (computerChoiceNum < 0.34) {
        return 'rock';
    } else if (computerChoiceNum <= 0.67) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function scoreTableChange() {
    const scoreTableElement = document.querySelector('.score-table');
    scoreTableElement.innerHTML = `Player: ${player.win} | Computer: ${player.lose} | Tie: ${player.tie}`;
}

function gameSituationChange(playerChoice, computerChoice) {
    const imgElementPlayer = document.querySelector('.game-situation-player');
    const imgElementComputer = document.querySelector('.game-situation-computer');

    if (playerChoice === 'rock') {
        imgElementPlayer.src = './rock.png';
    } else if (playerChoice === 'paper') {
        imgElementPlayer.src = './paper.png';
    } else if (playerChoice === 'scissors') {
        imgElementPlayer.src = './scissors.png';
    }

    if (computerChoice === 'rock') {
        imgElementComputer.src = './rock.png';
    } else if (computerChoice === 'paper') {
        imgElementComputer.src = './paper.png';
    } else if (computerChoice === 'scissors') {
        imgElementComputer.src = './scissors.png';
    }
}

function gameResultChange(result) {
    const gameResultChangeElement = document.querySelector('.game-result');
    if (result === 'tie') {
        gameResultChangeElement.innerHTML = `It is a ${result}`;
    } else {
        gameResultChangeElement.innerHTML = `Player ${result}s!`;
    }
}

function winLoseTie(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        player.tie++;
        return 'tie';
    } else if (playerChoice === 'rock') {
        if (computerChoice === 'paper') {
            player.lose++;
            return 'lose';
        } else {
            player.win++;
            return 'win';
        }
    } else if (playerChoice === 'paper') {
        if (computerChoice === 'scissors') {
            player.lose++;
            return 'lose';
        } else {
            player.win++;
            return 'win';
        }
    } else if (playerChoice === 'scissors') {
        if (computerChoice === 'rock') {
            player.lose++;
            return 'lose';
        } else {
            player.win++;
            return 'win';
        }
    }
}

function resetScores() {
    player.win = 0;
    player.lose = 0;
    player.tie = 0;

    scoreTableChange();

    const gameResultChangeElement = document.querySelector('.game-result');
    gameResultChangeElement.innerHTML = '';

    const imgElementPlayer = document.querySelector('.game-situation-player');
    imgElementPlayer.src = '';

    const imgElementComputer = document.querySelector('.game-situation-computer');
    imgElementComputer.src = '';
}

function saveScores() {
    localStorage.setItem('player', JSON.stringify(player));
}

function continueGame() {
    const playerData = JSON.parse(localStorage.getItem('player'));
    if (playerData) {
        player.win = playerData.win || 0;
        player.lose = playerData.lose || 0;
        player.tie = playerData.tie || 0;
        scoreTableChange();
    }
}