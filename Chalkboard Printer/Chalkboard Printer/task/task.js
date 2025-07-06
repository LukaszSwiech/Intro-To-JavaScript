const input = require('sync-input');

let name = input("Enter name: ");
let surname = input("Enter surname: ");
let message = input("Enter message:");

for (let i = 0; i < 5; i++) {
    console.log(`This is ${name} ${surname} and ${message}`);
}


