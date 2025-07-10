const input = require('sync-input');
let guess;
let choice;
const HANGMAN_GAME = {
    name: "H A N G M A N",
    initialLives: 8,
    words: ["python", "java", "swift", "javascript"],
    statistics: {
        won: 0,
        lost: 0
    }
}
let gameState = {
    lives: HANGMAN_GAME.initialLives,
    currentWord: "",
    guessedLetters: [],
    currentProgress: []
}

const displayGameIntro = () => {
    console.log(HANGMAN_GAME.name);
    console.log();
}

const initializeGame = () => {
    const getRandomAnswer = () => HANGMAN_GAME.words[Math.floor(Math.random() * HANGMAN_GAME.words.length)];
    HANGMAN_GAME.correctAnswer = getRandomAnswer();
    HANGMAN_GAME.currentState = new Array(HANGMAN_GAME.correctAnswer.length).fill('-');
}

const getUserInput = () => {
    console.log(HANGMAN_GAME.currentState.join(''));
    return input("Input a letter: ");
}

const checkAnswer = (answer) => {
    return HANGMAN_GAME.correctAnswer.includes(answer);
}

const processCorrectGuess = (guess) => {
    // Find all positions of the guessed letter
    for (let i = 0; i < HANGMAN_GAME.correctAnswer.length; i++) {
        if (HANGMAN_GAME.correctAnswer[i] === guess) {
            HANGMAN_GAME.currentState[i] = guess;
        }
    }
}

const processIncorrectGuess = () => {
    console.log(`That letter doesn't appear in the word.`);
    HANGMAN_GAME.initialLives--;
}

const checkUserInputLength = (userInput) => {
    return (userInput.length > 1)
}

const checkLowerCase = (userInput) => {
    return !/^[a-z]$/.test(userInput)
}

const displayResults = () => {
    console.log(`you won: ${HANGMAN_GAME.statistics.won} times.`);
    console.log(`you lost: ${HANGMAN_GAME.statistics.lost} times.`);
}

const getMenuChoice = () => {
    return input('Type "play" to play the game, "results" to show the scoreboard, and "exit" to quit:');
}
const handleLoss= () => {
    console.log('You lost!')
    HANGMAN_GAME.lost++;
}

displayGameIntro();

let isRunning = true;
while (isRunning) {

    choice = getMenuChoice()

    switch (choice) {
        case "results":
            displayResults()
            break;
        case "exit":
            isRunning = false;
            break;
        case "play":
            initializeGame()
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

                if (HANGMAN_GAME.currentState.includes(guess)) {
                    console.log(`You've already guessed this letter.`)
                    continue;
                }
                (checkAnswer(guess)) ? processCorrectGuess(guess) : processIncorrectGuess();

                if (HANGMAN_GAME.currentState.join('') === HANGMAN_GAME.correctAnswer) {
                    console.log(`You guessed the word ${HANGMAN_GAME.correctAnswer}!`)
                    console.log('You survived!')
                    HANGMAN_GAME.won++;
                    break;
                }

                const attemptText = HANGMAN_GAME.initialLives === 1 ? "attempt" : "attempts";
                console.log(`//  ${HANGMAN_GAME.initialLives} ${attemptText}`);
                console.log();

            } while (HANGMAN_GAME.initialLives > 0);

            if (HANGMAN_GAME.initialLives === 0) {
                handleLoss()
            }
            break;
        default:
            break;

    }
}