const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(inputString) {
  const arr = inputString.split('-');
  for (let i = 0; i < arr.length; i += 1) {
    for (let y = 0; y < arr[i].length; y += 1) {
      const char = arr[i][y];
      if (!((char >= '0' && char <= '9') || (char.toLowerCase() >= 'a' && char.toLowerCase() <= 'f'))) {
        return false;
      }
    }
  }
  return true;
}
module.exports = {
  isMAC48Address
};
