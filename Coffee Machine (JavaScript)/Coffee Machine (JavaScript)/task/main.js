// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')
let amountOfWater = 200;
let amountOfMilk = 50;
let amountOfCoffeeBeans = 15;

let numberOfCoffeeDrinks = Number(input("Write how many cups of coffee you will need:" ))

console.log(`For ${numberOfCoffeeDrinks} cups of coffee you will need:
${amountOfWater * numberOfCoffeeDrinks} ml of water
${amountOfMilk * numberOfCoffeeDrinks} ml of milk
${amountOfCoffeeBeans * numberOfCoffeeDrinks} g of coffee beans`);