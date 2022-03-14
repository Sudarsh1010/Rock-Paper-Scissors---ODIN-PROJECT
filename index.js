function computerPlay() {
    let pick = ['rock', 'paper', 'scissor'];

    let ans = Math.floor(pick.length * Math.random());
    return pick[ans];
}

let playerWins = 0;
let computerWins = 0;

function playRound(player, computer) {
    // player chooses rock
    if (player.toLowerCase() == 'rock') {
        if (computer == 'paper') {
            computerWins++;
            return ("You Lose! Paper beats Rock")
        } else if (computer == 'scissor') {
            playerWins++
            return "You Win! Scissor beats Rock"
        } else {
            return 'draw';
        }
    }

    // player chooses paper
    if (player.toLowerCase() == 'paper') {
        if (computer == 'rock') {
            playerWins++
            return ("You Win! Paper beats Rock")
        } else if (computer == 'scissor') {
            computerWins++;
            return "You Lose! Scissor beats Paper"
        } else {
            return 'draw';
        }
    }

    // player chooses scissor
    if (player.toLowerCase() == 'scissor') {
        if (computer == 'paper') {
            playerWins++
            return ("You Win! Scissor beats Paper")
        } else if (computer == 'rock') {
            computerWins++;
            return "You Lose! Rock beats Scissor"
        } else {
            return 'draw';
        }
    }
}

function game() {
    var player = prompt('choose between Rock, Paper or Scissor');
    const computer = computerPlay();
    console.log(playRound(player, computer));
}

for (let i = 0; i < 5; i++) {
    game();
}

function seriesOf5(playerWinCount, computerWinCount) {
    if (playerWinCount > computerWinCount) {
        return ('You won the series of 5');
    } else if (playerWinCount < computerWinCount) {
        return ('Computer won the series of 5');
    } else {
        return (`It's a Tie`);
    }
}


var playerWinCount = playerWins;
var computerWinCount = computerWins;
console.log(seriesOf5(playerWinCount, computerWinCount))