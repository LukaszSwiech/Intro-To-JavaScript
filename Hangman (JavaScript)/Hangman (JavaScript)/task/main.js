const input = require('sync-input');
let guess;
let gameMode;
const game = {
    name: "H A N G M A N",
    lives: 8,
    words: ["python", "java", "swift", "javascript"],
};
gameIntro();



gamePrepare();


do {
    guess = getUserInput();

    if (checkUserInputLength(guess)) {
        console.log("Please, input a single letter.")
        continue
    }

    if (checkLowerCase(guess)) {
        console.log("Please, enter a lowercase letter from the English alphabet.")
        continue
    }

    if (game.currentState.includes(guess)) {
        console.log(`You've already guessed this letter.`)
        continue;
    }
    (checkAnswer(guess)) ? correctAnswer(guess) : wrongAnswer();

    if (game.currentState.join('') === game.correctAnswer) {
        console.log(`You guessed the word ${game.correctAnswer}!`)
        console.log('You survived!')
        break;
    }

    const attemptText = game.lives === 1 ? "attempt" : "attempts";
    console.log(`//  ${game.lives} ${attemptText}`);
    console.log();

} while (game.lives > 0);

if (game.lives === 0) {
    console.log('You lost!')
}

function gameIntro() {
    console.log(game.name);
    console.log();
}

function gamePrepare() {
    const getRandomAnswer = () => game.words[Math.floor(Math.random() * game.words.length)];
    game.correctAnswer = getRandomAnswer();
    game.currentState = new Array(game.correctAnswer.length).fill('-');
}



function getUserInput() {
    console.log(game.currentState.join(''));
    return input("Input a letter: ");
}

function checkAnswer(answer) {
    return game.correctAnswer.includes(answer);
}

function correctAnswer(guess) {
    // Find all positions of the guessed letter
    for (let i = 0; i < game.correctAnswer.length; i++) {
        if (game.correctAnswer[i] === guess) {
            game.currentState[i] = guess;
        }
    }
}

function wrongAnswer() {
    console.log(`That letter doesn't appear in the word.`);
    game.lives--;
}

function checkUserInputLength(userInput) {
    return (userInput.length > 1)
}

function checkLowerCase(userInput) {
    return !/^[a-z]$/.test(userInput)
}