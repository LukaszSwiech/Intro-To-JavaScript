// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

let maxCoffees = Infinity;
let ingredients = {
    water: 200,
    milk: 50,
    coffeeBeans: 15
}
let currentSupply = {
    water: Number(input("Write how many ml of water the coffee machine has:")),
    milk: Number(input("Write how many ml of milk the coffee machine has:")),
    coffeeBeans:Number(input("Write how many grams of coffee beans the coffee machine has:"))
}

for (let ingredient in ingredients) {
    if (Math.floor(currentSupply[ingredient] / ingredients[ingredient]) < maxCoffees)
    {
        maxCoffees = Math.floor(currentSupply[ingredient] / ingredients[ingredient]);
        console.log(maxCoffees);
    }
}

let numberOfCoffeeDrinks = Number(input("Write how many cups of coffee you will need:" ))

if (numberOfCoffeeDrinks === maxCoffees)
{
  console.log(`Yes, I can make that amount of coffee`);
}
else if (numberOfCoffeeDrinks < maxCoffees)
{
    console.log(`Yes, I can make that amount of coffee (and even ${maxCoffees - numberOfCoffeeDrinks} more than that)`);
}
else
{
    console.log(`No, I can make only ${maxCoffees} cups of coffee`);
}