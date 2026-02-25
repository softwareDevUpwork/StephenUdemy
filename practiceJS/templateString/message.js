function getMessage() {
    return `the year is ${new Date().getFullYear()}`;
}

const message = getMessage();

console.log(message);