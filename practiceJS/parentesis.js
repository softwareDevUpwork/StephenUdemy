


function balancedParentheses (str) {
    return !String(str).split("").reduce(function (prev, char) {
        if (prev < 0) {
            return prev;
        }
        if (char === "(") {
            return ++prev;
        }
        if (char === ")") {
            return --prev;
        }
        return prev;
    }, 0);      
}

console.log(balancedParentheses ("()("));