const color = 'red';

const Car = {
  color,
  drive: function() {
    return 'Vroom!';
  },
  getColor: function() {
    return this.color;
  }
};

console.log(Car.color);
console.log( Car.drive())
console.log(Car.getColor())