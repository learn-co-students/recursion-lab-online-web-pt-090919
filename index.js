// prints out all of the characters in a passed-in string
// recurses, calling itself once for each letter in the string
function printString(myString) {
  console.log(myString[0]);

  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    // complete once there are no remaining letters to shift to the left
    return true;
  }
}

// reverses all of the letters in a string
function reverseString(myString) {
  if (myString.length <= 1) {
    return myString;
  } else {
    return reverseString(myString.substring(1)) + myString[0];
  }
  // for (var i = myString.length - 1; i >= 0; i--) {
  //   newString += myString[i]
  // }
  // return newString
}

// returns 'true' when a string is a palindrome
function isPalindrome() {

}

function maxOf() {


}
function addUpTo() {

}

function includesNumber() {

}

