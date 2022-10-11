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

const createRepeatedStringWithSeparator = (
  str = '',
  repeatTimes = 0,
  separator = ''
) => {
  return Array.from({ length: repeatTimes }, (value) => str).join(separator);
};

const defaultOptions = {
  repeatTimes: 1,
  separator: '+',
  addition: '',
  additionRepeatTimes: 1,
  additionSeparator: '|',
};

function repeater(str, options = {}) {
  const {
    repeatTimes,
    separator,
    addition,
    additionRepeatTimes,
    additionSeparator,
  } = Object.assign({}, defaultOptions, options);

  const additionStr = createRepeatedStringWithSeparator(
    String(addition),
    additionRepeatTimes,
    additionSeparator
  );

  return createRepeatedStringWithSeparator(
    String(str) + additionStr,
    repeatTimes,
    separator
  );
}

module.exports = {
  repeater,
};
