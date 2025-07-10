const input = require('sync-input');
let guess;
let chooseGameAction;
const game = {
    name: "H A N G M A N",
    lives: 8,
    words: ["python", "java", "swift", "javascript"],
    won: 0,
    lost: 0
};
gameIntro();

let running = true;
while (running) {

    chooseGameAction = input(`Type "play" to play the game, "results" to show the scoreboard, and "exit" to quit:`)

    switch (chooseGameAction) {

        case "results":
            console.log(`you won: ${game.won} times.\nyou lost: ${game.lost} times.`)
            break;

        case "exit":
            running = false;
            break;

        case "play":
            gamePrepare()
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
                    game.won++;
                    break;
                }

                const attemptText = game.lives === 1 ? "attempt" : "attempts";
                console.log(`//  ${game.lives} ${attemptText}`);
                console.log();

            } while (game.lives > 0);

            if (game.lives === 0) {
                console.log('You lost!')
                game.lost++;
            }
            break;

        default:
            break;

    }
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