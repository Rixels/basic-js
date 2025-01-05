const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) {
    return 'The time of year is not determined!';
}
try {
    date.getTime();
} catch (s) {
    throw new Error(s);
}
let moon = date.getMonth() + 1;
if ((moon === 12 || moon === 1) || moon === 2) {
  return 'winter';
}
if (moon >= 3 && moon <= 5) {
  return 'spring';
}
if (moon >= 6 && moon <= 8) {
  return 'summer';
}
if (moon >= 9 && moon <= 11) {
  return 'autumn';
}
}

module.exports = {
  getSeason
};
