let names = [
    "Alice",
    "Bob",
    "Charlie",
    "David"
];

let everyNamesLenght4 = names.every(name => name.length > 4);
console.log("everyNamesLenght4 " + everyNamesLenght4); // Output: false

let someNamesLenght4 = names.some(name => name.length < 4);
console.log("someNamesLenght4 " + someNamesLenght4); // Output: true