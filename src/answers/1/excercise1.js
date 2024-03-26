/* 
  Write a JavaScript function that accepts a string
  as a parameter and converts the first letter of
  each word into upper case.

  Example string : 'the quick brown fox'
  Expected Output : 'The Quick Brown Fox '
 */

function toUppercase(str) {
  // Split the input string into an array of words
  var array1 = str.split(" ");

  // Initialize an empty array to store the modified words
  var newarray1 = [];

  // Iterate through each word in the array
  for (var x = 0; x < array1.length; x++) {
    // Push the word with its first letter capitalized and the rest of the letters unchanged
    newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
  }

  // Join the modified words into a single string, separated by spaces
  return newarray1.join(" ");
}

module.exports = { toUppercase };
