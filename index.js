
//const word = prompt('Input: ')

function isPalindrome(word) {
  // Write your algorithm here
console.log('hi')
}
 
isPalindrome()

/* 
  Add your pseudocode here
  -convert string to array
  -reverse the array values
  -convert array back to string


*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
