let products = [
    { name: 'cucumber', type: 'vegetable', quantity: 500, price: 1 },
    { name: 'banana', type: 'fruit', quantity: 100, price: 2 },
    { name: 'celery', type: 'vegetable', quantity: 301, price: 1.5 },
    { name: 'orange', type: 'fruit', quantity: 200, price: 3}
];

let filteredProducts = products.filter(function(product) {
    return product.type === 'vegetable' && product.quantity > 300 && product.price < 2;
});

console.log(filteredProducts);