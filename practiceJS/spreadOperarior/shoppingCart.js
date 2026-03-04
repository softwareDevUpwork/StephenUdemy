function validateShoppingCart(...items) {
    if(items.indexOf('milk')  < 0 ){
        return ['milk', ...items];
    }
}

console.log(validateShoppingCart('bread','eggs','butter'));