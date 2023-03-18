
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
        console.log(playersChoice)
    compare()
}
// function that compairs players choice and computer choice and outputs a winner
function compare() {
    if (playersChoice === computersChoice) {
        gameResult.textContent = "Game Result: Tie" 
    } else if (playersChoice === rock && computersChoice === paper) {
        gameResult.textContent = "Game Result: Player lost! Paper beats Rock"
    } else if (playersChoice === paper && computersChoice === rock) {
        gameResult.textContent = "Game Result: Player Won! Paper beats Rock"
    } else if (playersChoice === scissors && computersChoice === rock) {
        gameResult.textContent = "Game Result: Player lost! Rock beats Scissors"
    } else if (playersChoice === rock && computersChoice === scissors) {
        gameResult.textContent = "Game Result: Player Won! Rock beats Scissors"
    } else if (playersChoice === scissors && computersChoice === paper) {
        gameResult.textContent = "Game Result: Player Won! Scissors beats Paper"
    } else if (playersChoice === paper && computersChoice === scissors) {
        gameResult.textContent = "Game Result: Player Lost! Scissors beats Paper"
    } else if (playersChoice === scissors && computersChoice === paper) {
        gameResult.textContent = "Game Result: Player Won! Scissors beats Paper"
    }
}

