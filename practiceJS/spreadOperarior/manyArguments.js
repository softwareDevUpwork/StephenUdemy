function product(...numbers) {

  return numbers.reduce(function(acc, number) {
    return acc * number;
  }, 1)

}

console.log(product(1, 2, 3)); // 6
console.log(product(1, 2, 3, 4)); // 24