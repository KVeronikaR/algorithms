// https://leetcode.com/problems/palindrome-number/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const str = x + '';

  if (str[0] === '-') {
    return false;
  }

  let i = Math.floor(str.length / 2) - 1;
  let j = str.length % 2 ? i + 2 : i + 1;

  while (i >= 0) {
    if (str[i] !== str[j]) {
      return false;
    }

    i--;
    j++;
  }

  return true;
};
