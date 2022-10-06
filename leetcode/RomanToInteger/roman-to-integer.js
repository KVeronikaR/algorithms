// https://leetcode.com/problems/roman-to-integer/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const vocabularyMain = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000],
  ]);
  const vocabularySecond = new Map([
    ['IV', 4],
    ['IX', 9],
    ['XL', 40],
    ['XC', 90],
    ['CD', 400],
    ['CM', 900],
  ]);
  let result = 0;
  let i = 0;

  while (i < s.length) {
    const key = s[i] + s[i + 1];

    if (vocabularySecond.has(key)) {
      result += vocabularySecond.get(key);
      i += 2;
    } else {
      result += vocabularyMain.get(s[i]);
      ++i;
    }
  }

  return result;
};
