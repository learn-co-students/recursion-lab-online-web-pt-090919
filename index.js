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
function isPalindrome(myString) {
  let l = myString.length
  if (l < 2) {
    return true;
  } else if (myString[0] === myString[l - 1]) {
    return isPalindrome(myString.substring(1, l - 1));
  } else {
    return false;
  }
}

// sums all members up to a given index in an array
function addUpTo(arr, idx) {
  // Alt. Solution
  // return index ? myArray[index] + addUpTo(myArray, --index) : myArray[index];
  if (idx < 1) {
    return arr[0];
  } else {
    return arr[idx] + addUpTo(arr.slice(0, idx), idx - 1);
  }
}

// finds the largest integer in an array
// e.g. maxOf[1,5,3] => Math.max(3,Math.max(5,1))
function maxOf(arr) {
  // return Math.max(...arr)
  if (arr.length === 1) {
    return arr[0];
  } else {
    return Math.max(arr.pop(), maxOf(arr));
  }
}

// returns 'true' if the number is present in the array
function includesNumber(arr, num) {
  if (arr[0] === num) {
    return true;
  } else if (arr.length === 0) {
    return false;
  } else {
    return includesNumber(arr.slice(1), num);
  }
}