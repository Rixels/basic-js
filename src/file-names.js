const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const count = new Map();
  const arr = names.map((value) => {
    if (count.has(value)) {
      let newName = `${value}(${count.get(value)})`;
      while (count.has(newName)) {
        count.set(value, count.get(value) + 1);
        newName = `${value}(${count.get(value)})`;
      }
      count.set(newName, 1);
      return newName;
    } else {
      count.set(value, 1);
      return value;
    }
  });
  return arr;
}

module.exports = {
  renameFiles
};
