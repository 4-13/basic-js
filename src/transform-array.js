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
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let sequences = {
    '--double-prev': true,
    '--double-next': true,
    '--discard-prev': true,
    '--discard-next': true,
  };
  let { res } = arr.reduce(
    (acc, item, arr) => {
      if (acc.last !== item && sequences.hasOwnProperty(item)) {
        acc.res.push(item);
      } else if (!sequences.hasOwnProperty(item)) {
        acc.res.push(item);
      }
      acc.last = item;
      return acc;
    },
    {
      last: '',
      res: [],
    }
  );
  let result = [];

  for (let i = 0; i < res.length; i++) {
    let char = res[i];

    switch (char) {
      case '--double-next':
        i + 1 < res.length ? result.push(res[i + 1]) : '';
        break;

      case '--double-prev':
        i - 1 >= 0 ? result.push(res[i - 1]) : '';
        break;

      case '--discard-next':
        res[i + 2] === '--discard-prev' || res[i + 2] === '--double-prev'
          ? (i += 2)
          : '';
        break;

      case '--discard-prev':
        result.pop();
        break;

      default:
        result.push(char);
        break;
    }
  }

  return result;
}

module.exports = {
  transform,
};
