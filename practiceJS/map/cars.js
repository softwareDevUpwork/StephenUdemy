let car = [
    {make: 'Toyota',price: 'CHEAP'},
    {make: 'BMW',price: 'EXPENSIVE'},
];

let prices = car.map(function(car){
    return car.price;
});

console.log(prices);    