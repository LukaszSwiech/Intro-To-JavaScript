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
console.log(`What do you want to convert?`);
let exchangeFromCurrency = input("From:").toUpperCase()
if (!Object.keys(exchangeRates).includes(exchangeFromCurrency) ) {
    console.log("Unknown currency")
    return
}
let exchangeToCurrency = input("To:").toUpperCase()
if (!Object.keys(exchangeRates).includes(exchangeToCurrency) ) {
    console.log("Unknown currency")
    return
}
let amountToExchange = Number(input("Amount:"))

if (isNaN(amountToExchange)) {
    console.log('The amount has to be a number')
}
else if (amountToExchange < 1) {
    console.log('The amount cannot be less than 1')
}
else {
    console.log(`Result: ${amountToExchange} ${exchangeFromCurrency} equals ${(amountToExchange / exchangeRates[exchangeFromCurrency] * exchangeRates[exchangeToCurrency]).toFixed(4)} ${exchangeToCurrency}`);
}


function printAvailCurrencies(exchangeRate) {
    process.stdout.write("I can convert USD to these currencies: ")
   Object.entries(exchangeRate).forEach(([key, value], index) => {
/*       if (key === "USD") {
           return
       }*/
       if (index === Object.entries(exchangeRate).length - 1) {
           process.stdout.write(`${key}`);
       } else {
           process.stdout.write(`${key}, `);
       }
})
}

function printExchangeRate(exchangeRate) {
    Object.entries(exchangeRate).forEach(([key, value]) => {
        console.log(`1 USD equals ${value} ${key}`);
    })
}