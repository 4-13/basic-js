const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(str1, str2) {
  let counter = 0;
  let testStr = str2;
  for (let i = 0; i < str1.length; i++) {
    const index = testStr.indexOf(str1[i]);
    if (index !== -1) {
      testStr = testStr.substr(0, index) + testStr.substr(index + 1);
      counter++;
    }
  }
  return counter;
}

module.exports = {
  getCommonCharacterCount,
};
