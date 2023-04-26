// In this challenge, you’ll have a function that takes an array as input and returns an array. But if all goes according to plan, it’ll remove the negative numbers. This is another example of a task that’ll be useful when combing through data and looking for clever ways to eliminate “bad data.”
function removeNegative(x) {
  // Create new array to store positive numbers
  let resultArr = [];
  // Loop through the input array
  for (let i = 0; i < x.length; i++) {
    // Check if current number is positive
    if (x[i] >= 0) {
      // Add positive number to the result array
      resultArr.push(x[i]);
    }
  }
  // Return the new array with positive numbers
  return resultArr;
}

const x = [-183, 717, 13, -304, 25];
const result = removeNegative(x);
console.log(result);
