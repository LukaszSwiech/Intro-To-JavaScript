const input = require('sync-input')
let userInput
let guess
let guessCheck
let index = 0
let game = {
    name: "H A N G M A N",
    lives:  8,
    words: ["python", "java", "swift", "javascript"],
    finalMessage: "Thanks for playing!"
}

gamePrepare()
gameIntro()

do {

    guess = gameIteration();
    guessCheck = checkAnswer(guess);
    guessCheck ? correctAnswer(guess, game.correctAnswer) : wrongAnswer()

    console.log(`//  ${--game.lives} attempts`)

} while (game.lives > 0)

console.log(game.finalMessage)


function gamePrepare() {
    const getRandomAnswer = () => game.words[Math.floor(Math.random() * game.words.length)];
    game.correctAnswer = getRandomAnswer();
    game.currentState = "-".repeat(game.correctAnswer.length);
}

function gameIntro() {
    console.log(game.name)
    console.log(`//  ${game.lives} attempts`)
}

function gameIteration () {
    console.log(game.currentState)
    return userInput = input("Input a letter:");
}

function checkAnswer(answer) {
    return game.correctAnswer.includes(answer);
}

function correctAnswer(guess, correctAnswer) {
    index = game.correctAnswer.search(guess);
     do {
        game.currentState = game.currentState.substring(0, index) + guess + game.currentState.substring(index + 1)
        correctAnswer = correctAnswer.substring(0, index) + "-" + correctAnswer.substring(index + 1)
        index = correctAnswer.search(guess);
    } while (index >= 0)

}

function wrongAnswer() {
    console.log(`That letter doesn't appear in the word.`)
}