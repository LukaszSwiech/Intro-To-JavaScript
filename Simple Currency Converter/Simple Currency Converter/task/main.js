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

function printExchangeRate(exchangeRate) {
   Object.entries(exchangeRate).forEach(([key, value]) => {
       console.log(`1 USD equals ${value} ${key}`);
   })
}