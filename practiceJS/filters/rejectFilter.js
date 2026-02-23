

let numbers = [10, 20, 30];

function reject(numbers, iteratorFunction) {
  return numbers.filter(function(element) {
    return !iteratorFunction(element);
  });   
}   
let lessThanFifteen = reject(numbers, function(number) {
  return number < 15;
});
console.log(lessThanFifteen);   

/*This is a hard one!  Create a function called 'reject'.  Reject should work 
in the opposite way of 'filter' - if a function returns 'true', the item 
should *not* be included in the new array.  Hint: you can reuse filter.*/