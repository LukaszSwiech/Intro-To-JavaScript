const input = require('sync-input');

let name = input("Enter name: ");
let surname = input("Enter surname: ");
let message = input("Enter message:");
let repeats = Number(input("Enter number of repeats:"));

for (let i = 0; i < repeats; i++) {
    console.log(`This is ${name} ${surname} and ${message}`);
}