const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(number) {
  return Math.max(
    ...number
      .toString()
      .split('')
      .map((el, idx, arr) => Number(arr.filter((_, i) => i !== idx).join('')))
  );
}

module.exports = {
  deleteDigit,
};
