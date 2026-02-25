let computers = [
    { name: "MacBook Pro", ram: 16 },
    { name: "Surface Laptop", ram: 8 },
    { name: "ThinkPad X1", ram: 32 }    
];

let allComputersCanRunProgram = computers.every(computer => computer.ram >= 16);
console.log("allComputersCanRunProgram " + allComputersCanRunProgram); // Output: false

let someComputersCanRunProgram = computers.some(computer => computer.ram >= 16);
console.log("someComputersCanRunProgram " + someComputersCanRunProgram); // Output: true    