function pluck(array, property) {
    return array.map(function(item) {
        return item[property];
    }); 
}

let paints = [
    { color: 'red', model: 'Toyota', cilinders: 4 },
    { color: 'blue', model: 'BMW', cilinders: 6 },
    { color: 'yellow', model: 'Honda', cilinders: 8 }
];

let colors = pluck(paints, 'model');
console.log(colors);