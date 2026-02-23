const prom = require('prompt-sync');

let fname = prom()('What is your name? ');
let lname = prom()('What is your last name? ');

console.log('Hello ' + fname + lname + '!');