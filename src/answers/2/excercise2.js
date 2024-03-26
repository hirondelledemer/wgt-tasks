/* 
  Write a JavaScript function that accepts a string as a parameter
  and finds the longest word within the string.

  Example string : 'Web Development Tutorial'
  Expected Output : 'Development'
 */

function findLongestWord(str) {
  // Use a regular expression to match words in the input string and store them in an array (array1)
  var array1 = str.match(/\w[a-z]{0,}/gi);

  // Initialize a variable result with the first word from the array
  var result = array1[0];

  // Iterate through the array of words starting from the second word
  for (var x = 1; x < array1.length; x++) {
    // Check if the length of the current word is greater than the length of the current result
    if (result.length < array1[x].length) {
      // If true, update the result with the current word
      result = array1[x];
    }
  }

  // Return the longest word found
  return result;
}

module.exports = { findLongestWord };
