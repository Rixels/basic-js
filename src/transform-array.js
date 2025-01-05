const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }
  return arr.reduce((outСome, item, i) => {
    switch(item) {
      case '--discard-next':
      case '--discard-prev':
      case '--double-next':
      case '--double-prev':
        return outСome;
    }
    if (arr[i - 1] === '--discard-next') {
      return outСome;
    }
    (arr[i-1] === '--double-next')
        ? outСome.push(item, item)
        : outСome.push(item);
    switch(arr[i + 1]) {
      case '--double-prev':
        outСome.push(item);
        break;
      case '--discard-prev':
        outСome.splice(outСome.length - 1, 1);
        break;
    }
    return outСome;
  }, []);
};

module.exports = {
  transform
};
