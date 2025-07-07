// Welcome to the Currency Converter!
// We have imported the 'sync-input' package for you.
// You will use this in later stages.
// This package allows you to get user input.
// Like so:
// let name = input("Type your name: ");
// let age = Number(input("Type your age: "));
const input = require('sync-input');
// Write your code here
let exchangeRates = {
    USD : 1,
    JPY : 113.5,
    EUR : 0.89,
    RUB : 74.36,
    GBP : 0.75,
}

console.log("Welcome to Currency Converter!")
printExchangeRate(exchangeRates);
console.log(`What do you want to do?`);
do {
    console.log("1-Convert currencies 2-Exit program")
    let selectedAction = input()
    switch (selectedAction) {
        case "1":
            let wrongCurrencyInput = false
            do {
                console.log("What do you want to convert?")

                let exchangeFromCurrency = input("From:").toUpperCase()
                if (!Object.keys(exchangeRates).includes(exchangeFromCurrency)) {
                    wrongCurrencyInput = true
                    console.log("Unknown currency")
                }

                let exchangeToCurrency = input("To:").toUpperCase()
                if (!Object.keys(exchangeRates).includes(exchangeToCurrency)) {
                    wrongCurrencyInput = true
                    console.log("Unknown currency")
                }

            let amountToExchange = Number(input("Amount:"))

            if (isNaN(amountToExchange)) {
                console.log('The amount has to be a number')
            } else if (amountToExchange < 1) {
                console.log('The amount cannot be less than 1')
            } else {
                console.log(`Result: ${amountToExchange} ${exchangeFromCurrency} equals ${(amountToExchange / exchangeRates[exchangeFromCurrency] * exchangeRates[exchangeToCurrency]).toFixed(4)} ${exchangeToCurrency}`);
                wrongCurrencyInput = false
            }
            } while (wrongCurrencyInput)
            break
        case "2" :
            console.log("Have a nice day!")
            return
        default:
            console.log("Unknown input")
            break
    }
}while(1)


function printExchangeRate(exchangeRate) {
    Object.entries(exchangeRate).forEach(([key, value]) => {
        console.log(`1 USD equals ${value} ${key}`);
    })
}