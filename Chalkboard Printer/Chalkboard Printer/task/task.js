const input = require('sync-input');

let name = "Bart";
let surname = "Simpson";
let message = "I will not skateboard in the halls.";

for (let i = 0; i < 5; i++) {
    console.log(`This is ${name} ${surname} and ${message}`);
}


// We have also imported the 'sync-input' package for you.
// You will use this in later stages.
// This package allows you to get user input.
// Like so:
// let name = input("Type your name: ");
// let age = Number(input("Type your age: "));