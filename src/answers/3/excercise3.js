/* 
  Write a JavaScript function that accepts a string as a parameter
  and counts the number of vowels within the string.

  Note: As the letter 'y' can be regarded as both a vowel and a consonant, 
         we do not count 'y' as vowel here.

  Example string : 'The quick brown fox'
  Expected Output : 5
 */

function getWovelCount(string) {
  // Define a string containing all the vowels in both lowercase and uppercase
  var vowelList = "aeiouAEIOU";

  // Initialize a variable vcount to count the number of vowels
  var vcount = 0;

  // Iterate through each character in the input string
  for (var x = 0; x < string.length; x++) {
    // Check if the current character is a vowel by searching for it in the vowel_list
    if (vowelList.indexOf(string[x]) !== -1) {
      // If the character is a vowel, increment the vowel count
      vcount += 1;
    }
  }

  // Return the total count of vowels in the input string
  return vcount;
}
module.exports = { getWovelCount };
