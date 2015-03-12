////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';


function getInput() {
    console.log("Please choose either \"rock\", \"paper\", or \"scissors\".");
    return prompt();
}


function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}


function getWinner(playerMove,computerMove) {
    var winner;
if (playerMove == "rock" || playerMove == "scissors" || playerMove == "paper") {
    if (playerMove == computerMove) {
        winner = "tie";
    } 
    else if (playerMove == "rock") {
        if (computerMove == "paper") {
            winner = "computer";
        }   else {
                winner = "player";
        }
    }
    else if (playerMove == "scissors") {
        if (computerMove == "rock") {
            winner = "computer";
        }
            else {
                winner = "player";
        }
    }
   else if (playerMove == "paper"){
        if (computerMove == "scissors") {
            winner = "computer";
    }
             else {
                winner ="player";
        }
    }
return winner;
}
}

playToFive();
function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while (playerWins <5 && computerWins < 5) {
     //   var move;

        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove,computerMove);
        if (winner == "player") {
            playerWins += 1;
        } 
        else if (winner == "computer") {
            computerWins +=1;
        }
console.log("Player chose " + playerMove + ". Computer chose " + computerMove + ".");
/*some nonsense i've added so it looks pretty in the console*/console.log();
console.log("The score is " + playerWins + " to " + computerWins +".");
/*some more nonsense to make it look pretty*/console.log();
    }

    return [playerWins, computerWins];
}


