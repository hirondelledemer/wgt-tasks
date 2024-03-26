/* 
  Write a JavaScript program that iterates through array of integers.

  For multiples of three print "Fizz" instead of the number and
  For multiples of five print "Buzz".
  For numbers multiples of both three and five print "FizzBuzz".


  input: 
  [0, 1, 2, 3, 4, 5, 6, 6, 15, 40]
  
  output: 
  ["0 FizzBuzz", 1, 2, "3 Fizz", 4, "5 Buzz", "6 Fizz", "6 Fizz", "15 FizzBuzz", 40] 

 */

function getFizzBuzz(arr) {
  var fizzBuzzArray = [];

  for (var i = 0; i < arr.length; i++) {
    // Check if the number is divisible by both 3 and 5
    if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
      fizzBuzzArray.push(arr[i] + " FizzBuzz");
    }
    // Check if the number is divisible by 3
    else if (arr[i] % 3 === 0) {
      fizzBuzzArray.push(arr[i] + " Fizz");
    }
    // Check if the number is divisible by 5
    else if (i % 5 === 0) {
      fizzBuzzArray.push(arr[i] + " Buzz");
    }
    // If none of the above conditions are met, print the number
    else {
      fizzBuzzArray.push(arr[i]);
    }
  }
  return fizzBuzzArray;
}

module.exports = { getFizzBuzz };
