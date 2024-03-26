/* 
  Write a JavaScript function that takes an array of numbers
  and finds the second lowest and second greatest
  numbers, respectively.

  Sample array : [1,2,3,4,5]
  Expected Output : 2,4 
 */

function GetSecondGreatestLowestNumbers(arr) {
  if (arr.length <= 1) {
    return [];
  }
  // First, sort the array in ascending order
  arr.sort(function (a, b) {
    return a - b;
  });

  // Then, get the second lowest number by accessing the index 1
  let secondLowest = arr[1];

  // To get the second greatest number, reverse the array and get the element at index 1
  let reversedArr = arr.reverse();
  let secondGreatest = reversedArr[1];

  return [secondLowest, secondGreatest];
}

module.exports = { GetSecondGreatestLowestNumbers };
