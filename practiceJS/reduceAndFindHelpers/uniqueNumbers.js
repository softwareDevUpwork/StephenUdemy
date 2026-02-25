/*Hardmode: Custom 'Unique' Helper
Another really hard one!  Write a function called 'unique' that will remove all the duplicate values from an array.

For example, given the following array:
var numbers = [1, 1, 2, 3, 4, 4];
Your function should return
[1, 2, 3, 4]
Hint: Use the 'reduce' and 'find' helpers.   */

function unique(array) {
  const uniqueArray = array.reduce((accumulator, currentValue) => {
    // Use 'find' to check if the currentValue already exists in the accumulator
    const found = accumulator.find(element => element === currentValue);

    // If 'find' returns undefined (meaning the element is not found), push it
    if (!found) {
      accumulator.push(currentValue);
    }

    // Return the accumulator for the next iteration
    return accumulator;
  }, []); // The initial value of the accumulator is an empty array

  return uniqueArray;
}

// Example usage:
let numbers = [1, 1, 2, 3, 4, 4];
let uniqueNumbers = unique(numbers);
console.log(uniqueNumbers);
