const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const result = arr.slice();
  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result.length; j++) {
      if (result[i] > -1 && result[j] > -1) {
        if (result[i] < result[j]) {
          [result[i], result[j]] = [result[j], result[i]];
        }
      }
    }
  }
  return result;
}

module.exports = {
  sortByHeight,
};
