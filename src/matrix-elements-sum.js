const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let firstIndex = [];
  let lastIndex = [];
  const arr = matrix.map((value) => {
    firstIndex = [];
    firstIndex = lastIndex;
    lastIndex = [];
    for (let i = 0; i < value.length; i += 1) {
      if (value[i] <= 0) {
        lastIndex.push(i);
      }
    }
    const per = value.map((it, index) => {
      for (let t = 0; t < firstIndex.length; t += 1) {
        if (firstIndex[t] === index) {
          return 0;
        }
      }
      return it;
    })
    return per;
  })
  const res = arr.flat().reduce((acc, val, index) => {
    acc += val;
    return acc;
  }, 0)
  return res;
}

module.exports = {
  getMatrixElementsSum
};
