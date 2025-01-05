const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  let sum = 1;
const change = arr.reduce((acc, item, index, array) => {
  if (item === array[index + 1]) {
    sum += 1;
  } else {
      acc += (sum > 1 ? sum : '') + item;
      sum = 1;
  }
  return acc;
}, '');
return change;
}

module.exports = {
  encodeLine
};
