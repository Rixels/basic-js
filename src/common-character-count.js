const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let sum = 0;
  let sArr = s1.split('');
  let s2Arr = s2.split('');
  for (let i = 0; i < sArr.length; i++) {
    for (let y = 0; y < s2Arr.length; y++) {
      if (sArr[i] === s2Arr[y]) {
        sum += 1;
        s2Arr[y] = null;
        break;
      }
    }
  }
  return sum;
}
module.exports = {
  getCommonCharacterCount
};
