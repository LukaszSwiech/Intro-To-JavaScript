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

function countCups(coffee) {
    for (let ingredient in machineState) {
        if (ingredient === "money")
            continue
        if (Math.floor(machineState[ingredient] / coffee[ingredient]) === 0)
        {
            return `${ingredient}`
        }
    }
    return "1";
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
    }


function take()
    {
        console.log(`I gave you ${machineState.money}`)
        machineState["money"] = 0;
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
    let remaining = countCups(coffee)
    if (remaining !== "1") {
        `Sorry, not enough ${remaining}`
    }
    else {
        console.log("I have enough resources, making you a coffee!")
        for (let ingredient in coffee) {
            ingredient !== "money"
                ? machineState[ingredient] -= coffee[ingredient]
                : machineState.money += coffee.money;
        }
        machineState.disposableCups--
    }
}

function printState() {

    console.log(`The coffee machine has:
    ${machineState.water} ml of water
    ${machineState.milk} ml of milk
    ${machineState.coffeeBeans} g of coffee beans
    ${machineState.disposableCups} disposable cups
    ${machineState.money} of money`);
}

function CoffeeMachine () {
    do {
        let action = input("Write action (buy, fill, take, remaining, exit):").toLowerCase();
        switch (action) {
            case "buy":
                buy();
                break
            case "fill":
                fill();
                break
            case "take":
                take();
                break
            case "remaining":
                printState()
                break
            case "exit":
                return
        }
    } while (true)
}

CoffeeMachine ()

