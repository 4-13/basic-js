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
  if (str.length === 0) return '';
  let result = '';
  let count = 0;
  let char = str[0];
  for (let i = 0; i <= str.length; i++) {
    if (str[i] === char) {
      count++;
    } else {
      result += (count > 1 ? count : '') + char;
      char = str[i];
      count = 1;
    }
  }
  return result;
}

module.exports = {
  encodeLine,
};
