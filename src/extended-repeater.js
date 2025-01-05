const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const add = options.addition === undefined ? '' : String(options.addition);
  const addRepTimes = options.additionRepeatTimes;
  const addSeparator = options.additionSeparator || '|';
  const strRepTimes = options.repeatTimes;
  const strSeparator = options.separator || '+';
  const firstResult = new Array(addRepTimes).fill(add).join(addSeparator);
  const result = new Array(strRepTimes).fill(str + firstResult).join(strSeparator);
  return result;
}

module.exports = {
  repeater
};
