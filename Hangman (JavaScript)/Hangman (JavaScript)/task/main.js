const input = require('sync-input');

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

const getRandomWord = () => {
    return HANGMAN_GAME.words[Math.floor(Math.random() * HANGMAN_GAME.words.length)];
}

const initializeGame = () => {
    gameState.currentWord = getRandomWord();
    gameState.guessedLetters = [];
    gameState.currentProgress = new Array(gameState.currentWord.length).fill('-');
    gameState.lives = HANGMAN_GAME.initialLives;
}

const getUserGuess = () => {
    console.log(gameState.currentProgress.join(''));
    return input("Input a letter: ");
}

const isValidGuess = (guess) => {
    if (guess.length !== 1) {
        console.log("Please, input a single letter.")
        return false;
    }
    if (!/^[a-z]$/.test(guess)) {
        console.log("Please, enter a lowercase letter from the English alphabet.")
        return false;
    }
    if (gameState.guessedLetters.includes(guess)) {
        console.log(`You've already guessed this letter.`)
        return false;
    }
    return true;
}

const processCorrectGuess = (guess) => {
    for (let i = 0; i < gameState.currentWord.length; i++) {
        if (gameState.currentWord[i] === guess) {
            gameState.currentProgress[i] = guess;
        }
    }
}

const processIncorrectGuess = () => {
    console.log(`That letter doesn't appear in the word.`);
    gameState.lives--;
}

const isWordComplete = () => {
    return gameState.currentProgress.join('') === gameState.currentWord;
}

const displayGameStatus = () => {
    const attemptText = gameState.lives === 1 ? "attempt" : "attempts";
    console.log(`// ${gameState.lives} ${attemptText}`)
    console.log();
}

const handleLoss = () => {
    console.log('You lost!');
    HANGMAN_GAME.statistics.lost++;
}

const handleWin = () => {
    console.log(`You guessed the word ${gameState.currentWord}!`)
    console.log('You survived!')
    HANGMAN_GAME.statistics.won++;
}

const displayResults = () => {
    console.log(`you won: ${HANGMAN_GAME.statistics.won} times.`)
    console.log(`you lost: ${HANGMAN_GAME.statistics.lost} times.`)
}

const playGame = () => {
    initializeGame();

    while (gameState.lives > 0) {
        const guess = getUserGuess();

        if (!isValidGuess(guess)) {
            continue
        }

        gameState.guessedLetters.push(guess);

        if (gameState.currentWord.includes(guess)) {
            processCorrectGuess(guess);

            if (isWordComplete()) {
                handleWin();
                return;
            }

        } else {
            processIncorrectGuess();
        }

        displayGameStatus();
    }
    handleLoss();
}

const getMenuChoice = () => {
    return input('Type "play" to play the game, "results" to show the scoreboard, and "exit" to quit:');
}


const runGame = () => {

    displayGameIntro();

    let isRunning = true;

    while (isRunning) {
        const choice = getMenuChoice();

        switch (choice) {
            case "results":
                displayResults()
                break;

            case "exit":
                isRunning = false;
                break;

            case "play":
                playGame();
                break;

            default:
                break;
        }
    }
}

runGame();