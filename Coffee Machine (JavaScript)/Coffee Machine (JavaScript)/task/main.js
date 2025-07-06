// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')
maxCoffees = Infinity;

let machineState = {
    water: 400,
    milk: 540,
    coffeeBeans: 120,
    money: 550,
    disposableCups: 9
}

let espresso = {
    water: 250,
    milk: 0,
    coffeeBeans: 16,
    money: 4
}
let latte = {
    water: 350,
    milk: 75,
    coffeeBeans: 20,
    money: 7
}
let cappuccino = {
    water: 200,
    milk: 100,
    coffeeBeans: 12,
    money: 6
}

function countCups() {
    for (let ingredient in espresso) {
        if (Math.floor(machineState[ingredient] / espresso[ingredient]) < maxCoffees)
        {
            maxCoffees = Math.floor(machineState[ingredient] / espresso[ingredient]);
        }
    }
}


function fill() {

    let addIngredients = {
    water: Number(input('Write how many ml of water you want to add:')),
    milk: Number(input('Write how many ml of milk you want to add:')),
    coffeeBeans: Number(input('Write how many grams of coffee beans you want to add:')),
    disposableCups: Number(input('Write how many disposable cups you want to add:'))
    }

    for (let ingredient in addIngredients)
        {
            machineState[ingredient] += addIngredients[ingredient]
        }
    printState()
    }


function take()
    {
        console.log(`I gave you ${machineState.money}`)
        machineState["money"] = 0;
        printState()
    }


function buy()
    {
    switch (Number(input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:")))
    {
        case 1:
            countNewState(espresso)
            break
        case 2:
            countNewState(latte)
            break
        case 3:
            countNewState(cappuccino)
            break
        }
    }

function countNewState (coffee) {
    for (let ingredient in coffee) {
        ingredient !== "money"
        ? machineState[ingredient] -= coffee[ingredient]
        : machineState.money += coffee.money;
    }
    machineState.disposableCups--
    printState()
}

function printState() {

    console.log(`The coffee machine has:
    ${machineState.water} ml of water
    ${machineState.milk} ml of milk
    ${machineState.coffeeBeans} g of coffee beans
    ${machineState.disposableCups} disposable cups
    ${machineState.money} of money`);
}

printState()

let action = input("Write action (buy, fill, take):").toLowerCase();

switch (action)
    {
        case "buy":
            buy();
            break
        case "fill":
            fill();
            break
        case "take":
            take();
            break
    }