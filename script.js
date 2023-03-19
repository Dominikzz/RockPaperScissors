
// 3 variables which contain the Rock, Paper, and Scissors
const rock = "Rock"
const paper = "Paper"
const scissors = "Scissors"
// A variable which contains players choice
let playersChoice = ""
// A variable which contains computers choice
let computersChoice = ""
// 3 variables which link the html elements with JS
let gameResult = document.getElementById("game-result")
let pChoice = document.getElementById("p-choice")
let cChoice = document.getElementById("c-choice")
// variables that keep track of the winner
let cWinner = 1
let pWinner = 1
// function that gathers the input of players choice
function Rock() {
    playersChoice = rock
    pChoice.textContent = "Your Choice: " + rock
    Random()
}
function Paper() {
    playersChoice = paper
    pChoice.textContent = "Your Choice: " + paper
    Random()
}
function Scissors() {
    playersChoice = scissors
    pChoice.textContent = "Your Choice: " + scissors
    Random()
}
// function that generates a random computer choice
function Random() {
    let compChoice = Math.floor(Math.random() * 3) + 1
        if (compChoice === 1) {
            computersChoice = rock
            cChoice.textContent = "Computers Choice: " + rock
        } else if (compChoice === 2) {
            computersChoice = paper
            cChoice.textContent = "Computers Choice: " + paper
        } else {
            computersChoice = scissors
            cChoice.textContent = "Computers Choice: " + scissors
        }
    playRound()
}

// variables for score and round
let roundCount = document.getElementById("round")
let pScore = document.getElementById("p-score")
let cScore = document.getElementById("c-score")
// variables for player score and computer score and round
let playerScore = 0
let computerScore = 0
let round = 0
// function that displays the round, score and compares the choices
function playRound() {
    if (playersChoice === computersChoice) {
        gameResult.textContent = "Tie!" 
    } else if (playersChoice === rock && computersChoice === paper) {
        gameResult.textContent = "Player lost! Paper beats Rock"
        computerScore += 1
        cScore.textContent = computerScore
    } else if (playersChoice === paper && computersChoice === rock) {
        gameResult.textContent = "Player Won! Paper beats Rock"
        playerScore += 1
        pScore.textContent = playerScore
    } else if (playersChoice === scissors && computersChoice === rock) {
        gameResult.textContent = "Player lost! Rock beats Scissors"
        computerScore += 1
        cScore.textContent = computerScore
    } else if (playersChoice === rock && computersChoice === scissors) {
        gameResult.textContent = "Player Won! Rock beats Scissors"
        playerScore += 1
        pScore.textContent = playerScore
    } else if (playersChoice === scissors && computersChoice === paper) {
        gameResult.textContent = "Player Won! Scissors beats Paper"
        playerScore += 1
        pScore.textContent = playerScore
    } else if (playersChoice === paper && computersChoice === scissors) {
        gameResult.textContent = "Player Lost! Scissors beats Paper"
        computerScore += 1
        cScore.textContent = computerScore
    } else if (playersChoice === scissors && computersChoice === paper) {
        gameResult.textContent = "Player Won! Scissors beats Paper"
        playerScore += 1
        pScore.textContent = playerScore
    }

    round += 1
    roundCount.textContent = round
}
